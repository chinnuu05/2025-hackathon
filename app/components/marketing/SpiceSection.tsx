'use client';

import React from 'react';

import { useState } from "react";
import { rem } from "@mantine/core";

export const SpiceSection = () => {
    const [currentStep, setCurrentStep] = useState(0);

    const images = [
        'images/feedback-widget-placeholder.png',
        'images/placeholder-2-feedback.png',
        'images/boards.png',
    ];
    
    const spices = [
         {
            title: "Duplicate our template",
            description: "Pick a widget that fits your needs, embed it on your website to start collecting feedback"
         },
         {
            title: "Embed your widget",
            description: "We generate a personalized Notion template to serve as your \"feedback hub.\" Just connect your Notion account and we'll handle the rest!"
         },
        {
            title: "Receive feedback in Notion",
            description: "New feedback will appear in your Notion database in real-time. Share the Notion template with your team members for collaboration."
        }
    ];

    return (
        <>
            <style>{`
                @keyframes moveShine {
                    0% {
                        transform: translateX(-100%);
                    }
                    100% {
                        transform: translateX(100%);
                    }
                }
            `}</style>
            
            <div id="spice" className="py-24">
                <div className="px-32 grid grid-cols-12">
                    <div className="mx-auto justify-center flex flex-col col-span-4">

                        <div>
                            <div className="text-xl font-semibold text-orange-500">
                                Get setup in just a few clicks
                            </div>

                            <div className="text-5xl text-white font-bold">
                                Start collecting feedback in 3 easy steps
                            </div>
                        </div>


                        
                        <div className="pt-9 flex space-x-12">

                            <div className="relative w-[6px]">
                                <div className="absolute w-full bg-gray-800/50 h-full rounded-full backdrop-blur-sm" />
                                
                                <div 
                                    className="absolute w-full rounded-full transition-all duration-700 ease-in-out"
                                    style={{
                                        height: `${(currentStep / (spices.length - 1)) * 100}%`,
                                        background: 'linear-gradient(180deg, #FF6B00 0%, #FFA149 100%)',
                                        boxShadow: '0 0 15px rgba(255, 107, 0, 0.3)',
                                    }}
                                >
                                    <div 
                                        className="absolute inset-0 overflow-hidden rounded-full"
                                        style={{
                                            maskImage: 'linear-gradient(black 50%, transparent)'
                                        }}
                                    >
                                        <div className="absolute inset-0 animate-shine" 
                                            style={{
                                                background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3) 50%, transparent)',
                                                transform: 'translateX(-100%)',
                                            }}
                                        />
                                    </div>

                                    <div 
                                        className="absolute -right-[4px] w-[10px] h-[10px] rounded-full bg-orange-400 transform -translate-y-1/2"
                                        style={{
                                            top: '100%',
                                            boxShadow: '0 0 10px rgba(255, 107, 0, 0.5), 0 0 20px rgba(255, 107, 0, 0.3)',
                                        }}
                                    />
                                </div>
                            </div>

                            <div className="block space-y-4">
                                {spices.map((spice, index) => (
                                    <div 
                                        key={spice.title}
                                        className={`cursor-pointer transition-all duration-300 ${
                                            index == currentStep ? 'opacity-100' : 'opacity-50'
                                        }`}
                                        onClick={() => setCurrentStep(index)}
                                    >
                                        <div className={`${index == currentStep ? 'text-white' : 'text-white'} text-2xl font-semibold`}>
                                            {spice.title}
                                        </div>
                                        <div className={`${index == currentStep ? 'text-gray-400': 'text-gray-500'} font-medium whitespace-pre-line`}>
                                            {spice.description}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>





                    </div>
                    <div className="col-span-8">

                        <div className="p-24">
                            <img src={images[currentStep]} className="w-full h-full object-cover rounded-lg"></img>

                        </div>

                    </div>

                </div>

            </div>
        </>
    );
}
