import React, { useContext } from "react";


// Paths to assets in the public directory
const assets = {
  inspirationPic1: "/assets/Benefits-assets/inspirationPic1.svg",
  inspirationPic2: "/assets/Benefits-assets/inspirationPic2.svg",
  inspirationPic3: "/assets/Benefits-assets/inspirationPic3.svg",
  graph: "/assets/graph.svg",
  pieChartSided: "/assets/piechart-sided.svg",
  profilePic: "/assets/mona-profile.svg",
  notion: "/assets/app-icon-images/notion.svg",
  groupuser: "/assets/user-avatar-group.svg",
  thumbsupEmoji: "/assets/thumbsup-emoji.svg"
};

function ProductivityShowcase() {

  const context = useContext(Context);

  return (
    <div className="py-10 lg:py-20">
      {/* Section heading */}
      <div className="flex flex-col items-center justify-center gap-y-3.5">
        <div className="flex items-center justify-center rounded-full bg-yellow-300 text-black border border-yellow-500 py-[3px] px-2 lg:px-4 lg:py-1.5 font-semibold text-[10px] lg:text-xs">
          <span>PRODUCTIVITY</span>
        </div>
        <h2 className="text-white text-3xl lg:text-5xl">
          Ways of productivity
        </h2>
      </div>

      {/* Content section */}
      <div className="py-14 lg:py-24 p-7 flex justify-center flex-col gap-y-4 lg:flex xl:flex-row gap-x-10 lg:items-center">
        {/* Inspiration section */}
        <div className="glowing-background p-5 md:w-fit md:mx-auto lg:mx-0">
          <div className="flex items-center justify-between px-2">
            <h3 className="text-2xl lg:text-4xl text-white">Inspiration</h3>
            <p className="text-white text-xs lg:text-sm bg-[#141414] py-2 px-5 rounded-full">
              IMAGES
            </p>
          </div>
          <div className="flex items-start justify-center gap-x-5 mt-5 my-2">
            <div className="flex flex-col gap-y-5">
              <img src={`${assets.inspirationPic1}`} alt="Inspiration 1" />
              <img src={`${assets.inspirationPic2}`} alt="Inspiration 2" />
            </div>
            <img src={`${assets.inspirationPic3}`} alt="Inspiration 3" />
          </div>
        </div>

        {/* Productivity value section */}
        <div className="flex items-normal md:items-end xl:items-start flex-col md:flex-row xl:flex-col md:gap-x-5 md:mx-auto xl:mx-0 xl:gap-x-0 gap-y-4 lg:gap-y-10">
          <div className="glowing-background h-fit xl:h-auto p-5">
            <div className="flex items-center justify-between px-2">
              <h3 className="text-2xl lg:text-4xl text-white">72k</h3>
              <p className="text-white text-xs lg:text-sm bg-[#141414] py-2 px-5 rounded-full">
                VALUE
              </p>
            </div>
            <div className="flex items-start gap-x-5 py-10">
              <div>
                <img src={`${assets.graph}`} alt="Graph" />
              </div>
            </div>
            <div className="flex flex-col justify-start">
              <h3 className="text-base lg:text-lg text-yellow-400 font-[400]">
                Product Title
              </h3>
              <p className="text-yellow-300 text-xs lg:text-sm font-[400]">
                Short description goes here
              </p>
            </div>
          </div>

          {/* Spending section */}
          <div className="glowing-background py-5 pl-3.5">
            <div className="flex items-center justify-end gap-x-5 mt-5">
              <div className="relative">
                <img
                  className="image-pieChartSided"
                  src={`${assets.pieChartSided}`}
                  alt="Pie Chart"
                />
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/4 -translate-y-1/2">
                  <h3 className="text-2xl lg:text-4xl text-white">$5476</h3>
                  <p className="text-yellow-300 text-xs lg:text-sm font-[400]">
                    Spending this week
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-start px-5 -mt-14">
              <h3 className="text-base lg:text-lg text-yellow-400 font-[400]">
                Product Title
              </h3>
              <p className="text-yellow-300 text-xs lg:text-sm font-[400]">
                Short description goes here
              </p>
            </div>
          </div>
        </div>

        {/* User profile section */}
        <div className="flex flex-col md:flex-row xl:flex-col md:gap-x-5 md:mx-auto xl:mx-0 xl:gap-x-0 gap-y-4 lg:gap-y-10">
          <div className="glowing-background">
            <div className="flex items-center gap-x-5 pb-10 p-5">
              <div className="profile-image">
                <img
                  className="h-38 w-38 lg:h-auto lg:w-auto"
                  src={`${assets.profilePic}`}
                  alt="Profile"
                />
              </div>
              <div className="flex flex-col">
                <div className="flex gap-x-5 items-start justify-start">
                  <h3 className="text-xl lg:text-2xl text-white">Mona John</h3>
                  <p className="text-white text-xs lg:text-sm bg-[#141414] py-2 px-5 rounded-full">
                    Profile
                  </p>
                </div>
                <p className="text-sm text-yellow-300 font-[400]">
                  moana_j@mail.com
                </p>
              </div>
            </div>
            <div className="flex items-center gap-x-10 border-t border-slate-500/20">
              <div className="flex flex-col justify-start py-5 px-5">
                <h3 className="text-lg text-yellow-400 font-[400]">
                  12 sep 2002
                </h3>
                <p className="text-yellow-300 text-sm font-[400]">Join date</p>
              </div>
              <div className="flex flex-col justify-start">
                <h3 className="text-lg text-yellow-400 font-[400]">
                  42 projects
                </h3>
                <p className="text-yellow-300 text-sm font-[400]">Reviews</p>
              </div>
            </div>
          </div>

          {/* Clear Roadmap section */}
          <div className="glowing-background md:h-fit py-5 pl-3.5">
            <div className="flex items-center gap-x-5 px-2">
              <div className="notion-image">
                <img src={`${assets.notion}`} alt="Notion" />
              </div>
              <div className="flex flex-col">
                <div className="flex gap-x-5 items-start justify-start">
                  <h3 className="text-xl lg:text-2xl text-white">
                    Clear Roadmap
                  </h3>
                </div>
                <p className="text-sm text-yellow-300 font-[400]">
                  notion.com
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* User journey section */}
        <div className="glowing-background p-5 md:w-fit md:mx-auto xl:mx-0 xl:-mt-48">
          <div className="flex items-center justify-between gap-x-5">
            <h3 className="text-2xl lg:text-4xl text-white">User journey</h3>
            <p className="text-white text-xs lg:text-sm bg-[#141414] py-2 px-5 rounded-full">
              IMAGES
            </p>
          </div>
          <div className="py-5">
            <img src={`${assets.groupuser}`} alt="User Journey" />
          </div>
          <div className="flex items-center justify-center">
            <img src={`${assets.thumbsupEmoji}`} alt="Thumbs Up" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductivityShowcase;
