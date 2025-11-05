import { Metadata } from "next";
import Resources from "../components/Resources";

export const metadata: Metadata = {
  title: "Resources",
  description:
    "Mental health resources, articles, and helpful information from New Wave Therapy. Access tools and guidance to support your mental wellness journey.",
  openGraph: {
    title: "Resources | New Wave Therapy",
    description:
      "Mental health resources, articles, and helpful information to support your wellness journey.",
    url: "https://www.newwavetherapy.com/resources",
  },
  twitter: {
    title: "Resources | New Wave Therapy",
    description:
      "Mental health resources and helpful information for your wellness journey.",
  },
};

const ResourcesPage = () => {
  return (
    <main>
      <Resources />
    </main>
  );
};

export default ResourcesPage;