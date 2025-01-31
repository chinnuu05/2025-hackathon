import { MantineProvider, createTheme } from "@mantine/core";
import { NavigationProgress, nprogress } from '@mantine/nprogress';
import { RouterTransition } from "./RouterTransition";

import '@mantine/core/styles.css';
import '@mantine/nprogress/styles.css';



export const HackProvider = ({ children }: { children: React.ReactNode }) => {
    const theme = createTheme({});

    return (
        <MantineProvider theme={theme}>
            <RouterTransition />
            {children}
        </MantineProvider>
    )
}