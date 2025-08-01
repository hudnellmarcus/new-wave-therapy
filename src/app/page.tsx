"use client";
import Hero from "./components/Hero";
import AboutOption5 from "./components/about-options/AboutOption5";
import AboutOption6 from "./components/about-options/AboutOption6";
import TeamGrid from "./components/TeamGrid";

const Home = () => {
  return (
    <>
      <Hero />
      <AboutOption6 /> 
      <AboutOption5 /> 
      <TeamGrid />
    </>
  );
};

export default Home;
