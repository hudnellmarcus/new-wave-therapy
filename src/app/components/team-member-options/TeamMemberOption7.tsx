interface TeamMemberOption7Props {
  therapistName: string;
}

const TeamMemberOption7 = ({ therapistName }: TeamMemberOption7Props) => {
  return (
    <main className="bg-stripe-overlay-light min-h-screen">
      <div className="container mx-auto px-6 max-w-6xl py-24 relative z-10">
        
        {/* Header Section - Photo and Contact */}
        <div className="grid lg:grid-cols-2 gap-16 items-start mb-20">
          {/* Photo */}
          <div>
            <div className="w-full max-w-md h-96 bg-gray-200 rounded-2xl overflow-hidden border-4 border-white/30">
              <div className="w-full h-full bg-gradient-to-br from-nwt-light-teal to-nwt-coral"></div>
            </div>
          </div>

          {/* Contact Card */}
          <div className="rounded-2xl p-8 border-4 border-white/30">
            <h1 className="text-4xl font-bold text-white mb-2">Dr. {therapistName}</h1>
            <p className="text-xl text-white/90 mb-6">Licensed Clinical Psychologist (PSY-29454)</p>
            
            <div className="space-y-4 mb-8">
              <button className="w-full bg-nwt-dark-teal hover:bg-nwt-dark-teal/90 text-white py-3 px-6 rounded-lg font-semibold transition-colors">
                SCHEDULE A FREE INITIAL CONSULTATION
              </button>
              <button className="w-full bg-transparent border-2 border-white text-white hover:bg-white hover:text-black py-3 px-6 rounded-lg font-semibold transition-colors">
                ALREADY A PATIENT? BOOK APPOINTMENT
              </button>
            </div>

            <div className="space-y-3 text-white/90">
              <div className="flex items-center">
                <span className="text-nwt-coral mr-3">📞</span>
                <span>(213) 223-8402</span>
              </div>
              <div className="flex items-center">
                <span className="text-nwt-coral mr-3">✉️</span>
                <span>{therapistName.toLowerCase().replace(/\s+/g, '.')}.burnham@newwavetherapy.com</span>
              </div>
              <div className="flex items-start">
                <span className="text-nwt-coral mr-3 mt-1">📍</span>
                <span>In-person sessions in West LA, virtual sessions for CA residents</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bio Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-6">About Me</h2>
          <div className="text-lg text-white/90 leading-relaxed space-y-4">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <p>
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.
            </p>
          </div>
        </div>

        {/* Specializations */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-6">What I Help With</h2>
          <div className="text-lg text-white/90 leading-relaxed">
            <p className="mb-4">
              I specialize in working with individuals dealing with anxiety, depression, trauma, and major life transitions. My approach combines evidence-based therapies with a warm, collaborative style.
            </p>
            <div className="flex flex-wrap gap-3 mt-6">
              <span className="bg-nwt-coral/80 text-white px-4 py-2 rounded-full text-sm font-medium">Anxiety & Panic</span>
              <span className="bg-nwt-light-teal/80 text-black px-4 py-2 rounded-full text-sm font-medium">Depression</span>
              <span className="bg-nwt-peach/80 text-black px-4 py-2 rounded-full text-sm font-medium">Trauma & PTSD</span>
              <span className="bg-nwt-coral/80 text-white px-4 py-2 rounded-full text-sm font-medium">Life Transitions</span>
            </div>
          </div>
        </div>

        {/* Education & Background */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-6">Background & Training</h2>
          <div className="text-lg text-white/90 leading-relaxed">
            <p className="mb-4">
              I received my Ph.D. in Clinical Psychology from the University of California, Los Angeles in 2015, and have been a licensed therapist since 2016. I completed additional certification in Cognitive Behavioral Therapy and specialize in trauma-informed care.
            </p>
            <p>
              My approach is grounded in evidence-based practices while maintaining a warm, non-judgmental environment where clients feel safe to explore and heal.
            </p>
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

export default TeamMemberOption7;