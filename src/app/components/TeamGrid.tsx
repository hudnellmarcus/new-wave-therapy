const TeamGrid = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-8">Meet the Team</h1>
        <p className="text-lg text-center mb-12">
          Our experienced therapists and associates
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {/* Placeholder team members - will be populated with real data */}
          <div className="text-center">
            <div className="w-24 h-24 bg-gray-300 rounded-full mx-auto mb-4"></div>
            <h3 className="font-semibold">Team Member</h3>
            <p className="text-sm text-gray-600">Role</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamGrid;