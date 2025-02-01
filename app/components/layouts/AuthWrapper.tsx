import { useSession } from "next-auth/react";


{/* Authentication Wrapper before fetching data */}
export function AuthWrapper({children} : { children: any }) {

    // const router = useRouter();
    {/* Redirect if user is not signed in */}
    const { data: session, status } = useSession({
        required: false,
        // onUnauthenticated() {

        //     // User is not signed in
        //     // router.push("/auth/signin");
        // }
    });

    return children;


}