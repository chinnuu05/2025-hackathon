import React, { useRef } from 'react';
import { useState, useContext } from 'react';
import { Group, Code, Text, Button, rem, Menu, Avatar, Popover, Badge } from '@mantine/core';
import { FcLike, FcAbout } from "react-icons/fc";
import {
  IconBellRinging,
  IconFingerprint,
  IconKey,
  IconSettings,
  IconSwipe,
  IconRefresh,

  Icon2fa,
  IconDatabaseImport,
  IconReceipt2,
  IconSwitchHorizontal,
  IconBug,
  IconMailForward,
  IconMap,
  IconAppWindow,
  IconPalette,
  IconBookUpload,
  IconLogout,
  IconHelp,
  IconChartBar,
  IconBrandGithub,
  IconChevronDown,
  IconSearch,
  IconArrowsLeftRight,
  IconTrash,
  IconLockHeart,
  IconMessageCircleStar,
  IconHeart,
  IconExternalLink,
  IconConfetti,
  IconPinned,
  IconMessage,
  IconInbox
} from '@tabler/icons-react';
import { FeedbackWidget } from '@/app/components/dashboard/feedback/FeedbackWidget';
// import { UserButton } from '@client/components/dashboard/UserButton';
import classes from '@/app/styles/SideNavbar.module.css';
import { GiveFeedbackButton } from './feedback/GiveFeedbackButton';

const data = [
  { link: '/app/overview', label: 'Overview', path: "/app/overview", icon: IconChartBar },
  { link: '/app/widgets', label: 'Widgets', path: "/app/widgets/", icon: IconAppWindow },
  { link: '/app/customize', label: 'Design', path: "/app/customize/", icon: IconPalette },
  { link: '/app/settings', label: 'Settings', path: "/app/settings/", icon: IconSettings },
];

export function SideNavbar({ 
    onFeedbackClick, 
    active,
    feedbackOpened 
}: { 
    onFeedbackClick: () => void;
    active: string;
    feedbackOpened: boolean;
}) {
  const feedbackButtonRef = useRef<HTMLAnchorElement>(null);

  const [menuOpened, setMenuOpened] = useState(false);  

  const [subMenuOpen, setSubMenuOpen] = useState(
    active.toLowerCase().includes('changelog') || 
    active.toLowerCase().includes('roadmap') || 
    active.toLowerCase().includes('help')
  );

  const handleLogout = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    const form = e.currentTarget.closest('form');
    if (form) {
      form.submit();
    }
  }
  
  console.log("acsssssssstive: " + active);
  console.log("/app/swipe".includes(active.toLowerCase())); 
  const isClient = typeof window !== 'undefined';
  
  const links = data.map((item) => {
    const { key, ...otherProps } = {
        className: classes.link,
        'data-active': item.path.includes(active.toLowerCase()) || undefined,
        key: item.label,
    };

    // Use regular anchor tags for server-side rendering
    if (!isClient) {
        return (
            <a
                key={key}
                {...otherProps}
                href={item.link}
            >
                <item.icon className={classes.linkIcon} stroke={1.5} />
                <span>{item.label}</span>
            </a>
        );
    }

    // Use React Router Links for client-side
    return (
        <a
            key={key}
            {...otherProps}
            href='#'
        >
            <item.icon className={classes.linkIcon} stroke={1.5} />
            <span>{item.label}</span>
        </a>
    );
  });

  return (
    <nav className={classes.navbar}>
      <div className={classes.navbarMain}>

      <Group className={classes.header} style={{ width: '100%' }}> {/* Ensure full width */}
        <Menu 
          position="top-end" 
          opened={menuOpened} 
          onChange={setMenuOpened}
          offset={{ mainAxis: 0, crossAxis: 13 }}
        >
          <Menu.Target>
            <div className="hover:cursor-pointer flex items-center justify-between w-full">

              <div>
              <Button
                justify="space-between"
                fullWidth
                color="black"
                variant="transparent"
                size="lg"
                styles={{
                  root: {
                    width: '100%',
                    padding: '8px 12px',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  },
                  inner: {
                    justifyContent: 'flex-start',
                    width: '100%',
                    gap: '8px',
                    alignItems: 'center',
                  },
                  section: {
                    '&[dataPosition="left"]': {
                      marginRight: 0,
                    },
                    '&[dataPosition="right"]': {
                      marginLeft: 'auto', // Push to the right
                      paddingLeft: 0, // Remove extra padding
                      borderLeft: 'none', // Remove border
                    },
                  },

                }}

                leftSection={
                  <Avatar
                    radius="xl"
                    size={32}
                    src={`assets/gmail.svg`}
                  />
                }
              >
                <div className="items-center leading-3 text-left flex-1">
                  <div className="pt-0.5 text-sm font-medium text-black">pechuri9@gmail.com</div>
                  <div>
                    <div className="hover:underline hover:text-blue-400 text-gray-500 font-normal text-sm">
                      <div className="items-center flex space-x-1">
                        <div>
                          Last synced: 2/1/25
                        </div>
                        <div>
                          <IconRefresh style={{ width: rem(14), height: rem(14) }} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Button>
              </div>

              <div className="hover:cursor-pointer px-3 flex items-center justify-center">
                <IconChevronDown style={{ width: rem(23), height: rem(23) }} />
              </div>
            </div>
          </Menu.Target>

          <Menu.Dropdown
            styles={{
              dropdown: {
                minWidth: '175px', // Increased width from default
              },
            }}
          >
            <Menu.Label>
              <div className="flex space-x-2 items-center">
                <div>
                  <IconArrowsLeftRight style={{ width: rem(12), height: rem(12) }} />
                </div>
                <div>Switch project</div>
              </div>
            </Menu.Label>

            <Menu.Item
              leftSection={
                <img
                  src={`images/doublefoot-logo.svg`}
                  style={{ width: rem(20), height: rem(20) }}
                />
              }
            >
              <div className="flex">
                <div className="text-gray-700 font-medium text-md">footprint.so</div>
              </div>
            </Menu.Item>

            <Menu.Item
              leftSection={
                <img
                  src={`images/supa.svg`}
                  style={{ width: rem(20), height: rem(20) }}
                />
              }
            >
              <div className="flex">
                <div className="text-gray-700 font-medium text-md">supablog.so</div>
              </div>
            </Menu.Item>

            <Menu.Divider />

            <Menu.Label>Actions</Menu.Label>


            <form action="/app/logout/" id="logout-form" method="POST">
                  <Menu.Item
                    component={'a'}
                    leftSection={<IconLogout style={{ width: rem(14), height: rem(14) }} />}
                    onClick={handleLogout}
                  >
                    Sign out
                </Menu.Item>
            </form> 

          </Menu.Dropdown>
        </Menu>
      </Group>




        <div className={classes.navbarLinks}>
        <a href='/dashboard'
          className={classes.link}
          data-active={"/app/dashboard".includes(active.toLowerCase()) || undefined}
        >
          <IconChartBar className={classes.linkIcon} stroke={1.5} />
          <span>Overview</span>
        </a>

        <a 
          href='/swipe'          
          className={classes.link}
          data-active={"/app/swipe".includes(active.toLowerCase()) || undefined}
        >
          <IconSwipe className={classes.linkIcon} stroke={1.5} />
          <span>Swipe</span>
        </a>


        {/* <a 
          href='/app/widgets'          
          className={classes.link}
          data-active={"/app/widgets".includes(active.toLowerCase()) || undefined}
        >
          <IconAppWindow className={classes.linkIcon} stroke={1.5} />
          <span>Inbox</span>
        </a> */}

{/* 
        <a
              className={classes.link}
              href="/app/help"
              data-active={active.toLowerCase().includes('help') || undefined}
            >
              <IconHelp className={classes.linkIcon} stroke={1.5} />
              <div className="flex items-center w-full justify-between">
                <div>Help Center</div>

                <div>
                  <Badge color="#ffb263">New</Badge>
                </div>
              </div>
            </a> */}

        {/* <a href='/app/customize'  
          className={classes.link}
          data-active={"/app/customize".includes(active.toLowerCase()) || undefined}
        >
          <IconPalette className={classes.linkIcon} stroke={1.5} />
          <span>Design</span>  
        </a> */}

        <a href='/settings'
          className={classes.link}
          data-active={"/app/settings".includes(active.toLowerCase()) || undefined}
          >
          <IconSettings className={classes.linkIcon} stroke={1.5} />
          <span>Settings</span>
        </a>                                                                 
        </div>

      </div>

      <div className={classes.footer}>


        <a href="#" className={classes.footLink} onClick={(event) => event.preventDefault()}>
          <IconHelp className={classes.linkIcon} stroke={1.5} />
          <span>Help Center</span>

          <div
          style={{ display: 'flex', alignItems: 'center', marginLeft: 'auto' }}
                    
          >
            <IconExternalLink style={{ width: rem(20), height: rem(20) }} />
          </div>
        </a>

        {/* <a href="#" className={classes.footLink} onClick={(event) => event.preventDefault()} style={{ display: 'flex', alignItems: 'center' }}>
          <svg className={classes.linkIcon} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512"><path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"/></svg>
          <span>GitHub</span>
          <div style={{ display: 'flex', alignItems: 'center', marginLeft: 'auto' }}>
            <IconExternalLink style={{ width: rem(20), height: rem(20) }} />
          </div>
        </a>
         */}
        <GiveFeedbackButton></GiveFeedbackButton>

        {/* <Group justify="space-between">
          <a href="/" className="flex items-center space-x-2.5">
            <div>
              <img 
                style={{ width: rem(34), height: rem(34)}}
                src={`${context.STATIC_URL}assets/doublefoot-logo.svg`}
              />
            </div>
            <div className="text-xl font-[500]">footprint</div>

          </a>
          <Code fw={700}>EARLY ACCESS</Code>
        </Group> */}






      </div>
    </nav>
  );
}