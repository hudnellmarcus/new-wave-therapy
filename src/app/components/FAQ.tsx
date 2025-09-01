"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { client } from "@/sanity/client";

interface FAQItem {
  _id: string;
  question: string;
  answer: string;
  displayOrder: number;
  category: {
    title: string;
    displayOrder: number;
  };
}

interface FAQCategory {
  title: string;
  items: FAQItem[];
}

const FAQ = () => {
  const [flippedCards, setFlippedCards] = useState<Set<string>>(new Set());
  const [expandedSection, setExpandedSection] = useState<string | null>(null);
  const [categories, setCategories] = useState<FAQCategory[]>([]);
  const [loading, setLoading] = useState(true);

  // Color cycle for automatic assignment
  const colorCycle = ["bg-nwt-coral", "bg-nwt-peach", "bg-nwt-light-teal", "bg-nwt-mint", "bg-nwt-salmon", "bg-nwt-cream"];

  useEffect(() => {
    const fetchFAQs = async () => {
      try {
        const query = `*[_type == "faq" && isActive == true] | order(category->displayOrder asc, displayOrder asc) {
          _id,
          question,
          answer,
          displayOrder,
          category-> {
            title,
            displayOrder
          }
        }`;
        
        const faqs: FAQItem[] = await client.fetch(query);
        
        // Group FAQs by category
        const groupedCategories: FAQCategory[] = [];
        const categoryMap = new Map<string, FAQCategory>();
        
        faqs.forEach((faq) => {
          const categoryTitle = faq.category.title;
          if (!categoryMap.has(categoryTitle)) {
            categoryMap.set(categoryTitle, {
              title: categoryTitle,
              items: []
            });
            groupedCategories.push(categoryMap.get(categoryTitle)!);
          }
          categoryMap.get(categoryTitle)!.items.push(faq);
        });
        
        setCategories(groupedCategories);
        // Set first category as expanded by default
        if (groupedCategories.length > 0) {
          setExpandedSection(groupedCategories[0].title);
        }
      } catch (error) {
        console.log('Failed to fetch FAQs, using fallback data:', error);
        // Keep existing fallback data structure
        setCategories(fallbackCategories);
        setExpandedSection("Insurance & Billing");
      }
      setLoading(false);
    };

    fetchFAQs();
  }, []);

  // Fallback categories for when Sanity data isn't available
  const fallbackCategories: FAQCategory[] = [
    {
      title: "Insurance & Billing",
      items: [
        {
          _id: "1",
          question: "How much does therapy cost?",
          answer: "We offer therapy at $125 per session for those without insurance. For those who can afford it, our full fee is $175, which helps fund access for others. We also accept several major insurance providers.",
          displayOrder: 1,
          category: { title: "Insurance & Billing", displayOrder: 1 }
        },
        {
          _id: "2",
          question: "Do you accept insurance?",
          answer: "Yes! We accept Aetna, Cigna, UnitedHealthcare (UHC)/Optum, and Blue Shield. We're committed to making therapy accessible through in-network options whenever possible.",
          displayOrder: 2,
          category: { title: "Insurance & Billing", displayOrder: 1 }
        },
        {
          _id: "3",
          question: "What if my insurance isn't listed?",
          answer: "If you have out-of-network benefits, you can pay in full and submit our receipt (superbill) to your insurance provider for retroactive reimbursement. Contact us to discuss your specific situation.",
          displayOrder: 3,
          category: { title: "Insurance & Billing", displayOrder: 1 }
        },
        {
          _id: "4",
          question: "Do you offer financial assistance?",
          answer: "Yes! We partner with programs like the Loveland Foundation for Black and non-binary clients, offering 4-12 sessions. Check our resources page for additional financial support options.",
          displayOrder: 4,
          category: { title: "Insurance & Billing", displayOrder: 1 }
        },
        {
          _id: "5",
          question: "What is the activist pricing option?",
          answer: "If you can afford our full fee of $175, we view it as a contribution that helps fund reduced-rate access for others. This shared commitment keeps therapy both ethical and sustainable.",
          displayOrder: 5,
          category: { title: "Insurance & Billing", displayOrder: 1 }
        },
      ]
    },
    {
      title: "Scheduling & Process",
      items: [
        {
          _id: "6",
          question: "When can I schedule appointments?",
          answer: "We offer telehealth appointments Monday-Friday, plus some weekends. You can book week-to-week or choose a standing appointment that works best for your schedule.",
          displayOrder: 1,
          category: { title: "Scheduling & Process", displayOrder: 2 }
        },
        {
          _id: "7",
          question: "How does the initial consultation work?",
          answer: "Start with a FREE 30-minute video consultation. You can meet with as many clinicians as you'd like to ensure you find the best match for your needs.",
          displayOrder: 2,
          category: { title: "Scheduling & Process", displayOrder: 2 }
        },
        {
          _id: "8",
          question: "What happens in the first few sessions?",
          answer: "The first 1-3 sessions focus on your history, identity, and therapy goals. This allows us to do the best possible work when we're fully informed about where you came from and who you are.",
          displayOrder: 3,
          category: { title: "Scheduling & Process", displayOrder: 2 }
        },
        {
          _id: "9",
          question: "What is your cancellation policy?",
          answer: "Cancel more than 24 hours ahead at no charge. Within 24 hours, there's a $50 fee. Same-day cancellations are liable for the full session fee, though we offer a $30 reschedule option for emergencies.",
          displayOrder: 4,
          category: { title: "Scheduling & Process", displayOrder: 2 }
        },
        {
          _id: "10",
          question: "Can I end therapy at any time?",
          answer: "Absolutely. You have full control to end therapy when goals are reached or continue with weekly sessions, monthly check-ins, or reaching out as needed for years. You orchestrate the relationship.",
          displayOrder: 5,
          category: { title: "Scheduling & Process", displayOrder: 2 }
        },
      ]
    },
    {
      title: "Services & Approach",
      items: [
        {
          _id: "11",
          question: "What therapy approaches do you use?",
          answer: "Our clinicians use diverse approaches including somatic therapy, CBT, play therapy, family systems, EMDR, liberation psychology, and trauma-informed care, tailored to each client's needs.",
          displayOrder: 1,
          category: { title: "Services & Approach", displayOrder: 3 }
        },
        {
          _id: "12",
          question: "What makes your practice unique?",
          answer: "We offer collaborative team supervision, meaning you benefit from multiple perspectives, not just one. Our clinicians meet weekly to think collectively about client care, supported by shared knowledge.",
          displayOrder: 2,
          category: { title: "Services & Approach", displayOrder: 3 }
        },
        {
          _id: "13",
          question: "Do you work with specific communities?",
          answer: "Yes! We're committed to serving diverse communities, with clinicians who specialize in LGBTQIA+, neurodivergent, multicultural, and trauma-informed care. We offer sessions in English and Spanish.",
          displayOrder: 3,
          category: { title: "Services & Approach", displayOrder: 3 }
        },
        {
          _id: "14",
          question: "What age groups do you serve?",
          answer: "We work with children, teens, adults, couples, and families. Our clinicians have specialized training in different age groups and can match you with the right fit.",
          displayOrder: 4,
          category: { title: "Services & Approach", displayOrder: 3 }
        },
        {
          _id: "15",
          question: "Do you offer specialized treatments?",
          answer: "Our team includes specialists in areas like somatic therapy, play therapy, EMDR, eating disorders, immigration trauma, chronic illness, and creative/expressive therapies.",
          displayOrder: 5,
          category: { title: "Services & Approach", displayOrder: 3 }
        },
      ]
    },
    {
      title: "About Our Practice",
      items: [
        {
          _id: "16",
          question: "What are your practice values?",
          answer: "Our practice is rooted in accessibility, diversity, and collaboration. We keep fees low, honor a wide range of identities, and bring shared team insight into each client's care.",
          displayOrder: 1,
          category: { title: "About Our Practice", displayOrder: 4 }
        },
        {
          _id: "17",
          question: "How do you support accessibility?",
          answer: "We operate on conscious capitalism principles, accepting in-network insurance and offering reduced rates to widen access to high-quality mental health care for those who need it most.",
          displayOrder: 2,
          category: { title: "About Our Practice", displayOrder: 4 }
        },
        {
          _id: "18",
          question: "What is your team approach?",
          answer: "While you'll choose your individual therapist, each clinician is supported by weekly team supervision. This means you benefit from many perspectives and collective accountability, not just one.",
          displayOrder: 3,
          category: { title: "About Our Practice", displayOrder: 4 }
        },
        {
          _id: "19",
          question: "Do you have diversity representation?",
          answer: "Yes! We've built a team that reflects the diversity of the communities we serve, with clinicians from various backgrounds who bring lived experience and cultural understanding to their work.",
          displayOrder: 4,
          category: { title: "About Our Practice", displayOrder: 4 }
        },
        {
          _id: "20",
          question: "Do you provide additional resources?",
          answer: "We maintain a comprehensive resource page with referrals for energy work, EMDR specialists, financial assistance programs, meditation groups, retreats, and specialized workshops.",
          displayOrder: 5,
          category: { title: "About Our Practice", displayOrder: 4 }
        },
      ]
    },
  ];

  const toggleCard = (id: string) => {
    const newFlippedCards = new Set(flippedCards);
    if (newFlippedCards.has(id)) {
      newFlippedCards.delete(id);
    } else {
      newFlippedCards.add(id);
    }
    setFlippedCards(newFlippedCards);
  };

  const toggleSection = (title: string) => {
    if (expandedSection === title) {
      setExpandedSection(null);
    } else {
      setExpandedSection(title);
    }
  };

  if (loading) {
    return (
      <section className="py-16 relative">
        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-white mb-4">Frequently Asked Questions</h1>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">Loading FAQs...</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 relative">
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">Frequently Asked Questions</h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Get answers to common questions about our therapy services, pricing, and approach.
          </p>
        </div>
        
        <div className="space-y-6 max-w-7xl mx-auto">
          {categories.map((category) => (
            <div key={category.title} className="space-y-3">
              <button
                onClick={() => toggleSection(category.title)}
                className="w-full flex items-center justify-between p-3 bg-black/60 backdrop-blur-sm rounded-lg border border-white/20 hover:bg-black/70 transition-colors"
              >
                <h2 className="text-xl font-bold text-white">{category.title}</h2>
                <motion.div
                  animate={{ rotate: expandedSection === category.title ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown className="w-6 h-6 text-white" />
                </motion.div>
              </button>
              
              <AnimatePresence>
                {expandedSection === category.title && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.4 }}
                    className="overflow-hidden"
                  >
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                      {category.items.map((item, index) => {
                        const cardColor = colorCycle[item.displayOrder % colorCycle.length];
                        return (
                        <motion.div
                          key={item._id}
                          className="relative h-40 cursor-pointer"
                          onClick={() => toggleCard(item._id)}
                          whileHover={{ scale: 1.03 }}
                          transition={{ duration: 0.2 }}
                        >
                          <motion.div
                            className="absolute inset-0 w-full h-full"
                            style={{ transformStyle: "preserve-3d" }}
                            animate={{ rotateY: flippedCards.has(item._id) ? 180 : 0 }}
                            transition={{ duration: 0.6 }}
                          >
                            {/* Front of card */}
                            <div 
                              className={`absolute inset-0 w-full h-full ${cardColor} rounded-lg p-4 flex items-center justify-center text-center shadow-lg border border-white/20`}
                              style={{ backfaceVisibility: "hidden" }}
                            >
                              <h3 className="text-sm font-bold text-black">
                                {item.question}
                              </h3>
                            </div>
                            
                            {/* Back of card */}
                            <div 
                              className="absolute inset-0 w-full h-full bg-black/90 backdrop-blur-sm rounded-lg p-4 flex items-center justify-center text-center shadow-lg border border-white/20"
                              style={{ 
                                transform: "rotateY(180deg)",
                                backfaceVisibility: "hidden"
                              }}
                            >
                              <p className="text-white text-xs leading-relaxed">
                                {item.answer}
                              </p>
                            </div>
                          </motion.div>
                        </motion.div>
                      )})}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-white/60 text-sm">
            Click any section to expand, then click cards to reveal answers
          </p>
        </div>
      </div>
    </section>
  );
};

export default FAQ;