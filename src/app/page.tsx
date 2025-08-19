"use client";
import Hero from "./components/Hero";
import About from "./components/About";
import ParallaxTransition from "./components/ParallaxTransition";
import TeamGrid from "./components/TeamGrid";
import Contact from "./components/Contact";

const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <ParallaxTransition />
      <TeamGrid />
      <Contact />
    </>
  );
};

export default Home;
