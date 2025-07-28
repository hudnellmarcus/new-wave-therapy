interface TeamMemberOption3Props {
  therapistName: string;
}

const TeamMemberOption3 = ({ therapistName }: TeamMemberOption3Props) => {
  return (
    <main className="bg-black text-white">
      <div className="container mx-auto px-6 max-w-6xl py-24">
        {/* Header Section */}
        <div className="grid lg:grid-cols-3 gap-12 mb-20">
          <div className="lg:col-span-2">
            <div className="mb-8">
              <h1 className="text-6xl font-bold mb-4">
                Dr. <span className="text-nwt-light-teal">{therapistName}</span>
              </h1>
              <p className="text-2xl text-gray-300 mb-6">Licensed Clinical Therapist</p>
              <div className="w-24 h-1 bg-nwt-coral"></div>
            </div>
            
            <div className="space-y-6 text-lg leading-relaxed text-gray-300">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
              </p>
              <p>
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
          </div>
          
          <div className="flex justify-center items-start">
            <div className="w-80 h-80 bg-gray-800 rounded-3xl overflow-hidden relative">
              <div className="w-full h-full bg-gradient-to-br from-nwt-light-teal to-nwt-coral opacity-80"></div>
              <div className="absolute inset-0 bg-black/20"></div>
            </div>
          </div>
        </div>

        {/* Stats/Highlights */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          <div className="text-center p-8 bg-gray-900 rounded-2xl">
            <div className="text-4xl font-bold text-nwt-light-teal mb-2">8+</div>
            <p className="text-gray-400">Years Experience</p>
          </div>
          <div className="text-center p-8 bg-gray-900 rounded-2xl">
            <div className="text-4xl font-bold text-nwt-coral mb-2">500+</div>
            <p className="text-gray-400">Clients Helped</p>
          </div>
          <div className="text-center p-8 bg-gray-900 rounded-2xl">
            <div className="text-4xl font-bold text-nwt-peach mb-2">95%</div>
            <p className="text-gray-400">Success Rate</p>
          </div>
        </div>

        {/* Two Column Content */}
        <div className="grid lg:grid-cols-2 gap-16 mb-20">
          {/* Specializations */}
          <div>
            <h2 className="text-4xl font-bold mb-8">
              <span className="text-nwt-coral">Specializations</span>
            </h2>
            <div className="space-y-6">
              <div className="border-l-4 border-nwt-light-teal pl-6">
                <h3 className="text-xl font-bold mb-2">Anxiety & Panic Disorders</h3>
                <p className="text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor.</p>
              </div>
              <div className="border-l-4 border-nwt-coral pl-6">
                <h3 className="text-xl font-bold mb-2">Depression Treatment</h3>
                <p className="text-gray-400">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.</p>
              </div>
              <div className="border-l-4 border-nwt-peach pl-6">
                <h3 className="text-xl font-bold mb-2">Trauma & PTSD</h3>
                <p className="text-gray-400">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.</p>
              </div>
            </div>
          </div>

          {/* Approach */}
          <div>
            <h2 className="text-4xl font-bold mb-8">
              <span className="text-nwt-light-teal">My Approach</span>
            </h2>
            <div className="space-y-6">
              <div className="bg-gray-900 rounded-xl p-6">
                <h3 className="text-xl font-bold text-nwt-coral mb-3">Evidence-Based</h3>
                <p className="text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt.</p>
              </div>
              <div className="bg-gray-900 rounded-xl p-6">
                <h3 className="text-xl font-bold text-nwt-light-teal mb-3">Client-Centered</h3>
                <p className="text-gray-400">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.</p>
              </div>
              <div className="bg-gray-900 rounded-xl p-6">
                <h3 className="text-xl font-bold text-nwt-peach mb-3">Collaborative</h3>
                <p className="text-gray-400">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="text-center bg-gradient-to-r from-nwt-dark-teal to-nwt-light-teal rounded-3xl p-12">
          <h3 className="text-4xl font-bold mb-4">Ready to Start?</h3>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Take the first step towards better mental health. Schedule a consultation and let's discuss how I can help you.
          </p>
          <button className="bg-white text-nwt-dark-teal hover:bg-gray-100 px-12 py-4 rounded-xl font-bold text-lg transition-colors">
            Book Your Session
          </button>
        </div>
      </div>
    </main>
  );
};

export default TeamMemberOption3;