
import React, { useContext } from "react";

import FaqSection from '@/app/components/marketing/FaqSection';
import HeroSection from '@/app/components/marketing/HeroSection'; 
import ServiceSection from "@/app/components/marketing/ServiceSection";
import RedditPost from "@/app/components/marketing/RedditPost";
import { IconExternalLink } from "@tabler/icons-react";
import { rem } from "@mantine/core";

import PricingSection from "@/app/components/marketing/Pricing/PricingSection";
import Footer from "@/app/components/marketing/Footer/Footer";
// import StrategySection from "@client/components/marketing/Features/Features-1/StrategySection";
import InformationSection from "@/app/components/marketing/Features/Features-2/InformationSection";
import ProductivitySection from "@/app/components/marketing/Benefits/ProductivitySection";
import TestimonialSection from "@/app/components/marketing/TestimonialSection";
import { SpiceSection } from "@/app/components/marketing/SpiceSection";


export default function LandingPage() {


    return (


        <div className="bg-black">


            {/* <ColorSchemeToggle></ColorSchemeToggle> */}
            <HeroSection isAuthenticated={false}></HeroSection>


            <div className="py-24 space-y-48">

                {/* <SpiceSection></SpiceSection> */}

                {/* <FaqSection></FaqSection> */}
                <Footer></Footer>
            </div>

        </div>



    )



}