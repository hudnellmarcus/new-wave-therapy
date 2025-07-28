interface TeamMemberOption5Props {
  therapistName: string;
}

const TeamMemberOption5 = ({ therapistName }: TeamMemberOption5Props) => {
  return (
    <main className="bg-black min-h-screen">
      <div className="container mx-auto px-6 max-w-7xl py-24">
        {/* Split Hero */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left Content */}
          <div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
              Dr. {therapistName}
            </h1>
            <p className="text-2xl text-nwt-light-teal mb-6">Licensed Clinical Therapist</p>
            
            {/* Specialty Tags */}
            <div className="flex flex-wrap gap-3 mb-8">
              <span className="bg-nwt-coral text-white px-4 py-2 rounded-full text-sm font-medium">Anxiety</span>
              <span className="bg-nwt-light-teal text-black px-4 py-2 rounded-full text-sm font-medium">Depression</span>
              <span className="bg-nwt-peach text-black px-4 py-2 rounded-full text-sm font-medium">CBT</span>
              <span className="bg-nwt-coral text-white px-4 py-2 rounded-full text-sm font-medium">Trauma</span>
            </div>

            <p className="text-xl text-white/90 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>

          {/* Right Photo */}
          <div className="flex justify-center lg:justify-end">
            <div className="w-80 h-96 bg-gray-800 rounded-3xl overflow-hidden relative">
              <div className="w-full h-full bg-gradient-to-br from-nwt-light-teal to-nwt-coral opacity-90"></div>
              <div className="absolute inset-0 bg-black/10"></div>
            </div>
          </div>
        </div>

        {/* Content Sections */}
        <div className="space-y-16">
          {/* What I Help With */}
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-white mb-8 text-center">What I Help With</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gray-900/50 rounded-2xl p-6 border border-nwt-coral/20">
                <h3 className="text-xl font-bold text-nwt-coral mb-3">Anxiety & Panic</h3>
                <p className="text-white/80">Working through overwhelming feelings and developing coping strategies.</p>
              </div>
              <div className="bg-gray-900/50 rounded-2xl p-6 border border-nwt-light-teal/20">
                <h3 className="text-xl font-bold text-nwt-light-teal mb-3">Depression</h3>
                <p className="text-white/80">Finding hope and building resilience during difficult times.</p>
              </div>
              <div className="bg-gray-900/50 rounded-2xl p-6 border border-nwt-peach/20">
                <h3 className="text-xl font-bold text-nwt-peach mb-3">Trauma Recovery</h3>
                <p className="text-white/80">Healing from past experiences with compassionate, evidence-based care.</p>
              </div>
              <div className="bg-gray-900/50 rounded-2xl p-6 border border-nwt-coral/20">
                <h3 className="text-xl font-bold text-nwt-coral mb-3">Life Transitions</h3>
                <p className="text-white/80">Navigating major changes and finding your path forward.</p>
              </div>
            </div>
          </div>

          {/* Background */}
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-8">My Background</h2>
            <div className="bg-gray-900/30 rounded-3xl p-8 md:p-12 border border-white/5">
              <p className="text-lg text-white/90 leading-relaxed mb-8">
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div>
                  <p className="text-nwt-light-teal font-bold">Ph.D. Clinical Psychology</p>
                  <p className="text-white/70 text-sm">University of Lorem, 2015</p>
                </div>
                <div>
                  <p className="text-nwt-coral font-bold">Licensed Therapist</p>
                  <p className="text-white/70 text-sm">State Certified, 2016</p>
                </div>
                <div>
                  <p className="text-nwt-peach font-bold">CBT Specialist</p>
                  <p className="text-white/70 text-sm">Certified, 2018</p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-r from-nwt-dark-teal via-nwt-light-teal to-nwt-coral rounded-3xl p-10 md:p-12">
              <h3 className="text-4xl font-bold text-white mb-6">Let's Work Together</h3>
              <p className="text-xl text-white/95 mb-8 max-w-2xl mx-auto">
                Ready to take the next step? I'm here to support you on your journey toward better mental health.
              </p>
              <button className="bg-black text-white hover:bg-gray-900 px-12 py-4 rounded-2xl font-bold text-lg transition-colors">
                Schedule Consultation
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default TeamMemberOption5;