const AboutOption1 = () => {
  return (
    <section className="py-20 bg-black text-white">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <h2 className="text-5xl font-bold leading-tight">
              About Our <br />
              <span className="text-nwt-light-teal">Practice</span>
            </h2>
            <p className="text-xl text-gray-300 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod 
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim 
              veniam, quis nostrud exercitation.
            </p>
            <p className="text-lg text-gray-400 leading-relaxed">
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum 
              dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non 
              proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <div className="pt-4">
              <button className="bg-nwt-coral hover:bg-nwt-peach transition-colors px-8 py-3 rounded-lg font-semibold">
                Meet Our Team
              </button>
            </div>
          </div>
          <div className="bg-gray-800 aspect-square rounded-2xl flex items-center justify-center">
            <div className="text-center text-gray-500">
              <div className="w-24 h-24 bg-gray-700 rounded-full mx-auto mb-4"></div>
              <p>Team Photo</p>
              <p className="text-sm">Group Image Placeholder</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutOption1;