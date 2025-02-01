import CredentialsProvider from "next-auth/providers/credentials";
import NextAuth from "next-auth";
import { jwtDecode } from "jwt-decode";


export const authOptions = {
    pages: {
      signIn: "/auth/login",
      signUp: "/auth/signup",
      error: '/auth/login',
    },


    // https://next-auth.js.org/configuration/providers/oauth
    providers: [
      // EmailProvider({
      //   server: process.env.EMAIL_SERVER,
      //   from: process.env.EMAIL_FROM,
      //   // maxAge: 24 * 60 * 60, // How long email links are valid for (default 24h)
      // }),

    //   GoogleProvider({
    //     clientId: process.env.GOOGLE_CLIENT_ID,
    //     clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    //   }),
      CredentialsProvider({
        name: "Login in with JWT",

        credentials: {
          username: {
            label: "Email",
            type: "username",
            placeholder: "username",
          },
          password: { label: "Password", type: "password" },
        },
  
        // Calls the pair endpoint with credentials
        async authorize(credentials) {

          if (!credentials) {
            return null;
          }

          try {

            const payload = JSON.stringify({
              email: credentials.username,
              password: credentials.password,
            });

            const response = await fetch(process.env.NEXT_PUBLIC_API + "/token/pair", {
              method: "POST",
              body: payload,
              headers: { "Content-Type": "application/json" },
            });


            const token = await response.json();
            if (response.status !== 200) throw token;

            console.log(jwtDecode(token.access));

            const { user, name, email, user_id, exp, is_superuser, is_staff, email_verified, trial_ends } =
              jwtDecode(token.access);


            console.log(`[+] Got email ${email} and username ${name} and email_verified: ${email_verified}`)
            if (trial_ends != null) {
              
              // Calculate days left from trial expiration date
              const daysLeft = Math.floor((new Date(trial_ends) - new Date()) / (1000 * 60 * 60 * 24));
              console.log(`[+] Trial expires on ${trial_ends}, with ${daysLeft} daysLeft`)

            }

            return {
              ...token,
              exp,
              user: {
                name,
                email_verified,
                email,
                user_id,
                is_staff,
                is_superuser,
                trial_ends, 
              },
            };
            
          } catch (error) {
            return null;
          }
        },
      }),
    ],
    theme: {
      colorScheme: "light",
    },

    callbacks: {

      // Called when a new session is created
      async jwt({ token, user, account, trigger, session, profile }) {

        // Update email_verified when user verifies email
        if (trigger == "update") {

          console.log("[!] Got trigger update, email_verified is: " + JSON.stringify(session))

          token.user.email_verified = session.email_verified;
          console.log("Updated token: " + JSON.stringify(token))

          // token.user.email_verified = session.user.email_verified;
          // console.log("[!] Set token, email_verified to: " + token.email_verified)

        }


        // initial signin
        if (account && user) {
          // console.log("got initial sign in, account & user: " + token.isNewUser + " and email to: " + token.email)

          token.isNewUser = user.isNewUser;
          token.email = user.email;

          return user;
        }


        // Called every time JWT is accessed/refreshed (NEED TO FIX)
        // console.log(new Date(token.exp * 1000).toLocaleString('en-US', { timeZone: 'America/New_York', hour12: true }));

        if (Date.now() < token.exp * 100) {
          console.log("[+] Token has not expired, returning old token")
          // console.log("[+] Access token has not expired")
          return token;
        }

        else {
          
          console.log("[-] Returning new refresh access token")
          return refreshAccessToken(token);
        }
      },

      async session({ session, user, token }) {

        // console.log("[!] Got session: " + JSON.stringify(session) + " and user: " + JSON.stringify(user) + " and token: " + JSON.stringify(token))

        session.user = token.user;
        session.access = token.access;
        session.refresh = token.refresh;
        session.exp = token.exp;

        // User properties for application use
        // session.isNewUser = token.isNewUser;
        // session.email = token.email;
        // session.name = token.name
        // session.email_verified = token.email_verified
        // session.trial_ends = token.trial_ends

        return session;
      },


      // Used to control if a user is allowed to sign in (called by OAUTH provider)
      async signIn({user, account, profile, email, credentials}) {

        if (account.provider == "google") {
          const allowed = profile.email_verified && profile.email.endsWith("@gmail.com")

          // Call the Django endpoint
          if (allowed) {

            const tokenResponse = await fetch(process.env.NEXT_PUBLIC_API + "/account/google-signin", {
              method: "POST",
              headers: {
                "Content-Type": "application/json"
              },
              body: JSON.stringify({
                token: account.access_token, // This assumes you are sending the access token
              }),
            });

            if (tokenResponse.status !== 200) {
              console.log("Google signin failed, got error HTTP code")
              throw new Error("Failed to sign in, something went wrong")
            }

            else {

              const tokens = await tokenResponse.json();

              console.log("Decoding OAuth JWT: " + jwtDecode(tokens.access))


              const { user, name, email, user_id, exp, is_superuser, is_staff, email_verified, trial_ends } = jwtDecode(tokens.access);



              if (tokens.status != "error") {
                // user.access = tokens.access;
                // user.refresh = tokens.refresh;
                // user.isNewUser = tokens.isNewUser;
                // user.email = tokens.email;
                // user.email_verified = true

  
                // console.log("Set user.email to: " + tokens.email)
  
                return true; // Sign-in successful
              }
  
              else {
                console.log("Error in google-signin: " + tokens.message)

                throw new Error(tokens.message)

              }

            }
          }
          console.log("User's email did not end with @gmail or email was not verified");
          return allowed;
        }

        else {

          user.email = user.user.email
          user.name = user.user.name
          user.email_verified = user.user.email_verified
          user.trial_ends = user.user.trial_ends

          console.log("Set trail_ends to: " + user.trial_ends);

          // console.log("Got normal JWT auth sign in: " + JSON.stringify(user))
        }

        // Normal sign in with email and password
        return true
      }
    },
    session: {
      strategy: "jwt",
      maxAge: 30 * 24 * 60 * 60, // 30 days
      updateAge: 24 * 60 * 60, // 24 hours


      generateSessionToken: () => {
        return randomUUID?.() ?? randomBytes(32).toString("hex")
      }
    },
};
