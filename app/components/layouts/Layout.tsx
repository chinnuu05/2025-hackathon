import React, { useContext } from "react";
import { HackProvider } from "../HackProvider";

interface Props {
    title: string;
    children: React.ReactNode;
    className?: string;
}


import "@mantine/core/styles.css";
import '@mantine/spotlight/styles.css';
import '@mantine/carousel/styles.css';
import '@mantine/notifications/styles.css';


// import FeaturebaseWidget from "./dashboard/FeatureBaseWidget";

export const Layout = (props: Props) => {



    return (


        
        <HackProvider>

            {/* <NavigationProgress size={8} id={"navLoader"} zIndex={90}/> */}

            <head>



                <meta charSet="utf-8" />
                <title>Notofox: Collect feedback from Notion</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />

                {/* <link href='https://fonts.googleapis.com/css?family=DM Sans' rel='stylesheet'/> */}

                <link href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet"/>

                <link
                    rel="icon"
                    href={`favicon.ico`}
                    type="image/x-icon"
                />


                {/* <link
                    rel="stylesheet"
                    type="text/css"
                    href={`${context.STATIC_URL}tailwind.css`}
                />  */}
{/* 
                <link
                    rel="stylesheet"
                    type="text/css"
                    href={`${context.STATIC_URL}dist/tailwind.css`}
                />   
                <link
                    rel="stylesheet"
                    type="text/css"
                    href={`${context.STATIC_URL}dist/index.css`}
                />
                <script
                    defer
                    crossOrigin="anonymous"
                    src={`${context.STATIC_URL}dist/index.js`}
                />  */}


                {/* <script src="https://cdn.tailwindcss.com"></script> */}

                    


            </head>

            <div className="">

                {/* <Navbar/> */}
                {/* <FeaturebaseWidget/> */}

                <div className="">
                    <main>
                        {props.children}
                    </main>
                </div>

            </div>





            {/* <SupaBadge/> */}
            {/* <Footer/> */}

        </HackProvider> 
        
        
        


    );
};
