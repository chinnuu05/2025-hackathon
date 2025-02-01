'use client'

import React, { useState, useEffect } from "react";
import { Button, Text, Group, rem, Collapse } from "@mantine/core";
import { 
    IconChevronDown,
    IconChevronRight,
    IconChevronUp,
    IconEye,
} from "@tabler/icons-react";
import { useDisclosure } from "@mantine/hooks";

export const SubscriberRow = () => {
    const [opened, { toggle }] = useDisclosure(false);

    // Shows number of monthly emails sent by this company,
    // Show company name and sender email address

    return (
        <div>
            <div onClick={toggle} className="h-full flex items-center justify-between cursor-pointer hover:bg-gray-50">
                <div className="py-4 flex items-center justify-evenly">
                    <div className="flex items-center justify-evenly">
                        <div className="flex space-x-4 items-center">
                            <div onClick={toggle} className="cursor-pointer">
                                {opened ? (
                                    <IconChevronDown style={{ width: rem(24), height: rem(24) }} className="text-black" />
                                ) : (
                                    <IconChevronRight style={{ width: rem(24), height: rem(24) }} className="text-black" />
                                )}
                            </div>

                            <div className="flex space-x-12 items-center">
                                <div className="flex flex-col space-y-0">
                                    <div className="text-3xl font-bold leading-tight">
                                        36
                                    </div>
                                    <div className="text-gray-600 text-sm">monthly</div>
                                </div>

                                {/* Company logo, name, and sender email address */}
                                <div>
                                    <div className="flex items-center space-x-2">
                                        <div>
                                            <img src="https://icons.leavemealone.com/tiktok.com&sz=64" style={{ width: rem(24), height: rem(24)}}></img>
                                        </div>
                                        <div className="text-2xl font-semibold">TikTok</div>
                                    </div>
                                    <div className="text-sm fon-medium text-gray-500">
                                        notifications@service.tiktok.com
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex items-center space-x-2">
                    <div>
                        <Button variant="light" radius="xl" size="md">Keep In Inbox</Button>
                    </div>
                    <div>
                        <Button variant="light" radius="xl" size="md">Unubscribe</Button>
                    </div>
                </div>
            </div>

            <Collapse in={opened}>
                <div className="ml-12 border-l-2 border-gray-200 pl-6 py-4 space-y-4">
                    {/* Example child rows - customize these as needed */}
                    <div className="flex items-center justify-between">
                        <div className="text-gray-600">Latest email received: 2 days ago</div>
                        <Button variant="subtle" size="sm">View Details</Button>
                    </div>
                    
                    <div className="flex items-center justify-between">
                        <div className="text-gray-600">Email category: Marketing</div>
                        <Button variant="subtle" size="sm">Change Category</Button>
                    </div>
                    
                    <div className="flex items-center justify-between">
                        <div className="text-gray-600">Subscription status: Active</div>
                        <Button variant="subtle" size="sm">Manage Status</Button>
                    </div>
                </div>
            </Collapse>
        </div>
    );
};