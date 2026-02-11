import React from "react";
import PageHeading from "../../Components/PageHeading";
import InfoList from "../../Components/InfoSection";
import CardSection1 from "../../Components/CardSection/CardSection1";
import ProjectSlider from "../../Components/ProjectsSection/ProjectSlider";
import AccordionSection from "../../Components/Accordion";
import { pageTitle } from "../../helper";

export default function ProjectPage() {
  const BreadcrumbsData = {
    backgroundImage: "/assets/img/tree/project-heading-bg.jpg",
    title: "OUR PROJECTS",
    breadcrumbs: [
      { label: "Home", link: "/" },
      { label: "Projects", active: true },
    ],
  };

  const infoData = {
    imageSrc: "/assets/img/tree/project-removal.jpg",
    imageAlt: "Hazard Tree Removal",
    projectUrl: "/projects/project-details",
    title: "HAZARD TREE REMOVAL",
    info: [
      { label: "YEAR", value: "2024" },
      { label: "LOCATION", value: "Residential" },
      { label: "SERVICE", value: "TREE REMOVAL" },
    ],
  };

  const infoData1 = {
    imageSrc: "/assets/img/tree/project-structural-pruning.jpg",
    imageAlt: "Tree Trimming Project",
    projectUrl: "/projects/project-details",
    title: "STRUCTURAL PRUNING",
    imagePosition: "center 15%",
  imageZoom: true,
    info: [
      { label: "YEAR", value: "2024" },
      { label: "LOCATION", value: "SANTA CLARA, CA" },
      { label: "SERVICE", value: "TREE TRIMMING" },
    ],
  };

  const cardData = {
    backgroundImage: "/assets/img/tree/project-stump.jpg",
    projectUrl: "/projects/project-details",
    title: "STUMP GRINDING PROJECT",
    info: [
      { label: "YEAR", value: "2024" },
      { label: "LOCATION", value: "CAMPBELL, CA" },
      { label: "SERVICE", value: "STUMP GRINDING" },
    ],
    descriptionTitle: "DESCRIPTION",
    descriptionText:
      "Complete stump grinding below grade with full debris removal. The area was prepped and ready for new landscaping, giving the property owner a clean slate for their yard renovation.",
    outcomesTitle: "OUTCOMES",
    outcomesText:
      "Stump removed below ground level <br> Area ready for replanting <br> Clean, professional finish",
  };

  const projectData = [
    {
      title: "EMERGENCY STORM CLEANUP",
      year: "2024",
      location: "Residential",
      service: "EMERGENCY CLEANUP",
      image: "/assets/img/tree/project-emergency.jpg",
      url: "/projects/project-details",
    },
    {
      title: "LARGE TREE REMOVAL",
      year: "2024",
      location: "SANTA CLARA, CA",
      service: "TREE REMOVAL",
      image: "/assets/img/tree/project-removal.jpg",
      url: "/projects/project-details",
    },
    {
      title: "PROPERTY CLEARANCE",
      year: "2024",
      location: "CAMPBELL, CA",
      service: "TREE TRIMMING",
      image: "/assets/img/tree/project-trimming.jpg",
      url: "/projects/project-details",
    },
  ];

  const faqData = {
    sectionTitle: "TREE SERVICE <br><span>FAQ</span>",
    highlightedText: "FAQ",
    subtitle: "F.A.Q",
    image: "/assets/img/tree/faq-img.jpg",
    items: [
      {
        question: "How do you decide whether a tree should be removed or trimmed?",
        answer:
          "We look at the tree’s health, structure, lean, proximity to structures and power lines, and any signs of decay or root issues. When possible, we recommend corrective trimming. If a tree is hazardous or too close to structures, we may recommend removal for safety.",
      },
      {
        question: "Will my property be protected during the work?",
        answer:
          "Yes. We use proper rigging, drop zones, and protection for roofs, fences, and landscaping. Our crew is trained to work carefully in tight yards, and we treat your property like our own.",
      },
      {
        question: "Can you work on large or hard‑to‑access trees?",
        answer:
          "Yes. We have experience handling large trees, backyards with limited access, and trees near structures. We use climbing, rigging, and the right equipment to safely complete complex jobs.",
      },
      {
        question: "What should I do to prepare for my tree service appointment?",
        answer:
          "Please move vehicles from the driveway if possible, clear access to gates, and keep pets and family members away from the work area. We’ll handle the rest, including equipment setup, traffic cones if needed, and a full cleanup when the job is done.",
      },
    ],
  };
  pageTitle("Project");
  return (
    <>
      <PageHeading data={BreadcrumbsData} />

      <InfoList data={infoData} />

      <CardSection1 data={cardData} />

      <InfoList data={infoData1} />
      <hr />

      <ProjectSlider data={projectData} />
      <div className="cs_height_100 cs_height_lg_70" />
      <AccordionSection data={faqData} />
    </>
  );
}
