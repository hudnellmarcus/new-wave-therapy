interface TeamMemberOption4Props {
  therapistName: string;
}

const TeamMemberOption4 = ({ therapistName }: TeamMemberOption4Props) => {
  return (
    <main className="bg-stripe-overlay min-h-screen">
      <div className="container mx-auto px-6 max-w-4xl py-24 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="w-32 h-32 md:w-40 md:h-40 bg-gray-200 rounded-2xl mx-auto mb-8 overflow-hidden">
            <div className="w-full h-full bg-gradient-to-br from-nwt-light-teal to-nwt-coral"></div>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">Dr. {therapistName}</h1>
          <p className="text-2xl text-nwt-light-teal mb-6">Licensed Clinical Therapist</p>
          
          {/* Specialty Keywords */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            <span className="bg-nwt-coral/80 text-white px-4 py-2 rounded-full text-sm font-medium">Anxiety</span>
            <span className="bg-nwt-coral/80 text-white px-4 py-2 rounded-full text-sm font-medium">Depression</span>
            <span className="bg-nwt-coral/80 text-white px-4 py-2 rounded-full text-sm font-medium">CBT</span>
            <span className="bg-nwt-coral/80 text-white px-4 py-2 rounded-full text-sm font-medium">Trauma</span>
          </div>
        </div>

        {/* Bio Section */}
        <div className="mb-16">
          <div className="bg-black/40 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-white/10">
            <p className="text-xl text-white/90 leading-relaxed mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <p className="text-lg text-white/80 leading-relaxed">
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </div>

        {/* Simple Info Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Specializations */}
          <div className="bg-black/40 backdrop-blur-sm rounded-3xl p-8 border border-white/10">
            <h3 className="text-2xl font-bold text-nwt-light-teal mb-6">What I Help With</h3>
            <div className="space-y-3 text-white/90">
              <p>Anxiety and panic disorders</p>
              <p>Depression and mood issues</p>
              <p>Trauma and PTSD recovery</p>
              <p>Life transitions and stress</p>
            </div>
          </div>

          {/* Background */}
          <div className="bg-black/40 backdrop-blur-sm rounded-3xl p-8 border border-white/10">
            <h3 className="text-2xl font-bold text-nwt-coral mb-6">Background</h3>
            <div className="space-y-4 text-white/90">
              <div>
                <p className="font-semibold">Ph.D. Clinical Psychology</p>
                <p className="text-white/70 text-sm">University of Lorem, 2015</p>
              </div>
              <div>
                <p className="font-semibold">Licensed Therapist</p>
                <p className="text-white/70 text-sm">State Certified, 2016</p>
              </div>
              <div>
                <p className="font-semibold">CBT Certification</p>
                <p className="text-white/70 text-sm">Institute of Therapy, 2018</p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-nwt-dark-teal to-nwt-light-teal rounded-3xl p-10 md:p-12">
            <h3 className="text-3xl font-bold text-white mb-4">Let's Work Together</h3>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Ready to take the next step in your mental health journey? I'm here to support you every step of the way.
            </p>
            <button className="bg-white text-nwt-dark-teal hover:bg-gray-100 px-10 py-4 rounded-2xl font-bold text-lg transition-colors">
              Schedule Consultation
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default TeamMemberOption4;