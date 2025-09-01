"use client";
import { useState, useEffect } from 'react';
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
    <section className="py-24 text-white">
      <div className="container mx-auto px-6 max-w-4xl text-center">
        <h2 className="text-6xl font-bold mb-8">
          <span className="text-nwt-light-teal">{siteSettings.uniqueApproachHeadline}</span>
        </h2>
        

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="space-y-3">
            <h3 className="text-xl font-semibold text-nwt-peach">Collaboration</h3>
            <p className="text-gray-400">
              {siteSettings.collaboration}
            </p>
          </div>
          <div className="space-y-3">
            <h3 className="text-xl font-semibold text-nwt-peach">Diversity</h3>
            <p className="text-gray-400">
              {siteSettings.diversity}
            </p>
          </div>
          <div className="space-y-3">
            <h3 className="text-xl font-semibold text-nwt-peach">Financial Support</h3>
            <p className="text-gray-400">
              {siteSettings.financialSupport}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutOption1;