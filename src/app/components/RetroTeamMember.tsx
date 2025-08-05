import Button from "./Button"
import Link from "next/link"
import { Phone, Mail, MapPin, Calendar, ArrowLeft } from "lucide-react"

interface BadgeProps {
  children: React.ReactNode;
  variant?: string;
  className?: string;
}

const Badge = ({ children, className = "" }: BadgeProps) => {
  return (
    <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium border ${className}`}>
      {children}
    </span>
  );
};

interface RetroTeamMemberProps {
  therapistName?: string
}

export default function RetroTeamMember({ therapistName = "Sarah Chen" }: RetroTeamMemberProps) {
  return (
    <main className="min-h-screen text-white relative bg-stripe-overlay-light">
      {/* Background overlay */}
     {/* } <div className="absolute inset-0 bg-black/70 z-0" /> */ }
      {/* Subtle grain texture */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)`,
          backgroundSize: "20px 20px",
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-6 py-16">
        {/* Back Button */}
        <div className="mb-8">
          <Link 
            href="/team"
            className="inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span className="text-sm font-medium">Back to Team</span>
          </Link>
        </div>

        {/* Hero Section */}
        <div className="grid lg:grid-cols-5 gap-12 mb-20">
          {/* Photo */}
          <div className="lg:col-span-2">
            <div className="aspect-[4/5] bg-gradient-to-br from-nwt-light-teal to-nwt-dark-teal relative overflow-hidden">
              <div className="absolute inset-0 bg-black/20" />
              {/* Subtle texture overlay */}
              <div
                className="absolute inset-0 opacity-10"
                style={{
                  backgroundImage: `radial-gradient(circle at 2px 2px, rgba(0,0,0,0.3) 1px, transparent 0)`,
                  backgroundSize: "15px 15px",
                }}
              />
            </div>
          </div>

          {/* Info */}
          <div className="lg:col-span-3 flex flex-col justify-center space-y-8">
            <div>
              <h1 className="text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">Dr. {therapistName}</h1>
              <div className="w-16 h-0.5 bg-nwt-light-teal mb-6" />
              <p className="text-xl text-gray-300 mb-2">Licensed Clinical Psychologist</p>
              <p className="text-gray-400">PSY-29454 • 8+ Years Experience</p>
            </div>

            {/* Contact */}
            <div className="space-y-3 text-gray-300">
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-nwt-light-teal" />
                <span className="font-mono text-sm">(213) 223-8402</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-nwt-light-teal" />
                <span className="font-mono text-sm">
                  {therapistName.toLowerCase().replace(/\s+/g, ".")}.chen@newwavetherapy.com
                </span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-nwt-light-teal" />
                <span className="text-sm">West LA • Virtual Sessions Available</span>
              </div>
            </div>

            <Button variant="secondary" size="lg" className="w-fit">
              <Calendar className="w-4 h-4 mr-2" />
              Schedule Consultation
            </Button>
          </div>
        </div>

        {/* Bio */}
        <div className="mb-16">
          <div className="max-w-4xl">
            <p className="text-xl text-gray-300 leading-relaxed mb-6">
              I believe healing happens in the space between vulnerability and safety, where authentic connection meets
              professional expertise.
            </p>
            <p className="text-gray-400 leading-relaxed">
              My approach to therapy is grounded in the belief that every person has an innate capacity for growth and
              healing. With over eight years of clinical experience, I specialize in evidence-based treatments for
              anxiety, depression, and trauma, while never losing sight of the human being behind the diagnosis.
            </p>
          </div>
        </div>

        {/* Specialties */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-white mb-8">Areas of Focus</h2>
          <div className="flex flex-wrap gap-3">
            <Badge className="bg-nwt-light-teal/20 border-nwt-light-teal text-nwt-light-teal px-4 py-2">
              Anxiety & Panic
            </Badge>
            <Badge className="bg-nwt-coral/20 border-nwt-coral text-nwt-coral px-4 py-2">
              Depression
            </Badge>
            <Badge className="bg-nwt-light-teal/20 border-nwt-light-teal text-nwt-light-teal px-4 py-2">
              Trauma & PTSD
            </Badge>
            <Badge className="bg-nwt-coral/20 border-nwt-coral text-nwt-coral px-4 py-2">
              Life Transitions
            </Badge>
            <Badge className="bg-nwt-light-teal/20 border-nwt-light-teal text-nwt-light-teal px-4 py-2">
              CBT Specialist
            </Badge>
          </div>
        </div>

        {/* What to Expect */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h3 className="text-xl font-bold text-white mb-6">What to Expect</h3>
            <div className="space-y-4 text-gray-400">
              <p>Our first session focuses on understanding your unique situation and goals.</p>
              <p>I use evidence-based approaches tailored to your specific needs and preferences.</p>
              <p>Sessions are collaborative - you're the expert on your own experience.</p>
              <p>We'll work at your pace in a judgment-free, supportive environment.</p>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold text-white mb-6">Background</h3>
            <div className="space-y-4 text-gray-400 text-sm">
              <div className="border-l-2 border-nwt-light-teal pl-4">
                <p className="font-medium text-gray-300">Ph.D. Clinical Psychology</p>
                <p>UCLA, 2015</p>
              </div>
              <div className="border-l-2 border-nwt-coral pl-4">
                <p className="font-medium text-gray-300">Licensed Clinical Psychologist</p>
                <p>California Board of Psychology, 2016</p>
              </div>
              <div className="border-l-2 border-nwt-light-teal pl-4">
                <p className="font-medium text-gray-300">CBT Specialist Certification</p>
                <p>Beck Institute, 2018</p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <div className="bg-gradient-to-br from-nwt-dark-teal via-nwt-navy to-nwt-coral rounded-3xl p-12 md:p-16 border border-white/10">
            <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">Let's Work Together</h3>
            <p className="text-xl text-white/90 mb-10 max-w-3xl mx-auto leading-relaxed">
              Ready to begin your healing journey? I'm here to provide compassionate, professional support tailored to your unique needs.
            </p>
            <button className="bg-white text-black hover:bg-gray-100 px-12 py-5 rounded-2xl font-bold text-xl transition-colors shadow-lg">
              Schedule Consultation
            </button>
          </div>
        </div>
      </div>
    </main>
  )
}