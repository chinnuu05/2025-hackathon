// app/api/auth/[...nextauth]/route.ts
import NextAuth from "next-auth";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { PrismaClient } from "@prisma/client";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

export const authOptions = {
  adapter: PrismaAdapter(prisma),
  pages: {
    signIn: "/auth/login",
    signUp: "/auth/signup",
    error: "/auth/login",
  },
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60,
  },
  providers: [
    CredentialsProvider({
      name: "Credentials",
      // IMPORTANT: Use email, not username:
      credentials: {
        email: {
          label: "Email",
          type: "text",
          placeholder: "Email address",
        },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          console.log("[authorize] Missing email or password");
          return null;
        }

        console.log("[authorize] Checking user:", credentials.email);
        const user = await prisma.user.findUnique({
          where: { email: credentials.email },
        });
        if (!user) {
          console.log("[authorize] No user found for that email");
          return null;
        }

        const passwordMatch = await bcrypt.compare(credentials.password, user.password);
        if (!passwordMatch) {
          console.log("[authorize] Password mismatch");
          return null;
        }

        console.log("[authorize] User authorized!");
        return {
          id: user.id,
          name: user.name,
          email: user.email,
        };
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user, account }) {
      // On initial sign in, attach user info to the token
      if (account && user) {
        token.id = user.id;
        token.email = user.email;
        token.name = user.name;
      }
      return token;
    },
    async session({ session, token }) {
      // Copy token data into session
      session.user.id = token.id;
      session.user.email = token.email;
      session.user.name = token.name;
      return session;
    },
    // If you want to do some logic upon sign in, do it here:
    async signIn({ user, account, profile }) {
      console.log("[signIn callback] user:", user);
      // user is { id, name, email }
      return true; // returning false will reject the sign in
    },
  },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
