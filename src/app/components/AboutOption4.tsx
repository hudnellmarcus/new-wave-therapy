import Button from './Button';

const AboutOption4 = () => {
  return (
    <section className="py-24 bg-black text-white">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-6xl font-bold mb-6">
            Our <span className="text-nwt-light-teal">Values</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Our practice is built 
            on core principles that guide every therapeutic relationship.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-2xl border border-nwt-dark-teal border-opacity-30">
            <div className="w-16 h-16 bg-nwt-coral rounded-xl mb-6 flex items-center justify-center">
              <div className="w-8 h-8 bg-white rounded-full"></div>
            </div>
            <h3 className="text-2xl font-bold mb-4 text-nwt-peach">Compassionate Care</h3>
            <p className="text-gray-300 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod 
              tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>

          <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-2xl border border-nwt-light-teal border-opacity-30">
            <div className="w-16 h-16 bg-nwt-light-teal rounded-xl mb-6 flex items-center justify-center">
              <div className="w-8 h-8 bg-white rounded-full"></div>
            </div>
            <h3 className="text-2xl font-bold mb-4 text-nwt-peach">Evidence-Based</h3>
            <p className="text-gray-300 leading-relaxed">
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>

          <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-2xl border border-nwt-peach border-opacity-30">
            <div className="w-16 h-16 bg-nwt-peach rounded-xl mb-6 flex items-center justify-center">
              <div className="w-8 h-8 bg-white rounded-full"></div>
            </div>
            <h3 className="text-2xl font-bold mb-4 text-nwt-peach">Collaborative</h3>
            <p className="text-gray-300 leading-relaxed">
              Duis aute irure dolor in reprehenderit in voluptate velit esse 
              cillum dolore eu fugiat nulla pariatur.
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-r from-nwt-dark-teal to-nwt-navy p-12 rounded-3xl text-center">
          <h3 className="text-4xl font-bold mb-6">Ready to Begin Your Journey?</h3>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Take the first step 
            towards healing and growth with our experienced team.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="primary" size="lg">Schedule Consultation</Button>
            <Button variant="outline" size="lg">Learn About Our Team</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutOption4;