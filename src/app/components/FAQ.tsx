"use client";
import { useState, useEffect, useMemo } from "react";
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

  // Fallback categories for when Sanity data isn't available
  const fallbackCategories: FAQCategory[] = useMemo(() => [
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
          answer: "We work with most major insurance providers including Aetna, BlueCross BlueShield, Cigna, and UnitedHealth. We also offer sliding scale fees for those without coverage.",
          displayOrder: 2,
          category: { title: "Insurance & Billing", displayOrder: 1 }
        },
        {
          _id: "3",
          question: "What is your cancellation policy?",
          answer: "We require 24 hours notice for cancellations. Same-day cancellations may be subject to the full session fee unless due to emergency circumstances.",
          displayOrder: 3,
          category: { title: "Insurance & Billing", displayOrder: 1 }
        },
        {
          _id: "4",
          question: "How do I pay for sessions?",
          answer: "We accept cash, check, and all major credit cards. Payment is due at the time of service unless other arrangements have been made in advance.",
          displayOrder: 4,
          category: { title: "Insurance & Billing", displayOrder: 1 }
        },
      ]
    },
    {
      title: "Getting Started",
      items: [
        {
          _id: "5",
          question: "How do I schedule my first appointment?",
          answer: "You can schedule by calling our office, using our online booking system, or by filling out our contact form. We'll respond within 24 hours to confirm your appointment.",
          displayOrder: 1,
          category: { title: "Getting Started", displayOrder: 2 }
        },
        {
          _id: "6",
          question: "What should I expect in my first session?",
          answer: "Your first session is about getting to know each other. We'll discuss your goals, concerns, and what brings you to therapy. This helps us create a personalized treatment plan together.",
          displayOrder: 2,
          category: { title: "Getting Started", displayOrder: 2 }
        },
        {
          _id: "7",
          question: "How long are therapy sessions?",
          answer: "Standard therapy sessions are 50 minutes long. We also offer 80-minute extended sessions for deeper work when appropriate.",
          displayOrder: 3,
          category: { title: "Getting Started", displayOrder: 2 }
        },
        {
          _id: "8",
          question: "How often should I come to therapy?",
          answer: "Most clients begin with weekly sessions. As you progress, we may adjust frequency based on your needs and goals. Some clients benefit from bi-weekly or monthly sessions.",
          displayOrder: 4,
          category: { title: "Getting Started", displayOrder: 2 }
        },
      ]
    },
    {
      title: "Our Approach",
      items: [
        {
          _id: "9",
          question: "What therapy approaches do you use?",
          answer: "We use evidence-based approaches including CBT, DBT, EMDR, mindfulness-based therapy, and somatic approaches. Treatment is always tailored to your specific needs and preferences.",
          displayOrder: 1,
          category: { title: "Our Approach", displayOrder: 3 }
        },
        {
          _id: "10",
          question: "Do you offer online therapy sessions?",
          answer: "Yes, we offer secure video therapy sessions for your convenience. Online sessions are just as effective as in-person for many concerns and provide flexibility in scheduling.",
          displayOrder: 2,
          category: { title: "Our Approach", displayOrder: 3 }
        },
        {
          _id: "11",
          question: "What issues do you specialize in?",
          answer: "Our team specializes in anxiety, depression, trauma, relationship issues, life transitions, grief, and personal growth. We also offer specialized approaches for specific populations and concerns.",
          displayOrder: 3,
          category: { title: "Our Approach", displayOrder: 3 }
        },
        {
          _id: "12",
          question: "Is everything I share confidential?",
          answer: "Yes, everything you share is confidential with rare exceptions required by law (such as immediate danger to self or others). We'll discuss confidentiality limits in detail during your first session.",
          displayOrder: 4,
          category: { title: "Our Approach", displayOrder: 3 }
        },
      ]
    },
    {
      title: "About Our Practice",
      items: [
        {
          _id: "13",
          question: "What makes New Wave Therapy different?",
          answer: "We combine evidence-based practices with a holistic, collaborative approach. Our team values authenticity, creativity, and meeting you exactly where you are in your journey.",
          displayOrder: 1,
          category: { title: "About Our Practice", displayOrder: 4 }
        },
        {
          _id: "14",
          question: "Can I choose my therapist?",
          answer: "Absolutely! We'll help match you with a therapist whose expertise and approach align with your needs and preferences. The therapeutic relationship is crucial to your success.",
          displayOrder: 2,
          category: { title: "About Our Practice", displayOrder: 4 }
        },
        {
          _id: "15",
          question: "Do you offer couples or family therapy?",
          answer: "Yes, several of our therapists specialize in couples and family therapy. We use approaches like Emotionally Focused Therapy (EFT) and the Gottman Method.",
          displayOrder: 3,
          category: { title: "About Our Practice", displayOrder: 4 }
        },
        {
          _id: "16",
          question: "What if I need additional support between sessions?",
          answer: "We provide crisis resources and encourage you to reach out if you're struggling. For ongoing support, we can discuss increasing session frequency or connecting you with additional resources.",
          displayOrder: 4,
          category: { title: "About Our Practice", displayOrder: 4 }
        },
        {
          _id: "17",
          question: "Do you have resources beyond therapy?",
          answer: "We maintain a comprehensive resource page with referrals for energy work, EMDR specialists, financial assistance programs, meditation groups, retreats, and specialized workshops.",
          displayOrder: 5,
          category: { title: "About Our Practice", displayOrder: 4 }
        },
      ]
    },
  ], []);

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
  }, [fallbackCategories]);


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
                      {category.items.map((item) => {
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