import { Metadata } from "next";
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
  return <RetroTeamMember therapistSlug={therapist} />;
};

export default TherapistPage;