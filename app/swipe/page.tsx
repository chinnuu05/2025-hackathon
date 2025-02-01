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

                <div className="grid grid-cols-12 gap-x-6">

                    {/* Stack of cards/email subscriptions to start swiping */}
                    <div className="col-span-7 relative h-[600px]">
                        <div className="absolute w-full">
                            {/* Example subscription cards - these would be mapped from your data */}
                            <div className="bg-white rounded-xl shadow-lg p-6 mb-4 transform transition-transform hover:scale-105 cursor-pointer border border-gray-100">
                                <div className="flex items-center mb-4">
                                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                                        <Text size="xl">A</Text>
                                    </div>
                                    <div className="ml-4">
                                        <Text size="lg" fw={600}>Amazon Shopping</Text>
                                        <Text size="sm" c="dimmed">amazon-shopping@amazon.com</Text>
                                    </div>
                                </div>
                                <Text className="mb-4">Latest: "Your Amazon order has shipped!"</Text>
                                <Group justify="space-between">
                                    <Button variant="light" color="red">Unsubscribe</Button>
                                    <Button variant="light" color="green">Keep</Button>
                                </Group>
                            </div>

                            {/* Additional cards would be stacked behind with slight offset */}
                            <div className="bg-white rounded-xl shadow-lg p-6 absolute top-2 -z-10 w-full opacity-70 scale-[0.98]">
                                {/* Placeholder for next card */}
                            </div>
                            <div className="bg-white rounded-xl shadow-lg p-6 absolute top-4 -z-20 w-full opacity-40 scale-[0.96]">
                                {/* Placeholder for third card */}
                            </div>
                        </div>
                    </div>

                    {/* Show stats and details for each card the user swipes */}
                    <div className="col-span-5">
                        <div className="bg-white rounded-xl shadow-lg p-6">
                            <Text size="xl" fw={600} className="mb-4">Subscription Details</Text>
                            
                            <div className="space-y-4">
                                <div className="border-b pb-4">
                                    <Text fw={500}>Email Activity</Text>
                                    <Text size="xl" fw={700} className="mt-1">47 emails</Text>
                                    <Text size="sm" c="dimmed">received this month</Text>
                                </div>

                                <div className="border-b pb-4">
                                    <Text fw={500}>Average Frequency</Text>
                                    <Text size="xl" fw={700} className="mt-1">1.5 emails/day</Text>
                                </div>

                                <div>
                                    <Text fw={500}>Last Received</Text>
                                    <Text size="xl" fw={700} className="mt-1">2 hours ago</Text>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex bg-white shadow-sm rounded-lg px-12 py-4">

                    <div>




                    </div>




                </div>



            </div>


        </AppLayout>
    )
}