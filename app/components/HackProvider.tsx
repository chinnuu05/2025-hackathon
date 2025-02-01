import { MantineProvider, ColorSchemeScript, MantineColorsTuple, createTheme } from "@mantine/core";  
import { Notifications } from '@mantine/notifications';
import { NavigationProgress, nprogress } from '@mantine/nprogress';
import { RouterTransition } from "./RouterTransition";
import NextAuthProvider from "./layouts/NextAuthProvider";

import '@mantine/core/styles.css';
import '@mantine/nprogress/styles.css';


const app: MantineColorsTuple = [
    "#fff3e0",
    "#ffe7ca",
    "#ffcd99",
    "#ffb263",
    "#ff9a36",
    "#ff8b18",
    "#ff8405",
    "#e47100",
    "#cc6300",
    "#b15400"
];


export const HackProvider = ({ children }: { children: React.ReactNode }) => {
    const theme = createTheme({
        colors: {
            app
        },
        primaryColor: "app",
        primaryShade: 6,
        defaultRadius: "md" 
    });

    return (

        // Wrap with NextAuth to handle authentication
            <MantineProvider theme={theme}>
                
                {/* to send mantine notifications */}
                <Notifications position="top-right" zIndex={100} />


                <RouterTransition />
                {children}
            </MantineProvider>

    )
}