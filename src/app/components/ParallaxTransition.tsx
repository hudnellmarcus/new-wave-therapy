"use client";
import { useRef } from 'react';
import { motion } from 'framer-motion';

const ParallaxTransition = () => {
// const [scrollY, setScrollY] = useState(0);
// const [elementTop, setElementTop] = useState(0);
// const [clientHeight, setClientHeight] = useState(0);
  const divRef = useRef<HTMLDivElement>(null);

/*  useEffect(() => {
    const element = divRef.current;
    if (!element) return;

    const onScroll = () => {
      const rect = element.getBoundingClientRect();
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const elementTop = rect.top + scrollTop;
      
      setScrollY(scrollTop);
      setElementTop(elementTop);
      setClientHeight(window.innerHeight);
    };

    const throttledScroll = () => {
      requestAnimationFrame(onScroll);
    };

    window.addEventListener('scroll', throttledScroll);
    onScroll();

    return () => window.removeEventListener('scroll', throttledScroll);
  }, []); */

  return (
    <div ref={divRef} className="relative h-screen overflow-hidden">
      {/* Simplified single gradient background */}
      <div 
        className="absolute inset-0"
        style={{
          background: `linear-gradient(to bottom, 
            #000000 0%, 
            #073E5C 25%, 
            #7CC6BF 50%, 
            #E9BF83 75%, 
            #f2e4c2 100%
          )`,
        }}
      />
      
      {/* Single subtle overlay */}
      <div className="absolute inset-0 bg-black/5" />

      {/* Text content */}
      <div className="absolute inset-0 flex items-center justify-center z-10">
        <motion.div 
          className="text-center max-w-2xl mx-auto px-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-6xl font-bold font-family-orange-squash mb-6 text-white">
            Meet Our Team
          </h2>
          <p className="text-lg md:text-xl leading-relaxed text-white/90">
            Experienced therapists ready to support your journey
          </p>
        </motion.div>
      </div>

      {/* Simple scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="text-center"
        >
          <p className="text-sm mb-2 text-white/80">
            Scroll to meet the team
          </p>
          <div className="w-6 h-6 mx-auto text-white/80">
            ↓
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ParallaxTransition;