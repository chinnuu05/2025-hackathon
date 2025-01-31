'use client';
import React, { useState, useContext } from "react";

const processData = [
  {
    title: "A unified platform",
    description: "We are there for you with quick & reliable responses from us",
    image: "assets/step1.png",
  },
  {
    title: "Top-tier support",
    description: "We are there for you with quick & reliable responses from us",
    image: "assets/step2.png",
  },
  {
    title: "Time efficiency",
    description: "We are there for you with quick & reliable responses from us",
    image: "assets/step3.svg",
  },
];

function ServiceSection() {
  const [selectedStep, setSelectedStep] = useState<number>(0);

  return (
    <div className="space-y-6">
      <div className="space-y-5">
        <div>
          <h2 className="text-white text-3xl lg:text-5xl text-center">
            How it works
          </h2>
        </div>

        <section className="service__section max-w-5xl mx-auto gap-y-10 gap-x-10 flex flex-col lg:flex-row items-start py-10 px-6 md:px-10 lg:px-10">
          <div className="flex items-center justify-center flex-col gap-y-5 max-w-xl mx-auto w-full lg:w-1/2">
            {processData.map(({ title, description }, index) => (
              <div
                key={title}
                className={`flex space-x-6 items-start relative max-w-sm py-6 px-5 rounded-lg cursor-pointer ${
                  selectedStep === index ? "bg-slate-300/15" : "hover:bg-slate-300/15"
                }`}
                onClick={() => setSelectedStep(index)}
              >
                <div className={`flex items-center justify-center text-md md:text-lg lg:text-xl py-1 px-3 lg:py-2 lg:px-4 ${index == 0 ? 'px-[0.82rem] md:px-[0.9rem] lg:px-[1.1rem]' : ''} rounded-full text-white font-bold bg-yellow-300`}>
                  {index + 1}
                </div>

                <div>
                  <h3 className="text-lg sm:text-xl md:text-2xl lg:text-2xl text-gray-1000 font-semibold">{title}</h3>
                  <p className="text-gray-400 text-md sm:text-lg md:text-xl lg:text-xl">{description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Desktop view */}
          <div className="relative top-10 h-[500px] lg:w-[40%] flex justify-between px-6 hidden lg:flex">
            {processData.map((step, index) => (
              <img
                key={index}
                alt={`step-image-${index + 1}`}
                loading="lazy"
                width={310}
                height={310}
                decoding="async"
                className={`absolute duration-500 ${
                  selectedStep === index
                    ? "z-20 opacity-100"
                    : "z-0 opacity-70 blur-sm"
                }`}
                style={{ color: "transparent" }}
                src={`${step.image}`}
              />
            ))}
          </div>
        </section>

      </div>

      {/* Mobile view: Single image below all steps */}
      <div className="lg:hidden w-full flex justify-center mt-4">
        <img
          src={`${processData[selectedStep].image}`}
          alt={`step-image-${selectedStep + 1}`}
          className="w-full max-w-xs"
        />
      </div>
    </div>
  );
}

export default ServiceSection;