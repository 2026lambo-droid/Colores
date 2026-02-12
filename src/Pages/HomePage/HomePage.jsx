import React from "react";
import HeroSection from "../../Components/Hero";
import ValueSection from "../../Components/ValueSection";
import FeatureSection from "../../Components/FeatureSection";
import WorkingProcess from "../../Components/WorkingProcess";
import ServicesSection from "../../Components/ServicesSection";
import TestimonialSection from "../../Components/TestimonialSection";
import WorksSection from "../../Components/WorksSection";
import CTASection from "../../Components/CTASection";
import { pageTitle, assetUrl } from "../../helper";

const heroData = {
  title: 'Welcome to <b>Colores Tree Service</b>',
  subtitle:
    "Your Leading Tree Service Contractors in Aromas, CA. Colores Tree Service is your premier tree service company serving Aromas, CA and surrounding areas. With over 15 years of experience, we deliver superior quality results for overgrowth, diseased, aged, or obstructive trees—and we clean up 100% of the mess when the project is complete.",
  btnText1: "Contact Us",
  btnUrl1: "/contact",
  btnText2: "Get a Quote",
  btnUrl2: "/services",

  funfact: {
    number: "15+",
    text: "Years Experience",
    trustIndicators: [
      {
        icon: "fa6-solid:certificate",
        text: "Licensed & Insured",
      },
      {
        icon: "fa6-solid:phone",
        text: "Free Estimates",
      },
      {
        icon: "fa6-solid:user-check",
        text: "Owner Operated",
      },
    ],
  },
  box: {
    title: "Call Today",
    subtitle:
      "Call Colores Tree Service at (831) 337-0454 for a fast, free estimate. Lic. #1099756 • Mon–Sun 6:00 AM – 6:00 PM",
    link: "/contact",
  },

  backgrounds: [
    assetUrl("assets/img/tree/hero-trimming.jpg"),
    assetUrl("assets/img/tree/hero-removal.jpg"),
    assetUrl("assets/img/tree/hero-stump.jpg"),
    assetUrl("assets/img/tree/hero-equipment.jpg"),
  ],
  intro: {
    intro:
      "Colores Tree Service is your premier tree service company serving Aromas, CA, and the surrounding areas, that provides all manner of tree services. With over 15 years of experience in the industry, I have the aggregate skill and knowledge to deliver superior quality results. Whether you have arboreal overgrowth or issues with diseased, aged, or simply obstructive trees, I can provide you with the professional assistance you need.",
    servicesHeading: "Colores Tree Service offers the following services:",
    services: [
      "Tree Trimming",
      "Tree Removals",
      "Tree Cleaning",
      "Trunk Grinding Services",
      "Landscaping",
      "Turf Installation",
      "Fence Installations",
    ],
    closing:
      "In addition to providing these excellent services, I also make sure to clean up 100% of the mess when the project is complete so that no trace is left. I am committed to reliable, dependable work, along with a strong sense of professionalism that is essential for a successful business. To take advantage of my highly experienced, fast, and affordable tree services, contact me at Colores Tree Service today!",
  },
};

const valueData = {
  sectionTitle: "EXPERTISE",
  values: [
    { text: "Tree Care Specialists" },
    { text: "Licensed & Insured" },
    { text: "Safety-First Crew" },
    { text: "Clean Worksite, Every Time" },
  ],
};

const featureData = {
  sectionTitle: "WHY CHOOSE <span>COLORES TREE SERVICE</span>",
  buttonText: "Free Estimate",
  buttonUrl: "/contact",
  image: assetUrl("assets/img/tree/feature-about.jpg"),
  features: [
    {
      icon: "fa6-solid:certificate",
      title: "Licensed & Insured",
      description:
        "Professional, reliable tree care with proper licensing and insurance for your peace of mind.",
    },
    {
      icon: "fa6-solid:phone",
      title: "Fast, Free Estimates",
      description:
        "Quick scheduling and clear pricing. Tell us what you need and we’ll provide a free, no-obligation estimate.",
    },
    {
      icon: "fa6-solid:tree",
      title: "Expert Tree Care",
      description:
        "15+ years of hands-on experience with trimming, removals, hazard trees, and structural pruning.",
    },
    {
      icon: "fa6-solid:truck",
      title: "Full-Service + Cleanup",
      description:
        "Trimming, removals, stump grinding, hauling, chipping, and full cleanup. We leave your property looking clean.",
    },
  ],
};

const workingProcessData = {
  sectionTitle: "SIMPLE STEPS FOR OUR <span>TREE SERVICE</span> WORK",
  subtitle: "HOW IT WORKS",
  steps: [
    {
      title: "01 | Free Estimate",
      description:
        "Call us at (831) 337-0454 or message us to describe the job. We’ll schedule an on-site visit at your property and provide a free quote.",
    },
    {
      title: "02 | Safety Assessment",
      description:
        "We assess tree health, access, utilities, and risk factors. You’ll get a clear plan and a transparent price—no surprises.",
    },
    {
      title: "03 | Professional Service",
      description:
        "Our crew arrives on time with proper equipment and completes the job safely and efficiently, protecting your home and landscaping.",
    },
    {
      title: "04 | Haul Away + Cleanup",
      description:
        "We chip, haul, and clean the work area thoroughly. Optional firewood stacking and stump grinding available.",
    },
  ],
};

const servicesData = {
  title: "SERVICES",
  btnText: " See All Services",
  btnUrl: "/services",
  service: [
    {
      title: "TREE TRIMMING",
      subtitle:
        "Trees require regular trimming to stay healthy. We shape and prune while removing dead or overgrown branches, and we clean up fallen branches and leaves when we're done—leaving your yard pristine.",
      image: assetUrl("assets/img/tree/service-tree-services.png"),
      link: "/services/tree-trimming",
      tags: [
        { label: "Trimming", url: "/" },
        { label: "Pruning", url: "/" },
        { label: "Clearance", url: "/" },
        { label: "Safety", url: "/" },
      ],
    },
    {
      title: "TREE REMOVAL",
      subtitle:
        "Complete tree removal to haul away problem trees, roots and all. When trimming isn't enough, we remove trees down to the stump. We also offer trunk grinding services.",
      image: assetUrl("assets/img/tree/service-removal.jpg"),
      link: "/services/tree-removal",
      tags: [
        { label: "Removal", url: "/" },
        { label: "Hazard Trees", url: "/" },
        { label: "Rigging", url: "/" },
        { label: "Insured", url: "/" },
      ],
    },
    {
      title: "TREE SERVICES",
      subtitle:
        "Trees are an essential feature of your outdoor space, so regular maintenance matters. Trimming removes dead or rotten branches to keep trees healthy and help prevent damage or injury. We also offer fence installations and landscaping services.",
      image: assetUrl("assets/img/tree/service-trimming.png"),
      link: "/services/trunk-grinding-services",
      tags: [
        { label: "Grinding", url: "/" },
        { label: "Debris Removal", url: "/" },
        { label: "Yard Ready", url: "/" },
        { label: "Clean Finish", url: "/" },
      ],
    },
    {
      title: "TURF INSTALLATION",
      subtitle:
        "We transform ordinary yards into lush, green landscapes through expert turf installation. We help select the best turf for your area and install it with a meticulous process for a healthy, vibrant lawn.",
      image: assetUrl("assets/img/tree/service-turf.png"),
      link: "/services/turf-installation",
      tags: [
        { label: "Storm", url: "/" },
        { label: "Emergency", url: "/" },
        { label: "Cleanup", url: "/" },
        { label: "Haul Away", url: "/" },
      ],
    },
  ],
};

const testimonialData = {
  sectionTitle: "TESTIMONIALS",
  testimonials: [
    {
      text: `I highly recommend Colores Tree Service. I've hired them a few times and I've always gotten <span>A+</span> service.`,
      name: "Cynthia C.",
      designation: "2024-07-05",
    },
    {
      text: `Atanasio and his crew did an excellent job cutting down a huge avocado tree and trimming other trees. He arrived on time, finished in a timely manner, cleaned up the backyard very well, and his price was reasonable. I would highly recommend him and his crew.`,
      name: "Armando S.",
      designation: "2023-07-02",
    },
    {
      text: `Very fast and responsive service. They came the very next day, provided a quote, and completed the job within two hours. Both the front yard and backyard looked spotless.`,
      name: "Alma P.",
      designation: "2023-05-18",
    },
  ],
};

const worksData = {
  title: "VIEW OUR <span>RECENT</span> <br /> TREE SERVICE <span>PROJECTS</span>",
  subtitle: "RECENT WORK",
  slides: [
    {
      image: assetUrl("assets/img/tree/project-removal.jpg"),
      name: "HAZARD TREE REMOVAL",
      location: "Residential",
      description:
        "Safe removal of a hazardous tree near the home using professional rigging techniques, followed by full debris haul-away and cleanup.",
    },
    {
      image: assetUrl("assets/img/tree/project-structural-pruning.jpg"),
      name: "STRUCTURAL PRUNING",
      location: "SANTA CLARA, CA",
      description:
        "Precision pruning to improve clearance, safety, and long-term tree health—finished with a clean, polished look.",
      backgroundPosition: "center 15%",
      backgroundSize: "130%",
    },
    {
      image: assetUrl("assets/img/tree/project-stump.jpg"),
      name: "STUMP GRIND + RESTORE",
      location: "CAMPBELL, CA",
      description:
        "Stump ground below grade with debris removal to prep the area for new landscaping and a smooth yard finish.",
    },
  ],
};

const ctaData = {
  backgroundImage: assetUrl("assets/img/tree/cta-bg.jpg"),
  title: "NEED PROFESSIONAL <br /> TREE SERVICE?",
  buttonText: "Get Free Estimate",
  buttonUrl: "/contact",
};

export default function HomePage() {
  pageTitle("Home");
  return (
    <>
      <HeroSection data={heroData} />
      <ValueSection data={valueData} />
      <FeatureSection data={featureData} />
      <WorkingProcess data={workingProcessData} />
      <ServicesSection data={servicesData} />
      <TestimonialSection data={testimonialData} />
      <WorksSection data={worksData} />
      <CTASection data={ctaData} />
    </>
  );
}