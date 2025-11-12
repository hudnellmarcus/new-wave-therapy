import { Metadata } from "next";
import Link from "next/link";
import RetroTeamMember from "../../components/RetroTeamMember";
import { client } from "@/sanity/client";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ therapist: string }>;
}): Promise<Metadata> {
  const { therapist } = await params;

  try {
    const query = `*[_type == "therapist" && slug.current == $slug][0] {
      name,
      title,
      credentials,
      bio,
      specializations
    }`;

    const therapistData = await client.fetch(query, { slug: therapist });

    if (!therapistData) {
      return {
        title: "Therapist Not Found",
        description: "The requested therapist profile could not be found.",
      };
    }

    const specializationsText =
      therapistData.specializations?.slice(0, 3).join(", ") || "";
    const description = `Meet ${therapistData.name}, ${
      therapistData.title || "Therapist"
    } at New Wave Therapy. ${
      specializationsText
        ? `Specializing in ${specializationsText}.`
        : ""
    } Book a virtual therapy session today.`;

    return {
      title: `${therapistData.name} - ${therapistData.title || "Therapist"}`,
      description,
      openGraph: {
        title: `${therapistData.name} | New Wave Therapy`,
        description,
        url: `https://www.newwavetherapy.com/team/${therapist}`,
      },
      twitter: {
        title: `${therapistData.name} | New Wave Therapy`,
        description,
      },
    };
  } catch {
    return {
      title: "Therapist Profile",
      description: "View therapist profile at New Wave Therapy.",
    };
  }
}

const TherapistPage = async ({
  params,
}: {
  params: Promise<{ therapist: string }>;
}) => {
  const { therapist } = await params;

  const query = `*[_type == "therapist" && slug.current == $slug][0] {
    _id,
    name,
    title,
    credentials,
    bio,
    specializations,
    education,
    email,
    pronouns,
    primaryPhoto,
    "slug": slug.current
  }`;

  const therapistData = await client.fetch(query, { slug: therapist });

  if (!therapistData) {
    return (
      <main className="min-h-screen text-white relative bg-stripe-overlay-light">
        <div className="relative z-10 max-w-5xl mx-auto px-6 py-16">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white mb-4">
              Therapist Not Found
            </h1>
            <Link
              href="/team"
              className="text-nwt-light-teal hover:underline"
            >
              Back to Team
            </Link>
          </div>
        </div>
      </main>
    );
  }

  return <RetroTeamMember therapist={therapistData} />;
};

export default TherapistPage;