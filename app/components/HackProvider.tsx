import { MantineProvider, createTheme } from "@mantine/core";
import '@mantine/core/styles.css';



export const HackProvider = ({ children }: { children: React.ReactNode }) => {

    const theme = createTheme({

    });

    return (
        
        <MantineProvider theme={theme}>

            <div>
                {children}
            </div>


        </MantineProvider>
    )
}