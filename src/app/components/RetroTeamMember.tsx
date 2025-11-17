import Image from 'next/image';
import Button from "./Button"
import Link from "next/link"
import { Phone, Mail, MapPin, Calendar, ArrowLeft } from "lucide-react"
import { urlFor } from "@/sanity/image";
import BlockContent from '@sanity/block-content-to-react';
import PersonSchema from "./PersonSchema";

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

interface TherapistData {
  _id: string;
  name: string;
  title: string;
  credentials: string;
  bio: React.ReactNode;
  specializations: string[];
  education: string[];
  email: string;
  pronouns: string;
  slug: string;
  primaryPhoto?: object;
}

interface RetroTeamMemberProps {
  therapist: TherapistData;
}

export default function RetroTeamMember({ therapist }: RetroTeamMemberProps) {
  return (
    <main className="min-h-screen text-white relative bg-stripe-overlay-light">
      <PersonSchema
        name={therapist.name}
        title={therapist.title}
        credentials={therapist.credentials}
        specializations={therapist.specializations}
        slug={therapist.slug}
        imageUrl={
          therapist.primaryPhoto ? urlFor(therapist.primaryPhoto).url() : undefined
        }
      />
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
              {therapist.primaryPhoto ? (
                <Image
                  src={urlFor(therapist.primaryPhoto).width(600).height(750).url()}
                  alt={therapist.name}
                  fill
                  className="object-cover"
                />
              ) : (
                <>
                  <div className="absolute inset-0 bg-black/20" />
                  {/* Subtle texture overlay */}
                  <div
                    className="absolute inset-0 opacity-10"
                    style={{
                      backgroundImage: `radial-gradient(circle at 2px 2px, rgba(0,0,0,0.3) 1px, transparent 0)`,
                      backgroundSize: "15px 15px",
                    }}
                  />
                </>
              )}
            </div>
          </div>

          {/* Info */}
          <div className="lg:col-span-3 flex flex-col justify-center space-y-8">
            <div>
              <h1 className="text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">{therapist.name}</h1>
              <div className="w-16 h-0.5 bg-nwt-light-teal mb-6" />
              <p className="text-xl text-gray-300 mb-2">{therapist.title}</p>
              <p className="text-gray-400">{therapist.credentials}</p>
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
                  {therapist.email || `${therapist.name.toLowerCase().replace(/\s+/g, ".")}@newwavetherapy.com`}
                </span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-nwt-light-teal" />
                <span className="text-sm">West LA • Virtual Sessions Available</span>
              </div>
            </div>

            <Link href="/contact">
              <Button variant="secondary" size="lg" className="w-fit">
                <Calendar className="w-4 h-4 mr-2" />
                Schedule Consultation
              </Button>
            </Link>
          </div>
        </div>

        {/* Bio */}
        <div className="mb-16">
          <div className="max-w-4xl">
            {therapist.bio && (
              <div className="text-xl text-gray-300 leading-relaxed">
                <BlockContent
                  blocks={therapist.bio}
                  serializers={{
                    types: {
                      block: (props: unknown) => {
                        const blockProps = props as { node: { style?: string }; children: React.ReactNode };
                        const { style = 'normal' } = blockProps.node;

                        if (style === 'normal') {
                          return <p className="mb-6 text-gray-300">{blockProps.children}</p>;
                        }
                        if (style === 'h1') {
                          return <h1 className="text-3xl font-bold text-white mb-4">{blockProps.children}</h1>;
                        }
                        if (style === 'h2') {
                          return <h2 className="text-2xl font-bold text-white mb-3">{blockProps.children}</h2>;
                        }

                        return <p className="mb-4 text-gray-300">{blockProps.children}</p>;
                      }
                    },
                    marks: {
                      strong: ({ children }: { children: React.ReactNode }) => <strong className="font-bold text-white">{children}</strong>,
                      em: ({ children }: { children: React.ReactNode }) => <em className="italic">{children}</em>,
                    }
                  }}
                />
              </div>
            )}
          </div>
        </div>

        {/* Specialties */}
        {therapist.specializations && therapist.specializations.length > 0 && (
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-white mb-8">Areas of Focus</h2>
            <div className="flex flex-wrap gap-3">
              {therapist.specializations.map((specialization, index) => {
                const colors = [
                  "bg-nwt-light-teal/20 border-nwt-light-teal text-nwt-light-teal",
                  "bg-nwt-coral/20 border-nwt-coral text-nwt-coral"
                ];
                return (
                  <Badge key={index} className={`${colors[index % colors.length]} px-4 py-2`}>
                    {specialization}
                  </Badge>
                );
              })}
            </div>
          </div>
        )}

        {/* What to Expect */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h3 className="text-xl font-bold text-white mb-6">What to Expect</h3>
            <div className="space-y-4 text-gray-400">
              <p>Our first session focuses on understanding your unique situation and goals.</p>
              <p>I use evidence-based approaches tailored to your specific needs and preferences.</p>
              <p>Sessions are collaborative - you&apos;re the expert on your own experience.</p>
              <p>We&apos;ll work at your pace in a judgment-free, supportive environment.</p>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold text-white mb-6">Background</h3>
            <div className="space-y-4 text-gray-400 text-sm">
              {therapist.education && therapist.education.length > 0 ? (
                therapist.education.map((edu, index) => {
                  const colors = ["border-nwt-light-teal", "border-nwt-coral"];
                  return (
                    <div key={index} className={`border-l-2 ${colors[index % colors.length]} pl-4`}>
                      <p className="font-medium text-gray-300">{edu}</p>
                    </div>
                  );
                })
              ) : (
                <div className="border-l-2 border-nwt-light-teal pl-4">
                  <p className="font-medium text-gray-300">{therapist.credentials}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}