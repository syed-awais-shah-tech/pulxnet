import React from "react";
import Navbar from "../components/Navbar";
import Header from "../components/MainHeader";
import HighlightsStrip from "../components/HighlightsStrip";
import AboutUs from "../components/AboutUs";
import ProcessSection from "../components/ProcessSection";
import DiscoverSection from "../components/DiscoverSection";
import OurExpertise from "../components/OurExpertise";

function HomePage() {
  return (
    <>
      <Header />
      <HighlightsStrip />
      <AboutUs />
      <ProcessSection />
      <DiscoverSection />
      <OurExpertise />
    </>
  );
}
export default HomePage;
