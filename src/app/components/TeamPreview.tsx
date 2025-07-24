const TeamPreview = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-8">Our Team</h2>
        <p className="text-lg text-center mb-8">
          Meet our experienced therapists and associates
        </p>
        <div className="text-center">
          <a href="/team" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700">
            Meet the Full Team
          </a>
        </div>
      </div>
    </section>
  );
};

export default TeamPreview;