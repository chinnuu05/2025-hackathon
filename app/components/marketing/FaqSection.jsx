import React from "react";
import { Disclosure } from "@headlessui/react";
import { BiChevronDown } from "react-icons/bi";

export default function FaqSection() {
  const FaqData = [
    {
      id: 1,
      question: "How much budget do I need for a project?",
      answer:
        "It depends on the scale of the project. If the idea has already been drawn or made earlier, it will depend on the project length—maybe around 1-2 weeks.",
    },
    {
      id: 2,
      question: "What's the timeline for project completion?",
      answer:
        "It depends on the scale of the project. If the idea has already been drawn or made earlier, it will depend on the project length—maybe around 1-2 weeks.",
    },
    {
      id: 3,
      question: "What is needed from you to start working on the project?",
      answer:
        "It depends on the scale of the project. If the idea has already been drawn or made earlier, it will depend on the project length—maybe around 1-2 weeks.",
    },
    {
      id: 4,
      question: "Do we work on weekends?",
      answer:
        "It depends on the scale of the project. If the idea has already been drawn or made earlier, it will depend on the project length—maybe around 1-2 weeks.",
    },
  ];

  return (
    <section className="faq__section max-w-5xl mx-auto py-10">
      <div className="faq-headline flex flex-col gap-y-2">
        <h3 className="text-3xl sm:text-4xl lg:text-[44px] max-w-xs mx-auto md:max-w-full md:mx-0 text-center font-bold leading-[1.15] text-gray-1000">
          Frequently asked questions
        </h3>
      </div>
      <div className="lg:mt-5 w-full px-7 md:px-10 xl:px-2 py-10">
        <div className="mx-auto w-full max-w-5xl border border-gray-400 rounded-lg">
          {FaqData.map((faq, index) => (
            <Disclosure key={faq.id}>
              {({ open }) => (
                <div
                  className={`${
                    index !== FaqData.length - 1
                      ? "border-b border-gray-1200"
                      : ""
                  }`}
                >
                  <Disclosure.Button className="flex w-full items-start gap-x-5 justify-between rounded-lg text-left text-lg font-bold text-gray-300 focus:outline-none p-5">
                    <span>{faq.question}</span>
                    <BiChevronDown
                      className={`mt-1.5 md:mt-0 flex-shrink-0 ${
                        open ? "rotate-180 transform" : ""
                      } h-5 w-5 text-gray-200`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="pt-2 pb-5 px-5 text-sm lg:text-base text-gray-300 font-medium">
                    {faq.answer}
                  </Disclosure.Panel>
                </div>
              )}
            </Disclosure>
          ))}
        </div>
      </div>
    </section>
  );
}
