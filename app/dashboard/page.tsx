import { SubscriberRow } from "../components/dashboard/SubscriberRow";
import { TitleBlock } from "../components/dashboard/TitleBlock";
import { AppLayout } from "../components/layouts/AppLayout"
import { StatsRing } from "@/app/components/dashboard/MantineStats";

export default function Dashboard() {
    return (
        <AppLayout>

            <div>
                <TitleBlock title="Overview" subtitle="See an overview of your subscriber list"></TitleBlock>
            </div>

            <div className="space-y-12">
                <div>
                    <StatsRing issues={10} features={5} feedback={10}></StatsRing>
                </div>



                <div>

                    <div className="divide-y-2 divide-mantine-border/50">
                        <SubscriberRow></SubscriberRow>
                        <SubscriberRow></SubscriberRow>
                    </div>
            </div>


            </div>


            
        </AppLayout>
    )
}