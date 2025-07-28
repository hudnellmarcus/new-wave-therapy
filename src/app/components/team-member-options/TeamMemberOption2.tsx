interface TeamMemberOption2Props {
  therapistName: string;
}

const TeamMemberOption2 = ({ therapistName }: TeamMemberOption2Props) => {
  return (
    <main className="bg-white">
      {/* Hero Banner */}
      <div className="bg-stripe-overlay py-20">
        <div className="container mx-auto px-6 max-w-6xl relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl font-bold text-white mb-4">Dr. {therapistName}</h1>
              <p className="text-2xl text-nwt-light-teal mb-4">Licensed Clinical Therapist</p>
              <p className="text-lg text-white/80 mb-8">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
              </p>
              <div className="flex flex-wrap gap-3">
                <span className="bg-nwt-coral text-white px-4 py-2 rounded-full text-sm font-medium">Anxiety</span>
                <span className="bg-nwt-coral text-white px-4 py-2 rounded-full text-sm font-medium">Depression</span>
                <span className="bg-nwt-coral text-white px-4 py-2 rounded-full text-sm font-medium">CBT</span>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="w-64 h-64 bg-gray-200 rounded-2xl overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-nwt-light-teal to-nwt-coral"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="py-20">
        <div className="container mx-auto px-6 max-w-4xl">
          {/* Philosophy Section */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-nwt-dark-teal mb-6">My Approach</h2>
            <div className="max-w-3xl mx-auto">
              <blockquote className="text-2xl text-gray-700 italic leading-relaxed mb-8">
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
              </blockquote>
              <p className="text-lg text-gray-600 leading-relaxed">
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              </p>
            </div>
          </div>

          {/* Experience Timeline */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-nwt-dark-teal mb-8 text-center">Professional Journey</h3>
            <div className="space-y-8">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-nwt-light-teal rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">1</span>
                  </div>
                </div>
                <div className="bg-gray-50 rounded-xl p-6 flex-1">
                  <h4 className="text-xl font-bold text-nwt-dark-teal mb-2">Clinical Training</h4>
                  <p className="text-gray-600 mb-2">2015-2018</p>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-nwt-coral rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">2</span>
                  </div>
                </div>
                <div className="bg-gray-50 rounded-xl p-6 flex-1">
                  <h4 className="text-xl font-bold text-nwt-dark-teal mb-2">Private Practice</h4>
                  <p className="text-gray-600 mb-2">2018-2021</p>
                  <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-nwt-peach rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">3</span>
                  </div>
                </div>
                <div className="bg-gray-50 rounded-xl p-6 flex-1">
                  <h4 className="text-xl font-bold text-nwt-dark-teal mb-2">Joining New Wave</h4>
                  <p className="text-gray-600 mb-2">2021-Present</p>
                  <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center bg-nwt-cream rounded-2xl p-12">
            <h3 className="text-3xl font-bold text-nwt-dark-teal mb-4">Let's Work Together</h3>
            <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
              Ready to take the next step in your mental health journey? I'm here to support you every step of the way.
            </p>
            <button className="bg-nwt-dark-teal hover:bg-nwt-dark-teal/90 text-white px-10 py-4 rounded-lg font-semibold text-lg transition-colors">
              Schedule Consultation
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default TeamMemberOption2;