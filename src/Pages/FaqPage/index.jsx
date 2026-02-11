import React from "react";
import PageHeading from "../../Components/PageHeading";
import CardSection from "../../Components/CardSection";
import AccordionSection2 from "../../Components/Accordion/AccordionSection2";
import { pageTitle } from "../../helper";
import AccordionSection from "../../Components/Accordion";

const BreadcrumbsData = {
  backgroundImage: "/assets/img/tree/service-heading-bg.jpg",
  title: "FAQs",
  breadcrumbs: [
    { label: "Home", link: "/" },
    { label: "FAQ", active: true },
  ],
};

const cardData = {
  backgroundImage: "/assets/img/tree/cta-bg.jpg",
  tags: ["Tree Service", "Licensed & Insured", "Free Estimates"],
  title: "NEED TREE SERVICE? <br /> GET A FREE ESTIMATE TODAY",
  buttonLink: "/contact",
};

const faqData = {
  sectionTitle: "TREE <span>SERVICE</span>",
  image: "/assets/img/tree/faq-tree-service.png",
  items: [
    {
      question: "What is the process for getting a tree service estimate?",
      answer:
        "Call us at (831) 337-0454 or send a message with a few details about your trees and property. We’ll schedule a time to visit your property, inspect the trees, discuss your goals, and provide a clear written estimate before any work begins.",
    },
    {
      question: "How long does a typical tree job take?",
      answer:
        "Most standard trimming jobs are completed in a single day. Larger removals, multiple trees, or tight-access work can take longer. During your estimate, we’ll walk you through the expected schedule so you know exactly what to expect.",
    },
    {
      question: "Do you handle cleanup and hauling?",
      answer:
        "Yes. Our standard service includes cutting, chipping, hauling, and a thorough cleanup of branches and debris. If you’d like to keep wood for firewood or chips for mulch, we can arrange that as well.",
    },
    {
      question: "Are you licensed and insured?",
      answer:
        "Yes. Colores Tree Service is fully licensed and insured for tree work in California. We can provide license and insurance information on request, and we follow industry-standard safety practices on every job.",
    },
  ],
};

const faqData2 = {
  sectionTitle: "SAFETY & <span>SCOPE</span>",
  image: "/assets/img/tree/faq-img-2.jpg",
  items: [
    {
      question: "What areas do you serve?",
      answer:
        "We primarily serve the local area. If you’re nearby and not sure whether you’re in our service area, reach out with your address and we’ll let you know if we can schedule a visit.",
    },
    {
      question: "Can you work near homes, fences, and power lines?",
      answer:
        "Yes. We specialize in working in tight spaces and near structures. We use proper rigging techniques, sectioning, and safety gear to protect your home, fences, landscaping, and nearby utilities.",
    },
    {
      question:
        "Do you offer ongoing tree maintenance plans?",
      answer:
        "Yes. We can set up routine trimming and health checks for trees that need regular care. This helps prevent hazards, improves tree structure, and keeps your property looking clean year-round.",
    },
    {
      question:
        "What types of tree services do you provide?",
      answer:
        "We handle tree trimming, removals, hazard and deadwood removal, stump grinding, emergency storm cleanup, and general property clearing. If you’re not sure what you need, we’ll inspect your trees and recommend the safest, most practical option.",
    },
  ],
};

export default function FaqPage() {
  pageTitle("Faq");
  return (
    <>
      <PageHeading data={BreadcrumbsData} />
      <div className="cs_height_100 cs_height_lg_70" />
      <AccordionSection2 data={faqData} />
      <div className="cs_height_100 cs_height_lg_70" />
      <AccordionSection2 data={faqData2} />
      <div className="cs_height_100 cs_height_lg_70" />
      <CardSection data={cardData} />
    </>
  );
}
