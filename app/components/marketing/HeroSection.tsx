import React, { useContext } from "react";
import Navbar from "./Navbar";
// import FeaturedCompany from '@/components/marketing/FeaturedCompany';
import RedditPost from "./RedditPost";
import { FcLike, FcAbout } from "react-icons/fc";
import { 
  IconArrowDown
} from "@tabler/icons-react"
import { rem, Tooltip } from "@mantine/core";

export default function HeroSection( { isAuthenticated } : { isAuthenticated: boolean }) {


  return (
    <section className="hero__section">

      <div className="py-12">
        <Navbar isAuthenticated={isAuthenticated} />
      </div>

      {/* md:px-10 md:py-8 lg:px-12 py-6 */}
      <div className="hero__container ">
        <div className="hero__outer__container relative mx-auto before:absolute before:rounded-none sm:max-w-3xl md:max-w-3xl md:py-7 md:before:rounded-2xl lg:max-w-4xl lg:py-10 xl:max-w-[980px]">
          {/* <div className="hidden xl:block top__left__corner__asset absolute -left-9 -top-14 lg:-left-20 lg:-top-20">
            <img src={`${context.STATIC_URL}assets/star.svg`} alt="left-corner-star" />
          </div> */}
          <div className="top__right__cornet__asset absolute -right-2 -top-8 -z-10 hidden md:-right-8 md:-top-7  md:block lg:-right-14 lg:-top-14">
            <img
              className="h-10 w-10 lg:h-full lg:w-full"
              src={`assets/sparkle.svg`}
              alt="right-corner-highlight"
            />
          </div>
          <div className="relative rounded-none border-b border-t border-dashed border-slate-800/70 px-5 before:rounded-none md:mx-7 md:rounded-2xl md:border-none lg:mx-10 lg:before:rounded-xl">
            

            {/* <div className="flex items-center mx-auto justify-center">
              <div className="bg-transparent shadow-sm  rounded-lg flex space-x-2 items-center relative overflow-hidden before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_2s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/10 before:to-transparent">
                <div className="px-4 py-2 flex items-center space-x-2 text-lg text-white font-semibold ">
                      <div className="flex space-x-2 items-center">

                          <div>Made for</div>
        
                          <div>
                            <img src="assets/notion.svg" style={{ width: rem(20), height: rem(20)}}></img>
                          </div>

                          <div>users,</div> 
                      </div>

    
                      <div className="space-x-2 flex items-center">
                        <div>built with</div>
                      
                        <div>
                          <FcLike style={{width: rem(20), height: rem(20)}}></FcLike>
                        </div>
                      </div>
                    </div>
                </div>
            </div> */}
            
              <div className="hero__content">
                {/* py-8 pb-3.5 lg:pb-5 lg:pt-[60px] */}
                <div className="flex flex-col items-center justify-crnter gap-y-3 lg:pt-8">
                
                {/* <span className="uppercase tag mx-auto flex w-fit items-center justify-center rounded-full border border-yellow-500 bg-yellow-500/20 px-5 py-1 text-xs font-bold text-yellow-300">
                  Meet Your 24/7 Marketing AI
                </span> */}
                
                <h1 className=" space-x-4 text-4xl sm:text-5xl lg:text-6xl xl:text-7xl hero__headline text-center font-bold tracking-tight text-white max-[640px]:max-w-[500px] max-[460px]:max-w-[360px] min-[461px]:max-w-[500px] sm:max-w-[600px] md:max-w-full">
                  <span>
                    Easily unsubscribe from 
                  </span>

                  {/* <span className="w-full relative">
                    <span className="relative">
                      fastest
                      <svg className="absolute -bottom-2 left-0 w-full" width="100%" height="24" viewBox="0 0 100 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M-45 12L160 9" stroke="#FFA54B" strokeWidth="6" strokeLinecap="round"/>
                      </svg>
                    </span>
                  </span> */}
                      
                  <span>emails, and clean</span>
                  
                  <br className="hidden lg:block"/>
                  
                  up your email inbox{" "}

                  <br/>

                  {/* user feedback */}

                </h1>
                {/* Notofox is the tool for minimialists-  */}
                <div className="text-center pt-8 max-w-2xl text-gray-300 font-medium lg:text-2xl md:text-2xl sm:text-2xl text-lg">
                  {/* Collect in-app feedback, build a user-centric roadmap, and publish changelogs- <span className="underline">all without leaving Notion</span> */}
                  
                  eBroom helps you unsubscribe from unwanted email subscriptions, turn your inbox from a cluttered mess into an organized mailbox.
                    
                </div>
{/* 
                <div className="text-center pt-8 max-w-2xl text-gray-300 font-medium lg:text-2xl md:text-2xl sm:text-2xl text-lg">
                  Build product roadmaps and publish changelogs, all from inside Notion. Notofox lets you collect feedback, 
                </div> */}

                {/* Hero Button */}
                <div className="hero__button__container mx-auto flex items-center justify-center py-10 sm:max-w-xl lg:max-w-3xl lg:py-8 xl:max-w-4xl ">
                  <a
                    href="#spice"
                    className="hero__button flex cursor-pointer items-center justify-center rounded-full border-2 border-white bg-white px-7 py-1.5 text-base font-bold text-black ring ring-transparent ring-offset-4 ring-offset-stone-500/40 transition duration-200 hover:shadow-lg hover:shadow-black hover:ring-gray-1200 hover:ring-offset-current hover:drop-shadow-lg lg:px-10 lg:py-2 lg:text-lg xl:text-xl"
                  >
                    <div className="flex space-x-2.5 items-center">
                      <div>See how it works</div>
                      <div><IconArrowDown stroke={2.3} style={{ width: rem(22), height: rem(22) }}></IconArrowDown></div>
                    </div>
                  </a>
                </div>
              </div>

                {/* <div className="pb-10 pt-4">
                  <img className="rounded-2xl" src="https://www.hypespot.pro/_next/static/media/hero-banner.96def5a3.svg"/>
                </div> */}

              {/* Featured Company Component */}
              {/* <FeaturedCompany /> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
