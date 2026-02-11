import React from "react";
import PageHeading from "../../Components/PageHeading";
import ServiceSection1 from "../../Components/ServicesSection/ServiceSection1";
import CtaSection from "../../Components/CTASection/CtaSection";
import { pageTitle } from "../../helper";

export default function ServicePage() {
  const BreadcrumbsData = {
    backgroundImage: "/assets/img/tree/service-heading-bg.jpg",
    title: "OUR SERVICES",
    breadcrumbs: [
      { label: "Home", link: "/" },
      { label: "Services", active: true },
    ],
  };

  const servicesData = [
    {
      title: "TREE TRIMMING",
      description:
        "Professional trimming and pruning to improve tree health, safety, and appearance. We shape and prune while removing dead or overgrown branches.",
      imgSrc: "/assets/img/tree/service-trimming.png",
      link: "/services/tree-trimming",
    },
    {
      title: "TREE REMOVALS",
      description:
        "Complete tree removal to haul away problem trees, roots and all. When trimming isn't enough, we remove trees down to the stump.",
      imgSrc: "/assets/img/tree/service-removal.jpg",
      link: "/services/tree-removals",
    },
    {
      title: "TREE CLEANING",
      description:
        "Keep your property clean and safe. We remove fallen branches, debris, and storm damage and leave your yard pristine.",
      imgSrc: "/assets/img/tree/service-tree-services.png",
      link: "/services/tree-cleaning",
    },
    {
      title: "TRUNK GRINDING SERVICES",
      description:
        "We grind stumps and trunks after removal so your yard is level and ready for replanting or other use.",
      imgSrc: "/assets/img/tree/service-stump.jpg",
      link: "/services/trunk-grinding-services",
    },
    {
      title: "LANDSCAPING",
      description:
        "Full landscaping services to design and maintain your outdoor space. We help you get the look and function you want.",
      imgSrc: "/assets/img/tree/service-landscaping.png",
      link: "/services/landscaping",
    },
    {
      title: "TURF INSTALLATION",
      description:
        "We transform ordinary yards into lush, green landscapes through expert turf installation for a healthy, vibrant lawn.",
      imgSrc: "/assets/img/tree/service-turf.png",
      link: "/services/turf-installation",
    },
    {
      title: "FENCE INSTALLATIONS",
      description:
        "Quality fence installation and repair. We build fences that look great and stand up to the elements.",
      imgSrc: "/assets/img/tree/service-fence-installations.png",
      link: "/services/fence-installations",
    },
  ];

  const ctaData = {
    backgroundImage: "/assets/img/tree/cta-services.jpg",
    title: "READY FOR PROFESSIONAL TREE SERVICE?",
    buttonText: "Get Free Estimate",
    buttonUrl: "/contact",
  };

  pageTitle("Service");
  return (
    <>
      <PageHeading data={BreadcrumbsData} />

      <ServiceSection1 data={servicesData} />

      <CtaSection data={ctaData} />
    </>
  );
}
