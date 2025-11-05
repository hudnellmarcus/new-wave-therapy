export default function OrganizationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    "@id": "https://www.newwavetherapy.com/#organization",
    name: "New Wave Therapy",
    url: "https://www.newwavetherapy.com",
    description:
      "Professional virtual therapy services with a collaborative team of experienced therapists providing online counseling and mental health support.",
    medicalSpecialty: ["Psychology", "MentalHealth"],
    serviceType: [
      "Virtual Therapy",
      "Online Counseling",
      "Teletherapy",
      "Mental Health Services",
    ],
    knowsAbout: [
      "Mental Health",
      "Therapy",
      "Counseling",
      "Psychology",
      "Virtual Healthcare",
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5",
      reviewCount: "1",
    },
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer service",
      availableLanguage: "English",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
