'use client'; 

import React from "react";
import { useEffect } from "react";
import { Context } from "@reactivated"; 

const featuredCompaniesImages = [
  {
    id: 1,
    image: "assets/FeaturedCompany-logo/fluid-glu.svg",
    hover: "assets/FeaturedCompany-logo/fluid-glu-black.svg",
    name: "FakeFlui",
    alt: "Fluidglu",
  },
  {
    id: 2,
    image: "assets/FeaturedCompany-logo/hikkeno.svg",
    hover: "assets/FeaturedCompany-logo/hikkeno-black.svg",
    name: "FakeHik",
    alt: "Hikkeno",
  },
  {
    id: 3,
    image: "assets/FeaturedCompany-logo/bubble.svg",
    hover: "assets/FeaturedCompany-logo/bubble-black.svg",
    name: "FakeBub",
    alt: "Bubble",
  },
];

export default function FeaturedCompany() {

  const context = React.useContext(Context);  
  
  const [hoveredCompany, setHoveredCompany] = React.useState(null);

  useEffect(() => {
    // Preload hover images
    featuredCompaniesImages.forEach((company) => {
      const img = new Image();
      img.src = company.hover;
    });
  }, []);

  return (
    <div className="hero__featued__content lg:py-8">
      <h2 className="hero__featued__text text-center text-lg text-white md:text-xl lg:text-2xl xl:text-3xl">
        Trusetd by these startups
      </h2>
      <div className="featured__image__container mx-auto grid max-w-sm grid-cols-2 items-center justify-evenly gap-x-5 gap-y-5 pb-10 pt-5 sm:max-w-lg sm:grid-cols-3 md:max-w-xl md:gap-x-7 md:py-5 lg:max-w-2xl lg:px-10 lg:py-8">
        {featuredCompaniesImages.map((company) => (
          <div
            className="featured-company-logo group flex cursor-pointer select-none items-center justify-center"
            key={company.id}
          >
            <div
              className="relative flex items-center justify-around gap-3.5 rounded-[calc(0.75rem-0.125rem)] border border-neutral-800/70 bg-neutral-900 px-7 py-2 before:absolute before:left-1 before:top-1 before:-z-10 before:h-full before:w-full before:rounded-[calc(0.75rem-0.125rem)] before:border before:border-neutral-600/50 group-hover:bg-white lg:before:border-neutral-500/50"
              onMouseEnter={() => setHoveredCompany(company.id)}
              onMouseLeave={() => setHoveredCompany(null)}
            >
              <img
                className="h-[30px] w-[30px]"
                src={
                  hoveredCompany === company.id ? `${context.STATIC_URL}${company.hover}` : `${context.STATIC_URL}${company.image}`
                }
                alt={company.alt}
              />
              <p className="text-lg font-medium text-white group-hover:text-[#161616] md:text-xl lg:text-2xl">
                {company.name}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
