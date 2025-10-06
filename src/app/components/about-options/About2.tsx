"use client";
import { useState, useEffect } from 'react';
import { client } from "@/sanity/client";
import Button from '../Button';

interface ProcessStep {
  step: number;
  description: string;
}

interface AboutPageData {
  headlineText: string;
  paragraphText: string;
  ourApproachQuote: string;
  processSteps: ProcessStep[];
}

const AboutOption2 = () => {
  const [aboutPage, setAboutPage] = useState<AboutPageData | null>(null);

  useEffect(() => {
    const fetchAboutPage = async () => {
      try {
        const query = `*[_type == "aboutPage"][0] {
          headlineText,
          paragraphText,
          ourApproachQuote,
          processSteps[] {
            step,
            description
          }
        }`;
        const data = await client.fetch<AboutPageData>(query);
        setAboutPage(data);
      } catch (error) {
        console.log('Failed to fetch about page:', error);
      }
    };

    fetchAboutPage();
  }, []);

  const renderTextWithLink = (text: string) => {
    const parts = text.split('stripe');
    if (parts.length === 1) return text;

    return (
      <>
        {parts[0]}
        <a
          href="https://www.thegoodtrade.com/features/history-of-stripes/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-nwt-light-teal hover:text-nwt-peach transition-colors underline"
        >
          stripe
        </a>
        {parts.slice(1).join('stripe')}
      </>
    );
  };


  if (!aboutPage) {
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
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <h2 className="text-5xl md:text-6xl font-bold font-family-orange-squash leading-tight mb-6">
              {aboutPage.headlineText || "Our Approach"}
            </h2>
            <p className="text-xl text-gray-300 leading-relaxed mb-8">
              {aboutPage.paragraphText || ""}
            </p>
            <Button variant="secondary" size="lg">Begin Your Journey</Button>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-nwt-coral to-nwt-peach rounded-3xl transform rotate-3 opacity-20"></div>
            <div className="relative bg-gray-900 p-8 rounded-3xl">
             {/* <h3 className="text-2xl font-bold text-nwt-peach mb-4">Our Approach</h3> */}
              <p className="text-gray-300 leading-relaxed">
                {renderTextWithLink(aboutPage.ourApproachQuote || "")}
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-8">
          {aboutPage.processSteps?.map((step, index) => {
            const colors = ['bg-nwt-light-teal text-black', 'bg-nwt-coral text-white', 'bg-nwt-peach text-black'];
            const titleColors = ['text-nwt-light-teal', 'text-nwt-coral', 'text-nwt-peach'];
            const lineColors = ['bg-nwt-coral', 'bg-nwt-peach', 'bg-nwt-light-teal'];
            const isLastStep = index === (aboutPage.processSteps?.length || 0) - 1;

            return (
              <div key={step.step} className="flex items-start gap-8 relative">
                <div className="relative flex-shrink-0 h-full">
                  <div className={`w-16 h-16 ${colors[index % colors.length]} rounded-full flex items-center justify-center font-bold text-xl relative z-10`}>
                    {step.step}
                  </div>

                  {/* Connecting line - stretches to bottom of container + gap */}
                  {!isLastStep && (
                    <div
                      className={`absolute left-8 top-16 w-0.5 ${lineColors[index % lineColors.length]} transform -translate-x-0.5`}
                      style={{ height: 'calc(100% + 3rem)' }}
                    ></div>
                  )}
                </div>

                <div className="pt-2 flex-1">
                  <h3 className={`text-2xl font-bold mb-3 ${titleColors[index % titleColors.length]}`}>
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