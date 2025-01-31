import React, { useRef, useState } from 'react';
import { Popover } from '@mantine/core';
import { FcLike } from 'react-icons/fc';
import { FeedbackWidget } from './FeedbackWidget';
import classes from '@/app/styles/SideNavbar.module.css';

// Embeddable widget


export const GiveFeedbackButton = () => {

    const feedbackButtonRef = useRef<HTMLAnchorElement>(null);


    return (

        <div>

        <Popover  
            shadow="sm"
            radius="md"
            position="right"
            offset={{ mainAxis: -75, crossAxis: -150 }}
            withinPortal={true}
            closeOnClickOutside={true}
        >
            <Popover.Target>

                
                <a 
                    ref={feedbackButtonRef}
                    href="#" 
                    className={classes.footLink} 

                >
                    <FcLike className={classes.linkIcon} />
                    <span>Give feedback</span>
                </a>
            </Popover.Target>

            <Popover.Dropdown>
                <FeedbackWidget></FeedbackWidget>
            </Popover.Dropdown>
        </Popover>


        </div>
    )

}