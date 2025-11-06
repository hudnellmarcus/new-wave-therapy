"use client";
import { useEffect, useState } from "react";
import { client } from "@/sanity/client";

interface FAQItem {
  question: string;
  answer: string;
}

const fallbackFAQs: FAQItem[] = [
    {
      question: "How much does therapy cost?",
      answer:
        "We offer therapy at $125 per session for those without insurance. For those who can afford it, our full fee is $175, which helps fund access for others. We also accept several major insurance providers.",
    },
    {
      question: "Do you accept insurance?",
      answer:
        "We work with most major insurance providers including Aetna, BlueCross BlueShield, Cigna, and UnitedHealth. We also offer sliding scale fees for those without coverage.",
    },
    {
      question: "What is your cancellation policy?",
      answer:
        "We require 24 hours notice for cancellations. Same-day cancellations may be subject to the full session fee unless due to emergency circumstances.",
    },
    {
      question: "How do I pay for sessions?",
      answer:
        "We accept cash, check, and all major credit cards. Payment is due at the time of service unless other arrangements have been made in advance.",
    },
    {
      question: "How do I schedule my first appointment?",
      answer:
        "You can schedule by calling our office, using our online booking system, or by filling out our contact form. We'll respond within 24 hours to confirm your appointment.",
    },
    {
      question: "What should I expect in my first session?",
      answer:
        "Your first session is about getting to know each other. We'll discuss your goals, concerns, and what brings you to therapy. This helps us create a personalized treatment plan together.",
    },
    {
      question: "How long are therapy sessions?",
      answer:
        "Standard therapy sessions are 50 minutes long. We also offer 80-minute extended sessions for deeper work when appropriate.",
    },
    {
      question: "How often should I come to therapy?",
      answer:
        "Most clients begin with weekly sessions. As you progress, we may adjust frequency based on your needs and goals. Some clients benefit from bi-weekly or monthly sessions.",
    },
    {
      question: "What therapy approaches do you use?",
      answer:
        "We use evidence-based approaches including CBT, DBT, EMDR, mindfulness-based therapy, and somatic approaches. Treatment is always tailored to your specific needs and preferences.",
    },
    {
      question: "Do you offer online therapy sessions?",
      answer:
        "Yes, we offer secure video therapy sessions for your convenience. Online sessions are just as effective as in-person for many concerns and provide flexibility in scheduling.",
    },
    {
      question: "What issues do you specialize in?",
      answer:
        "Our team specializes in anxiety, depression, trauma, relationship issues, life transitions, grief, and personal growth. We also offer specialized approaches for specific populations and concerns.",
    },
    {
      question: "Is everything I share confidential?",
      answer:
        "Yes, everything you share is confidential with rare exceptions required by law (such as immediate danger to self or others). We'll discuss confidentiality limits in detail during your first session.",
    },
    {
      question: "What makes New Wave Therapy different?",
      answer:
        "We combine evidence-based practices with a holistic, collaborative approach. Our team values authenticity, creativity, and meeting you exactly where you are in your journey.",
    },
    {
      question: "Can I choose my therapist?",
      answer:
        "Absolutely! We'll help match you with a therapist whose expertise and approach align with your needs and preferences. The therapeutic relationship is crucial to your success.",
    },
    {
      question: "Do you offer couples or family therapy?",
      answer:
        "Yes, several of our therapists specialize in couples and family therapy. We use approaches like Emotionally Focused Therapy (EFT) and the Gottman Method.",
    },
    {
      question: "What if I need additional support between sessions?",
      answer:
        "We provide crisis resources and encourage you to reach out if you're struggling. For ongoing support, we can discuss increasing session frequency or connecting you with additional resources.",
    },
    {
      question: "Do you have resources beyond therapy?",
      answer:
        "We maintain a comprehensive resource page with referrals for energy work, EMDR specialists, financial assistance programs, meditation groups, retreats, and specialized workshops.",
    },
];

export default function FAQSchema() {
  const [faqItems, setFaqItems] = useState<FAQItem[]>([]);

  useEffect(() => {
    const fetchFAQs = async () => {
      try {
        const query = `*[_type == "faq" && isActive == true] | order(category->displayOrder asc, displayOrder asc) {
          question,
          answer
        }`;

        const faqs: FAQItem[] = await client.fetch(query);

        if (faqs && faqs.length > 0) {
          setFaqItems(faqs);
        } else {
          setFaqItems(fallbackFAQs);
        }
      } catch {
        setFaqItems(fallbackFAQs);
      }
    };

    fetchFAQs();
  }, []);

  if (faqItems.length === 0) {
    return null;
  }

  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
