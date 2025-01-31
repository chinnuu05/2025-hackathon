import React from "react";


function InformationSection() {

  /* Integrate app-icon data for the first row (5 boxes) */
  const integrationDataFirstRow = [
    { image: null, className: "" }, // First box
    { image: "/assets/app-icon-images/notion.svg", className: "h-8 w-8 md:h-7 md:w-7 lg:h-14 lg:w-14" },
    { image: "/assets/app-icon-images/slack.svg", className: "h-8 w-8 md:h-7 md:w-7 lg:h-10 lg:w-10" },
    { image: "/assets/app-icon-images/zapier.svg", className: "h-8 w-8 md:h-7 md:w-7 lg:h-10 lg:w-10" },
    { image: null, className: "" }, // Last box
  ];

  const integrationDataSecondRow = [
    { image: null, className: "" }, // First box
    { image: "/assets/app-icon-images/evernote.svg", className: "h-8 w-8 md:h-7 md:w-7 lg:h-10 lg:w-10" },
    { image: "/assets/app-icon-images/figma.svg", className: "h-8 w-8 md:h-7 md:w-7 lg:h-10 lg:w-10" },
    { image: null, className: "" }, // Last box
  ];

  function IntegrationIcon({ image, className }) {
    if (image) {
      return (
        <div className="integrate-container-dark flex h-12 w-24 items-center justify-center md:h-10 md:w-20 lg:h-20 lg:w-20">
          <img className={className} src={`${image}`} alt="Integration Icon" width={64} height={64} />
        </div>
      );
    } else {
      return (
        <div className="integrate-container flex h-12 w-24 items-center justify-center md:h-14 md:w-20 lg:h-20 lg:w-20"></div>
      );
    }
  }

  return (
    <div className="px-5 py-10 lg:p-10">
      <div className="information-section-background relative mx-auto flex w-fit max-w-lg flex-col items-center justify-between gap-y-5 p-7 py-10 pb-14 sm:max-w-xl md:max-w-2xl md:flex-row md:items-start min-[900px]:max-w-3xl lg:max-w-4xl lg:p-10 lg:px-14 lg:pb-6 xl:max-w-5xl">
        <div className="left-info-part w-fit md:w-2/3 ">
          <div className="flex flex-col gap-y-3.5 lg:max-w-lg">
            <div className="tag flex w-fit items-start justify-start rounded-full border border-orange-500 bg-orange-500/20 px-5 py-1 text-xs font-bold text-orange-300">
              INVITE YOUR TEAM FOR FREE
            </div>

            <h2 className="text-3xl font-bold leading-9 tracking-tight text-white md:text-4xl lg:text-4xl">
              Pay for one subscription, collaborate on Notion
            </h2>

            <p className="mx-0 max-w-[22rem] text-md font-medium text-neutral-400">
              Work with your team by inviting them to your Notion page for free. Collaborate on roadmaps, changelogs, and analysing feedback.
            </p>
          </div>
        </div>
        <div className="right-info-part mx-auto w-full sm:w-4/5 md:w-1/2 lg:w-1/2">
          <div className="glowing-background py-5 pl-3">
            {/* Daily visits */}
            <div className="flex items-center justify-between px-2 pr-5">
              <h3 className="text-2xl text-white lg:text-4xl">42.2k</h3>
              <p className="flex w-[120px] items-center justify-center rounded-full border-l border-t-2 border-stone-500/50 bg-[#141414] px-3.5 py-1.5 text-sm text-white drop-shadow-[2px_2px_2px_rgba(0,0,0,0.7)]">
                Daily Visits
              </p>
            </div>
            {/* Line graph */}
            <div className="flex items-start gap-x-5 overflow-hidden py-5">
              <div className="-mr-9 lg:-mr-10">
                <img src={`assets/linegraph-with-dot.svg`} alt="" />
              </div>
            </div>
            {/* Workforce section */}
            <div className="flex flex-col justify-start px-5">
              <h3 className="text-lg font-[400] text-[#C8C9D0]">Work Force</h3>
              <p className="text-sm font-[400] text-[#868898]">
                Short description goes here
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-10 information-section-background relative mx-auto flex w-fit max-w-lg flex-col items-center justify-between gap-y-5 p-7 py-10 pb-14 sm:max-w-xl md:max-w-2xl md:flex-row-reverse md:items-start md:gap-x-20 min-[900px]:max-w-3xl lg:max-w-4xl lg:p-10 lg:px-14 lg:pb-6 xl:max-w-5xl">
        <div className="left-info-part w-fit md:w-2/3">
          <div className="flex flex-col gap-y-3.5 lg:max-w-lg">
            {/* <div className="tag flex w-fit items-start justify-start rounded-full border border-orange-500 bg-orange-500/20 px-5 py-1 text-xs font-bold text-orange-300">
              INFORMATION
            </div> */}

            <h2 className="text-2xl font-bold leading-9 tracking-tight text-white md:text-4xl">
              Keep users in the loop with changelog popups
            </h2>

            <p className="mx-0 max-w-[22rem] text-md font-medium text-neutral-400">
              Write your changelogs in Notion and publish them to your users in seconds, choose between a widget or a standalone page.
            </p>
          </div>
        </div>
        <div className="right-info-part mx-auto w-full sm:w-4/5 md:w-1/2 lg:w-1/2">
          <div className="glowing-background py-5 pl-3">
            {/* Daily visits */}
            <div className="flex items-center justify-between px-2 pr-5">
              <h3 className="text-2xl text-white lg:text-4xl">23.5k</h3>
              <p className="flex w-[120px] items-center justify-center rounded-full border-l border-t-2 border-stone-500/50 bg-[#141414] px-3.5 py-1.5 text-sm text-white drop-shadow-[2px_2px_2px_rgba(0,0,0,0.7)]">
                Active Users
              </p>
            </div>
            {/* Line graph */}
            <div className="flex items-start gap-x-5 overflow-hidden py-5">
              <div className="-mr-9 lg:-mr-10">
                <img src={`assets/linegraph-with-dot.svg`} alt="" />
              </div>
            </div>
            {/* Workforce section */}
            <div className="flex flex-col justify-start px-5">
              <h3 className="text-lg font-[400] text-[#C8C9D0]">Analytics</h3>
              <p className="text-sm font-[400] text-[#868898]">
                Performance metrics
              </p>
            </div>
          </div>
        </div>
      </div>


      <div className="mt-10 information-section-background relative mx-auto flex w-fit max-w-lg flex-col items-center justify-between gap-y-5 p-7 py-10 pb-14 sm:max-w-xl md:max-w-2xl md:flex-row md:items-start min-[900px]:max-w-3xl lg:max-w-4xl lg:p-10 lg:px-14 lg:pb-6 xl:max-w-5xl">
        <div className="left-info-part w-fit md:w-2/3 ">
          <div className="flex flex-col gap-y-3.5 lg:max-w-lg">
            {/* <div className="tag flex w-fit items-start justify-start rounded-full border border-orange-500 bg-orange-500/20 px-5 py-1 text-xs font-bold text-orange-300">
              INVITE YOUR TEAM FOR FREE
            </div> */}

            <h2 className="text-3xl font-bold leading-9 tracking-tight text-white md:text-4xl lg:text-4xl">
              Build roadmaps that have <br/>your users in mind
            </h2>

            <p className="mx-0 max-w-[22rem] text-md font-medium text-neutral-400">
              Since all your data is stored in Notion templates, you can invite as many team members as you want to your Notion page for collaboration. 
            </p>
          </div>
        </div>
        <div className="right-info-part mx-auto w-full sm:w-4/5 md:w-1/2 lg:w-1/2">
          <div className="glowing-background py-5 pl-3">
            {/* Daily visits */}
            <div className="flex items-center justify-between px-2 pr-5">
              <h3 className="text-2xl text-white lg:text-4xl">42.2k</h3>
              <p className="flex w-[120px] items-center justify-center rounded-full border-l border-t-2 border-stone-500/50 bg-[#141414] px-3.5 py-1.5 text-sm text-white drop-shadow-[2px_2px_2px_rgba(0,0,0,0.7)]">
                Daily Visits
              </p>
            </div>
            {/* Line graph */}
            <div className="flex items-start gap-x-5 overflow-hidden py-5">
              <div className="-mr-9 lg:-mr-10">
                <img src={`assets/linegraph-with-dot.svg`} alt="" />
              </div>
            </div>
            {/* Workforce section */}
            <div className="flex flex-col justify-start px-5">
              <h3 className="text-lg font-[400] text-[#C8C9D0]">Work Force</h3>
              <p className="text-sm font-[400] text-[#868898]">
                Short description goes here
              </p>
            </div>
          </div>
        </div>
      </div>


    </div>
  );
}

export default InformationSection;
