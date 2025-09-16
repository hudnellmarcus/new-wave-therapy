"use client";
import { motion } from 'framer-motion';
import { useState } from 'react';

const AboutOption1 = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const pillars = [
    {
      title: "Collaboration",
      description: "Every week, our clinicians come together in supervision to think collectively about our clients' care. You're supported by the shared knowledge of our entire team."
    },
    {
      title: "Diversity", 
      description: "We've built a team that reflects the diversity of the communities we serve, ensuring representation and understanding in your care."
    },
    {
      title: "Financial Support",
      description: "We offer low-fee and in-network options, making high-quality therapy accessible without financial barriers."
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
            At our practice, we believe that high-quality therapy should be both accessible and responsive to the
            realities of the world. That&apos;s why we offer low-fee and in-network options, making it possible for more
            people to engage in care without financial barriers. We&apos;ve also built a team that reflects the diversity of the
            communities we serve. Every week, our clinicians come together in supervision to think collectively about
            our clients&apos; care. That means you&apos;re not only working with one therapist—you&apos;re supported by the shared 
            knowledge and accountability of seven. In a world where isolation and inequity are real, we believe 
            healing should be <span className="text-nwt-peach font-bold">communal</span>, <span className="text-nwt-coral font-bold">affordable</span>, and <span className="text-nwt-light-teal font-bold">grounded in representation</span>.
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

export default AboutOption1;