'use client'

import React, { useState, useEffect } from "react";
import { Button, Text, Group, rem } from "@mantine/core";
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

        <div className="flex items-center justify-between">

            <div className="flex items-center justify-evenly">

                <div>
                    <IconChevronRight style={{ width: rem(24), height: rem(24) }} className="text-black"></IconChevronRight>
                </div>


                <div className="flex space-x-4">

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


            <div className="flex items-center space-x-2">

                <div>
                    <Button variant="light" radius="xl" size="md">Keep In Inbox</Button>
                </div>

                <div>
                    <Button variant="light" radius="xl" size="md">Unubscribe</Button>
                </div>



            </div>



        </div>

    )

}