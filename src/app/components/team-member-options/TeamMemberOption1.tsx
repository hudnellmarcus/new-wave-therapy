interface TeamMemberOption1Props {
  therapistName: string;
}

const TeamMemberOption1 = ({ therapistName }: TeamMemberOption1Props) => {
  return (
    <main className="py-24 bg-stripe-overlay">
      <div className="container mx-auto px-6 max-w-4xl relative z-10">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="w-32 h-32 md:w-40 md:h-40 bg-gray-200 rounded-full mx-auto mb-6 overflow-hidden">
            <div className="w-full h-full bg-gradient-to-br from-nwt-light-teal to-nwt-coral"></div>
          </div>
          <h1 className="text-5xl font-bold text-white mb-4">Dr. {therapistName}</h1>
          <p className="text-xl text-white/80 mb-2">Licensed Clinical Therapist</p>
          <p className="text-lg text-nwt-light-teal">Specializing in Anxiety & Depression</p>
        </div>

        {/* About Section */}
        <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-8 mb-12">
          <h2 className="text-3xl font-bold text-nwt-dark-teal mb-6">About Me</h2>
          <div className="prose prose-lg max-w-none">
            <p className="mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <p className="mb-4">
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis.
            </p>
          </div>
        </div>

        {/* Specializations */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6">
            <h3 className="text-2xl font-bold text-nwt-dark-teal mb-4">Areas of Expertise</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <div className="w-2 h-2 bg-nwt-coral rounded-full mr-3"></div>
                <span>Anxiety Disorders</span>
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-nwt-coral rounded-full mr-3"></div>
                <span>Depression Treatment</span>
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-nwt-coral rounded-full mr-3"></div>
                <span>Cognitive Behavioral Therapy</span>
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-nwt-coral rounded-full mr-3"></div>
                <span>Trauma-Informed Care</span>
              </li>
            </ul>
          </div>

          <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6">
            <h3 className="text-2xl font-bold text-nwt-dark-teal mb-4">Education & Credentials</h3>
            <div className="space-y-3">
              <div>
                <h4 className="font-semibold">Ph.D. in Clinical Psychology</h4>
                <p className="text-gray-600">University of Lorem Ipsum, 2015</p>
              </div>
              <div>
                <h4 className="font-semibold">Licensed Clinical Therapist</h4>
                <p className="text-gray-600">State Board Certified, 2016</p>
              </div>
              <div>
                <h4 className="font-semibold">CBT Specialist Certification</h4>
                <p className="text-gray-600">Institute of Lorem, 2018</p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact CTA */}
        <div className="text-center">
          <div className="bg-nwt-dark-teal rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Ready to Begin Your Journey?</h3>
            <p className="text-lg mb-6">Schedule a consultation to see if we're a good fit</p>
            <button className="bg-nwt-coral hover:bg-nwt-coral/90 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
              Book Appointment
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default TeamMemberOption1;