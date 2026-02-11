import React from "react";
import PageHeading from "../../Components/PageHeading";
import AboutUs from "../../Components/Aboutus";
import ValueSection from "../../Components/ValueSection";
import FeatureSection from "../../Components/FeatureSection";
import TeamMember from "../../Components/Team";
import BrandSection from "../../Components/BrandSection";
import WorkSection1 from "../../Components/WorksSection/WorkSection1";
import CardSection from "../../Components/CardSection";
import { pageTitle } from "../../helper";

const BreadcrumbsData = {
  backgroundImage: "/assets/img/tree/about-heading-bg.jpg",
  title: "ABOUT US",
  breadcrumbs: [
    { label: "Home", link: "/" },
    { label: "About", active: true },
  ],
};

const aboutUsData = {
  title: `LOCAL <br><span>TREE SERVICE</span> <br>YOU CAN TRUST`,

  introduction:
    "Colores Tree Service is your trusted licensed contractor in Aromas, CA. My company has been in this business for over 15 years, so you can rest assured that I will provide a comprehensive service, ensuring your property is well-kept all season long. I am proud to continue serving my community and building a trusting relationship with my clients. I work hard every day, and I aim to fulfill all your tree service needs and provide complete customer satisfaction. All my jobs are done with professionalism, precision, and cleanliness, ensuring that I continue to keep your property in pristine condition. For more information on my services, contact me at Colores Tree Service today!",
  introduction1: "",

  video: {
    videoUrl: "https://www.youtube.com/embed/rRid6GCJtgc",
    backgroundImage: "/assets/img/tree/video-bg.jpg",
  },
  cta: {
    backgroundImage: "/assets/img/tree/cta-about.jpg",
    buttonUrl: "/projects",
    buttonText: "Explore Projects",
  },
};

const valueData = {
  sectionTitle: "VALUES",
  values: [{ text: "Tree Care Experts" }, { text: "Local Service" }],
};

const featureData = {
  sectionTitle: "WHY CHOOSE <span>COLORES TREE SERVICE</span>",
  buttonText: "Get Free Estimate",
  buttonUrl: "/contact",
  image: "/assets/img/tree/feature-about.jpg",
  features: [
    {
      icon: "fa6-solid:tree",
      title: "Expert Tree Care",
      description:
        "15+ years of hands-on experience with tree trimming, removals, trunk grinding, and turf installation in Aromas and surrounding areas.",
    },
    {
      icon: "fa6-solid:users",
      title: "Owner Operated",
      description:
        "We personally oversee every job. Owner-operated means you get direct communication and accountability on every project.",
    },
    {
      icon: "fa6-solid:certificate",
      title: "Licensed & Insured",
      description:
        "Fully licensed (#1099756) and insured for your protection. We follow all safety protocols and industry best practices.",
    },
    {
      icon: "fa6-solid:truck",
      title: "Complete Cleanup",
      description:
        "We don't just cut trees—we chip, haul, and clean up thoroughly. Your property will look better when we're done than when we started.",
    },
  ],
};

const teamMembersData = {
  title: `OUR <span>TEAM</span>`,
  subtitle: "OWNER",
  teamMembers: [
    {
      img: "/assets/img/tree/erik-pacheco.jpg",
      name: "Erik Pacheco",
      role: "Owner & Lead Arborist",
      description: "15+ years of tree service experience. Specializing in safe removals, structural pruning, turf installation, and professional tree care in Aromas, CA and surrounding areas.",
    },
  ],
};

const brandLogos = [
  "/assets/img/brand_logo_1.svg",
  "/assets/img/brand_logo_2.svg",
  "/assets/img/brand_logo_3.svg",
  "/assets/img/brand_logo_4.svg",
  "/assets/img/brand_logo_5.svg",
  "/assets/img/brand_logo_6.svg",
  "/assets/img/brand_logo_3.svg",
];

const WorkingData = {
  title: "OUR <span>RECENT WORK</span>",
  subtitle: "TREE SERVICE PROJECTS",
  galleryItems: [
    {
      imgSrc: "/assets/img/tree/project-removal.jpg",
      title: "Tree Removal",
      year: "2024",
      height: "694px",
    },
    {
      imgSrc: "/assets/img/tree/project-trimming.jpg",
      title: "Tree Trimming",
      year: "2024",
      height: "287px",
    },
    {
      imgSrc: "/assets/img/tree/project-stump.jpg",
      title: "Stump Grinding",
      year: "2024",
      height: "383px",
    },
    {
      imgSrc: "/assets/img/tree/project-emergency.jpg",
      title: "Emergency Cleanup",
      year: "2024",
      height: "480px",
    },
    {
      imgSrc: "/assets/img/tree/gallery-5.jpg",
      title: "Property Cleanup",
      year: "2024",
      height: "190px",
    },
  ],
};

const cardData = {
  backgroundImage: "/assets/img/tree/cta-about.jpg",
  tags: ["Tree Service", "Licensed & Insured", "Free Estimates"],
  title: "NEED TREE SERVICE? <br /> GET A FREE ESTIMATE TODAY",
  buttonLink: "/contact",
};

export default function AboutPage() {
  pageTitle("About Us");
  return (
    <>
      <PageHeading data={BreadcrumbsData} />
      <AboutUs data={aboutUsData} />
      <div className="cs_heading_bg cs_white_color">
        <ValueSection data={valueData} />
        <FeatureSection data={featureData} />
      </div>
      <TeamMember data={teamMembersData} />
      <BrandSection data={brandLogos} />
      <WorkSection1 data={WorkingData} />
      <CardSection data={cardData} />
    </>
  );
}
