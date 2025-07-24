const AboutOption3 = () => {
  return (
    <section className="py-20 bg-black text-white">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4">
            <span className="text-nwt-light-teal">New Wave</span> Approach
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          <div className="space-y-8">
            <div>
              <h3 className="text-3xl font-bold mb-4 text-nwt-peach">Our Philosophy</h3>
              <p className="text-gray-300 leading-relaxed text-lg">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim 
                veniam, quis nostrud exercitation ullamco laboris.
              </p>
            </div>
            
            <div>
              <h3 className="text-3xl font-bold mb-4 text-nwt-peach">Our Team</h3>
              <p className="text-gray-300 leading-relaxed text-lg">
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum 
                dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non 
                proident, sunt in culpa qui officia deserunt mollit anim.
              </p>
            </div>
          </div>

          <div className="space-y-8">
            <div className="grid grid-cols-2 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-nwt-coral mb-2">5+</div>
                <div className="text-gray-400">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-nwt-coral mb-2">200+</div>
                <div className="text-gray-400">Clients Helped</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-nwt-coral mb-2">3</div>
                <div className="text-gray-400">Specializations</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-nwt-coral mb-2">24/7</div>
                <div className="text-gray-400">Support Available</div>
              </div>
            </div>
            
            <div className="bg-gray-900 p-8 rounded-xl">
              <h4 className="text-xl font-semibold mb-4 text-nwt-light-teal">Specializations</h4>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-nwt-coral rounded-full mr-3"></div>
                  Anxiety & Depression
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-nwt-coral rounded-full mr-3"></div>
                  Relationship Counseling
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-nwt-coral rounded-full mr-3"></div>
                  Trauma Recovery
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-nwt-coral rounded-full mr-3"></div>
                  Life Transitions
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutOption3;