export default function ServiceSchema() {
  const services = [
    {
      "@type": "Service",
      "@id": "https://www.newwavetherapy.com/#individual-therapy",
      name: "Individual Therapy",
      description:
        "One-on-one virtual therapy sessions tailored to your unique mental health needs. Our experienced therapists provide personalized support for anxiety, depression, stress, and personal growth.",
      serviceType: "Individual Therapy",
      provider: {
        "@type": "MedicalBusiness",
        "@id": "https://www.newwavetherapy.com/#organization",
        name: "New Wave Therapy",
      },
      areaServed: {
        "@type": "Country",
        name: "United States",
      },
      availableChannel: {
        "@type": "ServiceChannel",
        serviceType: "Online",
        availableLanguage: "English",
      },
    },
    {
      "@type": "Service",
      "@id": "https://www.newwavetherapy.com/#couples-therapy",
      name: "Couples Therapy",
      description:
        "Virtual couples counseling to strengthen relationships and improve communication. Work through challenges together with expert guidance in a supportive online environment.",
      serviceType: "Couples Therapy",
      provider: {
        "@type": "MedicalBusiness",
        "@id": "https://www.newwavetherapy.com/#organization",
        name: "New Wave Therapy",
      },
      areaServed: {
        "@type": "Country",
        name: "United States",
      },
      availableChannel: {
        "@type": "ServiceChannel",
        serviceType: "Online",
        availableLanguage: "English",
      },
    },
    {
      "@type": "Service",
      "@id": "https://www.newwavetherapy.com/#family-therapy",
      name: "Family Therapy",
      description:
        "Virtual family counseling sessions to improve family dynamics and communication. Our therapists help families navigate conflicts and build stronger connections together.",
      serviceType: "Family Therapy",
      provider: {
        "@type": "MedicalBusiness",
        "@id": "https://www.newwavetherapy.com/#organization",
        name: "New Wave Therapy",
      },
      areaServed: {
        "@type": "Country",
        name: "United States",
      },
      availableChannel: {
        "@type": "ServiceChannel",
        serviceType: "Online",
        availableLanguage: "English",
      },
    },
  ];

  const schema = {
    "@context": "https://schema.org",
    "@graph": services,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
