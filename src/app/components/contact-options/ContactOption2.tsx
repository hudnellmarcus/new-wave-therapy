import Button from '../Button';

const ContactOption2 = () => {
  return (
    <section className="min-h-screen bg-stripe-overlay-light text-white py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-16">
            <h1 className="text-6xl md:text-8xl font-bold mb-8 text-nwt-coral">
              Connect
            </h1>
            <p className="text-2xl md:text-3xl text-nwt-peach font-light mb-8">
              Your journey to wellness starts with a conversation
            </p>
            <div className="w-24 h-1 bg-nwt-light-teal mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-gray-900 bg-opacity-80 backdrop-blur-sm p-8 rounded-xl border border-gray-700">
              <div className="w-16 h-16 bg-nwt-light-teal rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-2xl">📞</span>
              </div>
              <h3 className="text-xl font-bold mb-4 text-nwt-peach">Call Us</h3>
              <p className="text-gray-300 mb-4">
                Speak directly with our intake coordinator
              </p>
              <p className="text-lg font-semibold text-nwt-light-teal">
                (555) 123-4567
              </p>
            </div>

            <div className="bg-gray-900 bg-opacity-80 backdrop-blur-sm p-8 rounded-xl border border-gray-700">
              <div className="w-16 h-16 bg-nwt-coral rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-2xl">📧</span>
              </div>
              <h3 className="text-xl font-bold mb-4 text-nwt-peach">Email Us</h3>
              <p className="text-gray-300 mb-4">
                Send us your questions anytime
              </p>
              <p className="text-lg font-semibold text-nwt-light-teal">
                hello@newwavetherapy.com
              </p>
            </div>

            <div className="bg-gray-900 bg-opacity-80 backdrop-blur-sm p-8 rounded-xl border border-gray-700">
              <div className="w-16 h-16 bg-nwt-peach rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-2xl">📍</span>
              </div>
              <h3 className="text-xl font-bold mb-4 text-nwt-peach">Visit Us</h3>
              <p className="text-gray-300 mb-4">
                Come see our welcoming space
              </p>
              <p className="text-center text-nwt-light-teal">
                123 Wellness Ave<br />
                Suite 200<br />
                Your City, ST 12345
              </p>
            </div>
          </div>

          <div className="bg-gray-900 bg-opacity-90 backdrop-blur-sm p-12 rounded-2xl border border-gray-700 max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-nwt-light-teal">
              Ready to Begin?
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              Fill out our simple contact form and we&apos;ll get back to you within 24 hours to schedule your initial consultation.
            </p>
            
            <form className="space-y-6 text-left">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <input
                    type="text"
                    placeholder="Your Name *"
                    className="w-full px-6 py-4 bg-gray-800 border-2 border-gray-600 rounded-xl focus:ring-2 focus:ring-nwt-light-teal focus:border-nwt-light-teal transition-all text-lg"
                    required
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Your Email *"
                    className="w-full px-6 py-4 bg-gray-800 border-2 border-gray-600 rounded-xl focus:ring-2 focus:ring-nwt-light-teal focus:border-nwt-light-teal transition-all text-lg"
                    required
                  />
                </div>
              </div>
              
              <div>
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full px-6 py-4 bg-gray-800 border-2 border-gray-600 rounded-xl focus:ring-2 focus:ring-nwt-light-teal focus:border-nwt-light-teal transition-all text-lg"
                />
              </div>
              
              <div>
                <select className="w-full px-6 py-4 bg-gray-800 border-2 border-gray-600 rounded-xl focus:ring-2 focus:ring-nwt-light-teal focus:border-nwt-light-teal transition-all text-lg">
                  <option value="">How can we help you?</option>
                  <option value="individual">Individual Therapy</option>
                  <option value="couples">Couples Therapy</option>
                  <option value="family">Family Therapy</option>
                  <option value="group">Group Sessions</option>
                  <option value="consultation">Initial Consultation</option>
                </select>
              </div>
              
              <div>
                <textarea
                  placeholder="Tell us a bit about what brings you here... *"
                  rows={4}
                  className="w-full px-6 py-4 bg-gray-800 border-2 border-gray-600 rounded-xl focus:ring-2 focus:ring-nwt-light-teal focus:border-nwt-light-teal transition-all text-lg resize-none"
                  required
                ></textarea>
              </div>
              
              <div className="flex items-center space-x-3">
                <input
                  type="checkbox"
                  id="privacy"
                  className="w-5 h-5 rounded border-gray-600 bg-gray-800 text-nwt-light-teal focus:ring-nwt-light-teal"
                  required
                />
                <label htmlFor="privacy" className="text-gray-300">
                  I agree to be contacted regarding my inquiry and understand my information is confidential. *
                </label>
              </div>
              
              <div className="text-center pt-4">
                <Button variant="primary" size="xl" className="px-12">
                  Start My Journey
                </Button>
              </div>
            </form>
          </div>

          <div className="mt-16 text-center">
            <p className="text-gray-400 mb-4">
              Need immediate support? We&apos;re here for you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="ghost" size="md">
                Crisis Resources
              </Button>
              <Button variant="ghost" size="md">
                Insurance Information
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactOption2;