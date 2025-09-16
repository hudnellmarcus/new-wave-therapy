"use client";
import { motion } from "framer-motion";

const Resources = () => {
  const ExternalLinkIcon = () => (
    <svg
      className="w-4 h-4"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
      />
    </svg>
  );

  return (
    <section className="mt-12 min-h-screen py-16 relative overflow-hidden">
      <div className="absolute inset-0">
        <div 
          className="w-full h-full bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: 'url(/backgrounds/stripe_bottom_background.jpeg)' }}
        />
      </div>
      <div className="absolute inset-0 bg-black/10 z-[2]"></div>

      <div className="container mx-auto px-4 relative z-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="font-family-orange-squash text-5xl md:text-7xl font-bold mb-6 text-white">
            Resources
          </h1>
          <p className="md:text-xl font-medium max-w-3xl mx-auto">
            <span className="text-white">
              A curated collection of healing resources, specialists, and
              support services to complement your therapeutic journey.
            </span>
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-white/60 backdrop-blur-sm rounded-2xl border border-nwt-dark-teal/20 p-8 lg:p-12 shadow-lg">
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-nwt-dark-teal mb-4">
                  Energy Work
                </h2>
                <ul className="space-y-2">
                  <li>
                    <a
                      href="https://www.thelilikoipractice.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-2 text-nwt-coral hover:text-nwt-peach transition-colors"
                    >
                      <span>The Lilikoi Practice</span>
                      <ExternalLinkIcon />
                    </a>
                    <span className="text-nwt-dark-teal/60 ml-2">($$$)</span>
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-nwt-dark-teal mb-4">
                  Ayurveda Clinician
                </h2>
                <ul className="space-y-2">
                  <li>
                    <a
                      href="https://www.rebuildrecovery.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-2 text-nwt-coral hover:text-nwt-peach transition-colors"
                    >
                      <span>Rebuild Recovery</span>
                      <ExternalLinkIcon />
                    </a>
                    <span className="text-nwt-dark-teal/60 ml-2">($$$)</span>
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-nwt-dark-teal mb-4">
                  Retreats
                </h2>
                <ul className="space-y-2">
                  <li>
                    <a
                      href="https://mountmadonna.org/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-2 text-nwt-coral hover:text-nwt-peach transition-colors"
                    >
                      <span>Mt Madonna</span>
                      <ExternalLinkIcon />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://insightla.org/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-2 text-nwt-coral hover:text-nwt-peach transition-colors"
                    >
                      <span>Insight LA</span>
                      <ExternalLinkIcon />
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-nwt-dark-teal mb-4">
                  Meditation Group
                </h2>
                <ul className="space-y-2">
                  <li>
                    <a
                      href="https://www.bigheartcity.org/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-2 text-nwt-coral hover:text-nwt-peach transition-colors"
                    >
                      <span>Big Heart City</span>
                      <ExternalLinkIcon />
                    </a>
                    <span className="text-green-600 ml-2">
                      (free, every Friday at 7:30pm over Zoom)
                    </span>
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-nwt-dark-teal mb-4">
                  Financial Support
                </h2>
                <ul className="space-y-2">
                  <li>
                    <a
                      href="https://thelovelandfoundation.org/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-2 text-nwt-coral hover:text-nwt-peach transition-colors"
                    >
                      <span>The Loveland Foundation</span>
                      <ExternalLinkIcon />
                    </a>
                    <span className="text-nwt-dark-teal/60 ml-2">
                      (Black and non-binary)
                    </span>
                  </li>
                  <li>
                    <a
                      href="https://nqttcn.com/en/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-2 text-nwt-coral hover:text-nwt-peach transition-colors"
                    >
                      <span>
                        National Queer and Trans Therapists of Color Network
                      </span>
                      <ExternalLinkIcon />
                    </a>
                    <span className="text-nwt-dark-teal/60 ml-2">
                      (Queer, Trans, POC)
                    </span>
                  </li>
                  <li>
                    <a
                      href="https://www.asianmentalhealthproject.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-2 text-nwt-coral hover:text-nwt-peach transition-colors"
                    >
                      <span>Asian Mental Health Project</span>
                      <ExternalLinkIcon />
                    </a>
                    <span className="text-nwt-dark-teal/60 ml-2">(Asian)</span>
                  </li>
                  <li>
                    <a
                      href="https://www.theprojectheal.org/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-2 text-nwt-coral hover:text-nwt-peach transition-colors"
                    >
                      <span>Project HEAL</span>
                      <ExternalLinkIcon />
                    </a>
                    <span className="text-nwt-dark-teal/60 ml-2">
                      (Clients with Eating Disorder)
                    </span>
                  </li>
                  <li>
                    <a
                      href="https://teams.semel.ucla.edu/psychiatry/service/spanish-speaking-psychosocial-clinic"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-2 text-nwt-coral hover:text-nwt-peach transition-colors"
                    >
                      <span>Spanish Speaking Psychosocial Clinic (UCLA)</span>
                      <ExternalLinkIcon />
                    </a>
                    <span className="text-nwt-dark-teal/60 ml-2">
                      (Spanish speaker)
                    </span>
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-nwt-dark-teal mb-4">
                  EMDR
                </h2>
                <ul className="space-y-2">
                  <li>
                    <a
                      href="https://www.psychologytoday.com/us/therapists/annie-finch-santa-barbara-ca/943761"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-2 text-nwt-coral hover:text-nwt-peach transition-colors"
                    >
                      <span>Annie Finch</span>
                      <ExternalLinkIcon />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://michaelcastagnetto.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-2 text-nwt-coral hover:text-nwt-peach transition-colors"
                    >
                      <span>Michael Castagnetto</span>
                      <ExternalLinkIcon />
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-nwt-dark-teal mb-4">
                  Ketamine
                </h2>
                <ul className="space-y-2">
                  <li>
                    <a
                      href="https://ketamineclinics.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-2 text-nwt-coral hover:text-nwt-peach transition-colors"
                    >
                      <span>Ketamine Clinics</span>
                      <ExternalLinkIcon />
                    </a>
                    <span className="text-nwt-dark-teal/60 ml-2">($$$)</span>
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-nwt-dark-teal mb-4">
                  Rage Workshop
                </h2>
                <ul className="space-y-2">
                  <li>
                    <a
                      href="https://www.denisepsychotherapist.net/RAGE"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-2 text-nwt-coral hover:text-nwt-peach transition-colors"
                    >
                      <span>Denise Psychotherapist</span>
                      <ExternalLinkIcon />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-12 bg-nwt-dark-teal/10 backdrop-blur-sm rounded-2xl p-8 text-center max-w-4xl mx-auto"
        >
          <h3 className="text-xl font-bold text-nwt-dark-teal mb-4">
            Important Notice
          </h3>
          <p className="text-nwt-dark-teal/80 leading-relaxed">
            These resources are provided for informational purposes and do not
            constitute medical advice. Please consult with your healthcare
            provider before beginning any new treatment or therapy. If you're
            experiencing a mental health crisis, please call 988 (Suicide &
            Crisis Lifeline) or go to your nearest emergency room.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Resources;
