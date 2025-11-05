interface PersonSchemaProps {
  name: string;
  title: string;
  credentials?: string;
  specializations?: string[];
  slug: string;
  imageUrl?: string;
}

export default function PersonSchema({
  name,
  title,
  credentials,
  specializations,
  slug,
  imageUrl,
}: PersonSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `https://www.newwavetherapy.com/team/${slug}#person`,
    name: credentials ? `${name}, ${credentials}` : name,
    jobTitle: title,
    worksFor: {
      "@type": "MedicalBusiness",
      "@id": "https://www.newwavetherapy.com/#organization",
      name: "New Wave Therapy",
    },
    knowsAbout: specializations || [],
    url: `https://www.newwavetherapy.com/team/${slug}`,
    ...(imageUrl && { image: imageUrl }),
    description: `${name} is a ${title} at New Wave Therapy${
      specializations && specializations.length > 0
        ? `, specializing in ${specializations.join(", ")}`
        : ""
    }.`,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
