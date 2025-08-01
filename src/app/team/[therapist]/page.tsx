import TeamMemberOption5 from "../../components/team-member-layouts/TeamMemberOption5";
import TeamMemberOption6 from "../../components/team-member-layouts/TeamMemberOption6";
import TeamMemberOption8 from "../../components/team-member-layouts/TeamMemberOption8";

const TherapistPage = ({ params }: { params: { therapist: string } }) => {
  return (
    <>
       
       {/* Available Options for Testing:
       <TeamMemberOption5 therapistName={params.therapist} /> - Split layout with photo on side
       <TeamMemberOption6 therapistName={params.therapist} /> - Creative tilted photo with floating tags
       <TeamMemberOption8 therapistName={params.therapist} /> - v0.dev retro design with full-screen layout */}
      <TeamMemberOption8 therapistName={params.therapist} />
    </>
  );
};

export default TherapistPage;
