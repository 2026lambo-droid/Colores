import PageHeading from "../../Components/PageHeading";
import GallerySection from "../../Components/GallerySection";
import CardSection from "../../Components/CardSection";
import { pageTitle } from "../../helper";

const BreadcrumbsData = {
  backgroundImage: "/assets/img/tree/gallery-heading-bg.jpg",
  title: "OUR GALLERY",
  breadcrumbs: [
    { label: "Home", link: "/" },
    { label: "Gallery", active: true },
  ],
};

const galleryData = [
  {
    imgSrc: "/assets/img/tree/gallery-new-1.png",
    title: "Arborist at Work",
    year: "2024",
    height: "383px",
  },
  {
    imgSrc: "/assets/img/tree/gallery-new-2.png",
    title: "Tree Work & Fence",
    year: "2024",
    height: "383px",
  },
  {
    imgSrc: "/assets/img/tree/gallery-new-3.png",
    title: "Turf & Fence Installation",
    year: "2024",
    height: "383px",
  },
  {
    imgSrc: "/assets/img/tree/gallery-new-4.png",
    title: "Stump Grinding",
    year: "2024",
    height: "383px",
  },
  {
    imgSrc: "/assets/img/tree/gallery-new-5.png",
    title: "Tree Removal & Cleanup",
    year: "2024",
    height: "383px",
  },
  {
    imgSrc: "/assets/img/tree/gallery-new-6.png",
    title: "Tree Felling & Clearing",
    year: "2024",
    height: "383px",
  },
  {
    imgSrc: "/assets/img/tree/gallery-new-7.png",
    title: "Hardscaping & Paving",
    year: "2024",
    height: "383px",
  },
  {
    imgSrc: "/assets/img/tree/gallery-new-8.png",
    title: "Palm Tree Trimming",
    year: "2024",
    height: "383px",
  },
  {
    imgSrc: "/assets/img/tree/gallery-new-9.png",
    title: "Lawn & Grounds Care",
    year: "2024",
    height: "383px",
  },
  {
    imgSrc: "/assets/img/tree/gallery-new-10.png",
    title: "Professional Tree Trimming",
    year: "2024",
    height: "383px",
  },
  {
    imgSrc: "/assets/img/tree/gallery-new-11.png",
    title: "Fence & Landscaping",
    year: "2024",
    height: "383px",
  },
];

const cardData = {
  backgroundImage: "/assets/img/tree/cta-bg.jpg",
  tags: ["Tree Service", "Licensed & Insured", "Free Estimates"],
  title: "NEED TREE SERVICE? <br /> GET A FREE ESTIMATE TODAY",
  buttonLink: "/contact",
};
export default function GalleryPage() {
  pageTitle("Gallery");
  return (
    <>
      <PageHeading data={BreadcrumbsData} />
      <div className="cs_height_100 cs_height_lg_70" />
      <GallerySection data={galleryData} />
      <div className="cs_height_100 cs_height_lg_70" />
      <CardSection data={cardData} />
    </>
  );
}
