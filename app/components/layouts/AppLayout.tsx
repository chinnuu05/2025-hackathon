'use client';

import React, { useContext } from 'react';
import { useState, useEffect } from 'react';
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
import { useRouter } from 'next/navigation';

// import { FeedbackWidget } from '@app/components/dashboard/feedback/FeedbackWidget';

export const AppLayout = ( { children } : { children: React.ReactNode }) => {

    const router = useRouter();


    const [mobileOpened, { toggle: toggleMobile }] = useDisclosure();
    const [desktopOpened, { toggle: toggleDesktop }] = useDisclosure(true);
    const [linksOpened, { toggle: toggleLinks }] = useDisclosure(false);
    const [feedbackOpened, setFeedbackOpened] = useState(false);

    return ( 
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
                    active={"Overview"}
                    onFeedbackClick={() => setFeedbackOpened((o) => !o)} 
                    feedbackOpened={feedbackOpened}
                />
    
            </div>
            </AppShell.Navbar>
    
            <AppShell.Main>
                <div className="py-16 px-12">
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

    )
}