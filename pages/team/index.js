import Footer from "@components/footer/Footer";
import HeaderTeam from "@components/header/team/HeaderTeam";
import SectionMember from "@components/section/member/SectionMember";

import { data } from "./index.mock";

const Team = () => {
  return (
    <>
      <HeaderTeam />
      <div>
        {data.map((data) => {
          return <SectionMember key={data.division} data={data} />;
        })}
      </div>
      <Footer />
    </>
  );
};

export default Team;
