import React from "react";
import PageHeading from "../../Components/PageHeading";
import BlogSection from "../../Components/BlogSection";
import CardSection from "../../Components/CardSection";
import Sidebar from "../../Components/Sidebar/Sidebar";
import { pageTitle } from "../../helper";

const BreadcrumbsData = {
  backgroundImage: "/assets/img/tree/blog-heading-bg.jpg",
  title: "TREE CARE BLOG",
  breadcrumbs: [
    { label: "Home", link: "/" },
    { label: "Blog", active: true },
  ],
};

const blogData = {
  posts: [
    {
      id: 1,
      image: "/assets/img/tree/post-1.jpg",
      date: "07 Mar 2025",
      category: "Tree Care",
      title: "When to Trim vs. Remove: Making the Right Tree Decision",
      description:
        "Learn how professional arborists assess tree health, structure, and risk factors to determine whether trimming or removal is the best option for your property.",
      link: "/blog/when-to-trim-vs-remove-making-the-right-tree-decision",
    },
    {
      id: 2,
      image: "/assets/img/tree/post-2.jpg",
      date: "04 Mar 2025",
      category: "Tree Safety",
      title: "Signs Your Tree Needs Professional Attention",
      description:
        "Learn how a skilled warning signs that indicate your tree needs professional care’s dead branches and disease to structural issues that could pose safety risks tailored to your style and needs.",
      link: "/blog/signs-your-tree-needs-professional-attention",
    },
    {
      id: 3,
      image: "/assets/img/tree/post-3.jpg",
      date: "02 Mar 2024",
      category: "Tree Service",
      title: "Benefits of Professional Tree Care for Homeowners",
      description:
        "Explore why hiring licensed, insured tree service professionals protects your property, improves tree health, and saves money compared to DIY tree work or unlicensed contractors.",
      link: "/blog/benefits-of-professional-tree-care-for-homeowners",
    },
  ],
  pagination: [1, 2, 3, 4],
};

const cardData = {
  backgroundImage: "/assets/img/tree/cta-bg.jpg",
  tags: ["Tree Service", "Licensed & Insured", "Free Estimates"],
  title: "NEED TREE SERVICE? <br /> GET A FREE ESTIMATE TODAY",
  buttonLink: "/contact",
};

const SidebarData = {
  categoriesData: {
    category: "Categories",
    categories: [
      { name: "Tree Care", url: "/blog" },
      { name: "Tree Removal", url: "/blog" },
      { name: "Tree Trimming", url: "/blog" },
      { name: "Tree Safety", url: "/blog" },
      { name: "Stump Grinding", url: "/blog" },
    ],
  },

  recentPostsData: {
    recentPost: "Recent Posts",
    recentPosts: [
      {
        title: "When to Trim vs. Remove: Making the Right Tree Decision",
        date: "07 Mar 2025",
        image: "/assets/img/tree/post-1.jpg",
        url: "/blog/when-to-trim-vs-remove-making-the-right-tree-decision",
      },
      {
        title: "Signs Your Tree Needs Professional Attention",
        date: "04 Mar 2025",
        image: "/assets/img/tree/post-2.jpg",
        url: "/blog/signs-your-tree-needs-professional-attention",
      },
      {
        title: "Benefits of Professional Tree Care for Homeowners",
        date: "02 Mar 2024",
        image: "/assets/img/tree/post-3.jpg",
        url: "/blog/benefits-of-professional-tree-care-for-homeowners",
      },
    ],
  },

  archivesData: {
    archive: "Archives",
    archives: [
      { name: "Archives", url: "/archives" },
      { name: "15 Aug 2025", url: "/archives/2025-08-15" },
      { name: "20 Sep 2024", url: "/archives/2024-09-20" },
      { name: "11 Dec 2023", url: "/archives/2023-12-11" },
      { name: "25 Jun 2022", url: "/archives/2022-06-25" },
    ],
  },

  tagsData: {
    tag: "Tags",
    tags: [
      { name: "Tree Service", url: "/blog" },
      { name: "Arborist", url: "/blog" },
      { name: "Tree Removal", url: "/blog" },
      { name: "Tree Trimming", url: "/blog" },
      { name: "Tree Safety", url: "/blog" },
      { name: "Stump Grinding", url: "/blog" },
    ],
  },
};

export default function BlogPage() {
  pageTitle("Blog");
  return (
    <>
      <PageHeading data={BreadcrumbsData} />

      <section>
        <div className="cs_height_100 cs_height_lg_70" />
        <div className="container">
          <div className="row">
            <BlogSection data={blogData} />
            <Sidebar data={SidebarData} />
          </div>
        </div>
        <div className="cs_height_100 cs_height_lg_70" />
      </section>

      <CardSection data={cardData} />
    </>
  );
}
