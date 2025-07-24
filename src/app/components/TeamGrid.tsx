interface TeamMember {
  id: number;
  name: string;
  role: string;
  description: string;
  image: string;
}

const TeamGrid = () => {
  const teamMembers: TeamMember[] = [
    {
      id: 1,
      name: "Jenny Wilson",
      role: "Founder",
      description: "Lorem ipsum dolor sit amet consectetur adipiscing elit diam",
      image: "/team-placeholder.jpg"
    },
    {
      id: 2,
      name: "Darrell Steward",
      role: "CTO",
      description: "Lorem ipsum dolor sit amet consectetur adipiscing elit diam",
      image: "/team-placeholder.jpg"
    },
    {
      id: 3,
      name: "Bessie Cooper",
      role: "CMO",
      description: "Lorem ipsum dolor sit amet consectetur adipiscing elit diam",
      image: "/team-placeholder.jpg"
    },
    {
      id: 4,
      name: "Arlene McCoy",
      role: "Senior Coordinator",
      description: "Lorem ipsum dolor sit amet consectetur adipiscing elit diam",
      image: "/team-placeholder.jpg"
    },
    {
      id: 5,
      name: "Brooklyn Simmons",
      role: "Specialist",
      description: "Lorem ipsum dolor sit amet consectetur adipiscing elit diam",
      image: "/team-placeholder.jpg"
    },
    {
      id: 6,
      name: "Jerome Bell",
      role: "Customer Success",
      description: "Lorem ipsum dolor sit amet consectetur adipiscing elit diam",
      image: "/team-placeholder.jpg"
    },
    {
      id: 7,
      name: "Dianne Russell",
      role: "Front-end Developer",
      description: "Lorem ipsum dolor sit amet consectetur adipiscing elit diam",
      image: "/team-placeholder.jpg"
    },
    {
      id: 8,
      name: "Kristin Watson",
      role: "UX Designer",
      description: "Lorem ipsum dolor sit amet consectetur adipiscing elit diam",
      image: "/team-placeholder.jpg"
    },
    {
      id: 9,
      name: "Eleanor Pena",
      role: "UI Designer",
      description: "Lorem ipsum dolor sit amet consectetur adipiscing elit diam",
      image: "/team-placeholder.jpg"
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
            
            return memberRows.map((row, rowIndex) => (
              <div key={rowIndex} className={`flex justify-center gap-6 ${rowIndex < memberRows.length - 1 ? 'mb-8' : ''}`}>
                {row.map((member) => (
                  <div key={member.id} className="text-center cursor-pointer transition-transform duration-300 hover:scale-110">
                    <div className="w-16 h-16 bg-gray-200 rounded-lg mx-auto mb-3 overflow-hidden">
                      <div className="w-full h-full bg-gradient-to-br from-nwt-light-teal to-nwt-coral"></div>
                    </div>
                    <h3 className="font-bold text-white text-sm mb-1">{member.name}</h3>
                    <p className="text-white/80 text-xs">{member.role}</p>
                  </div>
                ))}
              </div>
            ));
          })()}
        </div>
      </div>
    </section>
  );
};

export default TeamGrid;