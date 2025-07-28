"use client";
import { useState } from "react";

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

const TeamGrid = () => {
  const [expandedMember, setExpandedMember] = useState<number | null>(null);
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
      license: "Licensed Clinical Therapist, State Certified 2016"
    },
    {
      id: 2,
      name: "Darrell Steward",
      role: "Licensed Marriage Therapist",
      description: "Couples and family therapy specialist",
      image: "/team-placeholder.jpg",
      bio: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      specializations: ["Couples Therapy", "Family Therapy", "Communication", "Conflict Resolution"],
      education: "M.A. Marriage & Family Therapy, USC 2018",
      license: "Licensed Marriage & Family Therapist 2019"
    },
    {
      id: 3,
      name: "Bessie Cooper",
      role: "Child Psychologist",
      description: "Working with children and adolescents",
      image: "/team-placeholder.jpg",
      bio: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt.",
      specializations: ["Child Therapy", "Adolescent Issues", "ADHD", "Behavioral Therapy"],
      education: "Ph.D. Child Psychology, Stanford 2017",
      license: "Licensed Child Psychologist 2018"
    },
    {
      id: 4,
      name: "Arlene McCoy",
      role: "Trauma Specialist",
      description: "EMDR and trauma-informed therapy",
      image: "/team-placeholder.jpg",
      bio: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.",
      specializations: ["PTSD", "EMDR", "Trauma Recovery", "Crisis Intervention"],
      education: "M.S. Clinical Psychology, UCSF 2016",
      license: "Licensed Clinical Social Worker 2017"
    },
    {
      id: 5,
      name: "Brooklyn Simmons",
      role: "Addiction Counselor",
      description: "Substance abuse and recovery support",
      image: "/team-placeholder.jpg",
      bio: "Similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio nam libero tempore.",
      specializations: ["Addiction Recovery", "Substance Abuse", "Group Therapy", "Relapse Prevention"],
      education: "M.A. Addiction Counseling, CSUN 2019",
      license: "Certified Addiction Counselor 2020"
    },
    {
      id: 6,
      name: "Marcus Rodriguez",
      role: "Licensed Therapist",
      description: "Mindfulness and stress management therapy",
      image: "/team-placeholder.jpg",
      bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vehicula sapien vel elit tincidunt, et consectetur ligula venenatis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.",
      specializations: ["Mindfulness Therapy", "Stress Management", "Work-Life Balance", "Meditation"],
      education: "M.A. Clinical Psychology, UC Berkeley 2018",
      license: "Licensed Professional Counselor 2019"
    },
    {
      id: 7,
      name: "Sarah Chen",
      role: "Cognitive Behavioral Therapist",
      description: "CBT and anxiety disorder specialist",
      image: "/team-placeholder.jpg",
      bio: "Nulla facilisi morbi tempus iaculis urna id volutpat lacus laoreet non curabitur gravida. Arcu cursus euismod quis viverra nibh cras pulvinar mattis nunc sed blandit libero volutpat sed cras ornare.",
      specializations: ["Cognitive Behavioral Therapy", "Panic Disorders", "Social Anxiety", "OCD"],
      education: "Ph.D. Psychology, NYU 2016",
      license: "Licensed Clinical Psychologist 2017"
    },
    {
      id: 8,
      name: "James Thompson",
      role: "Family Therapist",
      description: "Adolescent and family dynamics specialist",
      image: "/team-placeholder.jpg",
      bio: "Vulputate sapien nec sagittis aliquam malesuada bibendum arcu vitae elementum. Commodo odio aenean sed adipiscing diam donec adipiscing tristique risus nec feugiat in fermentum posuere urna nec.",
      specializations: ["Teen Therapy", "Family Dynamics", "Behavioral Issues", "Parent Coaching"],
      education: "M.S. Family Therapy, SDSU 2017",
      license: "Licensed Marriage & Family Therapist 2018"
    },
    {
      id: 9,
      name: "Elena Vasquez",
      role: "Eating Disorder Specialist",
      description: "Body image and nutrition counseling",
      image: "/team-placeholder.jpg",
      bio: "Tellus rutrum tellus pellentesque eu tincidunt tortor aliquam nulla facilisi. Cras sed felis eget velit aliquet sagittis id consectetur purus ut faucibus pulvinar elementum integer enim neque volutpat.",
      specializations: ["Eating Disorders", "Body Image", "Nutrition Therapy", "Self-Esteem"],
      education: "M.A. Eating Disorder Therapy, UCLA 2019",
      license: "Licensed Clinical Social Worker 2020"
    }
  ];

  return (
    <section className="py-24 bg-stripe-overlay">
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-4">Our team of therapists</h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Lorem ipsum dolor sit amet consectetur adipiscing elit ut aliquam 
            purus sit amet luctus venenatis lectus magna fringilla
          </p>
        </div>
        
        <div className="mb-16">
          {(() => {
            const chunkMembers = (members: TeamMember[]) => {
              const chunks: TeamMember[][] = [];
              let currentIndex = 0;
              let isFivePersonRow = true;
              
              while (currentIndex < members.length) {
                const chunkSize = isFivePersonRow ? 5 : 4;
                chunks.push(members.slice(currentIndex, currentIndex + chunkSize));
                currentIndex += chunkSize;
                isFivePersonRow = !isFivePersonRow;
              }
              
              return chunks;
            };

            const memberRows = chunkMembers(teamMembers);
            
            return (
              <>
                {memberRows.map((row, rowIndex) => (
                  <div key={rowIndex} className={`flex justify-center gap-10 ${rowIndex < memberRows.length - 1 ? 'mb-8' : ''}`}>
                    {row.map((member) => (
                      <div 
                        key={member.id} 
                        className="text-center cursor-pointer transition-transform duration-300 hover:scale-110"
                        onClick={() => setExpandedMember(expandedMember === member.id ? null : member.id)}
                      >
                        <div className="w-20 h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 bg-gray-200 rounded-lg mx-auto mb-3 overflow-hidden">
                          <div className="w-full h-full bg-gradient-to-br from-nwt-light-teal to-nwt-coral"></div>
                        </div>
                        <h3 className="font-bold text-white text-sm md:text-base mb-1">{member.name}</h3>
                        <p className="text-white/80 text-xs md:text-sm">{member.role}</p>
                      </div>
                    ))}
                  </div>
                ))}
                
                {/* Expanded Bio Section */}
                {expandedMember && (
                  <div className="mt-12 bg-black/40 backdrop-blur-sm rounded-3xl p-8 border border-white/10 transition-all duration-500">
                    {(() => {
                      const member = teamMembers.find(m => m.id === expandedMember);
                      if (!member) return null;
                      
                      return (
                        <div className="max-w-4xl mx-auto">
                          <div className="flex justify-between items-start mb-6">
                            <div>
                              <h2 className="text-3xl font-bold text-white mb-2">Dr. {member.name}</h2>
                              <p className="text-xl text-nwt-light-teal">{member.role}</p>
                            </div>
                            <button 
                              onClick={() => setExpandedMember(null)}
                              className="text-white/60 hover:text-white text-2xl"
                            >
                              ×
                            </button>
                          </div>
                          
                          <div className="grid md:grid-cols-2 gap-8">
                            <div>
                              <h3 className="text-xl font-bold text-white mb-4">About</h3>
                              <p className="text-white/90 leading-relaxed mb-6">{member.bio}</p>
                              
                              <h3 className="text-xl font-bold text-white mb-4">Specializations</h3>
                              <div className="flex flex-wrap gap-2 mb-6">
                                {member.specializations.map((spec, index) => (
                                  <span key={index} className="bg-nwt-coral/80 text-white px-3 py-1 rounded-full text-sm">
                                    {spec}
                                  </span>
                                ))}
                              </div>
                            </div>
                            
                            <div>
                              <h3 className="text-xl font-bold text-white mb-4">Background</h3>
                              <div className="space-y-3 text-white/90">
                                <p>{member.education}</p>
                                <p>{member.license}</p>
                              </div>
                              
                              <div className="mt-6">
                                <button className="bg-nwt-dark-teal hover:bg-nwt-dark-teal/90 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
                                  Schedule Consultation
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    })()}
                  </div>
                )}
              </>
            );
          })()}
        </div>
      </div>
    </section>
  );
};

export default TeamGrid;