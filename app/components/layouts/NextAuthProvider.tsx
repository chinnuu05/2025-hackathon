import { SessionProvider, useSession } from 'next-auth/react';
import { ThemeProvider } from 'next-themes'
import { ReactNode } from 'react';
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

      {children}


    {/* <AuthWrapper> */}
      {/* <ThemeProvider enableSystem={false} attribute="class">
      </ThemeProvider> */}
    {/* </AuthWrapper> */}
    

  </SessionProvider>

  )
}