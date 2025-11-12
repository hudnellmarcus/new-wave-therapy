"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { client } from "@/sanity/client";
import { urlFor } from "@/sanity/image";
import BlockContent from "@sanity/block-content-to-react";

interface UnifiedTeamMember {
  id?: number;
  _id?: string;
  name: string;
  role?: string;
  title?: string;
  description?: string;
  image?: string;
  bio: string | unknown;
  previewBio?: string;
  specializations: string[];
  education?: string;
  license?: string;
  credentials?: string;
  identityExperience?: string[];
  slug?: string;
  previewPhoto?: object;
  website?: string;
}

interface SiteSettings {
  teamDescription: string;
}

interface TeamGridProps {
  headingLevel?: "h1" | "h2";
}

const TeamGrid = ({ headingLevel = "h1" }: TeamGridProps = {}) => {
  const HeadingTag = headingLevel;
  const [expandedMember, setExpandedMember] = useState<string | number | null>(
    null
  );
  const [isInView, setIsInView] = useState(false);
  const [sanityTeamMembers, setSanityTeamMembers] = useState<
    UnifiedTeamMember[]
  >([]);
  const [alumniMembers, setAlumniMembers] = useState<UnifiedTeamMember[]>([]);
  const [siteSettings, setSiteSettings] = useState<SiteSettings | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

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
          previewBio,
          specializations,
          identityExperience,
          previewPhoto,
          "slug": slug.current
        }`;
        const therapists = await client.fetch(query);
        setSanityTeamMembers(therapists);
      } catch {}
    };

    const fetchAlumni = async () => {
      try {
        const query = `*[_type == "therapist" && isAlumni == true] | order(name asc) {
          _id,
          name,
          credentials,
          website
        }`;
        const alumni = await client.fetch(query);
        setAlumniMembers(alumni);
      } catch {}
    };

    const fetchSiteSettings = async () => {
      try {
        const query = `*[_type == "siteSettings"][0] {
          teamDescription
        }`;
        const settings = await client.fetch<SiteSettings>(query);
        setSiteSettings(settings);
      } catch {}
    };

    fetchTherapists();
    fetchAlumni();
    fetchSiteSettings();
  }, []);
  const displayMembers: UnifiedTeamMember[] =
    sanityTeamMembers.length > 0 ? sanityTeamMembers : [];

  return (
    <section
      id="team-section"
      ref={sectionRef}
      className={`flex flex-col min-h-screen relative horizontal-stripe-cream-bg viewport-enter ${isInView ? "in-view" : ""}`}
    >
      <div className="container pt-16 mx-auto px-6 max-w-7xl relative z-10 h-full flex flex-col">
        {/* Content overlay that covers header and team grid */}
        <div className="bg-black/25 backdrop-blur-sm rounded-3xl p-6 md:p-8 flex-1 flex flex-col">
          <div className="text-center mb-8">
            <HeadingTag className="text-3xl md:text-4xl font-bold font-family-orange-squash text-white mb-3">
              Our team of therapists
            </HeadingTag>
            <p className="text-lg text-white/90 max-w-2xl mx-auto">
              {siteSettings?.teamDescription ||
                "While you'll choose the therapist who feels like the best fit for you, each of our clinicians is supported by the insight and collaboration of our whole team—so you benefit from many perspectives, not just one."}
            </p>
          </div>

          <div className="flex-1 mb-4">
            {isMobile ? (
              <div className="relative h-full flex flex-col items-center justify-center py-8">
                <style jsx global>{`
                  .team-swiper .swiper-pagination {
                    bottom: 0 !important;
                  }
                  .team-swiper .swiper-pagination-bullet {
                    background: rgba(255, 255, 255, 0.3);
                    width: 8px;
                    height: 8px;
                  }
                  .team-swiper .swiper-pagination-bullet-active {
                    background: #7cc6bf;
                    width: 32px;
                    border-radius: 4px;
                  }
                  .team-swiper .swiper-button-next,
                  .team-swiper .swiper-button-prev {
                    color: white;
                    background: rgba(255, 255, 255, 0.1);
                    width: 40px;
                    height: 40px;
                    border-radius: 50%;
                  }
                  .team-swiper .swiper-button-next:after,
                  .team-swiper .swiper-button-prev:after {
                    font-size: 20px;
                  }
                  .team-swiper .swiper-button-disabled {
                    opacity: 0.3;
                  }
                `}</style>
                <Swiper
                  modules={[Navigation, Pagination]}
                  spaceBetween={30}
                  slidesPerView={1}
                  navigation
                  pagination={{ clickable: true }}
                  className="team-swiper w-full max-w-sm pb-16"
                >
                  {displayMembers.map((member, index) => {
                    const memberId = member._id || member.id || index;
                    const memberName = member.name;
                    const memberRole = member.title || member.role;

                    return (
                      <SwiperSlide key={memberId}>
                        <div className="flex flex-col items-center px-4">
                          <div className="text-center">
                            <div className="w-48 h-48 bg-gray-200 rounded-2xl mx-auto mb-4 overflow-hidden shadow-lg relative">
                              {member.previewPhoto ? (
                                <Image
                                  src={urlFor(member.previewPhoto)
                                    .width(400)
                                    .url()}
                                  alt={`${member.name}, ${member.title || member.role || "Therapist"}`}
                                  fill
                                  className="object-cover object-top"
                                  sizes="(max-width: 768px) 192px, 192px"
                                />
                              ) : (
                                <div className="w-full h-full bg-gradient-to-br from-nwt-light-teal to-nwt-coral"></div>
                              )}
                            </div>
                            <h3 className="font-bold text-white text-xl mb-2">
                              {memberName}
                            </h3>
                            <p className="text-white/90 text-base mb-4">
                              {memberRole}
                            </p>
                            <button
                              className="bg-nwt-light-teal hover:bg-nwt-light-teal/90 text-black px-6 py-2 rounded-lg font-semibold transition-colors"
                              onClick={() => setExpandedMember(memberId)}
                            >
                              View Profile
                            </button>
                          </div>
                        </div>
                      </SwiperSlide>
                    );
                  })}
                </Swiper>
              </div>
            ) : (
              <div className="overflow-y-auto">
                {(() => {
                  const chunkMembers = (members: UnifiedTeamMember[]) => {
                    const chunks: UnifiedTeamMember[][] = [];
                    let currentIdx = 0;
                    let isFivePersonRow = true;

                    while (currentIdx < members.length) {
                      const chunkSize = isFivePersonRow ? 5 : 4;
                      chunks.push(
                        members.slice(currentIdx, currentIdx + chunkSize)
                      );
                      currentIdx += chunkSize;
                      isFivePersonRow = !isFivePersonRow;
                    }

                    return chunks;
                  };

                  const memberRows = chunkMembers(displayMembers);

                  return (
                    <>
                      {memberRows.map((row, rowIndex) => (
                        <div
                          key={rowIndex}
                          className={`flex justify-center gap-6 ${rowIndex < memberRows.length - 1 ? "mb-6" : ""}`}
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
                                    expandedMember === memberId
                                      ? null
                                      : memberId
                                  )
                                }
                              >
                                <div className="w-20 h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 bg-gray-200 rounded-lg mx-auto mb-2 overflow-hidden relative">
                                  {member.previewPhoto ? (
                                    <Image
                                      src={urlFor(member.previewPhoto)
                                        .width(400)
                                        .url()}
                                      alt={`${member.name}, ${member.title || member.role || "Therapist"}`}
                                      fill
                                      className="object-cover object-top"
                                      sizes="(max-width: 768px) 80px, (max-width: 1024px) 96px, 112px"
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
                    </>
                  );
                })()}
              </div>
            )}
          </div>
        </div>

        {alumniMembers.length > 0 && (
          <div className="mt-8 mb-12 bg-black/50 backdrop-blur-sm rounded-3xl p-6 md:p-8">
            <h2 className="text-center font-family-orange-squash text-white mb-4 text-2xl md:text-3xl font-bold">
              Alumni
            </h2>
            <p className="text-center font-family-orange-squash text-white mb-8 text-base md:text-xl max-w-3xl mx-auto">
              These are past associates of Hallie G Therapy, who are now
              licensed and enjoying strong careers. Wonderful people and
              phenomenal clinicians.
            </p>
            <div className="flex flex-wrap justify-center gap-x-10 gap-y-4">
              {alumniMembers.map((alumni) => (
                <div key={alumni._id} className="text-center">
                  {alumni.website ? (
                    <a
                      href={alumni.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-nwt-cream hover:text-nwt-peach transition-colors text-lg md:text-xl font-medium"
                    >
                      {alumni.name}, {alumni.credentials}
                    </a>
                  ) : (
                    <span className="text-lg md:text-xl font-medium font-family-orange-squash">
                      {alumni.name}, {alumni.credentials}
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

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
                      <div className="flex items-center gap-4">
                        {member.previewPhoto && (
                          <div className="w-20 h-20 rounded-lg overflow-hidden flex-shrink-0 relative">
                            <Image
                              src={urlFor(member.previewPhoto).width(240).url()}
                              alt={`${member.name}, ${member.title || member.role || "Therapist"}`}
                              fill
                              className="object-cover object-top"
                              sizes="80px"
                            />
                          </div>
                        )}
                        <div>
                          <h2 className="text-3xl font-bold text-white mb-2">
                            {member.name}
                          </h2>
                          <p className="text-xl text-nwt-light-teal">
                            {member.title || member.role}
                          </p>
                        </div>
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
                          {member.previewBio ? (
                            <p>{member.previewBio}</p>
                          ) : member.bio && Array.isArray(member.bio) ? (
                            <BlockContent
                              blocks={member.bio}
                              serializers={{
                                types: {
                                  block: (props: unknown) => {
                                    const blockProps = props as {
                                      children: React.ReactNode;
                                    };
                                    return (
                                      <p className="mb-4 text-white/90">
                                        {blockProps.children}
                                      </p>
                                    );
                                  },
                                },
                                marks: {
                                  strong: ({
                                    children,
                                  }: {
                                    children: React.ReactNode;
                                  }) => (
                                    <strong className="font-bold text-white">
                                      {children}
                                    </strong>
                                  ),
                                  em: ({
                                    children,
                                  }: {
                                    children: React.ReactNode;
                                  }) => <em className="italic">{children}</em>,
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
                          {member.identityExperience &&
                            member.identityExperience.filter(
                              (item: string) => item && item.trim()
                            ).length > 0 && (
                              <>
                                <h3 className="text-xl font-bold text-white mb-4">
                                  Identity Experience
                                </h3>
                                <div className="space-y-2 text-white/90">
                                  {member.identityExperience
                                    .filter(
                                      (item: string) => item && item.trim()
                                    )
                                    .map((item: string, index: number) => (
                                      <p key={index}>{item}</p>
                                    ))}
                                </div>
                              </>
                            )}

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
    </section>
  );
};

export default TeamGrid;
