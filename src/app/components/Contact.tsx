"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Button from "./Button";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  contactMethod: string;
  supportType: string;
  message: string;
  insurance: string;
  consent: boolean;
}

interface FormErrors {
  [key: string]: string;
}

const Contact = () => {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    contactMethod: "",
    supportType: "",
    message: "",
    insurance: "",
    consent: false,
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.firstName.trim()) newErrors.firstName = "First name is required";
    if (!formData.lastName.trim()) newErrors.lastName = "Last name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }
    if (!formData.message.trim()) newErrors.message = "Please tell us about your situation";
    if (!formData.consent) newErrors.consent = "You must consent to be contacted";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsSubmitting(false);
    setSubmitSuccess(true);
  };

  const handleInputChange = (field: keyof FormData, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: "" }));
    }
  };

  const PhoneIcon = () => (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
    </svg>
  );

  const EmailIcon = () => (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  );

  const LocationIcon = () => (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  );

  const ClockIcon = () => (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  );

  const CheckIcon = () => (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
    </svg>
  );

  if (submitSuccess) {
    return (
      <section className="min-h-screen relative contact-stripe-cream-bg pt-16">
        <div className="absolute inset-0 bg-black/10 z-[2]"></div>
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="relative z-20 flex items-center justify-center min-h-screen px-4"
        >
          <div className="bg-white/90 backdrop-blur-sm p-12 rounded-2xl border border-nwt-dark-teal/20 text-center max-w-md">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring" }}
              className="w-16 h-16 bg-green-500 rounded-full mx-auto mb-6 flex items-center justify-center"
            >
              <CheckIcon />
            </motion.div>
            <h2 className="text-2xl font-bold text-nwt-dark-teal mb-4">Message Sent!</h2>
            <p className="text-nwt-dark-teal/70 mb-6">
              Thank you for reaching out. We'll be in touch within 24 hours.
            </p>
            <Button 
              variant="primary" 
              onClick={() => setSubmitSuccess(false)}
            >
              Send Another Message
            </Button>
          </div>
        </motion.div>
      </section>
    );
  }

  return (
    <section className="min-h-screen relative contact-stripe-cream-bg pt-16">
      <div className="absolute inset-0 bg-black/10 z-[2]"></div>
      
      <div className="relative z-20 min-h-screen flex flex-col">
        <div className="flex flex-col lg:flex-row min-h-screen">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="lg:w-2/5 bg-nwt-dark-teal/95 backdrop-blur-sm flex flex-col"
          >
            <div className="p-8 lg:p-12 flex-1">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-12 text-center"
              >
                <h1 className="font-family-orange-squash text-4xl lg:text-6xl font-bold mb-6 text-white">
                  Get In Touch
                </h1>
                <p className="text-lg lg:text-xl text-white/90 leading-relaxed max-w-md mx-auto">
                  Ready to start your therapy journey? Our team is here to support you every step of the way.
                </p>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="space-y-8"
              >
                <div className="flex items-start space-x-4 group">
                  <div className="w-12 h-12 bg-nwt-light-teal rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <PhoneIcon />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-white">Call Us</h3>
                    <p className="text-white/80 mb-2">Speak directly with our intake coordinator</p>
                    <p className="text-lg font-semibold text-nwt-peach">(555) 123-4567</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 group">
                  <div className="w-12 h-12 bg-nwt-coral rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <EmailIcon />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-white">Email Us</h3>
                    <p className="text-white/80 mb-2">Send us your questions anytime</p>
                    <p className="text-lg font-semibold text-nwt-peach">hello@newwavetherapy.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 group">
                  <div className="w-12 h-12 bg-nwt-peach rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <LocationIcon />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-white">Visit Us</h3>
                    <p className="text-white/80 mb-2">Come see our welcoming space</p>
                    <div className="text-nwt-peach">
                      <p>123 Wellness Ave</p>
                      <p>Suite 200</p>
                      <p>Your City, ST 12345</p>
                    </div>
                  </div>
                </div>

                <div className="flex items-start space-x-4 group">
                  <div className="w-12 h-12 bg-nwt-mint rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <ClockIcon />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-white">Office Hours</h3>
                    <div className="space-y-1 text-white/90">
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
                </div>
              </motion.div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="lg:w-3/5 bg-white/90 backdrop-blur-sm flex flex-col"
          >
            <div className="p-8 lg:p-12 flex-1">
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="text-3xl font-bold text-nwt-dark-teal mb-8"
              >
                Send Us a Message
              </motion.h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium mb-2 text-nwt-dark-teal">
                      First Name *
                    </label>
                    <input
                      id="firstName"
                      type="text"
                      value={formData.firstName}
                      onChange={(e) => handleInputChange("firstName", e.target.value)}
                      className={`w-full px-4 py-3 bg-white border rounded-lg focus:ring-2 focus:ring-nwt-dark-teal focus:border-transparent transition-all ${
                        errors.firstName ? "border-red-500" : "border-nwt-dark-teal/30"
                      }`}
                      aria-describedby={errors.firstName ? "firstName-error" : undefined}
                    />
                    <AnimatePresence>
                      {errors.firstName && (
                        <motion.p
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          id="firstName-error"
                          className="text-red-500 text-sm mt-1"
                        >
                          {errors.firstName}
                        </motion.p>
                      )}
                    </AnimatePresence>
                  </div>
                  
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium mb-2 text-nwt-dark-teal">
                      Last Name *
                    </label>
                    <input
                      id="lastName"
                      type="text"
                      value={formData.lastName}
                      onChange={(e) => handleInputChange("lastName", e.target.value)}
                      className={`w-full px-4 py-3 bg-white border rounded-lg focus:ring-2 focus:ring-nwt-dark-teal focus:border-transparent transition-all ${
                        errors.lastName ? "border-red-500" : "border-nwt-dark-teal/30"
                      }`}
                      aria-describedby={errors.lastName ? "lastName-error" : undefined}
                    />
                    <AnimatePresence>
                      {errors.lastName && (
                        <motion.p
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          id="lastName-error"
                          className="text-red-500 text-sm mt-1"
                        >
                          {errors.lastName}
                        </motion.p>
                      )}
                    </AnimatePresence>
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2 text-nwt-dark-teal">
                    Email Address *
                  </label>
                  <input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    className={`w-full px-4 py-3 bg-white border rounded-lg focus:ring-2 focus:ring-nwt-dark-teal focus:border-transparent transition-all ${
                      errors.email ? "border-red-500" : "border-nwt-dark-teal/30"
                    }`}
                    aria-describedby={errors.email ? "email-error" : undefined}
                  />
                  <AnimatePresence>
                    {errors.email && (
                      <motion.p
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        id="email-error"
                        className="text-red-500 text-sm mt-1"
                      >
                        {errors.email}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium mb-2 text-nwt-dark-teal">
                    Phone Number
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => handleInputChange("phone", e.target.value)}
                    className="w-full px-4 py-3 bg-white border border-nwt-dark-teal/30 rounded-lg focus:ring-2 focus:ring-nwt-dark-teal focus:border-transparent transition-all"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2 text-nwt-dark-teal">
                    Preferred Contact Method
                  </label>
                  <div className="flex flex-wrap gap-4">
                    {["phone", "email", "text"].map((method) => (
                      <label key={method} className="flex items-center space-x-2 cursor-pointer">
                        <input
                          type="radio"
                          name="contact"
                          value={method}
                          checked={formData.contactMethod === method}
                          onChange={(e) => handleInputChange("contactMethod", e.target.value)}
                          className="text-nwt-dark-teal focus:ring-nwt-dark-teal"
                        />
                        <span className="text-sm capitalize text-nwt-dark-teal">{method}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label htmlFor="supportType" className="block text-sm font-medium mb-2 text-nwt-dark-teal">
                    Type of Support Needed
                  </label>
                  <select 
                    id="supportType"
                    value={formData.supportType}
                    onChange={(e) => handleInputChange("supportType", e.target.value)}
                    className="w-full px-4 py-3 bg-white border border-nwt-dark-teal/30 rounded-lg focus:ring-2 focus:ring-nwt-dark-teal focus:border-transparent transition-all"
                  >
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
                  <label htmlFor="message" className="block text-sm font-medium mb-2 text-nwt-dark-teal">
                    Tell us about your situation *
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    value={formData.message}
                    onChange={(e) => handleInputChange("message", e.target.value)}
                    className={`w-full px-4 py-3 bg-white border rounded-lg focus:ring-2 focus:ring-nwt-dark-teal focus:border-transparent transition-all resize-none ${
                      errors.message ? "border-red-500" : "border-nwt-dark-teal/30"
                    }`}
                    placeholder="Share what's bringing you to therapy and any specific concerns or goals you have..."
                    aria-describedby={errors.message ? "message-error" : "message-help"}
                  />
                  <AnimatePresence>
                    {errors.message && (
                      <motion.p
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        id="message-error"
                        className="text-red-500 text-sm mt-1"
                      >
                        {errors.message}
                      </motion.p>
                    )}
                  </AnimatePresence>
                  <p id="message-help" className="text-xs text-nwt-dark-teal/50 mt-1">
                    This information helps us match you with the right therapist.
                  </p>
                </div>

                <div>
                  <label htmlFor="insurance" className="block text-sm font-medium mb-2 text-nwt-dark-teal">
                    Insurance Provider (if applicable)
                  </label>
                  <input
                    id="insurance"
                    type="text"
                    value={formData.insurance}
                    onChange={(e) => handleInputChange("insurance", e.target.value)}
                    className="w-full px-4 py-3 bg-white border border-nwt-dark-teal/30 rounded-lg focus:ring-2 focus:ring-nwt-dark-teal focus:border-transparent transition-all"
                    placeholder="e.g., Blue Cross Blue Shield, Aetna, etc."
                  />
                </div>

                <div className="flex items-start space-x-3">
                  <input
                    type="checkbox"
                    id="consent"
                    checked={formData.consent}
                    onChange={(e) => handleInputChange("consent", e.target.checked)}
                    className={`mt-1 rounded border-nwt-dark-teal/30 bg-white text-nwt-dark-teal focus:ring-nwt-dark-teal ${
                      errors.consent ? "border-red-500" : ""
                    }`}
                    aria-describedby={errors.consent ? "consent-error" : undefined}
                  />
                  <div>
                    <label htmlFor="consent" className="text-sm text-nwt-dark-teal/70 leading-relaxed cursor-pointer">
                      I consent to New Wave Therapy contacting me regarding my inquiry. I understand that all communication will be handled confidentially and in accordance with HIPAA guidelines. *
                    </label>
                    <AnimatePresence>
                      {errors.consent && (
                        <motion.p
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          id="consent-error"
                          className="text-red-500 text-sm mt-1"
                        >
                          {errors.consent}
                        </motion.p>
                      )}
                    </AnimatePresence>
                  </div>
                </div>

                <div className="pt-4">
                  <Button
                    variant="primary"
                    size="lg"
                    className="w-full mb-4 relative"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                      />
                    ) : (
                      "Submit Contact Form"
                    )}
                  </Button>
                  <p className="text-center text-xs text-nwt-dark-teal/50">
                    You'll receive a confirmation email and we'll be in touch within 24 hours.
                  </p>
                </div>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;