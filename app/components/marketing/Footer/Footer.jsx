import React, { useContext } from "react";

function Footer() {




  // you can change the footer links from here change the title and and please change "#" to your own url like if you website is "https://www.example.com" and you want to add "About" page which is in the "/about" routes then change the url to "/about".
  const footerLinksColumn1 = [
    {
      id: 1,
      title: "How it Works",
      url: "#",
    },
    {
      id: 2,
      title: "Free Tools",
      url: "#",
    },
    {
      id: 3,
      title: "Pricing",
      url: "#",
    },
    {
      id: 4,
      title: "Blog",
      url: "#",
    },
    // You can add more links here
  ];

  const footerLinksColumn2 = [
    {
      id: 5,
      title: "Contact us",
      url: "#",
    },
    {
      id: 6,
      title: "Product",
      url: "#",
    },
    {
      id: 7,
      title: "Press",
      url: "#",
    },
    {
      id: 8,
      title: "More",
      url: "#",
    },
    // You can add more links here
  ];

  return (
    <div className="pb-20">
      {/* <div className="cta__line relative flex items-center justify-center gap-x-5 border-b border-t border-dashed border-slate-500/50 py-10 md:gap-x-10 lg:gap-x-32">
        <div className="relative">
          <h1 className="truncate-nowrap text-3xl font-bold text-white md:text-5xl lg:text-7xl xl:text-[120px]">
            Join Our beta
          </h1>
          <img
            className="absolute -right-5 -top-3 h-10 w-10 lg:-right-14 lg:-top-5"
            src={`${context.STATIC_URL}assets/star.svg`}
            alt=""
          />
        </div>
        <h1 className=" truncate-nowrap text-3xl font-bold text-[#7D7D82] md:text-5xl lg:text-7xl xl:text-[120px]">
          Join Our beta
        </h1>
      </div> */}


      <div className="footer-main px-10 pt-10">
        <div className="footer-headline mx-auto flex max-w-5xl flex-col gap-x-5 gap-y-5 pt-10 md:flex-row md:items-start md:justify-between lg:px-10 xl:px-0">
          <div className="left-footer-part flex w-full flex-col items-start justify-start pt-3 md:w-1/2 lg:w-1/3">
            <a href="#">
              <div className="header-logo flex items-center space-x-2">
                <img className="h-10 w-10" src={`assets/broom-logo.png`} alt="" />
              </div>
            </a>
            <p className="mt-5 max-w-xs text-sm font-[400] text-white/60">
              Clean up your email inbox in seconds
            </p>
          </div>

          <div className="center-footer-part w-1/2 pt-5 lg:w-1/3">
            <div className="flex items-center justify-between gap-x-3 px-0 lg:px-10">
              <ul className="footer-link-list flex flex-col gap-y-5 text-sm font-[400] text-white/50">
                {footerLinksColumn1.map((link) => (
                  <li className="footer-link-item" key={link.id}>
                    <a href={link.url}>{link.title}</a>
                  </li>
                ))}
              </ul>
              <ul className="footer-link-list flex flex-col gap-y-5 text-sm font-[400] text-white/50">
                {footerLinksColumn2.map((link) => (
                  <li className="footer-link-item" key={link.id}>
                    <a href={link.url}>{link.title}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Footer;
