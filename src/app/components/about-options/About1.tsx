"use client";
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { client } from "@/sanity/client";

interface AboutPageData {
  uniqueApproachHeadline: string;
  mainDescription: string;
  collaboration: string;
  diversity: string;
  financialSupport: string;
}

const About1 = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [aboutPage, setAboutPage] = useState<AboutPageData | null>(null);

  useEffect(() => {
    const fetchAboutPage = async () => {
      try {
        const query = `*[_type == "aboutPage"][0] {
          uniqueApproachHeadline,
          mainDescription,
          collaboration,
          diversity,
          financialSupport
        }`;
        const data = await client.fetch<AboutPageData>(query);
        setAboutPage(data);
      } catch {
      }
    };

    fetchAboutPage();
  }, []);

  const pillars = [
    {
      title: "Collaboration",
      description: aboutPage?.collaboration || "We meet as a group every week to witness to your progress, and to address places in which you might be getting stuck. This is a growth mindset organization, and we are invested in a multi pronged and creative approach to your well being."
    },
    {
      title: "Diversity",
      description: aboutPage?.diversity || "We know no single group can represent everyone, but we've assembled our team with care—considering race, sexuality, family constellation, gender, culture, and immigration experience. Our goal is for you to see parts of yourself reflected and feel a deeper sense of belonging."
    },
    {
      title: "Financial Support",
      description: aboutPage?.financialSupport || "Along with offering low fees and in network options to our clients, we believe in fairly supporting the associates who provide this care. That's why they receive 80% of the fees from their sessions—so you can feel confident knowing your therapist is valued as they walk alongside you."
    }
  ];

  return (
    <section className="py-24 text-white min-h-screen flex flex-col items-center justify-center relative z-10">
      <div className="container mx-auto px-6 max-w-6xl">
        {/* Main heading */}
        <motion.h2 
          className="text-5xl md:text-7xl font-bold mb-12 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <span className="text-nwt-light-teal font-family-orange-squash">What makes us unique?</span>
        </motion.h2>
        
        {/* Main description paragraph */}
        <motion.div
          className="text-center mb-16 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <p className="text-base md:text-xl 2xl:text-2xl text-white/90 leading-relaxed font-medium">
            At our practice, we believe therapy should be both accessible and deeply connected to the realities of everyday life. We keep care affordable by offering low-fee and in-network options, so fewer people are turned away by financial barriers. Our team reflects the diversity of the communities we serve, and each week our clinicians meet in supervision to think together about how to best support clients. When you work with one of us, you&apos;re also held by the collective knowledge and care of our whole team. In a world where isolation and inequity are real, we strive to make healing <span className="text-nwt-peach font-bold">communal</span>, <span className="text-nwt-coral font-bold">affordable</span>, and <span className="text-nwt-light-teal font-bold">grounded in representation</span>.
          </p>
        </motion.div>

        {/* Three pillars */}
        <div className="grid md:grid-cols-3 gap-8">
          {pillars.map((pillar, index) => (
            <motion.div 
              key={index}
              className="relative group cursor-pointer"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.8 + (index * 0.3) }}
              viewport={{ once: true, amount: 0.3 }}
              onHoverStart={() => setHoveredCard(index)}
              onHoverEnd={() => setHoveredCard(null)}
              whileHover={{ y: -5 }}
            >
              <div className="bg-black/40 backdrop-blur-sm border border-white/10 rounded-2xl p-6 md:p-8 h-full transition-all duration-300 hover:border-nwt-light-teal/30">
                <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold text-nwt-peach mb-3 md:mb-4">
                  {pillar.title}
                </h3>
                <p className="text-white/80 leading-relaxed text-base md:text-lg">
                  {pillar.description}
                </p>
                
                {/* Subtle glow effect on hover */}
                <motion.div
                  className="absolute inset-0 rounded-2xl opacity-0 pointer-events-none"
                  style={{
                    background: 'linear-gradient(135deg, rgba(124, 198, 191, 0.1) 0%, rgba(233, 191, 131, 0.1) 100%)',
                  }}
                  animate={{
                    opacity: hoveredCard === index ? 1 : 0
                  }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About1;