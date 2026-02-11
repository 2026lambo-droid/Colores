import React from "react";
import PageHeading from "../../Components/PageHeading";
import ContactSection from "../../Components/Contact";
import CardSection from "../../Components/CardSection";
import { pageTitle } from "../../helper";

export default function ContactPage() {
  const BreadcrumbsData = {
    backgroundImage: "/assets/img/tree/about-heading-bg.jpg",
    title: "CONTACT US",
    breadcrumbs: [
      { label: "Home", link: "/" },
      { label: "Contact", active: true },
    ],
  };

  const contactData = {
    mapTitle: "CONTACT <span>COLORES TREE SERVICE</span> TODAY!",
    sectionTitle: "Fill out the form below and we will be in contact with you soon!",
    contactList: [
      {
        label: "PHONE",
        value: "(831) 337-0454",
      },
      {
        label: "EMAIL",
        value: "info@treeservicesaromas.com",
      },
      {
        label: "LICENSE",
        value: "#1099756 • Aromas, CA 95004 • Mon–Sun 6:00 AM – 6:00 PM",
      },
    ],
    locationUrl:
      "https://www.google.com/maps?q=Aromas,+CA+95004&output=embed",
    formButtonText: "Send Message",
  };

  const cardData = {
    backgroundImage: "/assets/img/tree/cta-bg.jpg",
    tags: ["Tree Service", "Licensed", "Insured", "Professional"],
    title: "PROFESSIONAL TREE <br /> SERVICE YOU CAN TRUST",
    buttonLink: "/services",
  };
  pageTitle("Contact");
  return (
    <>
      <PageHeading data={BreadcrumbsData} />
      <ContactSection data={contactData} />
      <CardSection data={cardData} />
    </>
  );
}
