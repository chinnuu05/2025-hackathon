import { 
    Stepper,
    Button,
    rem,
    TextInput,
    Text 
} from "@mantine/core";
import { useState, useEffect } from 'react';
import { AppLayout } from "../components/layouts/AppLayout";

export default function Onboarding() {


    const [active, setActive] = useState(0);

    const nextStep = () => setActive((current) => (current < 3 ? current + 1 : current));
    const prevStep = () => setActive((current) => (current > 0 ? current - 1 : current));



    return (
        <AppLayout>

            
            <div>

                <div className="flex space-x-2 items-center">

                    <div>

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

        </AppLayout>

    )

}