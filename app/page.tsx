
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

                <SpiceSection></SpiceSection>


                <div className="py-24">
                    <div className="px-32 gap-x-12 items-start grid grid-cols-12">
                        <div className="mx-auto justify-center flex flex-col col-span-5">

                            <div>
                                {/* <div className="text-xl font-semibold text-orange-500">
                                    Productivity
                                </div> */}
                                
                                <div className="space-y-4">
                                    <div className="text-5xl text-white font-bold">
                                        A feedback platform with everything you need- in one place
                                    </div>

                                    <div className="text-gray-300 text-lg max-w-xl">
                                        Get a public feedback center for your users, powered by a Notion template you can collaborate on with your team. 

                                        Create a product roadmap, promote new features in in-app changelog popups, and more.
                                        {/* Your feedback portal is powered by Notion databases, so you can use all of your Notion workflows to manage your feedback portal */}
                                    </div>
                                </div>

                            </div>


                            
                            <div className="pt-9 flex space-x-12">

                                <div>
                                    test
                                </div>

                                <div className="block space-y-4">
                                    <div>
                                        test
                                    </div>
                                </div>
                            </div>





                        </div>
                        <div className="col-span-7">

                            <div className="px-12 ml-12">
                                <img style={{ width: rem(600), height: rem(400)}} src={`assets/feedback-hub.png`} className="object-cover rounded-lg"></img>

                            </div>

                        </div>

                    </div>

                </div>


                <InformationSection></InformationSection>

                <div className="py-24">
                    <TestimonialSection></TestimonialSection>
                </div>

{/*                 
                <StrategySection></StrategySection>
                <ProductivitySection></ProductivitySection>  */}



                <div className="py-24">
                    <PricingSection></PricingSection>
                </div> 
            

                <div className="mx-auto max-w-7xl py-20 sm:px-6 sm:py-32 lg:px-8">
                    <div className="relative isolate overflow-hidden bg-black border-2 border-hero-border px-6 pt-16 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:pt-0 xl:px-24">
                        <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 1024 1024"
                        className="absolute top-1/2 left-1/2 -z-10 h-[64rem] w-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:translate-y-0 lg:-translate-x-1/2"
                        aria-hidden="true"
                        >
                            <circle
                                cx={512}
                                cy={512}
                                r={512}
                                fill="url(#759c1415-0410-454c-8f7c-9a820de03641)"
                                fillOpacity="0.7"
                            />
                            <defs>
                                <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
                                <stop stopColor="#6D79E5" />
                                <stop offset={1} stopColor="#9B6DE5" />
                                </radialGradient>
                            </defs>
                        </svg>


                        <div className="absolute inset-0 translate-x-24 translate-y-16">
                            <img
                                alt=""
                                src={`assets/cta-grid.svg`}
                                className="h-full w-full -rotate-[7deg] object-cover opacity-30"
                            />
                        </div>
                        
                        <div className="space-y-8 relative mx-auto w-full max-w-lg text-center lg:mx-0 lg:flex-auto lg:py-24 lg:text-left xl:max-w-md">

                            <div className="space-y-3">
                                <div className="space-y-4">
                                    <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                                        Start shipping the features your users want
                                    </h2>
                                    <p className="text-lg leading-7 text-gray-300">
                                        Collect actionable feedback, build a roadmap, and promote new features with changelog popups.
                                    </p>
                                </div>

                                <div>
                                    <p className="text-lg leading-7 text-gray-300">
                                        Notofox covers your entire feedback loop- all from the comfort of Notion
                                    </p>
                                </div>

                            </div>


                            <div className="flex items-center justify-center gap-x-6 lg:justify-start">
                                <a
                                href="/signup"
                                className="inline-flex h-12 items-center justify-center rounded-xl border border-transparent bg-white px-6 py-2.5 text-base font-semibold text-gray-900 transition-all duration-200 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-900"
                                >
                                Start your 7-day free trial
                                </a>
                            </div>
                        </div>
                        <div className="relative mt-16 lg:mt-8 lg:h-96">
                            <img
                                alt=""
                                src={`assets/cta-image.svg`}
                                className="w-full max-w-7xl translate-x-12 scale-[1.4] lg:translate-x-20 lg:translate-y-28 lg:scale-[1.8]"
                            />
                        </div>
                    </div>
                </div>

                {/* <FaqSection></FaqSection> */}
                <Footer></Footer>
            </div>

        </div>



    )



}