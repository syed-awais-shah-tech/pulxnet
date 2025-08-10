import React from "react";
import Navbar from "../components/Navbar";
import Header from "../components/MainHeader";
import HighlightsStrip from "../components/HighlightsStrip";
import AboutUs from "../components/AboutUs";
import ProcessSection from "../components/ProcessSection";
import DiscoverSection from "../components/DiscoverSection";
import OurExpertise from "../components/OurExpertise";
import Contact from "../components/Contact";
import TeamSection from "../components/TeamSection";
import CourseSection from "../components/CourseSection";
import LatestPosts from "../components/LatestPosts";
import Testimonials from "../components/Testimonials";

function HomePage() {
  const processSteps = [
    {
      number: "01",
      title: "Research",
      iconClass: "fas fa-search",
      description:
        "We start by understanding your business, goals, and target users. This helps us define a strategy that ensures your project solves the right problems.",
    },
    {
      number: "02",
      title: "Design",
      iconClass: "fas fa-paint-brush",
      description:
        "Next, we create clean, user-focused designs that blend usability with modern aesthetics—ensuring a smooth and engaging user experience.",
    },
    {
      number: "03",
      title: "Develop",
      iconClass: "fas fa-code",
      description:
        "Our development team brings the designs to life with efficient coding and rigorous testing to ensure your product works flawlessly across all devices.",
    },
    {
      number: "04",
      title: "Test",
      iconClass: "fas fa-vial",
      description:
        "We conduct extensive testing for performance, bug resolution, and user experience to guarantee a flawless product.",
    }
  ];
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
  }
]

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
    }
  ];
const posts = [
  { date: "01 March", image: "/images/9d4bf35425e8ef3a7901934c3bbc68ee28b3a3cc.jpg", author: "Admin", comments: 3, title: "Top 5 Tech Trends Shaping the Future of Business", readTime: 5 },
  { date: "05 March", image: "/images/9d4bf35425e8ef3a7901934c3bbc68ee28b3a3cc.jpg", author: "Admin", comments: 2, title: "How AI is Revolutionizing Industries", readTime: 4 },
  { date: "10 March", image: "/images/9d4bf35425e8ef3a7901934c3bbc68ee28b3a3cc.jpg", author: "Admin", comments: 5, title: "The Future of Cloud Computing", readTime: 6 },
  { date: "12 March", image: "/images/9d4bf35425e8ef3a7901934c3bbc68ee28b3a3cc.jpg", author: "Admin", comments: 1, title: "Cybersecurity in 2025: What You Need to Know", readTime: 5 },
];

const testimonials = [
  {
    text: "It is a long established fact that a reader will be distracted by the readable content of a page...",
    name: "Samuel Karl",
    role: "CEO",
    image: "https://via.placeholder.com/48"
  },
  {
    text: "The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters...",
    name: "Daria Linney",
    role: "CIO",
    image: "https://via.placeholder.com/48"
  },
  {
    text: "Contrary to popular belief, Lorem Ipsum is not simply random text...",
    name: "Michael Davis",
    role: "CTO",
    image: "https://via.placeholder.com/48"
  }
];

  return (
    <>
      <Header />
      <HighlightsStrip />
      <AboutUs />
      <ProcessSection processSteps={processSteps}/>
      <DiscoverSection />
      <OurExpertise expertiseList={expertiseList} />
      <TeamSection teamData={teamData} />
      <CourseSection courses={courses} />
      <LatestPosts posts={posts} />
      <Testimonials testimonials={testimonials} />
      <Contact/>
    </>
  );
}
export default HomePage;
