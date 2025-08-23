import React from "react"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const FaqSections = () => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800">
            <span className="text-orange-600">FAQs</span>
            <br /> Common Questions We Answer
          </h2>
        </div>

        <Accordion type="single" collapsible className="w-full space-y-2 cursor-pointer">
          <AccordionItem value="faq1">
            <AccordionTrigger>What services does Ps logistics offer?</AccordionTrigger>
            <AccordionContent>
              Htlogics is a top web design agency in Chandigarh providing website
              creation, development, e-commerce solutions, online marketing, and
              custom software development.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="faq2">
            <AccordionTrigger>Why choose Ps logistics for web design in Chandigarh?</AccordionTrigger>
            <AccordionContent>
              We are known for visually appealing, mobile-friendly, and
              SEO-optimized websites, ensuring great user experiences.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="faq3">
            <AccordionTrigger>Do you build custom websites?</AccordionTrigger>
            <AccordionContent>
              Yes, we create fully customized websites designed to match your
              business objectives and branding.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="faq4">
            <AccordionTrigger>What is the cost of designing a website?</AccordionTrigger>
            <AccordionContent>
              Prices vary based on requirements. We provide affordable plans for all
              business sizes—contact us for a free estimate.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="faq5">
            <AccordionTrigger>How long will it take to design and develop my site?</AccordionTrigger>
            <AccordionContent>
              Depending on features and complexity, it typically takes between 7 to
              20 business days.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="faq6">
            <AccordionTrigger>Can you revamp my existing site?</AccordionTrigger>
            <AccordionContent>
              Absolutely! We offer modern redesigns with better functionality and
              improved aesthetics.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="faq7">
            <AccordionTrigger>Will my website be mobile-friendly and SEO-ready?</AccordionTrigger>
            <AccordionContent>
              Yes, all our sites are responsive and built with search engine
              optimization in mind.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="faq8">
            <AccordionTrigger>Do you develop e-commerce sites?</AccordionTrigger>
            <AccordionContent>
              Yes, we build secure, scalable, and user-friendly online stores for
              businesses of all sizes.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="faq9">
            <AccordionTrigger>Do you provide maintenance after launch?</AccordionTrigger>
            <AccordionContent>
              Yes, we offer ongoing website maintenance to keep your site running
              smoothly.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="faq10">
            <AccordionTrigger>Which company is best for web development?</AccordionTrigger>
            <AccordionContent>
              Htlogics is among the most trusted names, delivering fast, secure, and
              tailored web solutions backed by expert support.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="faq11">
            <AccordionTrigger>How can I get in touch with Ps logistics?</AccordionTrigger>
            <AccordionContent>
              You can contact us via our website, email, or phone. Our team is happy
              to assist with your project needs.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  )
}

export default FaqSections
