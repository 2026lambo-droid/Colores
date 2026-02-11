import { useParams } from "react-router-dom";
import ServiceDetailsSection from "../../Components/ServiceDetails";
import WorkingProcess from "../../Components/WorkingProcess";
import TestimonialSection1 from "../../Components/TestimonialSection/TestimonialSection1";
import CardSection from "../../Components/CardSection";
import { pageTitle } from "../../helper";

const SERVICE_DATA_BY_ID = {
  "tree-trimming": {
    breadcrumb: [
      { label: "Home", url: "/" },
      { label: "Services", url: "/services" },
      { label: "Tree Trimming" },
    ],
    titleHighlight: "<span>TREE</span> TRIMMING",
    video: {
      url: "https://www.youtube.com/embed/rRid6GCJtgc",
      bgImage: "/assets/img/tree/service-trimming.png",
    },
    cta: {
      buttonUrl: "/contact",
      buttonText: "Get Free Estimate",
      bgImage: "/assets/img/tree/cta-bg.jpg",
    },
    description: `
    Trees require regular trimming to stay healthy. Keep your trees healthy, safe, and looking clean with professional Tree Trimming from Colores Tree Service. We shape and prune while removing dead or overgrown branches, and we clean up fallen branches and leaves when we're done—leaving your yard pristine. <br><br>
    Every property is different. We look at species, age, previous cuts, clearance over roofs and driveways, and how the tree is growing toward structures or power lines. Based on that assessment, we recommend a trimming plan. Our goal is simple: safer trees, more light where you need it, and a cleaner, more polished look for your yard.
  `,
    iconBoxes: [
      { iconClass: "fa6-solid:tree", title: "Health‑Focused Pruning" },
      { iconClass: "fa6-solid:shield-heart", title: "Safety & Clearance" },
      { iconClass: "fa6-solid:scissors", title: "Crown Thinning & Shaping" },
      { iconClass: "fa6-solid:house-chimney", title: "Roof & Driveway Clearance" },
      { iconClass: "fa6-solid:handshake", title: "Owner‑Operated Service" },
    ],
  },
  "tree-removal": {
    breadcrumb: [
      { label: "Home", url: "/" },
      { label: "Services", url: "/services" },
      { label: "Tree Removal" },
    ],
    titleHighlight: "<span>TREE</span> REMOVAL",
    video: {
      url: "https://www.youtube.com/embed/rRid6GCJtgc",
      bgImage: "/assets/img/tree/service-removal.jpg",
    },
    cta: {
      buttonUrl: "/contact",
      buttonText: "Get Free Estimate",
      bgImage: "/assets/img/tree/cta-bg.jpg",
    },
    description: `
    Complete tree removal to haul away problem trees, roots and all. When trimming isn't enough, we remove trees down to the stump. At Colores Tree Service we also offer trunk grinding services. We assess each job for safety and give you a clear quote before any work begins. <br><br>
    We handle hazardous, dead, or unwanted trees with proper rigging and cleanup. Our crew is licensed and insured. We leave your property tidy and ready for whatever you plan next.
  `,
    iconBoxes: [
      { iconClass: "fa6-solid:tree", title: "Full Removal" },
      { iconClass: "fa6-solid:shield-heart", title: "Licensed & Insured" },
      { iconClass: "fa6-solid:scissors", title: "Stump Grinding" },
      { iconClass: "fa6-solid:house-chimney", title: "Safe Rigging" },
      { iconClass: "fa6-solid:handshake", title: "Owner‑Operated Service" },
    ],
  },
  "tree-removals": {
    breadcrumb: [
      { label: "Home", url: "/" },
      { label: "Services", url: "/services" },
      { label: "Tree Removals" },
    ],
    titleHighlight: "<span>TREE</span> REMOVALS",
    video: {
      url: "https://www.youtube.com/embed/rRid6GCJtgc",
      bgImage: "/assets/img/tree/service-removal.jpg",
    },
    cta: {
      buttonUrl: "/contact",
      buttonText: "Get Free Estimate",
      bgImage: "/assets/img/tree/cta-bg.jpg",
    },
    description: `
    Complete tree removal to haul away problem trees, roots and all. When trimming isn't enough, we remove trees down to the stump. At Colores Tree Service we also offer trunk grinding services. We assess each job for safety and give you a clear quote before any work begins. <br><br>
    We handle hazardous, dead, or unwanted trees with proper rigging and cleanup. Our crew is licensed and insured. We leave your property tidy and ready for whatever you plan next.
  `,
    iconBoxes: [
      { iconClass: "fa6-solid:tree", title: "Full Removal" },
      { iconClass: "fa6-solid:shield-heart", title: "Licensed & Insured" },
      { iconClass: "fa6-solid:scissors", title: "Stump Grinding" },
      { iconClass: "fa6-solid:house-chimney", title: "Safe Rigging" },
      { iconClass: "fa6-solid:handshake", title: "Owner‑Operated Service" },
    ],
  },
  "tree-cleaning": {
    breadcrumb: [
      { label: "Home", url: "/" },
      { label: "Services", url: "/services" },
      { label: "Tree Cleaning" },
    ],
    titleHighlight: "<span>TREE</span> CLEANING",
    video: {
      url: "https://www.youtube.com/embed/rRid6GCJtgc",
      bgImage: "/assets/img/tree/service-tree-services.png",
    },
    cta: {
      buttonUrl: "/contact",
      buttonText: "Get Free Estimate",
      bgImage: "/assets/img/tree/cta-bg.jpg",
    },
    description: `
    Keep your property clean and safe with professional tree cleaning from Colores Tree Service. We remove fallen branches, debris, and storm damage and leave your yard pristine. <br><br>
    Regular cleanup prevents hazards and keeps your landscape looking its best. We haul away all debris and can coordinate with trimming or removal when needed.
  `,
    iconBoxes: [
      { iconClass: "fa6-solid:tree", title: "Debris Removal" },
      { iconClass: "fa6-solid:shield-heart", title: "Storm Cleanup" },
      { iconClass: "fa6-solid:scissors", title: "Branch Cleanup" },
      { iconClass: "fa6-solid:house-chimney", title: "Yard Ready" },
      { iconClass: "fa6-solid:handshake", title: "Owner‑Operated Service" },
    ],
  },
  "trunk-grinding-services": {
    breadcrumb: [
      { label: "Home", url: "/" },
      { label: "Services", url: "/services" },
      { label: "Trunk Grinding Services" },
    ],
    titleHighlight: "<span>TRUNK</span> GRINDING SERVICES",
    video: {
      url: "https://www.youtube.com/embed/rRid6GCJtgc",
      bgImage: "/assets/img/tree/service-stump.jpg",
    },
    cta: {
      buttonUrl: "/contact",
      buttonText: "Get Free Estimate",
      bgImage: "/assets/img/tree/cta-bg.jpg",
    },
    description: `
    We grind stumps and trunks after removal so your yard is level and ready for replanting or other use. Colores Tree Service uses professional equipment to remove stumps safely and cleanly. <br><br>
    Stump grinding eliminates tripping hazards, reduces pests, and frees up space for new plantings or landscaping. Get a free estimate for your project.
  `,
    iconBoxes: [
      { iconClass: "fa6-solid:tree", title: "Stump Grinding" },
      { iconClass: "fa6-solid:shield-heart", title: "Level & Clean" },
      { iconClass: "fa6-solid:scissors", title: "Debris Removal" },
      { iconClass: "fa6-solid:house-chimney", title: "Yard Ready" },
      { iconClass: "fa6-solid:handshake", title: "Owner‑Operated Service" },
    ],
  },
  "landscaping": {
    breadcrumb: [
      { label: "Home", url: "/" },
      { label: "Services", url: "/services" },
      { label: "Landscaping" },
    ],
    titleHighlight: "<span>LANDSCAPING</span>",
    video: {
      url: "https://www.youtube.com/embed/rRid6GCJtgc",
      bgImage: "/assets/img/tree/service-landscaping.png",
    },
    cta: {
      buttonUrl: "/contact",
      buttonText: "Get Free Estimate",
      bgImage: "/assets/img/tree/cta-bg.jpg",
    },
    description: `
    Full landscaping services to design and maintain your outdoor space. Colores Tree Service helps you get the look and function you want—from design to installation and ongoing care. <br><br>
    We combine tree expertise with landscape design so your property is healthy, beautiful, and easy to maintain. Get a free estimate for your next project.
  `,
    iconBoxes: [
      { iconClass: "fa6-solid:tree", title: "Design" },
      { iconClass: "fa6-solid:shield-heart", title: "Installation" },
      { iconClass: "fa6-solid:scissors", title: "Maintenance" },
      { iconClass: "fa6-solid:house-chimney", title: "Plantings" },
      { iconClass: "fa6-solid:handshake", title: "Owner‑Operated Service" },
    ],
  },
  "fence-installations": {
    breadcrumb: [
      { label: "Home", url: "/" },
      { label: "Services", url: "/services" },
      { label: "Fence Installations" },
    ],
    titleHighlight: "<span>FENCE</span> INSTALLATIONS",
    video: {
      url: "https://www.youtube.com/embed/rRid6GCJtgc",
      bgImage: "/assets/img/tree/service-fence-installations.png",
    },
    cta: {
      buttonUrl: "/contact",
      buttonText: "Get Free Estimate",
      bgImage: "/assets/img/tree/cta-bg.jpg",
    },
    description: `
    Quality fence installation and repair from Colores Tree Service. We build fences that look great and stand up to the elements. <br><br>
    Whether you need a new fence or repairs to an existing one, we provide a clear quote and professional installation. Get a free estimate today.
  `,
    iconBoxes: [
      { iconClass: "fa6-solid:tree", title: "New Fences" },
      { iconClass: "fa6-solid:shield-heart", title: "Repairs" },
      { iconClass: "fa6-solid:scissors", title: "Quality Materials" },
      { iconClass: "fa6-solid:house-chimney", title: "Property Lines" },
      { iconClass: "fa6-solid:handshake", title: "Owner‑Operated Service" },
    ],
  },
  "tree-service": {
    breadcrumb: [
      { label: "Home", url: "/" },
      { label: "Services", url: "/services" },
      { label: "Tree Services" },
    ],
    titleHighlight: "<span>TREE</span> SERVICES",
    video: {
      url: "https://www.youtube.com/embed/rRid6GCJtgc",
      bgImage: "/assets/img/tree/service-tree-services.png",
    },
    cta: {
      buttonUrl: "/contact",
      buttonText: "Get Free Estimate",
      bgImage: "/assets/img/tree/cta-bg.jpg",
    },
    description: `
    Trees are an essential feature of your outdoor space, so regular maintenance matters. Trimming removes dead or rotten branches to keep trees healthy. At Colores Tree Service we also offer fence installations and landscaping services. <br><br>
    We provide honest assessments and clear recommendations. During your free estimate we inspect your trees, discuss your concerns, and explain the best options for your property.
  `,
    iconBoxes: [
      { iconClass: "fa6-solid:tree", title: "Maintenance" },
      { iconClass: "fa6-solid:shield-heart", title: "Safety & Clearance" },
      { iconClass: "fa6-solid:scissors", title: "Pruning & Shaping" },
      { iconClass: "fa6-solid:house-chimney", title: "Fence & Landscaping" },
      { iconClass: "fa6-solid:handshake", title: "Owner‑Operated Service" },
    ],
  },
  "turf-installation": {
    breadcrumb: [
      { label: "Home", url: "/" },
      { label: "Services", url: "/services" },
      { label: "Turf Installation" },
    ],
    titleHighlight: "<span>TURF</span> INSTALLATION",
    video: {
      url: "https://www.youtube.com/embed/rRid6GCJtgc",
      bgImage: "/assets/img/tree/service-turf.png",
    },
    cta: {
      buttonUrl: "/contact",
      buttonText: "Get Free Estimate",
      bgImage: "/assets/img/tree/cta-bg.jpg",
    },
    description: `
    We transform ordinary yards into lush, green landscapes through expert turf installation. We help select the best turf for your area and install it with a meticulous process for a healthy, vibrant lawn. <br><br>
    Colores Tree Service brings the same care and professionalism to turf as we do to tree work. Get a free estimate and enjoy a yard you'll love.
  `,
    iconBoxes: [
      { iconClass: "fa6-solid:tree", title: "Turf Selection" },
      { iconClass: "fa6-solid:shield-heart", title: "Quality Install" },
      { iconClass: "fa6-solid:scissors", title: "Preparation" },
      { iconClass: "fa6-solid:house-chimney", title: "Lawn Care" },
      { iconClass: "fa6-solid:handshake", title: "Owner‑Operated Service" },
    ],
  },
};

function getServiceDetailsData(serviceId) {
  return (
    SERVICE_DATA_BY_ID[serviceId] ||
    SERVICE_DATA_BY_ID["tree-trimming"]
  );
}

const workingProcessData = {
  sectionTitle: "SIMPLE STEPS FOR OUR <span>TREE TRIMMING</span> WORK",

  subtitle: "HOW IT WORKS",
  steps: [
    {
      title: "01 | Free Estimate",
      description:
        "Call (831) 337-0454 or send a message with a few photos of your trees. We’ll schedule a time to walk the property, discuss your goals, and provide a clear quote before any work begins.",
    },
    {
      title: "02 | On‑Site Assessment",
      description:
        "We inspect tree health, structure, previous cuts, and clearance over roofs, driveways, and fences. Based on this, we recommend a trimming plan focused on safety and long‑term tree health.",
    },
    {
      title: "03 | Safe Professional Trimming",
      description:
        "Our crew arrives with the right equipment, sets up proper drop zones, and performs the trimming using industry‑standard techniques. We work carefully around your home, landscaping, and utilities.",
    },
    {
      title: "04 | Cleanup & Final Walkthrough",
      description:
        "We chip and haul branches, rake the work area, and leave your property tidy. Before we leave, we walk the job with you to make sure the trees look how you want and everything is finished properly.",
    },
  ],
};

const testimonialData = {
  title: "TESTIMONIAL",
  testimonialData: [
    {
      text: `I highly recommend Colores Tree Service. I've hired them a few times and I've always gotten <span>A+</span> service.`,
      img: "/assets/img/tree/avatar.png",
      name: "Cynthia C.",
      designation: "2024-07-05",
    },
    {
      text: `Atanasio and his crew did an excellent job cutting down a huge avocado tree and trimming other trees. He arrived on time, finished in a timely manner, cleaned up the backyard very well, and his price was reasonable. I would highly recommend him and his crew.`,
      img: "/assets/img/tree/avatar.png",
      name: "Armando S.",
      designation: "2023-07-02",
    },
    {
      text: `Very fast and responsive service. They came the very next day, provided a quote, and completed the job within two hours. Both the front yard and backyard looked spotless.`,
      img: "/assets/img/tree/avatar.png",
      name: "Alma P.",
      designation: "2023-05-18",
    },
  ],
};

const cardData = {
  backgroundImage: "/assets/img/tree/cta-bg.jpg",
  tags: ["Tree Service", "Licensed & Insured", "Free Estimates"],
  title: "NEED TREE SERVICE? <br /> GET A FREE ESTIMATE TODAY",
  buttonLink: "/contact",
};

export default function ServiceDetailsPage() {
  const { serviceId } = useParams();
  const serviceDetailsData = getServiceDetailsData(serviceId);
  pageTitle("Service Details");
  return (
    <>
      <ServiceDetailsSection data={serviceDetailsData} />{" "}
      <WorkingProcess data={workingProcessData} />
      <TestimonialSection1 data={testimonialData} />
      <CardSection data={cardData} bgColor={"cs_color_1"} />
    </>
  );
}
