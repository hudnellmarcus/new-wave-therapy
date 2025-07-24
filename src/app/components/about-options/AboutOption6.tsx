import Button from '../Button';

const AboutOption6 = () => {
  return (
    <section className="py-20 bg-black text-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-nwt-coral rounded-full opacity-5 transform translate-x-48 -translate-y-48"></div>
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-nwt-light-teal rounded-full opacity-5 transform -translate-x-36 translate-y-36"></div>
      
      <div className="container mx-auto px-6 max-w-7xl relative">
        <div className="grid lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-8">
            <div>
              <div className="inline-block bg-nwt-dark-teal px-4 py-2 rounded-full text-sm font-semibold mb-4">
                About New Wave Therapy
              </div>
              <h2 className="text-6xl font-bold leading-tight">
                Redefining
                <span className="block text-nwt-light-teal">Mental Health</span>
                <span className="block text-4xl font-normal text-gray-400">for the modern world</span>
              </h2>
            </div>
            
            <div className="space-y-6">
              <p className="text-xl text-gray-300 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
                tempor incididunt ut labore et dolore magna aliqua. 
              </p>
              <p className="text-lg text-gray-400 leading-relaxed">
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
                reprehenderit in voluptate velit esse cillum.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="primary" size="lg">Start Your Journey</Button>
              <Button variant="ghost" size="lg">Explore Our Services</Button>
            </div>
          </div>

          <div className="lg:col-span-5 relative">
            <div className="relative z-10">
              <div className="bg-gradient-to-br from-nwt-dark-teal to-nwt-navy p-8 rounded-2xl mb-6 transform rotate-2">
                <h3 className="text-2xl font-bold mb-4 text-nwt-peach">Our Mission</h3>
                <p className="text-gray-200">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                  Providing accessible, effective mental health care.
                </p>
              </div>
              
              <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-2xl transform -rotate-1 -mt-4">
                <h3 className="text-2xl font-bold mb-4 text-nwt-light-teal">Why Choose Us</h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-nwt-coral rounded-full mr-3"></div>
                    Expert team of licensed therapists
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-nwt-coral rounded-full mr-3"></div>
                    Flexible scheduling options
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-nwt-coral rounded-full mr-3"></div>
                    Evidence-based treatment approaches
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-nwt-coral rounded-full mr-3"></div>
                    Supportive, non-judgmental environment
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-nwt-peach rounded-2xl opacity-20 transform rotate-45"></div>
            <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-nwt-mint rounded-full opacity-30"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutOption6;