"use client";
import { useState } from "react";
import Button from "./Button";

const Contact = () => {
  const [isFormExpanded, setIsFormExpanded] = useState(false);
  return (
    <section className="min-h-screen py-16 relative contact-stripe-cream-bg">
      <div className="absolute inset-0 bg-black/10 z-[2]"></div>

      <div className="container mx-auto mt-12 px-4 relative z-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="font-family-orange-squash text-5xl md:text-7xl font-bold mb-6 text-nwt-dark-teal text-outline-strong">
              Get In Touch
            </h1>
            <p className="md:text-2xl font-bold max-w-2xl mx-auto text-outline">
              <span className="text-nwt-dark-teal">Ready to start your therapy journey? Our </span><span className="text-nwt-peach"> team is here to </span><span className="text-nwt-dark-teal">support </span>
              you every step of the way.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="flex flex-col items-center bg-white/80 backdrop-blur-sm p-5 rounded-xl border border-nwt-dark-teal/20">
              <div className="w-12 h-12 bg-nwt-light-teal rounded-full mx-auto mb-3 flex items-center justify-center">
                <span className="text-xl">📞</span>
              </div>
              <h3 className="text-xl font-bold mb-2 text-nwt-peach">Call Us</h3>
              <p className="text-nwt-dark-teal/70 mb-2">
                Speak directly with our intake coordinator
              </p>
              <p className="text-lg font-semibold text-nwt-dark-teal">
                (555) 123-4567
              </p>
            </div>

            <div className="flex flex-col items-center bg-white/80 backdrop-blur-sm p-5 rounded-xl border border-nwt-dark-teal/20">
              <div className="w-12 h-12 bg-nwt-coral rounded-full mx-auto mb-3 flex items-center justify-center">
                <span className="text-xl">📧</span>
              </div>
              <h3 className="text-xl font-bold mb-2 text-nwt-peach">
                Email Us
              </h3>
              <p className="text-nwt-dark-teal/70 mb-2">
                Send us your questions anytime
              </p>
              <p className="text-lg font-semibold text-nwt-dark-teal">
                hello@newwavetherapy.com
              </p>
            </div>

            <div className="flex flex-col items-center bg-white/80 backdrop-blur-sm p-5 rounded-xl border border-nwt-dark-teal/20">
              <div className="w-12 h-12 bg-nwt-peach rounded-full mx-auto mb-3 flex items-center justify-center">
                <span className="text-xl">📍</span>
              </div>
              <h3 className="text-xl font-bold mb-2 text-nwt-peach">
                Visit Us
              </h3>
              <p className="text-nwt-dark-teal/70 mb-2">Come see our welcoming space</p>
              <p className="text-center text-nwt-dark-teal">
                123 Wellness Ave
                <br />
                Suite 200
                <br />
                Your City, ST 12345
              </p>
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="bg-white/90 backdrop-blur-sm rounded-2xl border border-nwt-dark-teal/20 overflow-hidden">
                <div
                  className="p-6 cursor-pointer flex items-center justify-between bg-nwt-dark-teal/10"
                  onClick={() => setIsFormExpanded(!isFormExpanded)}
                >
                  <div>
                    <h2 className="text-2xl font-bold text-nwt-dark-teal">
                      Send Us a Message
                    </h2>
                    <p className="text-nwt-dark-teal/60">
                      {isFormExpanded
                        ? "Click to collapse"
                        : "Click to expand contact form"}
                    </p>
                  </div>
                  <div
                    className={`transform transition-transform duration-300 ${
                      isFormExpanded ? "rotate-180" : ""
                    }`}
                  >
                    <div className="w-6 h-6 border-2 border-nwt-dark-teal border-t-transparent rounded-full"></div>
                    <div className="w-0 h-0 border-l-4 border-r-4 border-b-4 border-l-transparent border-r-transparent border-b-nwt-dark-teal mx-auto -mt-3"></div>
                  </div>
                </div>

                <div
                  className={`transition-all duration-500 ease-in-out ${
                    isFormExpanded
                      ? "max-h-screen opacity-100"
                      : "max-h-0 opacity-0"
                  } overflow-hidden`}
                >
                  <div className="p-8">
                    <form className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium mb-2 text-nwt-dark-teal">
                            First Name *
                          </label>
                          <input
                            type="text"
                            className="w-full px-4 py-3 bg-white border border-nwt-dark-teal/30 rounded-lg focus:ring-2 focus:ring-nwt-dark-teal focus:border-transparent transition-all"
                            required
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium mb-2 text-nwt-dark-teal">
                            Last Name *
                          </label>
                          <input
                            type="text"
                            className="w-full px-4 py-3 bg-white border border-nwt-dark-teal/30 rounded-lg focus:ring-2 focus:ring-nwt-dark-teal focus:border-transparent transition-all"
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
                          className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg focus:ring-2 focus:ring-nwt-dark-teal focus:border-transparent transition-all"
                          required
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium mb-2 text-gray-300">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg focus:ring-2 focus:ring-nwt-dark-teal focus:border-transparent transition-all"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium mb-2 text-gray-300">
                          Preferred Contact Method
                        </label>
                        <div className="flex flex-wrap gap-4">
                          <label className="flex items-center space-x-2">
                            <input
                              type="radio"
                              name="contact"
                              value="phone"
                              className="text-nwt-dark-teal focus:ring-nwt-dark-teal"
                            />
                            <span className="text-sm">Phone</span>
                          </label>
                          <label className="flex items-center space-x-2">
                            <input
                              type="radio"
                              name="contact"
                              value="email"
                              className="text-nwt-dark-teal focus:ring-nwt-dark-teal"
                            />
                            <span className="text-sm">Email</span>
                          </label>
                          <label className="flex items-center space-x-2">
                            <input
                              type="radio"
                              name="contact"
                              value="text"
                              className="text-nwt-dark-teal focus:ring-nwt-dark-teal"
                            />
                            <span className="text-sm">Text</span>
                          </label>
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium mb-2 text-gray-300">
                          Type of Support Needed
                        </label>
                        <select className="w-full px-4 py-3 bg-white border border-nwt-dark-teal/30 rounded-lg focus:ring-2 focus:ring-nwt-dark-teal focus:border-transparent transition-all">
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
                          className="w-full px-4 py-3 bg-white border border-nwt-dark-teal/30 rounded-lg focus:ring-2 focus:ring-nwt-dark-teal focus:border-transparent transition-all resize-none"
                          placeholder="Share what's bringing you to therapy and any specific concerns or goals you have..."
                          required
                        ></textarea>
                        <p className="text-xs text-nwt-dark-teal/50 mt-1">
                          This information helps us match you with the right
                          therapist.
                        </p>
                      </div>

                      <div>
                        <label className="block text-sm font-medium mb-2 text-gray-300">
                          Insurance Provider (if applicable)
                        </label>
                        <input
                          type="text"
                          className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg focus:ring-2 focus:ring-nwt-dark-teal focus:border-transparent transition-all"
                          placeholder="e.g., Blue Cross Blue Shield, Aetna, etc."
                        />
                      </div>

                      <div className="flex items-start space-x-3">
                        <input
                          type="checkbox"
                          id="consent"
                          className="mt-1 rounded border-nwt-dark-teal/30 bg-white text-nwt-dark-teal focus:ring-nwt-dark-teal"
                          required
                        />
                        <label
                          htmlFor="consent"
                          className="text-sm text-nwt-dark-teal/70 leading-relaxed"
                        >
                          I consent to New Wave Therapy contacting me regarding
                          my inquiry. I understand that all communication will
                          be handled confidentially and in accordance with HIPAA
                          guidelines. *
                        </label>
                      </div>

                      <div className="pt-4">
                        <Button
                          variant="primary"
                          size="lg"
                          className="w-full mb-4"
                        >
                          Submit Contact Form
                        </Button>
                        <p className="text-center text-xs text-nwt-dark-teal/50">
                          You&apos;ll receive a confirmation email and we&apos;ll be in
                          touch within 24 hours.
                        </p>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl border border-nwt-dark-teal/20">
                <h3 className="text-xl font-bold mb-2 text-nwt-peach">
                  Office Hours
                </h3>
                <div className="space-y-2 text-nwt-dark-teal/80">
                  <div className="flex justify-between">
                    <span>Monday - Thursday</span>
                    <span>9:00 AM - 7:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Friday</span>
                    <span>9:00 AM - 5:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday</span>
                    <span>10:00 AM - 3:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span>Closed</span>
                  </div>
                </div>
              </div>

              {/* <div className="bg-nwt-dark-teal/10 p-6 rounded-xl border border-nwt-dark-teal/20">
                <h3 className="text-xl font-bold mb-2 text-nwt-peach">
                  What to Expect
                </h3>
                <div className="space-y-3 text-sm text-nwt-dark-teal/70">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-nwt-dark-teal rounded-full mt-2 flex-shrink-0"></div>
                    <p>Initial response within 24 hours</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-nwt-dark-teal rounded-full mt-2 flex-shrink-0"></div>
                    <p>Brief consultation to discuss your needs</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-nwt-dark-teal rounded-full mt-2 flex-shrink-0"></div>
                    <p>Therapist matching and scheduling</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-nwt-dark-teal rounded-full mt-2 flex-shrink-0"></div>
                    <p>Flexible appointment times available</p>
                  </div>
                </div>
              </div>

              <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl border border-nwt-dark-teal/20">
                <h3 className="text-lg font-bold mb-3 text-nwt-peach">
                  Insurance & Payment
                </h3>
                <p className="text-nwt-dark-teal/70 text-sm mb-4">
                  We accept most major insurance plans and offer flexible
                  payment options to make therapy accessible.
                </p>
                <Button variant="outline" size="sm" className="w-full">
                  View Insurance Plans
                </Button>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
