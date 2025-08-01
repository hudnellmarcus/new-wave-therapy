"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

interface FAQItem {
  id: number;
  question: string;
  answer: string;
  color: string;
}

interface FAQCategory {
  title: string;
  items: FAQItem[];
}

const FAQ = () => {
  const [flippedCards, setFlippedCards] = useState<Set<number>>(new Set());
  const [expandedSection, setExpandedSection] = useState<string | null>("Insurance & Billing");

  const categories: FAQCategory[] = [
    {
      title: "Insurance & Billing",
      items: [
        {
          id: 1,
          question: "Lorem ipsum dolor sit amet?",
          answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          color: "bg-nwt-coral"
        },
        {
          id: 2,
          question: "Consectetur adipiscing elit?",
          answer: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
          color: "bg-nwt-peach"
        },
        {
          id: 3,
          question: "Sed do eiusmod tempor?",
          answer: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
          color: "bg-nwt-light-teal"
        },
        {
          id: 4,
          question: "Incididunt ut labore?",
          answer: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
          color: "bg-nwt-mint"
        },
        {
          id: 5,
          question: "Dolore magna aliqua?",
          answer: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
          color: "bg-nwt-salmon"
        },
        {
          id: 6,
          question: "Ut enim ad minim?",
          answer: "Totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt.",
          color: "bg-nwt-cream"
        }
      ]
    },
    {
      title: "Services & Approach",
      items: [
        {
          id: 7,
          question: "Veniam quis nostrud?",
          answer: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti.",
          color: "bg-nwt-coral"
        },
        {
          id: 8,
          question: "Exercitation ullamco?",
          answer: "Atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.",
          color: "bg-nwt-peach"
        },
        {
          id: 9,
          question: "Laboris nisi ut?",
          answer: "Similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.",
          color: "bg-nwt-light-teal"
        },
        {
          id: 10,
          question: "Aliquip ex ea commodo?",
          answer: "Et harum quidem rerum facilis est et expedita distinctio nam libero tempore cum soluta nobis.",
          color: "bg-nwt-mint"
        },
        {
          id: 11,
          question: "Consequat duis aute?",
          answer: "Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet.",
          color: "bg-nwt-salmon"
        },
        {
          id: 12,
          question: "Irure dolor in?",
          answer: "Ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.",
          color: "bg-nwt-cream"
        }
      ]
    },
    {
      title: "Scheduling & Process",
      items: [
        {
          id: 13,
          question: "Reprehenderit in voluptate?",
          answer: "Velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat cupidatat non proident.",
          color: "bg-nwt-coral"
        },
        {
          id: 14,
          question: "Sunt in culpa qui?",
          answer: "Officia deserunt mollitia animi id est laborum et dolorum fuga et harum quidem rerum facilis est.",
          color: "bg-nwt-peach"
        },
        {
          id: 15,
          question: "Et expedita distinctio?",
          answer: "Nam libero tempore cum soluta nobis est eligendi optio cumque nihil impedit quo minus.",
          color: "bg-nwt-light-teal"
        },
        {
          id: 16,
          question: "Id quod maxime?",
          answer: "Placeat facere possimus omnis voluptas assumenda est omnis dolor repellendus temporibus autem.",
          color: "bg-nwt-mint"
        },
        {
          id: 17,
          question: "Quibusdam et aut?",
          answer: "Officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint.",
          color: "bg-nwt-salmon"
        },
        {
          id: 18,
          question: "Molestiae non recusandae?",
          answer: "Itaque earum rerum hic tenetur a sapiente delectus ut aut reiciendis voluptatibus maiores alias.",
          color: "bg-nwt-cream"
        }
      ]
    },
    {
      title: "About Our Practice",
      items: [
        {
          id: 19,
          question: "Consequatur aut perferendis?",
          answer: "Doloribus asperiores repellat sed ut perspiciatis unde omnis iste natus error sit voluptatem.",
          color: "bg-nwt-coral"
        },
        {
          id: 20,
          question: "Accusantium doloremque?",
          answer: "Laudantium totam rem aperiam eaque ipsa quae ab illo inventore veritatis et quasi architecto.",
          color: "bg-nwt-peach"
        },
        {
          id: 21,
          question: "Beatae vitae dicta?",
          answer: "Sunt explicabo nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.",
          color: "bg-nwt-light-teal"
        },
        {
          id: 22,
          question: "Sed quia consequuntur?",
          answer: "Magni dolores eos qui ratione voluptatem sequi nesciunt neque porro quisquam est qui dolorem.",
          color: "bg-nwt-mint"
        },
        {
          id: 23,
          question: "Ipsum quia dolor?",
          answer: "Sit amet consectetur adipisci velit sed quia non numquam eius modi tempora incidunt.",
          color: "bg-nwt-salmon"
        },
        {
          id: 24,
          question: "Ut labore et dolore?",
          answer: "Magnam aliquam quaerat voluptatem ut enim ad minima veniam quis nostrum exercitationem ullam.",
          color: "bg-nwt-cream"
        }
      ]
    }
  ];

  const toggleCard = (id: number) => {
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

  return (
    <section className="py-16 relative">
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">Frequently Asked Questions</h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Lorem ipsum dolor sit amet consectetur adipiscing elit ut aliquam 
            purus sit amet luctus venenatis lectus magna fringilla
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
                      {category.items.map((item) => (
                        <motion.div
                          key={item.id}
                          className="relative h-40 cursor-pointer"
                          onClick={() => toggleCard(item.id)}
                          whileHover={{ scale: 1.03 }}
                          transition={{ duration: 0.2 }}
                        >
                          <motion.div
                            className="absolute inset-0 w-full h-full"
                            style={{ transformStyle: "preserve-3d" }}
                            animate={{ rotateY: flippedCards.has(item.id) ? 180 : 0 }}
                            transition={{ duration: 0.6 }}
                          >
                            {/* Front of card */}
                            <div 
                              className={`absolute inset-0 w-full h-full ${item.color} rounded-lg p-4 flex items-center justify-center text-center shadow-lg border border-white/20`}
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
                      ))}
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