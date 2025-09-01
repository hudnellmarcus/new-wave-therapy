import RetroTeamMember from "../../components/RetroTeamMember";

const TherapistPage = async ({ params }: { params: Promise<{ therapist: string }> }) => {
  const { therapist } = await params;
  return <RetroTeamMember therapistSlug={therapist} />;
};

export default TherapistPage;