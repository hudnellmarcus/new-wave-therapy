"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { client } from "@/sanity/client";
import { urlFor } from "@/sanity/image";
import BlockContent from "@sanity/block-content-to-react";

interface TeamMember {
  id: number;
  name: string;
  role: string;
  description: string;
  image: string;
  bio: string;
  specializations: string[];
  education: string;
  license: string;
}

interface UnifiedTeamMember {
  id?: number;
  _id?: string;
  name: string;
  role?: string;
  title?: string;
  description?: string;
  image?: string;
  bio: string | unknown;
  specializations: string[];
  education?: string;
  license?: string;
  credentials?: string;
  slug?: string;
}

interface SiteSettings {
  teamDescription: string;
}

const TeamGrid = () => {
  const [expandedMember, setExpandedMember] = useState<string | number | null>(
    null
  );
  const [isInView, setIsInView] = useState(false);
  const [sanityTeamMembers, setSanityTeamMembers] = useState<
    UnifiedTeamMember[]
  >([]);
  const [siteSettings, setSiteSettings] = useState<SiteSettings | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.2, rootMargin: "50px" }
    );

    const section = sectionRef.current;
    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

  useEffect(() => {
    const fetchTherapists = async () => {
      try {
        const query = `*[_type == "therapist" && isActive == true] | order(displayOrder asc) {
          _id,
          name,
          title,
          credentials,
          bio,
          specializations,
          previewPhoto,
          "slug": slug.current
        }`;
        const therapists = await client.fetch(query);
        setSanityTeamMembers(therapists);
      } catch (error) {
        console.log("Sanity fetch failed, using fallback data:", error);
      }
    };

    const fetchSiteSettings = async () => {
      try {
        const query = `*[_type == "siteSettings"][0] {
          teamDescription
        }`;
        const settings = await client.fetch<SiteSettings>(query);
        setSiteSettings(settings);
      } catch (error) {
        console.log("Failed to fetch site settings:", error);
      }
    };

    fetchTherapists();
    fetchSiteSettings();
  }, []);
  const teamMembers: TeamMember[] = [
    {
      id: 1,
      name: "Jenny Wilson",
      role: "Licensed Clinical Therapist",
      description: "Specializing in anxiety and depression therapy",
      image: "/team-placeholder.jpg",
      bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      specializations: ["Anxiety Disorders", "Depression", "CBT", "Trauma"],
      education: "Ph.D. Clinical Psychology, UCLA 2015",
      license: "Licensed Clinical Therapist, State Certified 2016",
    },
    {
      id: 2,
      name: "Darrell Steward",
      role: "Licensed Marriage Therapist",
      description: "Couples and family therapy specialist",
      image: "/team-placeholder.jpg",
      bio: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      specializations: [
        "Couples Therapy",
        "Family Therapy",
        "Communication",
        "Conflict Resolution",
      ],
      education: "M.A. Marriage & Family Therapy, USC 2018",
      license: "Licensed Marriage & Family Therapist 2019",
    },
    {
      id: 3,
      name: "Bessie Cooper",
      role: "Child Psychologist",
      description: "Working with children and adolescents",
      image: "/team-placeholder.jpg",
      bio: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt.",
      specializations: [
        "Child Therapy",
        "Adolescent Issues",
        "ADHD",
        "Behavioral Therapy",
      ],
      education: "Ph.D. Child Psychology, Stanford 2017",
      license: "Licensed Child Psychologist 2018",
    },
    {
      id: 4,
      name: "Arlene McCoy",
      role: "Trauma Specialist",
      description: "EMDR and trauma-informed therapy",
      image: "/team-placeholder.jpg",
      bio: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.",
      specializations: [
        "PTSD",
        "EMDR",
        "Trauma Recovery",
        "Crisis Intervention",
      ],
      education: "M.S. Clinical Psychology, UCSF 2016",
      license: "Licensed Clinical Social Worker 2017",
    },
    {
      id: 5,
      name: "Brooklyn Simmons",
      role: "Addiction Counselor",
      description: "Substance abuse and recovery support",
      image: "/team-placeholder.jpg",
      bio: "Similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio nam libero tempore.",
      specializations: [
        "Addiction Recovery",
        "Substance Abuse",
        "Group Therapy",
        "Relapse Prevention",
      ],
      education: "M.A. Addiction Counseling, CSUN 2019",
      license: "Certified Addiction Counselor 2020",
    },
    {
      id: 6,
      name: "Marcus Rodriguez",
      role: "Licensed Therapist",
      description: "Mindfulness and stress management therapy",
      image: "/team-placeholder.jpg",
      bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vehicula sapien vel elit tincidunt, et consectetur ligula venenatis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.",
      specializations: [
        "Mindfulness Therapy",
        "Stress Management",
        "Work-Life Balance",
        "Meditation",
      ],
      education: "M.A. Clinical Psychology, UC Berkeley 2018",
      license: "Licensed Professional Counselor 2019",
    },
    {
      id: 7,
      name: "Sarah Chen",
      role: "Cognitive Behavioral Therapist",
      description: "CBT and anxiety disorder specialist",
      image: "/team-placeholder.jpg",
      bio: "Nulla facilisi morbi tempus iaculis urna id volutpat lacus laoreet non curabitur gravida. Arcu cursus euismod quis viverra nibh cras pulvinar mattis nunc sed blandit libero volutpat sed cras ornare.",
      specializations: [
        "Cognitive Behavioral Therapy",
        "Panic Disorders",
        "Social Anxiety",
        "OCD",
      ],
      education: "Ph.D. Psychology, NYU 2016",
      license: "Licensed Clinical Psychologist 2017",
    },
    {
      id: 8,
      name: "James Thompson",
      role: "Family Therapist",
      description: "Adolescent and family dynamics specialist",
      image: "/team-placeholder.jpg",
      bio: "Vulputate sapien nec sagittis aliquam malesuada bibendum arcu vitae elementum. Commodo odio aenean sed adipiscing diam donec adipiscing tristique risus nec feugiat in fermentum posuere urna nec.",
      specializations: [
        "Teen Therapy",
        "Family Dynamics",
        "Behavioral Issues",
        "Parent Coaching",
      ],
      education: "M.S. Family Therapy, SDSU 2017",
      license: "Licensed Marriage & Family Therapist 2018",
    },
    {
      id: 9,
      name: "Elena Vasquez",
      role: "Eating Disorder Specialist",
      description: "Body image and nutrition counseling",
      image: "/team-placeholder.jpg",
      bio: "Tellus rutrum tellus pellentesque eu tincidunt tortor aliquam nulla facilisi. Cras sed felis eget velit aliquet sagittis id consectetur purus ut faucibus pulvinar elementum integer enim neque volutpat.",
      specializations: [
        "Eating Disorders",
        "Body Image",
        "Nutrition Therapy",
        "Self-Esteem",
      ],
      education: "M.A. Eating Disorder Therapy, UCLA 2019",
      license: "Licensed Clinical Social Worker 2020",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className={`flex flex-col min-h-screen relative horizontal-stripe-cream-bg viewport-enter ${isInView ? "in-view" : ""}`}
    >
      <div className="container pt-24 mx-auto my-auto px-6 max-w-7xl relative z-10">
        {/* Content overlay that covers header and team grid */}
        <div className="bg-black/25 backdrop-blur-sm rounded-3xl p-8 md:p-12">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold font-family-orange-squash text-white mb-4">
              Our team of therapists
            </h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              {siteSettings?.teamDescription ||
                "While you'll choose the therapist who feels like the best fit for you, each of our clinicians is supported by the insight and collaboration of our whole team—so you benefit from many perspectives, not just one."}
            </p>
          </div>

          <div className="mb-16">
          {(() => {
            const chunkMembers = (members: UnifiedTeamMember[]) => {
              const chunks: UnifiedTeamMember[][] = [];
              let currentIndex = 0;
              let isFivePersonRow = true;

              while (currentIndex < members.length) {
                const chunkSize = isFivePersonRow ? 5 : 4;
                chunks.push(
                  members.slice(currentIndex, currentIndex + chunkSize)
                );
                currentIndex += chunkSize;
                isFivePersonRow = !isFivePersonRow;
              }

              return chunks;
            };

            const displayMembers: UnifiedTeamMember[] =
              sanityTeamMembers.length > 0 ? sanityTeamMembers : teamMembers;
            const memberRows = chunkMembers(displayMembers);

            return (
              <>
                {memberRows.map((row, rowIndex) => (
                  <div
                    key={rowIndex}
                    className={`flex justify-center gap-10 ${rowIndex < memberRows.length - 1 ? "mb-8" : ""}`}
                  >
                    {row.map((member, index) => {
                      const memberId = member._id || member.id || index;
                      const memberName = member.name;
                      const memberRole = member.title || member.role;

                      return (
                        <div
                          key={memberId}
                          className="text-center cursor-pointer transition-transform duration-300 hover:scale-110"
                          onClick={() =>
                            setExpandedMember(
                              expandedMember === memberId ? null : memberId
                            )
                          }
                        >
                          <div className="w-20 h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 bg-gray-200 rounded-lg mx-auto mb-3 overflow-hidden">
                            {member.previewPhoto ? (
                              <Image
                                src={urlFor(member.previewPhoto).width(112).height(112).url()}
                                alt={member.name}
                                width={112}
                                height={112}
                                className="w-full h-full object-cover"
                              />
                            ) : (
                              <div className="w-full h-full bg-gradient-to-br from-nwt-light-teal to-nwt-coral"></div>
                            )}
                          </div>
                            <h3 className="font-bold text-white text-sm md:text-base mb-1">
                              {memberName}
                            </h3>
                            <p className="text-white/90 text-xs md:text-sm">
                              {memberRole}
                            </p>
                        </div>
                      );
                    })}
                  </div>
                ))}

                {/* Expanded Bio Section */}
                <AnimatePresence>
                  {expandedMember && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      transition={{ duration: 0.4, ease: "easeOut" }}
                      className="fixed inset-0 z-50 flex items-center justify-center p-6 pt-20"
                      onClick={() => setExpandedMember(null)}
                    >
                      <div
                        className="bg-black/80 backdrop-blur-md rounded-3xl p-8 border border-white/20 max-w-4xl w-full max-h-[80vh] overflow-y-auto"
                        onClick={(e) => e.stopPropagation()}
                      >
                        {(() => {
                          const member = displayMembers.find(
                            (m) =>
                              (m._id || m.id || displayMembers.indexOf(m)) ===
                              expandedMember
                          );
                          if (!member) return null;

                          return (
                            <div className="max-w-4xl mx-auto">
                              <div className="flex justify-between items-start mb-6">
                                <div>
                                  <h2 className="text-3xl font-bold text-white mb-2">
                                    {member.name}
                                  </h2>
                                  <p className="text-xl text-nwt-light-teal">
                                    {member.title || member.role}
                                  </p>
                                </div>
                                <button
                                  onClick={() => setExpandedMember(null)}
                                  className="text-white/60 hover:text-white text-2xl"
                                >
                                  ×
                                </button>
                              </div>

                              <div className="flex flex-col lg:flex-row gap-8 w-full">
                                <div className="flex-1">
                                  <h3 className="text-xl font-bold text-white mb-4">
                                    About
                                  </h3>
                                  <div className="text-white/90 leading-relaxed mb-6">
                                    {member.bio && Array.isArray(member.bio) ? (
                                      <BlockContent
                                        blocks={member.bio}
                                        serializers={{
                                          types: {
                                            block: (props: unknown) => {
                                              const blockProps = props as { children: React.ReactNode };
                                              return (
                                                <p className="mb-4 text-white/90">
                                                  {blockProps.children}
                                                </p>
                                              );
                                            },
                                          },
                                          marks: {
                                            strong: ({ children }: { children: React.ReactNode }) => (
                                              <strong className="font-bold text-white">
                                                {children}
                                              </strong>
                                            ),
                                            em: ({ children }: { children: React.ReactNode }) => (
                                              <em className="italic">
                                                {children}
                                              </em>
                                            ),
                                          },
                                        }}
                                      />
                                    ) : typeof member.bio === "string" ? (
                                      <p>{member.bio}</p>
                                    ) : (
                                      <p>No bio available</p>
                                    )}
                                  </div>

                                  <h3 className="text-xl font-bold text-white mb-4">
                                    Specializations
                                  </h3>
                                  <div className="flex flex-wrap gap-2 mb-6">
                                    {member.specializations?.map(
                                      (spec: string, index: number) => (
                                        <span
                                          key={index}
                                          className="bg-nwt-coral/80 text-white px-3 py-1 rounded-full text-sm"
                                        >
                                          {spec}
                                        </span>
                                      )
                                    )}
                                  </div>
                                </div>

                                <div className="flex-1 flex flex-col items-center">
                                  <div className="flex-1">
                                    <h3 className="text-xl font-bold text-white mb-4">
                                      Background
                                    </h3>
                                    <div className="space-y-3 text-white/90">
                                      <p>
                                        {member.education || member.credentials}
                                      </p>
                                      <p>{member.license}</p>
                                    </div>

                                    <div className="mt-6">
                                      <Link
                                        href={`/team/${member.slug || member.name?.toLowerCase().replace(/\s+/g, "-")}`}
                                        className="inline-block bg-nwt-dark-teal hover:bg-nwt-dark-teal/90 text-white px-6 py-3 mt-20 rounded-lg font-semibold transition-colors"
                                      >
                                        See full profile
                                      </Link>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          );
                        })()}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </>
            );
          })()}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamGrid;
