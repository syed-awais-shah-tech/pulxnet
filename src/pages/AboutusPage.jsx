import React from "react";
import PageHeader from "../components/PageHeader";
import AboutUs from "../components/AboutUs";
import TeamSection from "../components/TeamSection";

function AboutusPage() {
    const headerProps = {
        title: "About Us",
        src: "/images/d5c4680d34ba55cff683085da2cf0786a3885aaa.jpg", // Replace with actual image URL
        alt: "About Us Header Image"
    };
    
const teamData = [
  {
    name: "Zane Savell",
    role: "CEO",
    bio: "11+ years in outbound, product, growth; team mentor.",
    image: "3edf170860bd8cbc37debc437ee46cfc812c7918.jpg",
  },
  {
    name: "Maya Mathy",
    role: "PM",
    bio: "High-impact PM; data-first; brings joy.",
    image: "fcf5dbf8a60f8660b370b432520d1e7ddd3cf12b.jpg",
  },
  {
    name: "Alvida Jensen",
    role: "Lead Designer",
    bio: "Creates clean interfaces with a crafted workflow.",
    image: "a37b1d7ec0bf00c9ee7d65223824d3892e7e7619.jpg",
  },
  {
    name: "Karia Botney",
    role: "Marketing",
    bio: "Content strategist and community lead.",
    image: "6be6ecfed0aeaa1e8fbaa6f9c45badf0d7a763db.jpg",
  },
  {
    name: "Dominic Gomez",
    role: "Engineer",
    bio: "Full-stack specialist, performance focused.",
    image: "284098299f1f29ed0793eb101ef988d3f0ca24ed.jpg",
  },
  {
    name: "James Vial",
    role: "Support",
    bio: "Customer-first; elevates every experience.",
    image: "",
  },
];

    return (
        <>
          <PageHeader headerProps={headerProps}/>
          <AboutUs/>
          <TeamSection teamData={teamData}/>
        </>
    );
    }
export default AboutusPage;