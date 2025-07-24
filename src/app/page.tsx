"use client";
import Hero from "./components/Hero";
import AboutOption1 from "./components/AboutOption1";
import AboutOption2 from "./components/AboutOption2";
import AboutOption3 from "./components/AboutOption3";
import AboutOption4 from "./components/AboutOption4";
import AboutOption5 from "./components/AboutOption5";
import AboutOption6 from "./components/AboutOption6";

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
    </>
  );
};

export default Home;
