import { Metadata } from "next";
import Contact from "../components/Contact";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with New Wave Therapy. Schedule a consultation or ask questions about our virtual therapy services. We're here to support your mental health journey.",
  openGraph: {
    title: "Contact Us | New Wave Therapy",
    description:
      "Get in touch with New Wave Therapy. Schedule a consultation or ask questions about our virtual therapy services.",
    url: "https://www.newwavetherapy.com/contact",
  },
  twitter: {
    title: "Contact Us | New Wave Therapy",
    description:
      "Get in touch with New Wave Therapy for virtual therapy services.",
  },
};

const ContactPage = () => {
  return (
    <main className="pt-12">
      <Contact />
    </main>
  );
};

export default ContactPage;