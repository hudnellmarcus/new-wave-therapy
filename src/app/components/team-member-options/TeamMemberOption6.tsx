interface TeamMemberOption6Props {
  therapistName: string;
}

const TeamMemberOption6 = ({ therapistName }: TeamMemberOption6Props) => {
  return (
    <main className="bg-stripe-overlay min-h-screen">
      <div className="container mx-auto px-6 max-w-6xl py-24 relative z-10">
        {/* Header with Photo Offset */}
        <div className="relative mb-20">
          <div className="text-center mb-12">
            <h1 className="text-6xl md:text-7xl font-bold text-white mb-4">Dr. {therapistName}</h1>
            <p className="text-3xl text-nwt-light-teal">Licensed Clinical Therapist</p>
          </div>
          
          {/* Offset Photo */}
          <div className="flex justify-center relative">
            <div className="w-48 h-60 md:w-56 md:h-72 bg-gray-800 rounded-3xl overflow-hidden transform -rotate-3 shadow-2xl">
              <div className="w-full h-full bg-gradient-to-br from-nwt-light-teal to-nwt-coral"></div>
            </div>
            
            {/* Specialty Tags Positioned Around Photo */}
            <div className="absolute -top-4 -left-4">
              <span className="bg-nwt-coral text-white px-3 py-1 rounded-full text-sm font-medium transform rotate-12 block">Anxiety</span>
            </div>
            <div className="absolute -top-2 -right-8">
              <span className="bg-nwt-peach text-black px-3 py-1 rounded-full text-sm font-medium transform -rotate-12 block">CBT</span>
            </div>
            <div className="absolute -bottom-4 -left-8">
              <span className="bg-nwt-light-teal text-black px-3 py-1 rounded-full text-sm font-medium transform rotate-6 block">Depression</span>
            </div>
            <div className="absolute -bottom-2 -right-4">
              <span className="bg-nwt-coral text-white px-3 py-1 rounded-full text-sm font-medium transform -rotate-6 block">Trauma</span>
            </div>
          </div>
        </div>

        {/* Bio */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="bg-black/50 backdrop-blur-sm rounded-3xl p-10 md:p-12 border border-white/10">
            <p className="text-2xl text-white/95 leading-relaxed text-center mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <p className="text-lg text-white/80 leading-relaxed text-center">
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            </p>
          </div>
        </div>

        {/* Two Column Content */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* What I Help With */}
          <div>
            <h2 className="text-4xl font-bold text-white mb-8">What I Help With</h2>
            <div className="space-y-4">
              <div className="bg-black/30 rounded-2xl p-6 border-l-4 border-nwt-coral">
                <p className="text-xl text-white/90">Anxiety and panic disorders</p>
              </div>
              <div className="bg-black/30 rounded-2xl p-6 border-l-4 border-nwt-light-teal">
                <p className="text-xl text-white/90">Depression and mood concerns</p>
              </div>
              <div className="bg-black/30 rounded-2xl p-6 border-l-4 border-nwt-peach">
                <p className="text-xl text-white/90">Trauma and PTSD recovery</p>
              </div>
              <div className="bg-black/30 rounded-2xl p-6 border-l-4 border-nwt-coral">
                <p className="text-xl text-white/90">Life transitions and major changes</p>
              </div>
            </div>
          </div>

          {/* Background & Credentials */}
          <div>
            <h2 className="text-4xl font-bold text-white mb-8">My Background</h2>
            <div className="bg-black/30 rounded-3xl p-8 border border-white/5">
              <p className="text-lg text-white/85 leading-relaxed mb-8">
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between py-3 border-b border-white/10">
                  <span className="text-white/90 font-semibold">Ph.D. Clinical Psychology</span>
                  <span className="text-nwt-light-teal text-sm">2015</span>
                </div>
                <div className="flex items-center justify-between py-3 border-b border-white/10">
                  <span className="text-white/90 font-semibold">Licensed Clinical Therapist</span>
                  <span className="text-nwt-coral text-sm">2016</span>
                </div>
                <div className="flex items-center justify-between py-3">
                  <span className="text-white/90 font-semibold">CBT Specialist Certification</span>
                  <span className="text-nwt-peach text-sm">2018</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <div className="bg-gradient-to-br from-nwt-dark-teal via-black to-nwt-coral rounded-3xl p-12 md:p-16 border border-white/10">
            <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">Let's Work Together</h3>
            <p className="text-xl text-white/90 mb-10 max-w-3xl mx-auto leading-relaxed">
              Ready to begin your healing journey? I'm here to provide compassionate, professional support tailored to your unique needs.
            </p>
            <button className="bg-white text-black hover:bg-gray-100 px-12 py-5 rounded-2xl font-bold text-xl transition-colors shadow-lg">
              Schedule Consultation
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default TeamMemberOption6;