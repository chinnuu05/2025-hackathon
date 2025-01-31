import React from "react";
import inspirationPic1 from "../assets/Benefits-assets/inspirationPic1.png";
import inspirationPic2 from "../assets/Benefits-assets/inspirationPic2.svg";
import inspirationPic3 from "../assets/Benefits-assets/inspirationPic3.svg";
import graph from "../assets/graph.svg";
import pieChartSided from "../assets/piechart-sided.svg";
import profilePic from "../assets/mona-profile.svg";
import notion from "../assets/app-icon-images/notion.svg";
import groupuser from "../assets/user-avatar-group.svg";

function ProductivityShowcase() {
  return (
    <div className="py-10 lg:py-20">
      <div className="flex flex-col items-center justify-center gap-y-3.5">
        <div className="mx-auto flex w-fit items-center justify-center rounded-full border border-lime-500 bg-[#D3E763]/20 px-5 py-1 text-xs font-bold text-[#D3E763]">
          PRODUCTIVITY
        </div>
        <h2 className="text-3xl text-white lg:text-5xl">
          Ways of productivity
        </h2>
      </div>

      <div className="productivity__section__container mx-auto flex max-w-[1400px] items-center justify-center gap-5 overflow-hidden px-5 py-20 md:gap-10">
        <div className="flex flex-col items-center justify-center gap-10 lg:flex-row">
          {/* Inspiration section */}
          <div className="glowing-background hidden w-[300px] -rotate-3 p-5 shadow-[8px_8px_80px_-15px_rgba(40,42,43,0.5)] drop-shadow-[4px_4px_10px_rgba(0,0,0,0.9)] lg:block">
            <div className="flex w-full items-center justify-between gap-x-7">
              <h3 className="w-[200px] text-2xl text-white lg:text-3xl">
                Inspiration
              </h3>
              <p className="w-[100px] rounded-full border-l border-t-2 border-stone-500/50 bg-[#141414] px-3.5 py-1 text-xs text-white drop-shadow-[2px_2px_2px_rgba(0,0,0,0.7)]">
                IMAGES
              </p>
            </div>
            <div className="my-2 mt-5 flex items-start justify-center gap-x-5">
              <div className="grid w-full items-center justify-between gap-5">
                <div>
                  <img className=" rounded-xl" src={inspirationPic1} alt="" />
                </div>
                <div>
                  <img src={inspirationPic2} alt="" />
                </div>
              </div>
              <img src={inspirationPic3} alt="" />
            </div>
          </div>
          {/* product title whole container */}
          <div className="items-normal mx-auto flex w-fit -rotate-2 flex-col gap-y-4 md:mx-auto md:items-end md:gap-x-5 lg:gap-y-10 xl:mx-0 xl:items-start xl:gap-x-0">
            {/* value chart section */}
            <div className="glowing-background h-fit w-[280px] border-t border-stone-500/50 p-5 shadow-[8px_8px_80px_-15px_rgba(36,38,40,0.5)] drop-shadow-[2px_2px_2px_rgba(0,0,0,0.9)] xl:h-auto">
              <div className="flex items-center justify-between px-2">
                <h3 className="text-2xl text-white lg:text-4xl">72k</h3>
                <p className="rounded-full border-l border-t-2 border-stone-500/50 bg-[#141414] px-3.5 py-1 text-xs text-white drop-shadow-[2px_2px_2px_rgba(0,0,0,0.7)] lg:text-sm">
                  VALUE
                </p>
              </div>
              <div className="flex items-start gap-x-5 py-10">
                <div>
                  <img src={graph} alt="" />
                </div>
              </div>
              <div className="flex flex-col justify-start">
                <h3 className="text-base font-[400] text-[#C8C9D0] lg:text-lg">
                  Product Title
                </h3>
                <p className="text-xs font-[400] text-[#868898] lg:text-sm">
                  Short description goes here
                </p>
              </div>
            </div>
            {/* Spending pie chart section */}
            <div className=" glowing-background mx-auto w-[280px] border-t border-stone-500/50 py-5 pl-3.5 shadow-[8px_8px_60px_-20px_rgba(40,42,43,0.5)] drop-shadow-[4px_4px_10px_rgba(0,0,0,0.9)]">
              <div className="mt-5 flex items-center justify-end gap-x-5">
                <div className=" relative">
                  <img
                    className="image-pieChartSided"
                    src={pieChartSided}
                    alt=""
                  />
                  <div className="absolute left-1/2 top-1/2 -translate-x-1/4 -translate-y-1/2 transform">
                    <h3 className="text-2xl text-white lg:text-4xl">$5476</h3>
                    <p className="text-xs font-[400] text-[#868898] lg:text-sm">
                      Spending this week
                    </p>
                  </div>
                </div>
              </div>
              <div className="-mt-14 flex flex-col justify-start px-5">
                <h3 className="text-base font-[400] text-[#C8C9D0] lg:text-lg">
                  Product Title
                </h3>
                <p className="text-xs font-[400] text-[#868898] lg:text-sm">
                  Short description goes here
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center gap-x-10 gap-y-5 lg:flex-row">
          {/* User profile section total container */}
          <div className="flex flex-col gap-y-4 md:mx-auto md:gap-x-5 lg:gap-y-10 xl:mx-0 xl:gap-x-0">
            {/* user profile section */}
            <div className="glowing-background mx-auto w-[320px] rotate-3">
              <div className="ju flex items-center gap-x-5 p-5 pb-10">
                <div className="profile-image">
                  <img
                    className="h-38 w-38 lg:h-auto lg:w-auto"
                    src={profilePic}
                    alt=""
                  />
                </div>
                <div className="flex flex-col">
                  <div className="flex items-start justify-start gap-x-5">
                    <h3 className="text-xl text-white lg:text-2xl">
                      Mona John
                    </h3>
                    <p className="rounded-full border-l border-t-2 border-stone-500/50 bg-[#141414] px-3.5 py-1 text-xs text-white drop-shadow-[2px_2px_2px_rgba(0,0,0,0.7)] lg:text-sm">
                      Profile
                    </p>
                  </div>
                  <p className="text-sm font-[400] text-[#C8C9D0]/20">
                    moana_j@mail.com
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-x-10 border-t border-slate-500/20">
                <div className="flex flex-col justify-start px-5 py-5">
                  <h3 className="text-lg font-[400] text-[#C8C9D0]">
                    12 sep 2002
                  </h3>
                  <p className="text-sm font-[400] text-[#868898]">Join date</p>
                </div>
                <div className="flex flex-col justify-start">
                  <h3 className="text-lg font-[400] text-[#C8C9D0]">
                    42 projects
                  </h3>
                  <p className="text-sm font-[400] text-[#868898]">Reviews</p>
                </div>
              </div>
            </div>
            {/* Clear Roadmap section */}
            <div className="glowing-background mx-auto w-[320px] rotate-3 py-5 pl-3.5">
              <div className="flex items-center gap-x-5 px-2">
                <div className="notion-image">
                  <img src={notion} alt="" />
                </div>
                <div className="flex flex-col">
                  <div className="flex items-start justify-start gap-x-5">
                    <h3 className="text-xl text-white lg:text-2xl">
                      Clear Roadmap
                    </h3>
                  </div>
                  <p className="text-sm font-[400] text-[#C8C9D0]/20">
                    notion.com
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* User journey section */}
          <div className="glowing-background w-[300px] rotate-3 p-5 ">
            <div className="flex items-center justify-between gap-x-7">
              <h3 className="w-[200px]  text-2xl text-white">User journey</h3>
              <p className="w-[100px] rounded-full border-l border-t-2 border-stone-500/50 bg-[#141414] px-3.5 py-1 text-xs text-white drop-shadow-[2px_2px_2px_rgba(0,0,0,0.7)] lg:text-sm">
                IMAGES
              </p>
            </div>
            <div className="py-5">
              <img
                className="aspect-auto h-auto w-[200px] object-cover"
                src={groupuser}
                alt=""
              />
            </div>
            {/* <div className="flex items-center justify-center">
              <img src={thumbsupEmoji} alt="" />
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductivityShowcase;
