const AboutOption2 = () => {
  return (
    <section className="py-24 bg-black text-white">
      <div className="container mx-auto px-6 max-w-4xl text-center">
        <h2 className="text-6xl font-bold mb-8">
          Healing Through <span className="text-nwt-light-teal">Connection</span>
        </h2>
        
        <div className="relative mb-12">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-1 h-32 bg-nwt-coral"></div>
          </div>
          <blockquote className="text-2xl italic text-gray-300 leading-relaxed relative z-10 bg-black px-8">
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
          </blockquote>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="space-y-3">
            <h3 className="text-xl font-semibold text-nwt-peach">Individual Therapy</h3>
            <p className="text-gray-400">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor.
            </p>
          </div>
          <div className="space-y-3">
            <h3 className="text-xl font-semibold text-nwt-peach">Couples Counseling</h3>
            <p className="text-gray-400">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor.
            </p>
          </div>
          <div className="space-y-3">
            <h3 className="text-xl font-semibold text-nwt-peach">Group Sessions</h3>
            <p className="text-gray-400">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor.
            </p>
          </div>
        </div>

        <div className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
          <p className="mb-6">
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore 
            eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, 
            sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium 
            doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutOption2;