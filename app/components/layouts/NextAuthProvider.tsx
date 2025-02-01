'use client';

import { SessionProvider, useSession } from 'next-auth/react';
import { ThemeProvider } from 'next-themes'
import { ReactNode, createContext, useContext, useState, useEffect } from 'react';
import { AuthWrapper } from './AuthWrapper';

// Not using SWRConfig for now, since we're using SSR
// import { SWRConfig } from "swr";


export default function NextAuthProvider({
  children,
}: {
  children: ReactNode;
}) {
  

  return (
  <SessionProvider>

    <AuthWrapper>
      <ThemeProvider enableSystem={false} attribute="class">
        {children}
      </ThemeProvider>
    </AuthWrapper>
    

  </SessionProvider>

  )
}