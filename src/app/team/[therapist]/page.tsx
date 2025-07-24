const TherapistPage = ({ params }: { params: { therapist: string } }) => {
  return (
    <main className="py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8">Therapist: {params.therapist}</h1>
        <p>Individual therapist page placeholder</p>
      </div>
    </main>
  );
};

export default TherapistPage;