"use client";
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { client } from "@/sanity/client";

interface SiteSettings {
  uniqueApproachHeadline: string;
  collaboration: string;
  diversity: string;
  financialSupport: string;
}

const AboutOption1 = () => {
  const [siteSettings, setSiteSettings] = useState<SiteSettings | null>(null);

  useEffect(() => {
    const fetchSiteSettings = async () => {
      try {
        const query = `*[_type == "siteSettings"][0] {
          uniqueApproachHeadline,
          collaboration,
          diversity,
          financialSupport
        }`;
        const settings = await client.fetch<SiteSettings>(query);
        setSiteSettings(settings);
      } catch (error) {
        console.log('Failed to fetch site settings:', error);
      }
    };

    fetchSiteSettings();
  }, []);

  if (!siteSettings) {
    return (
      <section className="py-24 text-white">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <p className="text-gray-300">Loading...</p>
        </div>
      </section>
    );
  }

  return (
    <section className="py-24 text-white min-h-screen flex flex-col items-center justify-center relative z-10">
      <div className="container mx-auto px-6 max-w-4xl text-center">
        <motion.h2 
          className="text-6xl md:text-7xl font-bold mb-16"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <span className="text-nwt-light-teal font-family-orange-squash">{siteSettings.uniqueApproachHeadline}</span>
        </motion.h2>
        

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <motion.div 
            className="space-y-3"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <h3 className="text-xl md:text-3xl font-semibold text-nwt-peach">Collaboration</h3>
            <p className="text-gray-400">
              {siteSettings.collaboration}
            </p>
          </motion.div>
          <motion.div 
            className="space-y-3"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <h3 className="text-xl md:text-3xl font-semibold text-nwt-peach">Diversity</h3>
            <p className="text-gray-400">
              {siteSettings.diversity}
            </p>
          </motion.div>
          <motion.div 
            className="space-y-3"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <h3 className="text-xl md:text-3xl font-semibold text-nwt-peach">Financial Support</h3>
            <p className="text-gray-400">
              {siteSettings.financialSupport}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutOption1;