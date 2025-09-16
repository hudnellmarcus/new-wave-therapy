"use client";
import { motion } from "framer-motion";
import Link from "next/link";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const PhoneIcon = () => (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
    </svg>
  );

  const EmailIcon = () => (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  );

  const LocationIcon = () => (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  );

  return (
    <footer className="bg-nwt-dark-teal text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-nwt-dark-teal via-nwt-navy to-nwt-dark-teal opacity-90"></div>

      <div className="relative z-10 container mx-auto px-4 py-6 lg:py-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <div className="mb-6">
              <h3 className="font-family-orange-squash text-xl font-bold mb-3 text-nwt-peach">
                New Wave Therapy
              </h3>
              <p className="text-sm text-white/80 leading-relaxed max-w-md">
                Providing compassionate, evidence-based therapy services to support your mental health journey. Our team is here to help you navigate life&apos;s challenges with care and understanding.
              </p>
            </div>
            
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-white/90 text-sm">
                <PhoneIcon />
                <span>(555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-2 text-white/90 text-sm">
                <EmailIcon />
                <span>hello@newwavetherapy.com</span>
              </div>
              <div className="flex items-start space-x-2 text-white/90 text-sm">
                <LocationIcon />
                <div>
                  <p>123 Wellness Ave, Suite 200</p>
                  <p>Your City, ST 12345</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="text-base font-semibold mb-3 text-nwt-light-teal">Quick Links</h4>
            <ul className="space-y-1">
              <li>
                <Link href="/" className="text-white/80 hover:text-nwt-peach transition-colors text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/team" className="text-white/80 hover:text-nwt-peach transition-colors text-sm">
                  Our Team
                </Link>
              </li>
              <li>
                <Link href="/resources" className="text-white/80 hover:text-nwt-peach transition-colors text-sm">
                  Resources
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-white/80 hover:text-nwt-peach transition-colors text-sm">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-white/80 hover:text-nwt-peach transition-colors text-sm">
                  Contact
                </Link>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="text-base font-semibold mb-3 text-nwt-light-teal">Office Hours</h4>
            <div className="space-y-1 text-white/80 text-sm">
              <div className="flex justify-between">
                <span>Mon - Thu</span>
                <span>9AM - 7PM</span>
              </div>
              <div className="flex justify-between">
                <span>Friday</span>
                <span>9AM - 5PM</span>
              </div>
              <div className="flex justify-between">
                <span>Saturday</span>
                <span>10AM - 3PM</span>
              </div>
              <div className="flex justify-between">
                <span>Sunday</span>
                <span>Closed</span>
              </div>
            </div>
            
            <div className="mt-4">
              <h5 className="text-xs font-semibold mb-1 text-nwt-coral">Emergency Resources</h5>
              <p className="text-xs text-white/70 leading-relaxed">
                If you&apos;re experiencing a mental health crisis, please call 988 (Suicide & Crisis Lifeline) or go to your nearest emergency room.
              </p>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="border-t border-white/20 pt-4"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-white/60 text-xs">
              © {currentYear} New Wave Therapy. All rights reserved.
            </p>
            <div className="flex space-x-4 text-xs">
              <Link href="/privacy" className="text-white/60 hover:text-nwt-peach transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-white/60 hover:text-nwt-peach transition-colors">
                Terms of Service
              </Link>
              <span className="text-white/60">HIPAA Compliant</span>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;