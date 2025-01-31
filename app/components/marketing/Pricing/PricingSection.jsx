'use client';

import React, { useState, useContext } from "react";
import Pricingtoggle from "./PricingToggle";
import { PlugButton } from "@/app/components/ui/Button";

function PricingSection() {
  const [enabled, setEnabled] = useState(false);


  const pricingData = [
    {
      title: "Early Adopter",
      price: enabled ? "$180" : "$19",
      pricePeriod: enabled ? "/year" : "/month",
      description: "For startups that want to kickstart their feedback loop and build a better product",
      features: [
        "Unlimited feedback",
        "Unlimited projects",
        "Collaborate with your team on Notion",
        "Embeddable widgets",
        "Changelogs (with in-app support)",
        "Product Roadmap",
        "Knowledge Base",
        "Custom domain",
        // "24/7 support",
      ],
      buttonText: "Start your free trial",
      buttonColor: "bg-yellow-300 text-black border-transparent",
    },
    // {
    //   title: "Enterprise",
    //   price: enabled ? "$120" : "$199",
    //   pricePeriod: enabled ? "/year" : "/month",
    //   description: "For large companies that want to scale their marketing",
    //   features: [
    //     "1000 monthly replies",
    //     "250 monthly posts",
    //     "100 keywords",
    //     "Boot SEO using ranked Reddit posts",
    //     "Data driven analytics",
    //     "Unlimited Projects",
    //     "24/7 support",
    //   ],
    //   buttonText: "Start your free trial",
    //   buttonColor: "bg-[#ffb263] text-black border-transparent",
    // },
  ];

  const renderFeature = (text) => (
    <div className="flex items-center gap-x-3.5">
      <img className="h-6 w-6" src={`assets/checkicon.svg`} alt="" />
      <p className="text-base text-white/70 font-[400]">{text}</p>
    </div>
  );

  return (
    <div id="pricing" className="space-y-2 pt-10 px-7 max-w-4xl mx-auto">
      <div className="space-y-4 justify-center text-center">
        <h2 className="text-white text-3xl lg:text-5xl text-center">
          Become an early adopter
        </h2>

        <div className="text-gray-300 text-md text-center mx-auto max-w-xl">
          *You will be grandfathered in at this price, in return we ask that you provide feedback to help us shape the product.
        </div>
      </div>

      <div className="pt-5">
        <div className="flex flex-col items-center justify-center gap-y-3.5">
          <div className="flex flex-col gap-y-2">
            <div className="flex items-center justify-center gap-x-3 mt-2.5">
              <h2 className="text-white text-xl md:text-2xl">Monthly</h2>
              <Pricingtoggle enabled={enabled} setEnabled={setEnabled} />
              <span className="text-xl md:text-2xl text-white">Yearly</span>
            </div>
          </div>
        </div>

        <div className="pricing-card-container py-10 grid grid-cols-1 place-items-center gap-y-8 lg:gap-y-0 items-start gap-x-12 text-white">
          {pricingData.map((item, index) => (
            <div
              key={index}
              className="p-7 max-w-full w-full md:w-[400px] col-span-1 pricing-card pricing-container-dark border border-[#060606] cursor-pointer rounded-3xl"
            >
              <div className="border-b border-[#D9D9D9]/10">
                <div className="pricing-content pb-5 flex flex-col gap-y-3">
                  <h2 className="text-4xl text-gray-300">{item.title}</h2>
                  <h2 className="text-4xl font-semibold">
                    {item.price}
                    <span className="ml-1.5 text-xs text-white/50">
                      {item.pricePeriod}
                    </span>
                  </h2>
                  <p className="text-[#7D7D82] text-sm font-[400]">
                    {item.description}
                  </p>
                </div>
              </div>

              <div className="flex flex-col py-7 gap-y-3">
                {item.features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-x-3.5">
                    <img className="h-6 w-6" src={`assets/checkicon.svg`} alt="" />
                    <p className="text-base text-white/70 font-[400]">
                      {feature}
                    </p>
                  </div>
                ))}
              </div>

              <div className="pt-3.5 w-full">
                <PlugButton link="/signup" fullWidth={true} radius="2xl" size="lg">
                  {item.buttonText}
                </PlugButton>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PricingSection;
