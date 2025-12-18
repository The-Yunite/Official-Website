import React from 'react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const Faqs = () => {
    return (
        < section className = "mt-24 w-full text-center" >
        <div>
          <h2 className="font-bold text-5xl text-shadow-xs py-2 px-4 inline-block rounded-xl text-black">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-gray-700 text-xl">
            Find answers to the most common questions about Yunyt.
          </p>
        </div>
        <Accordion
          type="single"
          collapsible
          className="w-3/4 mx-auto mt-12 text-left"
        >
          <AccordionItem value="item-1">
            <AccordionTrigger className="font-semibold text-black hover:text-[#ff6b35] transition">
              What is Yunyt?
            </AccordionTrigger>
            <AccordionContent className="flex flex-col gap-4 text-gray-700">
              <p>
                Yunyt is a youth-driven company offering digital solutions and event services for startups, businesses, and institutions
              </p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger className="font-semibold text-black hover:text-[#ff6b35] transition">
               What services do you provide?
            </AccordionTrigger>
            <AccordionContent className="flex flex-col gap-4 text-gray-700">
              <p>
                We provide web solutions, business analysis, AI models, AI agents, automation, and event management services.
              </p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger className="font-semibold text-black hover:text-[#ff6b35] transition">
              Who do you work with?
            </AccordionTrigger>
            <AccordionContent className="flex flex-col gap-4 text-gray-700">
              <p>
                We collaborate with startups, businesses, educational institutions, and organizations looking for innovative digital solutions and event services.
              </p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section >
  )
}

export default Faqs
