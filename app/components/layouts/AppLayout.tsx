'use client'
import React, { useContext, useRef, useState, useEffect } from 'react';
import { Group, Code, Popover } from '@mantine/core';
import {
  IconBellRinging,
  IconFingerprint,
  IconKey,
  IconSettings,
  Icon2fa,
  IconDatabaseImport,
  IconReceipt2,
  IconSwitchHorizontal,
  IconLogout,
} from '@tabler/icons-react';
import { SideNavbar } from '@/app/components/dashboard/SideNavbar';
import { Layout } from '@/app/components/layouts/Layout';
import { AppShell } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { useRouter, usePathname } from 'next/navigation';
import NextAuthProvider from './NextAuthProvider';

// import { FeedbackWidget } from '@app/components/dashboard/feedback/FeedbackWidget';

export const AppLayout = ( { children } : { children: React.ReactNode }) => {

    const router = useRouter();
    const pathname = usePathname();

    console.log("pathname: " + pathname);


    const [mobileOpened, { toggle: toggleMobile }] = useDisclosure();
    const [desktopOpened, { toggle: toggleDesktop }] = useDisclosure(true);
    const [linksOpened, { toggle: toggleLinks }] = useDisclosure(false);
    const [feedbackOpened, setFeedbackOpened] = useState(false);

    return ( 

        <NextAuthProvider>
            <AppShell
            navbar={{
            width: 300,
            breakpoint: 'md',
            collapsed: { mobile: !mobileOpened, desktop: !desktopOpened },
            }}
            >
                <AppShell.Navbar>
        
                <div>
                    <SideNavbar 
                        active={pathname.replace("/", " ").replace(" ", "")}
                        onFeedbackClick={() => setFeedbackOpened((o) => !o)} 
                        feedbackOpened={feedbackOpened}
                    />
        
                </div>
                </AppShell.Navbar>
        
                <AppShell.Main>
                    <div className="h-screen bg-gray-50 py-16 px-12">
                        {children}
                    </div>
                </AppShell.Main>

                {/* {feedbackOpened && (
                    <FeedbackWidget/>
                )}

                {
                    feedbackOpened ? "test" : "no"
                } */}

                
            </AppShell>
        </NextAuthProvider>


    )
}