'use client'
import { 
    Stepper,
    Button,
    rem,
    TextInput,
    PasswordInput,

    Text 
} from "@mantine/core";
import { useState, useEffect } from 'react';
import { AppLayout } from "../components/layouts/AppLayout";
import { TitleBlock } from "../components/dashboard/TitleBlock";
import Navbar from "@/app/components/marketing/Navbar";


export default function Onboarding() {


    const [active, setActive] = useState(0);
    const [email, setEmail] = useState('');
    const [appPasscode, setAppPasscode] = useState('');

    const nextStep = () => setActive((current) => (current < 3 ? current + 1 : current));
    const prevStep = () => setActive((current) => (current > 0 ? current - 1 : current));


    const stepContent = [
        {
            title: "Enable IMAP in your Gmail settings",
            description: "This allows us to scan your emails for newsletters and other contents.",
            link: "#"
        },
        {
            title: "Enable 2-Factor Authentication",
            description: "This is required by Google for us to access your inbox",
            link: "#"
        },
        {
            title: "Generate an App Password",
            description: "This is a 16-digit passcode that gives eBroom permission to access your Gmail account.",
            link: "#"
        }
    ];


    return (

            
            <div className="flex mx-auto justify-center items-center bg-theme-color/80 h-screen w-screen">

                <div className="px-24 block space-x-2 items-center">


                    <div className="max-w-3xl justify-between bg-mantine-gray-50 shadow-sm rounded-xl p-12 flex space-x-12">

                        <div className="space-y-6">
                            <div>
                                <div className="text-xl font-medium">
                                    Let's connect your email account!
                                </div>

                                <div>
                                    <TextInput
                                        rightSection={<img src={"assets/gmail.svg"} style={{ width: rem(32), height: rem(32)}}></img>}
                                        radius="md"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        placeholder="example@gmail.com"
                                        size="lg"
                                    />
                                </div>

                            </div>


                            <div className="flex items-center border-2 bg-white rounded-xl border-mantine-border py-6 px-8 w-full">
                                <div className="font-medium text-white text-lg bg-theme-color px-3.5 p-1 rounded-full mr-6">
                                    {active + 1}
                                </div>

                                <div>
                                    <div className="text-lg text-black font-semibold">
                                        <div>{stepContent[active].title} 
                                            <a href={stepContent[active].link} target="_blank" className="text-theme-color underline">here.</a>
                                        </div> 
                                        <div className="text-sm text-gray-400 font-medium">
                                            {stepContent[active].description}
                                        </div>
                                    </div>
                                </div>




                            </div>

                            {
                                    active == 2
                                    ?
                                    <div>
                                        <PasswordInput
                                            size="lg"
                                            placeholder="Enter your 16-digit app passcode"
                                        ></PasswordInput>
                                    </div>
                                    : 
                                    null
                                }

                            <div className="w-full space-x-2 flex items-center">
                                <Button 
                                    onClick={() => {
                                        if (active == 2) {
                                            // Onboarding is done
                                        }

                                        else {
                                            nextStep();
                                        }
                                    }}
                                    fullWidth 
                                    variant="default" 
                                    size="md" 
                                    radius="lg">
                                        {
                                            active == 2 ? "Finish setup" : "Continue to next step"
                                        }
                                </Button>
                                <Button 
                                    onClick={prevStep}
                                fullWidth variant="light" size="md" radius="lg">Go back</Button>
                            </div>

                        </div>

                        <div>
                            <Stepper
                                orientation="vertical"
                                onStepClick={setActive}
                                active={active}
                                size="lg"

                            >

                                <Stepper.Step label="Enable IMAP Access">
                                    <div>
                                        
                                    </div>

                                </Stepper.Step>

                                <Stepper.Step label="Connect your email">
                                    <div>

                                    </div>

                                </Stepper.Step>
                                
                                <Stepper.Step label="Start swiping!">
                                    <div>
                                        
                                    </div>

                                </Stepper.Step>

                            </Stepper>

                        </div>

                    </div>


                </div>






            </div>


    )

}