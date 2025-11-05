import { Metadata } from "next";
import TeamGrid from "../components/TeamGrid";

export const metadata: Metadata = {
  title: "Our Team",
  description:
    "Meet our team of experienced therapists at New Wave Therapy. Each therapist brings unique expertise and specializations to provide personalized virtual mental health care.",
  openGraph: {
    title: "Our Team | New Wave Therapy",
    description:
      "Meet our team of experienced therapists. Find the right mental health professional for your needs.",
    url: "https://www.newwavetherapy.com/team",
  },
  twitter: {
    title: "Our Team | New Wave Therapy",
    description:
      "Meet our team of experienced therapists providing virtual mental health care.",
  },
};

const TeamPage = () => {
  return (
    <main className="min-h-screen pt-12">
      <TeamGrid />
    </main>
  );
};

export default TeamPage;