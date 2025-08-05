import Button from '../Button';

const ContactOption1 = () => {
  return (
    <section className="min-h-screen bg-black text-white py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-nwt-light-teal">
              Get In Touch
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Ready to start your therapy journey? Our team is here to support you every step of the way.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold mb-6 text-nwt-peach">
                  Contact Information
                </h2>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-6 h-6 bg-nwt-coral rounded-full mt-1 flex-shrink-0"></div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">Phone</h3>
                      <p className="text-gray-300">(555) 123-4567</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-6 h-6 bg-nwt-coral rounded-full mt-1 flex-shrink-0"></div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">Email</h3>
                      <p className="text-gray-300">hello@newwavetherapy.com</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-6 h-6 bg-nwt-coral rounded-full mt-1 flex-shrink-0"></div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">Location</h3>
                      <p className="text-gray-300">
                        123 Wellness Avenue<br />
                        Suite 200<br />
                        Your City, State 12345
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-6 h-6 bg-nwt-coral rounded-full mt-1 flex-shrink-0"></div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">Hours</h3>
                      <div className="text-gray-300 space-y-1">
                        <p>Monday - Thursday: 9:00 AM - 7:00 PM</p>
                        <p>Friday: 9:00 AM - 5:00 PM</p>
                        <p>Saturday: 10:00 AM - 3:00 PM</p>
                        <p>Sunday: Closed</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-nwt-dark-teal p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-3 text-nwt-peach">Insurance & Payment</h3>
                <p className="text-gray-200 mb-4">
                  We accept most major insurance plans and offer flexible payment options to make therapy accessible.
                </p>
                <Button variant="outline" size="sm">
                  View Insurance Plans
                </Button>
              </div>
            </div>

            <div className="bg-gray-900 p-8 rounded-lg">
              <h2 className="text-3xl font-bold mb-6 text-nwt-peach">
                Send Us a Message
              </h2>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium mb-2">
                      First Name *
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-nwt-light-teal focus:border-transparent"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium mb-2">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-nwt-light-teal focus:border-transparent"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-nwt-light-teal focus:border-transparent"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-nwt-light-teal focus:border-transparent"
                  />
                </div>
                <div>
                  <label htmlFor="reason" className="block text-sm font-medium mb-2">
                    Reason for Contact
                  </label>
                  <select
                    id="reason"
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-nwt-light-teal focus:border-transparent"
                  >
                    <option value="">Select a reason</option>
                    <option value="new-client">New Client Inquiry</option>
                    <option value="existing-client">Existing Client</option>
                    <option value="insurance">Insurance Questions</option>
                    <option value="general">General Information</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-nwt-light-teal focus:border-transparent"
                    placeholder="Tell us how we can help you..."
                    required
                  ></textarea>
                </div>
                <div className="flex items-start space-x-3">
                  <input
                    type="checkbox"
                    id="consent"
                    className="mt-1 rounded border-gray-700 bg-gray-800 text-nwt-light-teal focus:ring-nwt-light-teal"
                    required
                  />
                  <label htmlFor="consent" className="text-sm text-gray-300">
                    I consent to being contacted by New Wave Therapy regarding my inquiry. *
                  </label>
                </div>
                <Button variant="primary" size="lg" className="w-full">
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactOption1;