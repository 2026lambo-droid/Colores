import React from "react";
import PageHeading from "../../Components/PageHeading";
import ProjectDetailsSection from "../../Components/ProjectDetails";
import RelatedProject from "../../Components/RelatedProject/RelatedProject";
import { pageTitle } from "../../helper";

const BreadcrumbsData = {
  backgroundImage: "/assets/img/tree/project-heading-bg.jpg",
  title: "PROJECT DETAILS",
  breadcrumbs: [
    { label: "Home", link: "/" },
    { label: "Evening garden", active: true },
  ],
};

const projectData = {
  projectInfo: [
    { label: "YEAR", value: "2024" },
    { label: "LOCATION", value: "SUNNYVALE, CA" },
    { label: "SERVICE", value: "GARDEN LANDSCAPING" },
  ],
  video: {
    url: "https://www.youtube.com/embed/rRid6GCJtgc",
    thumbnail: "/assets/img/tree/video-block-bg-2.jpg",
  },
  sliderImages: [
    "/assets/img/tree/project-trimming.jpg",
    "/assets/img/tree/project-removal.jpg",
    "/assets/img/tree/project-stump.jpg",
  ],
  description: `Tucked behind an old Japanese estate, this garden design evokes
    the charm of a hidden garden. The lighting design enhances the
    feeling of discovery, revealing unexpected beauty at every turn.
    It's a garden where every night feels like an adventure.`,
  outcomes: `With a team of dedicated landscape architects and horticultural
    experts, we blend art and science to transform your outdoor space
    into a living masterpiece. We go beyond aesthetics, integrating
    sustainable practices, water-saving solutions, and eco-friendly
    choices to ensure your garden is as environmentally responsible as
    it is stunning. From the initial consultation to the final
    blossom, we are with you every step of the way, bringing your
    vision of dream garden to life expertly and efficiently.`,
  features: [
    {
      iconClass: "fa6-solid:hand-holding-droplet",
      title: "Customized Garden Designs",
    },
    {
      iconClass: "fa6-solid:utensils",
      title: "Guaranteed Maintenance Plans",
    },
    { iconClass: "fa6-solid:vials", title: "Soil Testing and Improvement" },
    {
      iconClass: "fa6-solid:feather",
      title: "Hardscape and Aquascape Feature",
    },
    {
      iconClass: "fa6-solid:seedling",
      title: "Plant Selection and Installation",
    },
    {
      iconClass: "fa6-solid:handshake",
      title: "Sustainable Eco-Friendly Options",
    },
  ],
};

const accordionData = {
  sectionTitle: "CHOOSE OUR <br /> SPECIAL <span>SERVICES</span>",
  highlightedText: "SERVICES",
  serviceData: [
    {
      img: "/assets/img/tree/service-trimming.png",
      title: "TREE TRIMMING",
      description:
        "Professional trimming and pruning to improve tree health, safety, and appearance. Crown cleaning, thinning, shaping, and clearance pruning.",
      link: "/services/tree-trimming",
    },
    {
      img: "/assets/img/tree/service-removal.jpg",
      title: "TREE REMOVAL",
      description:
        "Safe removals for hazardous, dead, or unwanted trees. From tight spaces to large removals—done with safety and care.",
      link: "/services/tree-removal",
    },
    {
      img: "/assets/img/tree/service-emergency.jpg",
      title: "EMERGENCY CLEANUP",
      description:
        "Storm damage cleanup, fallen limbs, and urgent hazard situations. Fast response when you need us.",
      link: "/services/tree-cleaning",
    },
    {
      img: "/assets/img/tree/service-stump.jpg",
      title: "STUMP GRINDING",
      description:
        "Stump grinding below ground level with debris cleanup so you can replant, landscape, or reclaim your yard space.",
      link: "/services/trunk-grinding-services",
    },
  ],
};

export default function ProjectDetailsPage() {
  pageTitle("Project Details");
  return (
    <>
      <PageHeading data={BreadcrumbsData} />
      <ProjectDetailsSection data={projectData} />
      <RelatedProject data={accordionData} />
    </>
  );
}
