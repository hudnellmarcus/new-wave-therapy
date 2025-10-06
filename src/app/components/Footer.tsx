"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { client } from "@/sanity/client";

interface SiteSettings {
  phone: string;
  email: string;
  addressLine1: string;
  addressLine2: string;
  supervisorName: string;
  supervisorUrl: string;
}

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [siteSettings, setSiteSettings] = useState<SiteSettings | null>(null);

  useEffect(() => {
    const fetchSiteSettings = async () => {
      try {
        const query = `*[_type == "siteSettings"][0] {
          phone,
          email,
          addressLine1,
          addressLine2,
          supervisorName,
          supervisorUrl
        }`;
        const settings = await client.fetch<SiteSettings>(query);
        setSiteSettings(settings);
      } catch (error) {
        console.log('Failed to fetch site settings:', error);
      }
    };

    fetchSiteSettings();
  }, []);

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
            <div className="space-y-3">
              <div>
                <h3 className="font-family-orange-squash text-xl font-bold text-nwt-peach">
                  New Wave Therapy
                </h3>
                <div className="text-sm text-white/90 leading-relaxed mt-2">
                  <p>{siteSettings?.addressLine1 || '1225 Cypress Ave Suite 3 #V472'}</p>
                  <p>{siteSettings?.addressLine2 || 'Los Angeles CA 90065'}</p>
                </div>
              </div>

              <div className="text-sm text-white/90">
                <p>
                  Supervised by{' '}
                  <a
                    href={siteSettings?.supervisorUrl || 'https://www.halliegtherapy.com'}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-nwt-light-teal hover:text-nwt-peach transition-colors underline"
                  >
                    {siteSettings?.supervisorName || 'Hallie Gnatovich, LMFT #52775'}
                  </a>
                </p>
              </div>
            </div>

            <div className="space-y-2 mt-6">
              <div className="flex items-center space-x-2 text-white/90 text-sm">
                <PhoneIcon />
                <span>{siteSettings?.phone || '(781)-454-8409'}</span>
              </div>
              <div className="flex items-center space-x-2 text-white/90 text-sm">
                <EmailIcon />
                <span>{siteSettings?.email || 'halliegtherapy@gmail.com'}</span>
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
            <h4 className="text-base font-semibold mb-3 text-nwt-light-teal">Emergency Resources</h4>
            <p className="text-sm text-white/80 leading-relaxed">
              If you&apos;re experiencing a mental health crisis, please call 988 (Suicide & Crisis Lifeline) or go to your nearest emergency room.
            </p>
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