"use client";
import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';

const Navigation = () => {
  const [isScrolling, setIsScrolling] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const isHomePage = pathname === '/';
  const isLightPage = pathname === '/team' || pathname === '/contact';

  useEffect(() => {
    let scrollTimeout: NodeJS.Timeout;

    const handleScroll = () => {
      // Show nav immediately when scrolling
      setIsScrolling(true);

      // Clear existing timeout
      clearTimeout(scrollTimeout);

      // Hide nav after 2 seconds of no scrolling
      scrollTimeout = setTimeout(() => {
        setIsScrolling(false);
      }, 2000);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(scrollTimeout);
    };
  }, []);

  return (
    <AnimatePresence>
      {(!isHomePage || (isHomePage && isScrolling)) && (
        <motion.nav
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-md ${
            isLightPage ? 'bg-nwt-dark-teal/95' : 'bg-black/60'
          }`}
        >
          <div className="container mx-auto px-2 py-2">
            <div className="flex items-center justify-between">
              {/* Logo Section - Left Side */}
              <motion.div 
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
                className="flex items-center"
              >
                <Link href="/" className="block">
                  <Image
                    src="/nwt_logo_kittl.svg"
                    alt="New Wave Therapy"
                    width={200}
                    height={48}
                    className="h-12 w-auto neon-subtle-pulse hover:scale-105 transition-transform duration-300"
                  />
                </Link>
              </motion.div>
          
          {/* Navigation Links - Right Side */}
          <motion.div 
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.3 }}
            className="hidden font-family-orange-squash md:flex md:text-lg items-center space-x-8"
          >
            <Link href="/" className="text-white hover:text-nwt-light-teal transition-colors font-medium">
              Home
            </Link>
            <Link href="/faq" className="text-white hover:text-nwt-light-teal transition-colors font-medium">
              FAQ
            </Link>
            <Link href="/team" className="text-white hover:text-nwt-light-teal transition-colors font-medium">
              Our Team
            </Link>
            <Link href="/contact" className="text-white hover:text-nwt-light-teal transition-colors font-medium">
              Contact
            </Link>
          </motion.div>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white hover:text-nwt-light-teal transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden bg-black/90 backdrop-blur-md"
            >
              <div className="px-6 py-4 space-y-4">
                <Link 
                  href="/" 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block text-white hover:text-nwt-light-teal transition-colors font-medium"
                >
                  Home
                </Link>
                <Link 
                  href="/faq" 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block text-white hover:text-nwt-light-teal transition-colors font-medium"
                >
                  FAQ
                </Link>
                <Link 
                  href="/team" 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block text-white hover:text-nwt-light-teal transition-colors font-medium"
                >
                  Our Team
                </Link>
                <Link 
                  href="/contact" 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block text-white hover:text-nwt-light-teal transition-colors font-medium"
                >
                  Contact
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
          </div>
        </motion.nav>
      )}
    </AnimatePresence>
  );
};

export default Navigation;