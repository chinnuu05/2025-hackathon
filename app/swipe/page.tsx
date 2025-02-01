import { Button, Text, rem, Group } from "@mantine/core";
import { AppLayout } from "../components/layouts/AppLayout";
import { TitleBlock } from "../components/dashboard/TitleBlock";

// Screen for swiping emails
export default function SwipeScreen()  {
    return (
        <AppLayout>

            <div>
                <TitleBlock
                    title="Clean up your email inbox"
                    subtitle="Swipe left to unsubscribe, swipe right to keep in inbox"
                ></TitleBlock>

                <div className="flex bg-white shadow-sm rounded-lg px-12 py-4">

                    <div>


                    </div>




                </div>


            </div>


        </AppLayout>
    )
}