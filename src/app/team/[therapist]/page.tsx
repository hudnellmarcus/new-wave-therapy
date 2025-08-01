import TeamMemberOption1 from "../../components/team-member-options/TeamMemberOption1";
import TeamMemberOption2 from "../../components/team-member-options/TeamMemberOption2";
import TeamMemberOption3 from "../../components/team-member-options/TeamMemberOption3";
import TeamMemberOption4 from "../../components/team-member-options/TeamMemberOption4";
import TeamMemberOption5 from "../../components/team-member-options/TeamMemberOption5";
import TeamMemberOption6 from "../../components/team-member-options/TeamMemberOption6";
import TeamMemberOption7 from "../../components/team-member-options/TeamMemberOption7";
import TeamMemberOption8 from "../../components/team-member-options/TeamMemberOption8";

const TherapistPage = ({ params }: { params: { therapist: string } }) => {
  return (
    <>
       
       {/* kind of like the specializations display of option 3 */}
       <TeamMemberOption3 therapistName={params.therapist} /> - Dark modern layout
       <TeamMemberOption4 therapistName={params.therapist} /> - Dark vintage centered layout
       <TeamMemberOption5 therapistName={params.therapist} /> - Split layout with photo on side
      <TeamMemberOption6 therapistName={params.therapist} /> - Creative tilted photo with floating tags 
      <TeamMemberOption7 therapistName={params.therapist} /> - Clean flowing layout with photo/contact split
      <TeamMemberOption8 therapistName={params.therapist} /> {/* v0.dev retro design with full-screen layout */}
    </>
  );
};

export default TherapistPage;
