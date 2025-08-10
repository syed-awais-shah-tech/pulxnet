import React from "react";
import PageHeader from "../components/PageHeader";
import CourseSection from "../components/CourseSection";
import DiscoverSection from "../components/DiscoverSection";
import OurExpertise from "../components/OurExpertise";

function ServicesPage() {
    const headerProps = {
        title: "Services",
        src: "/images/6fecb51da0f4ec53ab18597e7ccc0253e34d5b4a.jpg", // Replace with actual image URL
        alt: "Services Header Image"
    };
    const expertiseList = [
  {
    number: "01",
    title: "IT Network Solutions",
    iconClass: "fas fa-network-wired",
    description:
      "Designing and managing reliable network infrastructures, from small offices to enterprise-level systems, ensuring secure and fast connectivity.",
  },
  {
    number: "02",
    title: "Cybersecurity",
    iconClass: "fas fa-shield-alt",
    description:
      "Implementing multi-layered security strategies, threat detection, and compliance solutions to protect your business data from cyber threats.",
  },
  {
    number: "03",
    title: "Cloud Services",
    iconClass: "fas fa-cloud",
    description:
      "Offering cloud migration, storage, and computing solutions that provide scalability, flexibility, and cost efficiency for your business.",
  },
  {
    number: "04",
    title: "DevOps & Automation",
    iconClass: "fas fa-cogs",
    description:
      "Streamlining development and operations through CI/CD pipelines, containerization, and automated workflows for faster product delivery.",
  },
  {
    number: "05",
    title: "Global Remote Services",
    iconClass: "fas fa-globe",
    description:
      "Providing IT support, monitoring, and project management services worldwide, ensuring your systems run smoothly 24/7.",
  },
  {
    number: "06",
    title: "CRM Solutions",
    iconClass: "fas fa-users",
    description:
      "Developing and customizing Customer Relationship Management systems to enhance customer engagement and streamline sales processes.",
  },
  {
    number: "07",
    title: "Hospital Management System (HMS)",
    iconClass: "fas fa-hospital",
    description:
      "Building secure and efficient hospital systems for patient records, billing, inventory, and appointment management.",
  },
  {
    number: "08",
    title: "School Management System",
    iconClass: "fas fa-school",
    description:
      "Creating digital platforms for attendance, grades, schedules, and communication between teachers, students, and parents.",
  },
  {
    number: "09",
    title: "Point of Sale (POS)",
    iconClass: "fas fa-cash-register",
    description:
      "Designing POS systems for fast, accurate transactions, real-time sales tracking, and inventory control.",
  },
  {
    number: "10",
    title: "Restaurant Management System",
    iconClass: "fas fa-utensils",
    description:
      "Offering systems to manage menus, table reservations, orders, billing, and kitchen coordination efficiently.",
  },
  {
    number: "11",
    title: "Pharmacy Management System",
    iconClass: "fas fa-prescription-bottle-alt",
    description:
      "Creating platforms for inventory control, prescription management, sales tracking, and compliance in pharmacies.",
  },
  {
    number: "12",
    title: "Ongoing Support & Optimization",
    iconClass: "fas fa-sync-alt",
    description:
      "Providing continuous monitoring, updates, and optimizations to keep systems secure, efficient, and up-to-date.",
  }
];
const courses = [
    {
      instructor: "Kashif Abbas",
      image: "/images/0246e10e8c8cf972814eb82cd5b63b25db82ef35.png",
      instructorImg: "instructor1.jpg",
      title: "Professional IT training in CCNA",
      description:
        "Networking fundamentals and boost your IT career with expert-led CCNA training.",
      duration: "10 weeks",
      price: "$24.92",
      oldPrice: "$32.90",
      rating: "⭐⭐⭐⭐⭐",
      reviews: "(1.2K)",
    },
    {
      instructor: "Kashif Abbas",
      image: "/images/4a3a2f2b3d9e3a652bc9d81ed2e4d36d1148ad07.png",
      instructorImg: "instructor2.jpg",
      title: "Mastering Cloud Computing",
      description:
        "Learn cloud fundamentals and advanced deployment techniques with real projects.",
      duration: "8 weeks",
      price: "$29.99",
      oldPrice: "$39.99",
      rating: "⭐⭐⭐⭐",
      reviews: "(980)",
    },
    {
      instructor: "Kashif Abbas",
      image: "/images/4bf805350a1399465083305b7f84622dc7c592f1.png",
      instructorImg: "instructor3.jpg",
      title: "Cybersecurity Essentials",
      description:
        "Understand and protect against modern cyber threats using top tools.",
      duration: "12 weeks",
      price: "$34.50",
      oldPrice: "$44.00",
      rating: "⭐⭐⭐⭐⭐",
      reviews: "(2.1K)",
    },
    {
      instructor: "Kashif Abbas",
      image: "/images/a2ee0bbbec5cc0640125990426dd8a9bbf8a9255.png",
      instructorImg: "instructor4.jpg",
      title: "Full-Stack DevOps",
      description:
        "Build, deploy, and automate with the latest DevOps tools and pipelines.",
      duration: "9 weeks",
      price: "$27.45",
      oldPrice: "$36.00",
      rating: "⭐⭐⭐⭐",
      reviews: "(1.5K)",
    },
     {
      instructor: "Kashif Abbas",
      image: "/images/355e8fc8a0148f6b0946c7f6443fd0688de928bb.png",
      instructorImg: "instructor1.jpg",
      title: "Professional IT training in CCNA",
      description:
        "Networking fundamentals and boost your IT career with expert-led CCNA training.",
      duration: "10 weeks",
      price: "$24.92",
      oldPrice: "$32.90",
      rating: "⭐⭐⭐⭐⭐",
      reviews: "(1.2K)",
    },
    {
      instructor: "Kashif Abbas",
      image: "/images/63dd95a7e2370fe83c0d3951d3671782c136cec0.png",
      instructorImg: "instructor2.jpg",
      title: "Mastering Cloud Computing",
      description:
        "Learn cloud fundamentals and advanced deployment techniques with real projects.",
      duration: "8 weeks",
      price: "$29.99",
      oldPrice: "$39.99",
      rating: "⭐⭐⭐⭐",
      reviews: "(980)",
    },
    {
      instructor: "Kashif Abbas",
      image: "/images/143d84301f6365507aa63b5a4821fda43917e9ae.png",
      instructorImg: "instructor3.jpg",
      title: "Cybersecurity Essentials",
      description:
        "Understand and protect against modern cyber threats using top tools.",
      duration: "12 weeks",
      price: "$34.50",
      oldPrice: "$44.00",
      rating: "⭐⭐⭐⭐⭐",
      reviews: "(2.1K)",
    },
    {
      instructor: "Kashif Abbas",
      image: "/images/1aa493bdbb8c72f66d1291c16bf9d9c0246087da.png",
      instructorImg: "instructor4.jpg",
      title: "Full-Stack DevOps",
      description:
        "Build, deploy, and automate with the latest DevOps tools and pipelines.",
      duration: "9 weeks",
      price: "$27.45",
      oldPrice: "$36.00",
      rating: "⭐⭐⭐⭐",
      reviews: "(1.5K)",
    },
  ];
    return (
        <>
          <PageHeader headerProps={headerProps}/>
          <DiscoverSection />
          <OurExpertise expertiseList={expertiseList} />
          <CourseSection courses={courses}/>
        </>
    );
    }
export default ServicesPage;