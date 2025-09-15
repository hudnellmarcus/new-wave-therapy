import Button from '../Button';

const ContactOption3 = () => {
  return (
    <section className="min-h-screen bg-black text-white">
      <div className="bg-v-stripe-overlay min-h-screen py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-20">
              <h1 className="text-5xl md:text-7xl font-bold mb-6">
                <span className="text-nwt-light-teal">Let&apos;s</span>{" "}
                <span className="text-nwt-coral">Talk</span>
              </h1>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
                Taking the first step towards therapy can feel overwhelming. We&apos;re here to make it as comfortable and straightforward as possible.
              </p>
            </div>

            <div className="grid lg:grid-cols-5 gap-12 items-start">
              <div className="lg:col-span-2 space-y-10">
                <div className="space-y-8">
                  <div>
                    <h2 className="text-2xl font-bold mb-6 text-nwt-peach">
                      Quick Contact
                    </h2>
                    <div className="space-y-4">
                      <div className="flex items-center space-x-4 p-4 bg-gray-900 rounded-lg">
                        <div className="w-3 h-3 bg-nwt-coral rounded-full"></div>
                        <div>
                          <p className="font-medium">Call or Text</p>
                          <p className="text-nwt-light-teal text-lg">(555) 123-4567</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-4 p-4 bg-gray-900 rounded-lg">
                        <div className="w-3 h-3 bg-nwt-peach rounded-full"></div>
                        <div>
                          <p className="font-medium">Email</p>
                          <p className="text-nwt-light-teal text-lg">hello@newwavetherapy.com</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold mb-4 text-nwt-peach">
                      Office Location
                    </h3>
                    <div className="bg-gray-900 p-6 rounded-lg">
                      <p className="text-gray-300 leading-relaxed">
                        123 Wellness Avenue<br />
                        Suite 200<br />
                        Your City, State 12345
                      </p>
                      <div className="mt-4 pt-4 border-t border-gray-700">
                        <p className="text-sm text-gray-400 mb-2">Office Hours:</p>
                        <div className="text-sm text-gray-300 space-y-1">
                          <p>Mon-Thu: 9:00 AM - 7:00 PM</p>
                          <p>Fri: 9:00 AM - 5:00 PM</p>
                          <p>Sat: 10:00 AM - 3:00 PM</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-nwt-dark-teal bg-opacity-50 p-6 rounded-lg border border-nwt-light-teal border-opacity-30">
                    <h3 className="text-lg font-bold mb-3 text-nwt-peach">
                      What to Expect
                    </h3>
                    <div className="space-y-3 text-sm text-gray-200">
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-nwt-light-teal rounded-full mt-2 flex-shrink-0"></div>
                        <p>Initial response within 24 hours</p>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-nwt-light-teal rounded-full mt-2 flex-shrink-0"></div>
                        <p>Brief consultation to discuss your needs</p>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-nwt-light-teal rounded-full mt-2 flex-shrink-0"></div>
                        <p>Therapist matching and scheduling</p>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-nwt-light-teal rounded-full mt-2 flex-shrink-0"></div>
                        <p>Flexible appointment times available</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-3">
                <div className="bg-gray-900 bg-opacity-80 p-8 rounded-2xl border border-gray-700">
                  <h2 className="text-3xl font-bold mb-2 text-nwt-light-teal">
                    Get Started Today
                  </h2>
                  <p className="text-gray-400 mb-8">
                    Complete this form and we&apos;ll reach out to schedule your consultation.
                  </p>
                  
                  <form className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-2 text-gray-300">
                          First Name *
                        </label>
                        <input
                          type="text"
                          className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg focus:ring-2 focus:ring-nwt-light-teal focus:border-transparent transition-all"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2 text-gray-300">
                          Last Name *
                        </label>
                        <input
                          type="text"
                          className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg focus:ring-2 focus:ring-nwt-light-teal focus:border-transparent transition-all"
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2 text-gray-300">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg focus:ring-2 focus:ring-nwt-light-teal focus:border-transparent transition-all"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2 text-gray-300">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg focus:ring-2 focus:ring-nwt-light-teal focus:border-transparent transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2 text-gray-300">
                        Preferred Contact Method
                      </label>
                      <div className="flex flex-wrap gap-3">
                        <label className="flex items-center space-x-2">
                          <input type="radio" name="contact" value="phone" className="text-nwt-light-teal focus:ring-nwt-light-teal" />
                          <span className="text-sm">Phone</span>
                        </label>
                        <label className="flex items-center space-x-2">
                          <input type="radio" name="contact" value="email" className="text-nwt-light-teal focus:ring-nwt-light-teal" />
                          <span className="text-sm">Email</span>
                        </label>
                        <label className="flex items-center space-x-2">
                          <input type="radio" name="contact" value="text" className="text-nwt-light-teal focus:ring-nwt-light-teal" />
                          <span className="text-sm">Text</span>
                        </label>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2 text-gray-300">
                        Type of Support Needed
                      </label>
                      <select className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg focus:ring-2 focus:ring-nwt-light-teal focus:border-transparent transition-all">
                        <option value="">Please select...</option>
                        <option value="individual">Individual Therapy</option>
                        <option value="couples">Couples Therapy</option>
                        <option value="family">Family Therapy</option>
                        <option value="teen">Teen/Adolescent Therapy</option>
                        <option value="group">Group Therapy</option>
                        <option value="unsure">Not sure yet</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2 text-gray-300">
                        Tell us about your situation *
                      </label>
                      <textarea
                        rows={4}
                        className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg focus:ring-2 focus:ring-nwt-light-teal focus:border-transparent transition-all resize-none"
                        placeholder="Share what's bringing you to therapy and any specific concerns or goals you have..."
                        required
                      ></textarea>
                      <p className="text-xs text-gray-500 mt-1">
                        This information helps us match you with the right therapist.
                      </p>
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2 text-gray-300">
                        Insurance Provider (if applicable)
                      </label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg focus:ring-2 focus:ring-nwt-light-teal focus:border-transparent transition-all"
                        placeholder="e.g., Blue Cross Blue Shield, Aetna, etc."
                      />
                    </div>

                    <div className="flex items-start space-x-3">
                      <input
                        type="checkbox"
                        id="consent"
                        className="mt-1 rounded border-gray-600 bg-gray-800 text-nwt-light-teal focus:ring-nwt-light-teal"
                        required
                      />
                      <label htmlFor="consent" className="text-sm text-gray-300 leading-relaxed">
                        I consent to New Wave Therapy contacting me regarding my inquiry. I understand that all communication will be handled confidentially and in accordance with HIPAA guidelines. *
                      </label>
                    </div>

                    <div className="pt-4">
                      <Button variant="primary" size="lg" className="w-full mb-4">
                        Submit Contact Form
                      </Button>
                      <p className="text-center text-xs text-gray-500">
                        You&apos;ll receive a confirmation email and we&apos;ll be in touch within 24 hours.
                      </p>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactOption3;