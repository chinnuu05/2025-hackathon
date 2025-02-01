import { MantineProvider, createTheme } from "@mantine/core";
import { NavigationProgress, nprogress } from '@mantine/nprogress';
import { RouterTransition } from "./RouterTransition";
import NextAuthProvider from "./layouts/NextAuthProvider";

import '@mantine/core/styles.css';
import '@mantine/nprogress/styles.css';



export const HackProvider = ({ children }: { children: React.ReactNode }) => {
    const theme = createTheme({});

    return (

        // Wrap with NextAuth to handle authentication
            <MantineProvider theme={theme}>
                <RouterTransition />
                {children}
            </MantineProvider>

    )
}