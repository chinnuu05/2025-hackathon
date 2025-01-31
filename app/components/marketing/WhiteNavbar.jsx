import React from 'react';
import { AccountProfile } from "@client/components/dashboard/AccountProfile";
import { TrialBanner } from "@client/components/dashboard/TrialBanner";
import { Context } from "@reactivated";
import { MiniAccountProfile } from "@client/components/dashboard/MiniAccountProfile";
import { NotificationMenu } from "@client/components/dashboard/NotificationMenu";
import { PlugButton } from '@client/components/ui/Button';
import { SupaSearch } from '@client/components/blog/SupaSearch';
import {
    HoverCard,
    Menu,
    Group,
    Button,
    UnstyledButton,
    Text,
    SimpleGrid,
    ThemeIcon,
    Anchor,
    Divider,
    Center,
    Box,
    Burger,
    Drawer,
    Collapse,
    ScrollArea,
    rem,
    Avatar,
    ActionIcon, 
    useMantineTheme,
    Modal

    

  } from '@mantine/core';
  import { ThemeToggle } from "@client/components/ThemeToggle";
  import { useDisclosure } from '@mantine/hooks';
  
  import {
    IconNotification,
    IconBell,
    IconCode,
    IconBook,
    IconChartPie3,
    IconFingerprint,
    IconCoin,
    IconMessageDots,
    IconMessage,
    IconChevronDown,
    IconStar,
    IconSettings,
    IconSearch,
    IconPhoto,
    IconMessageCircle,
    IconTrash,
    IconMessageChatbotFilled,
    IconArrowsLeftRight,
    IconPlus,
    IconMessageChatbot,
    IconSparkles,
    IconCreditCard,
    
  } from '@tabler/icons-react';


import { nprogress } from "@mantine/nprogress";

import classes from '@client/styles/Header.module.css';

 
const mockdata = [
  {
    icon: IconCode,
    title: 'Open source',
    description: 'This Pokémon’s cry is very loud and distracting',
  },
  {
    icon: IconCoin,
    title: 'Free for everyone',
    description: 'The fluid of Smeargle’s tail secretions changes',
  },
  {
    icon: IconBook,
    title: 'Documentation',
    description: 'Yanma is capable of seeing 360 degrees without',
  },
  {
    icon: IconFingerprint,
    title: 'Security',
    description: 'The shell’s rounded shape and the grooves on its.',
  },
  {
    icon: IconChartPie3,
    title: 'Analytics',
    description: 'This Pokémon uses its flying ability to quickly chase',
  },
  {
    icon: IconNotification,
    title: 'Notifications',
    description: 'Combusken battles with the intensely hot flames it spews',
  },
];

const featureItems = [
  {
    icon: IconMessageChatbot,
    title: "Reply to posts",
    description: "Mention your product in posts that match your keywords",
  },
  {
    icon: IconSparkles,
    title: 'Boost SEO with Reddit',
    description: "Find posts indexed on Google and plug your product",
  },

]




export function WhiteNavbar() {


  const context = React.useContext(Context);

  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] = useDisclosure(false);
  const [linksOpened, { toggle: toggleLinks }] = useDisclosure(false);
  const theme = useMantineTheme();

  const features = featureItems.map((item) => (
    <UnstyledButton className={`${classes.subLink}`} key={item.title}>
      <Group wrap="nowrap" align="flex-start">
        <div className="rounded-lg p-2 dark:bg-gray-100 bg-white border border-gray-300">
          <item.icon className="dark:text-gray-600" style={{ width: rem(26), height: rem(26) }}/>
        </div>
        <div className="">
          <div className="dark:text-gray-100 text-sm">
            {item.title}
          </div>
          <div className="mt-0.5 text-xs dark:text-gray-300 text-gray-500">
            {item.description}
          </div>
        </div>
      </Group>
    </UnstyledButton>
  ));
  


  const links = mockdata.map((item) => (
    <UnstyledButton className={classes.subLink} key={item.title}>
      <Group wrap="nowrap" align="flex-start">
        <ThemeIcon size={34} variant="default" radius="md">
          <item.icon style={{ width: rem(22), height: rem(22) }} color={theme.colors.blue[6]} />
        </ThemeIcon>
        <div>
          <Text size="sm" fw={500}>
            {item.title}
          </Text>
          <Text size="xs" c="dimmed">
            {item.description}
          </Text>
        </div>
      </Group>
    </UnstyledButton>
  ));



  return (
    <>
      <div className="w-full top-0 sticky z-50">

        <div className="bg-white">
          <header className={classes.header}>
            <Group className="px-12" justify="space-between" h="100%">

              <div className="flex flex-row space-x-4 items-center">
                <a href="/" className="flex space-x-4">
                  <img className="w-9 h-9" src={`${context.STATIC_URL}assets/website-logo/website-logo.svg`}/>
                  <span className="text-2xl text-black dark:text-white font-bold">pluggr</span>
                </a>
              </div>

              <Group className="space-x-4" h="100%" gap={0} visibleFrom="sm">


                <HoverCard width={330} position="bottom" radius="md" shadow="lg" withinPortal>
                  <HoverCard.Target>
                    <a href="#" className={`text-lg`}>
                      <div className="flex items-center">

                        <span className={`text-gray-600 font-medium ${classes.dropdownLink}`}>Features</span>
                        
                        <IconChevronDown
                          style={{ width: rem(18), height: rem(18) }}
                          className="text-gray-400"
                        />
                      </div>
                    </a>
                  </HoverCard.Target>

                  {/* <HoverCard.Dropdown style={{ backgroundColor: 'var(--mantine-color-dark-5)', borderWidth: 2, borderColor: 'var(--mantine-color-dark-3)', overflow: 'hidden' }}> */}
                  <HoverCard.Dropdown className={classes.featureDropdown}>
                    <div className="space-y-1">
                      {features}
                    </div>
                  </HoverCard.Dropdown>
                </HoverCard>

                  <a href={"#"} className={`focus:shadow-md focus:ring-2 ring-offset-2 dark:focus:ring-gray-1100 dark:hover:bg-gray-1100 dark:hover:text-white focus:ring-gray-300 transition-all duration-200  font-medium px-2.5 py-1 hover:bg-gray-100 text-gray-600 rounded-lg font-500 ${classes.link} `}>How it Works</a>
                  <a href={"#"} className={`focus:shadow-md focus:ring-2 ring-offset-2 dark:focus:ring-gray-1100 dark:hover:bg-gray-1100 dark:hover:text-white focus:ring-gray-300 transition-all duration-200  font-medium px-2.5 py-1 hover:bg-gray-100 text-gray-600 rounded-lg font-500 ${classes.link} `}>Pricing</a>
                  <a href={"#"} className={`focus:shadow-md focus:ring-2 ring-offset-2 dark:focus:ring-gray-1100 dark:hover:bg-gray-1100 dark:hover:text-white focus:ring-gray-300 transition-all duration-200  font-medium px-2.5 py-1 hover:bg-gray-100 text-gray-600 rounded-lg font-500 ${classes.link} `}>Blog</a>

              </Group>

              <Group visibleFrom="lg">

                <SupaSearch/>
                <ThemeToggle></ThemeToggle>
                <PlugButton link="/signup" size="md">
                    <span className="text-md">Start your free trial</span>
                </PlugButton>

              </Group>



              <Burger opened={drawerOpened} onClick={toggleDrawer} hiddenFrom="sm" />
            </Group>
          </header>

          <Drawer
            opened={drawerOpened}
            onClose={closeDrawer}
            size="100%"
            padding="md"
            title="Navigation"
            hiddenFrom="sm"
            zIndex={1000000}
          >
            <ScrollArea h={`calc(100vh - ${rem(80)})`} mx="-md">
              <Divider my="sm" />

              <a href="#" className={classes.link}>
                Home
              </a>
              <UnstyledButton className={classes.link} onClick={toggleLinks}>
                <Center inline>
                  <Box component="span" mr={5}>
                    Features
                  </Box>
                  <IconChevronDown
                    style={{ width: rem(16), height: rem(16) }}
                    color={theme.colors.blue[6]}
                  />
                </Center>
              </UnstyledButton>
              <Collapse in={linksOpened}>{links}</Collapse>
              <a href="#" className={classes.link}>
                Learn
              </a>
              <a href="#" className={classes.link}>
                Academy
              </a>

              <Divider my="sm" />

              <Group justify="center" grow pb="xl" px="md">
                <Button variant="default">Log in</Button>
              </Group>
            </ScrollArea>
          </Drawer>
        </div>


      </div>


    </>

  );
}




