'use client';


import React, { useState, useEffect, useContext, useRef } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import { BsArrowRight } from "react-icons/bs";
import { AiOutlineCloseCircle, AiFillInstagram } from "react-icons/ai";
import { BsDiscord } from "react-icons/bs";
import { FaTwitter } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { PlugButton } from "@/app/components/ui/Button";
import { IconSparkles, IconHelp, IconMapCheck, IconFileDescription, IconAppWindow, IconArrowRight, IconLink, IconChevronDown, IconMessageChatbot, IconSeo } from "@tabler/icons-react";
import classes from '@/app/styles/HeaderMegaMenu.module.css';

import {
  HoverCard,
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
  useMantineTheme,
  Menu,
  


} from '@mantine/core';


// if you want to customize the menu items, you can change them here 👇
// Menu Items Data
const menuItems = [
  // { text: "Features", url: "#" },
  { text: "How it Works", url: "#" },
  { text: "Pricing", url: "#pricing" },
  { text: "Blog", url: "blog" },

];

// if you want to customize the social icons, you can change them here 👇
// Social Icons Data
const iconComponents = [
  { Icon: BsDiscord, color: "text-indigo-500", url: "#" },
  { Icon: AiFillInstagram, color: "text-rose-500", url: "#" },
  { Icon: FaTwitter, color: "text-sky-600", url: "#" },
  { Icon: MdEmail, color: "text-teal-500", url: "#" },
];

const IconList = () => (
  <div className="header-follow absolute bottom-5 left-0 right-0">
    <div className="flex items-center justify-evenly space-x-2 px-6 py-4">
      {iconComponents.map(({ Icon, color, url }) => (
        <a key={color} href={url}>
          <Icon className={`text-2xl text-white`} />
        </a>
      ))}
    </div>
  </div>
);

const featureItems = [
  {
    icon: IconAppWindow,
    title: "Widgets",
    description: "Mention your product in posts that match your keywords",
  },
  {
    icon: IconMapCheck,
    title: "Roadmap",
    description: "Mention your product in posts that match your keywords",
  },
  {
    icon: IconFileDescription,
    title: 'Changelogs',
    description: "Find posts ranked on Google and plug your product at the top",
  },
  // {
  //   icon: IconMessageChatbot,
  //   title: "Help Center",
  //   description: "Mention your product in posts that match your keywords",
  // },

]



// if you want to customize the CTA button, you can change it here 👇
const ctaButtonText = "Sign up for free";




// Navbar Component on big screens
function Navbar( { isAuthenticated } ) {
  


  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      
      const currentScrollY = window.scrollY;
      
      // Show navbar if scrolling up, hide if scrolling down
      setIsVisible(currentScrollY < lastScrollY.current || currentScrollY === 0);
      
      setScrollY(currentScrollY);
      lastScrollY.current = currentScrollY;
    };

    handleScroll(); // Set initial values
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  

  const theme = useMantineTheme();

  const features = featureItems.map((item) => (
    <UnstyledButton 
      className={`${classes.subLink} hover:bg-gray-800/50 transition-colors duration-200 rounded-md p-2`} 
      key={item.title}
    >
      <Group wrap="nowrap" align="flex-start">
        <div className="rounded-lg p-1.5 bg-gray-100">
          <item.icon style={{ width: rem(26), height: rem(26) }} color={theme.colors.gray[7]} />
        </div>
        <div>
          <div className="text-gray-100 text-sm">
            {item.title}
          </div>
          <div className="text-xs text-gray-300">
            {item.description}
          </div>
        </div>
      </Group>
    </UnstyledButton>
  ));
  

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleMobileMenuToggle = (event) => {
    event.stopPropagation();
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleMobileMenuClose = () => {
    setIsMobileMenuOpen(false);
  };

  useEffect(() => {
    const handleEscapeKey = (event) => {
      if (event.key === "Escape") {
        setIsMobileMenuOpen(false);
      }
    };
    document.addEventListener("keydown", handleEscapeKey);
    return () => {
      document.removeEventListener("keydown", handleEscapeKey);
    };
  }, []);


  // Mobile Menu Component
  const MobileMenu = ({ onClose }) => {

    useEffect(() => {
      const handleOutsideClick = (event) => {
        if (!event.target.closest(".main-nav-menu-mobile")) {
          onClose();
        }
      };
      document.body.addEventListener("click", handleOutsideClick);
      return () => {
        document.body.removeEventListener("click", handleOutsideClick);
      };
    }, [onClose]);



    return (
      <div className="main-nav-menu-mobile absolute bottom-0 left-0 right-0 top-0 w-[270px] border-r border-dashed border-slate-400/30 bg-transparent shadow-sm md:w-[300px] lg:flex lg:w-[300px] lg:flex-col lg:shadow-none">
        <div>
          <button>
            <div className="header-logo flex items-center space-x-4 p-5">
              <img className="w-8 h-8" src={`assets/website-logo/website-logo-64.svg`} alt="" />
              <span className="text-2xl text-white font-bold">Sweepr</span>
            </div>
          </button>
          <div className="header-menu lg:hidden">
            <ul className="flex-col space-y-5 px-8 py-5 pb-8 text-[1.1rem] font-bold text-white">

                <li>
                  <a href="#">
                    <button>Features</button>
                  </a>
                </li>
            
              {menuItems.map((menuItem, index) => (
                <li key={index}>
                  <a href={menuItem.url}>
                    <button>{menuItem.text}</button>
                  </a>
                </li>
              ))}
            </ul>
            <div className="header-button space-y-2">
              <div className="px-6 lg:flex lg:items-center">
                <a href="/signup" className="nav-button hover:drop-shadow-lg] flex w-full items-center justify-center rounded-full border border-gray-1200 bg-yellow-300 bg-gradient-to-tr px-7 py-2.5 text-base font-bold text-white ring-yellow-500 ring-offset-2 ring-offset-slate-700 drop-shadow-[0px_1px_2px_rgb(0,0,0,0.3)] active:ring-1">
                  <span>{ctaButtonText}</span>
                  {/* <BsArrowRight className="ml-2" /> */}
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* <IconList /> */}
      </div>
    );

  }


  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [isMobileMenuOpen]);

  return (
    <div className={`fixed top-0 left-0 right-0 z-50 navbar-home py-2 px-5 lg:py-5 w-full ${
      isVisible ? 'translate-y-0' : '-translate-y-full'
    } transition-transform duration-300`}>
      <nav className={`bg-black rounded-2xl mt-5 left-0 right-0 mx-auto px-5 py-3 lg:py-3 
       ${
      isVisible && scrollY > 0 ? 'shadow-lg max-w-4xl border border-hero-border/15 ' : 'max-w-4xl'
    }`}>
        <div className="flex items-center justify-between">
          <button className="flex items-center">
            <div className="header-logo flex items-center space-x-3">
              <div><img className="w-10 h-10" src={`assets/broom-logo.png`} alt="" /></div>
              <div><span className="lg:text-3xl text-3xl text-white font-seriff font-bold">eBroom</span></div>
            </div>
          </button>
          <div className="header-menu hidden lg:block">
            <ul className="flex space-x-8 text-base font-[400] text-white/60">

            <HoverCard width={330} position="bottom" radius="md" shadow="lg" withinPortal>
              <HoverCard.Target>
                <a href="#" className={`text-lg`}>
                  <div className="flex space-x-1.5 items-center">

                    <span>Features</span>
                    
                    <IconChevronDown
                      style={{ width: rem(18), height: rem(18) }}
                      className="text-gray-400"
                    />
                  </div>
                </a>
              </HoverCard.Target>

              <HoverCard.Dropdown style={{ backgroundColor: 'var(--mantine-color-dark-7)', borderWidth: 2, borderColor: 'var(--mantine-color-dark-4)', overflow: 'hidden' }}>
                <div className="space-y-1">
                  {features}
                </div>
              </HoverCard.Dropdown>
            </HoverCard>

              {menuItems.map((menuItem, index) => (
                <li key={index}>
                  <a href={menuItem.url}>
                    <button>{menuItem.text}</button>
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="header-button space-x-2">
            <div className="hidden lg:flex lg:items-center">
              {
                isAuthenticated
                ?
                (
                  <PlugButton radius="2xl" link="/dashboard" size="md">
                    <div className="flex space-x-2 items-center">
                      <div>Dashboard</div>
                      <div><IconArrowRight className="text-white" stroke={2.5} style={{ width: rem(20), height: rem(22) }}></IconArrowRight></div>
                    </div>

                  </PlugButton>        
                )
                :
                (
                  <a
                    href="/app/signup"
                    className="nav-button hover:drop-shadow-lg flex w-fit items-center justify-center rounded-2xl border border-orange-400 bg-[#FF8C46] px-7 py-2.5 text-base font-bold text-white ring-orange-400 ring-offset-2 ring-offset-slate-700 drop-shadow-[2px_2px_2px_rgb(0,0,0,1)] active:ring-1"
                  >
                    <span>Sign up for free</span>
                </a>
                )
              }
            </div>

          </div>
          <div className="flex items-center justify-center lg:hidden">
            <button
              className={`advanced-setting-toggle focus:outline-none ${
                isMobileMenuOpen
                  ? "rounded-full bg-slate-200 text-slate-800"
                  : "text-slate-200"
              }`}
              onClick={handleMobileMenuToggle}
            >
              {isMobileMenuOpen ? (
                <AiOutlineCloseCircle className="text-2xl focus:outline-none active:scale-110 active:text-slate-200" />
              ) : (
                <HiMenuAlt3 className="text-2xl text-slate-200 focus:outline-none active:scale-110 active:text-red-500" />
              )}
            </button>
          </div>
        </div>
      </nav>
      <div
        className={`main-nav-menu fixed inset-0 z-50 transform overflow-auto bg-transparent transition duration-150 lg:hidden ${
          isMobileMenuOpen ? "-translate-x-0" : "-translate-x-full"
        }`}
      >
        <MobileMenu onClose={handleMobileMenuClose} />
      </div>
    </div>
  );
}

export default Navbar;
