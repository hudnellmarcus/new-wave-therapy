"use client";
import Hero from "./components/Hero";
import AboutOption1 from "./components/about-options/AboutOption1";
import AboutOption2 from "./components/about-options/AboutOption2";
import AboutOption3 from "./components/about-options/AboutOption3";
import AboutOption4 from "./components/about-options/AboutOption4";
import AboutOption5 from "./components/about-options/AboutOption5";
import AboutOption6 from "./components/about-options/AboutOption6";
import TeamGrid from "./components/TeamGrid";

const Home = () => {
  return (
    <>
      <Hero />
      
      {/* <AboutOption1 /> - Split layout with image placeholder and CTA button */}
      <AboutOption2 /> {/* Centered design with quote style and service highlights */}
      {/* <AboutOption3 /> - Two-column with statistics and specializations list */}
      {/* <AboutOption4 /> - Values-focused with gradient cards and prominent CTA section */}
      <AboutOption5 /> {/* Journey/process design with timeline and step-by-step approach */}
      {/* <AboutOption6 /> - Modern asymmetrical layout with overlapping elements */}
      
      <TeamGrid />
    </>
  );
};

export default Home;
