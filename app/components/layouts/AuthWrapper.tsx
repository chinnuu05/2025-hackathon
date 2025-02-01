import { useSession } from "next-auth/react";
import React, { useState, useEffect } from "react"; 

import { useRouter } from 'next/navigation'


{/* Authentication Wrapper before fetching data */}
export function AuthWrapper({children} : { children: any }) {

    const router = useRouter();
    {/* Redirect if user is not signed in */}
    const { data: session, status } = useSession({
        required: true,
        onUnauthenticated() {

            // User is not signed in
            // router.push("/auth/signin");
        }
    });

    return children;


}