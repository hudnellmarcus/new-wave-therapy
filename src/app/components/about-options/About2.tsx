import Button from '../Button';

const AboutOption2 = () => {
  return (
    <section className="py-24 text-white overflow-hidden">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <h2 className="text-5xl font-bold leading-tight mb-6">
              Your <span className="text-nwt-light-teal">Healing</span><br />
              Journey Starts Here
            </h2>
            <p className="text-xl text-gray-300 leading-relaxed mb-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Every path to 
              wellness is unique, and our team is here to guide you through each step.
            </p>
            <Button variant="secondary" size="lg">Begin Your Journey</Button>
          </div>
          
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-nwt-coral to-nwt-peach rounded-3xl transform rotate-3 opacity-20"></div>
            <div className="relative bg-gray-900 p-8 rounded-3xl">
              <h3 className="text-2xl font-bold text-nwt-peach mb-4">Our Approach</h3>
              <p className="text-gray-300 leading-relaxed">
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
                reprehenderit in voluptate.
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-12">
          <div className="flex items-start gap-8 relative">
            <div className="flex-shrink-0 w-16 h-16 bg-nwt-light-teal rounded-full flex items-center justify-center text-black font-bold text-xl relative z-10">
              1
            </div>
            <div className="absolute left-8 top-16 w-0.5 h-24 bg-nwt-coral"></div>
            <div className="pt-2">
              <h3 className="text-2xl font-bold mb-3 text-nwt-light-teal">Initial Consultation</h3>
              <p className="text-gray-300 text-lg leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. We begin by 
                understanding your unique needs and goals for therapy.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-8 relative">
            <div className="flex-shrink-0 w-16 h-16 bg-nwt-coral rounded-full flex items-center justify-center text-white font-bold text-xl relative z-10">
              2
            </div>
            <div className="absolute left-8 top-16 w-0.5 h-24 bg-nwt-peach"></div>
            <div className="pt-2">
              <h3 className="text-2xl font-bold mb-3 text-nwt-coral">Personalized Treatment Plan</h3>
              <p className="text-gray-300 text-lg leading-relaxed">
                Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Our team creates a tailored approach that fits your specific situation.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-8 relative">
            <div className="flex-shrink-0 w-16 h-16 bg-nwt-peach rounded-full flex items-center justify-center text-black font-bold text-xl relative z-10">
              3
            </div>
            <div className="pt-2">
              <h3 className="text-2xl font-bold mb-3 text-nwt-peach">Ongoing Support</h3>
              <p className="text-gray-300 text-lg leading-relaxed">
                Ut enim ad minim veniam, quis nostrud exercitation. We provide 
                continuous guidance and adjust our approach as you progress.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutOption2;