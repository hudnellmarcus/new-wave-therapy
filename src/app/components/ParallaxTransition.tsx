"use client";
import { useEffect, useState, useRef } from 'react';

const ParallaxTransition = () => {
  const [scrollY, setScrollY] = useState(0);
  const [elementTop, setElementTop] = useState(0);
  const [clientHeight, setClientHeight] = useState(0);
  const divRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
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
  }, []);

  const parallaxOffset = (scrollY - elementTop + clientHeight) * 0.5;
  const parallaxOffsetSlow = (scrollY - elementTop + clientHeight) * 0.3;
  const parallaxOffsetFast = (scrollY - elementTop + clientHeight) * 0.8;

  return (
    <div ref={divRef} className="relative h-screen overflow-hidden">
      <div 
        className="absolute inset-0 parallax-bg-slow"
        style={{
          transform: `translate3d(0, ${parallaxOffsetSlow}px, 0)`,
          willChange: 'transform'
        }}
      >
        <div className="w-full h-[120%] bg-gradient-to-b from-black via-nwt-dark-teal/20 to-nwt-cream"></div>
      </div>
      
      <div 
        className="absolute inset-0 parallax-bg-medium"
        style={{
          transform: `translate3d(0, ${parallaxOffset}px, 0)`,
          willChange: 'transform'
        }}
      >
        <div className="w-full h-[120%] bg-gradient-to-br from-transparent via-nwt-light-teal/10 to-nwt-coral/20"></div>
      </div>

      <div 
        className="absolute inset-0 parallax-bg-fast opacity-60"
        style={{
          transform: `translate3d(0, ${parallaxOffsetFast}px, 0)`,
          willChange: 'transform'
        }}
      >
        <div className="w-full h-[120%] bg-v-stripe-subtle"></div>
      </div>

      <div className="absolute inset-0 flex items-center justify-center z-10">
        <div className="text-center text-white max-w-2xl mx-auto px-6">
          <h2 className="text-6xl font-bold font-family-orange-squash mb-4 text-nwt-light-teal">
            Meet Our Team
          </h2>
          <p className="text-xl text-white/80">
            Experienced therapists ready to support your journey
          </p>
        </div>
      </div>
    </div>
  );
};

export default ParallaxTransition;