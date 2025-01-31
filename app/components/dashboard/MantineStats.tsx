import React from 'react';

import { Button, RingProgress, Text, SimpleGrid, Paper, Center, Group, rem } from '@mantine/core';
import {
    IconUserPlus,
    IconDiscount2,
    IconReceipt2,
    IconCoin,
    IconArrowUpRight,
    IconEye,
    IconClick,
    IconArrowDownRight,
    IconExclamationCircle,
    IconMessageCirclePlus,
    IconBulb,
    IconBulbFilled,
    IconMessageCircle2Filled,
    IconExclamationCircleFilled,
    IconBugFilled,
    IconExclamationMark

} from '@tabler/icons-react';


import classes from '@client/styles/StatsGrid.module.css';

import { ArrowDownIcon, ArrowUpIcon } from '@heroicons/react/20/solid'
import { CursorArrowRaysIcon, EnvelopeOpenIcon, UsersIcon } from '@heroicons/react/24/outline'


function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
  }
  
export function StatsRing( { issues, features, feedback } : {  issues: number, features: number, feedback: number  } ) {

    const stats = [
        { id: 1, name: 'Issues', stat: issues, icon: IconExclamationCircleFilled, color: '#FF4D4F', change: '122', changeType: 'increase' },
        { id: 2, name: 'Ideas', stat: features, icon: IconBulbFilled, color: '#ffb263', change: '5.4%', changeType: 'increase' },
        { id: 3, name: 'Feedback', stat: feedback, icon: IconMessageCircle2Filled, color: '#40A9FF', change: '5.4%', changeType: 'increase' },
    ]
      

  return (
    

    <div>

        <dl className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
            {stats.map((item) => (
            <Paper
                withBorder
                radius="md"
                key={item.id}
                className="relative overflow-hidden rounded-xl border-mantine-border bg-white transition-all duration-200 hover:-translate-y-0.5 hover:border-gray-300 hover:shadow-md px-4 pt-5 shadow-sm sm:px-6 sm:pt-6"
            >

                <a href="#">

                    <div className="pb-5 flex items-center">
                        <item.icon 
                            className="h-9 w-9" 
                            aria-hidden="true" 
                            color={item.color}
                        />

                        <div className="ml-4">
                            <p className="truncate uppercase text-sm font-[500] text-gray-700">{item.name}</p>
                            <p className="text-2xl font-semibold text-gray-900">{item.stat}</p>
                        </div>
                    </div>



                </a>

            </Paper>
            ))}


            {/* <Paper className="col-span-1 lg:col-span-1 lg:mx-0 sm:col-span-2 md:mx-auto sm:mx-auto md:col-span-2 border-gray-200 bg-white transition-all duration-200 hover:-translate-y-0.5 hover:border-gray-300 hover:shadow-md" withBorder radius="md" p="xs">
                <a href="#">

                    <Group className="justify-between items-baseline">
                        <RingProgress
                            size={80}
                            roundCaps
                            thickness={8}
                            sections={[{ value: issues, color: "#FFC20F" }]}
                            label={
                            <Center>
                                <span className="text-sm font-bold">{`${issues}%`}</span>
                                <IconArrowUpRight style={{ width: rem(20), height: rem(20) }} stroke={1.5} /> 
                            </Center>
                            }
                        />

                        <div>

                            <Text c="dimmed" size="sm" tt="uppercase" fw={700}>
                                Monthly Replies Used
                            </Text>

                            <span className="text-dark font-bold text-xl dark:text-gray-300">{issues} / 100</span>
                        </div>

                    </Group>

                </a>
            </Paper> */}






        </dl>






    </div>

  )
  

}