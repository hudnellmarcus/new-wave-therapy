"use client";
import Image from 'next/image';
import { ChevronDown } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const Hero = () => {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  
  const backgroundY = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const scrollToNext = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };
  return (
    <motion.section 
      ref={heroRef}
      className="relative h-screen overflow-hidden"
      style={{ opacity }}
    >
      <motion.div 
        className="absolute inset-0"
        style={{ y: backgroundY }}
      >
        <Image
          src="/backgrounds/stripe_bottom_background.jpeg"
          fill
          className="object-cover"
          alt="Background"
          priority
        />
      </motion.div>

      <div className="relative flex flex-col h-screen items-center justify-center -mt-16">
        <h1 className="sr-only">
          New Wave Therapy - Professional Virtual Therapy Services
        </h1>
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          <Image
            src="/nwt_logo_kittl.svg"
            alt="New Wave Therapy Logo"
            width={800}
            height={400}
            className="w-[40vw] h-auto neon-realistic"
          />
        </motion.div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 animate-fade-in-delay">
          <button
            onClick={scrollToNext}
            className="text-white/70 hover:text-white transition-colors text-center cursor-pointer group animate-bounce-gentle"
          >
            <p className="text-sm mb-2 group-hover:text-nwt-light-teal transition-colors">Scroll to explore</p>
            <ChevronDown className="w-5 h-5 mx-auto" />
          </button>
        </div>
      </div>
    </motion.section>
  );
};

export default Hero;