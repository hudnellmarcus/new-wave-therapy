import { Metadata } from "next";
import Hero from "./components/Hero";
import About from "./components/About";
import ParallaxTransition from "./components/ParallaxTransition";
import TeamGrid from "./components/TeamGrid";
import Contact from "./components/Contact";

export const metadata: Metadata = {
  title: "Home",
  description:
    "New Wave Therapy offers professional virtual therapy services with a collaborative team of experienced therapists. Find the right therapist for your mental health journey.",
  openGraph: {
    title: "New Wave Therapy | Virtual Therapy Services",
    description:
      "Professional virtual therapy services with a collaborative team of experienced therapists. Start your mental health journey today.",
    url: "https://www.newwavetherapy.com",
  },
  twitter: {
    title: "New Wave Therapy | Virtual Therapy Services",
    description:
      "Professional virtual therapy services with a collaborative team of experienced therapists.",
  },
};

const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <ParallaxTransition />
      <TeamGrid headingLevel="h2" />
      <Contact headingLevel="h2" />
    </>
  );
};

export default Home;
