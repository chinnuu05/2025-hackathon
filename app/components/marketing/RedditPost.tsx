'use client';
import React, { useRef, useEffect, useState } from 'react';
import { Avatar } from "@mantine/core";
import classes from "@client/styles/RedditPost.module.css";
import { IconMessageChatbot } from "@tabler/icons-react";


export default function RedditPost() {
    // const box1Ref = useRef(null);
    // const [arrowHeight, setArrowHeight] = useState(0);


    // useEffect(() => {
    //     if (box1Ref.current) {
    //         const postHeight = box1Ref.current.clientHeight;
    //         setArrowHeight(postHeight + 20); // Adjust 20 to place the arrow correctly
    //     }
    // }, []);

    const examplePost = {
        subreddit: "SaaS",
        thumbnail: "https://styles.redditmedia.com/t5_2qkq6/styles/communityIcon_u7ddkuay2xn21.jpg?format=pjpg&s=f2e6ba8e0650068b02b5dd92aa79476235cd65cf",
        title: "How do I post about my startup on Reddit?",
        body: `
        Whenever I post my startup on Reddit I seem to get downvoted or ignored

        How do I post my product in a way that gets attention? Any advice?    
        `,
        comment: `
        Focus on providing value, like a guide or a helpful story to how you solved a problem relevant to that community
        
        I use Pluggr to market my own SaaS, it finds posts that match your keywords and mentions your product in the comments naturally
        `
    }

    const formatComment = (comment: string) => {
        return comment.split('\n').map((line, index) => (
            <React.Fragment key={index}>
                {line}
                <br />
            </React.Fragment>
        ));
    };

    return (

        <div className="px-0 lg:px-40 md:px:0 space-y-14 relative">

            <a href="https://reddit.com" target="_blank" className="block relative no-underline">
                <div className="p-7 md:p-10 lg:p-10 relative space-y-4 bg-gradient-to-r from-orange-200 via-orange-400 to-orange-500 rounded-2xl" id="post">

                    {/* Reddit Logo */}
                    <div className="absolute -top-3.5 -left-5 p-3 bg-white rounded-full">
                        <img src={`assets/reddit.svg`} alt="Reddit Logo" className="h-9 w-9 md:h-10 md:w-10 lg:h-10 lg:w-10" />
                    </div>

                    {/* Subreddit */}
                    <div className="flex items-center space-x-3">
                        <div className="rounded-full">
                            <img 
                                src={`${examplePost.thumbnail}`} 
                                alt="Avatar" 
                                className="w-11 h-11 rounded-full bg-white"
                            />                        
                        </div>
                        
                        <div className="-space-y-1.5">
                            <div className="flex items-center text-gray-100 space-x-1.5">
                                <div className="font-bold text-xl">r/{examplePost.subreddit}</div>
                                <div className="hidden lg:block text-md">• 5 min ago</div>
                            </div>
                            <div className="font-medium text-md md:text-lg lg:text-lg text-gray-200">Potential Customer</div>
                        </div>
                    </div>

                    {/* Post question */}
                    <div className="">
                        <div>
                            <span className="text-2xl md:text-3xl lg:text-3xl font-semibold text-white">{examplePost.title}</span>
                        </div>

                        <div className="text-white font-[500] text-xl sm:text-xl lg:text-2xl md:text-2xl">
                            {(formatComment(examplePost.body))}
                        </div>
                    </div>

                </div>



            </a>

            {/* <div className="absolute left-6 top-32 w-1 h-40 bg-gray-500"></div> 
            <div className="absolute left-6 top-72 w-20 h-1 bg-gray-500"></div> */}
            {/* 
            <div style={{ top: "-35px" }} className="absolute left-12 w-1 h-96 bg-gray-700"></div> 
            <div style={{ top: "345px" }} className="absolute left-12 w-12 h-1 bg-gray-700"></div>  */}

            <a href="#" className="block no-underline relative">
                <div id="comment" className="relative ml-0 xl:ml-40 lg:ml-28 md:ml-0 px-1 pt-12 pb-6 bg-transparent backdrop-blur-lg rounded-2xl shadow-lg border-2 border-white/10">
                    {/* Chatbot Icon */}
                    <div className="absolute -top-3.5 -right-5 pt-2.5 pb-2 px-2 bg-white rounded-full">
                        <img src={`assets/chatbot.png`} alt="Chatbot" className="text-gray-500 h-10 w-10 md:h-12 md:w-12 lg:h-12 lg:w-12 rounded-full" />
                    </div>

                    {/* Example Pluggr comment */}
                    <div className="-space-y-2.5 px-6 md:px-12 lg:px-12">
                        {/* Username */}
                        <div className="flex items-center space-x-3.5">
                            <div className="bg-transparent p-1.5 rounded-full">
                                <img src={`assets/website-logo/website-logo-64.svg`} className="text-gray-600 w-11 h-11 rounded-full" />
                            </div>
                            <span className="text-2xl md:text-3xl lg:text-3xl text-white font-semibold">Pluggr AI</span>
                        </div>

                        <div className="font-[500] text-xl sm:text-xl md:text-2xl lg:text-2xl text-white">
                            {formatComment(examplePost.comment)}
                        </div>
                    </div>
                </div>
            </a>

        </div>

    );
}
