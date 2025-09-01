"use client";
import { useState, useEffect } from 'react';
import { client } from "@/sanity/client";
import Button from '../Button';

interface ProcessStep {
  step: number;
  description: string;
}

interface SiteSettings {
  heroHeadline: string;
  approachText: string;
  processSteps: ProcessStep[];
}

const AboutOption2 = () => {
  const [siteSettings, setSiteSettings] = useState<SiteSettings | null>(null);

  useEffect(() => {
    const fetchSiteSettings = async () => {
      try {
        const query = `*[_type == "siteSettings"][0] {
          heroHeadline,
          approachText,
          processSteps[] {
            step,
            description
          }
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
      <section className="py-24 text-white overflow-hidden">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center">
            <p className="text-gray-300">Loading...</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-24 text-white overflow-hidden">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <h2 className="text-5xl font-bold leading-tight mb-6">
              {siteSettings.heroHeadline}
            </h2>
            <p className="text-xl text-gray-300 leading-relaxed mb-8">
              {siteSettings.approachText}
            </p>
            <Button variant="secondary" size="lg">Begin Your Journey</Button>
          </div>
          
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-nwt-coral to-nwt-peach rounded-3xl transform rotate-3 opacity-20"></div>
            <div className="relative bg-gray-900 p-8 rounded-3xl">
              <h3 className="text-2xl font-bold text-nwt-peach mb-4">Our Approach</h3>
              <p className="text-gray-300 leading-relaxed">
                We operate as a purpose-driven practice, rooted in the values of conscious capitalism. Making decisions that not only sustain our team, but also widen access to high-quality mental health care.
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-12">
          {siteSettings.processSteps?.map((step, index) => {
            const colors = ['bg-nwt-light-teal text-black', 'bg-nwt-coral text-white', 'bg-nwt-peach text-black'];
            const titleColors = ['text-nwt-light-teal', 'text-nwt-coral', 'text-nwt-peach'];
            const lineColors = ['bg-nwt-coral', 'bg-nwt-peach', ''];
            
            return (
              <div key={step.step} className="flex items-start gap-8 relative">
                <div className={`flex-shrink-0 w-16 h-16 ${colors[index]} rounded-full flex items-center justify-center font-bold text-xl relative z-10`}>
                  {step.step}
                </div>
                {index < (siteSettings.processSteps?.length || 0) - 1 && (
                  <div className={`absolute left-8 top-16 w-0.5 h-24 ${lineColors[index]}`}></div>
                )}
                <div className="pt-2">
                  <h3 className={`text-2xl font-bold mb-3 ${titleColors[index]}`}>
                    Step {step.step}
                  </h3>
                  <p className="text-gray-300 text-lg leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AboutOption2;