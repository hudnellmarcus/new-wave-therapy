import RetroTeamMember from "../../components/RetroTeamMember";

const TherapistPage = ({ params }: { params: { therapist: string } }) => {
  // Convert URL slug back to readable name
  const therapistName = params.therapist
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

  return <RetroTeamMember therapistName={therapistName} />;
};

export default TherapistPage;