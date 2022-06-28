import HeaderTeam from "@components/headers/team/HeaderTeam";
import SectionMember from "@components/sections/member/SectionMember";
import StatMember from "@components/stats/member/StatMember";
import StatTeam from "@components/stats/team/StatTeam";

const Team = () => {
  return (
    <div>
      <HeaderTeam />
      <StatTeam />
      <div>
        {data.map((data) => {
          return <SectionMember key={data.division} data={data} />;
        })}
      </div>
    </div>
  );
};

const data = [
  {
    division: "Artificial Intelligence",
    description:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
    members: [
      {
        name: "John Doe",
        position: "Electrical Engineer",
        desc: "Bacon ipsum dolor sit amet salami jowl corned beef, andouille flank.",
        picture:
          "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260",
      },
      {
        name: "Oliver Aguilerra",
        position: "Product Manager",
        desc: "Bacon ipsum dolor sit amet salami jowl corned beef, andouille flank.",
        picture:
          "https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260",
      },
      {
        name: "Anthony Geek",
        position: "Mechanical Engineer",
        desc: "Bacon ipsum dolor sit amet salami jowl corned beef, andouille flank.",
        picture:
          "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260",
      },
      {
        name: "Alice Melbourne Geek",
        position: "Artificial Intelligence Engineer",
        desc: "Bacon ipsum dolor sit amet salami jowl corned beef, andouille flank.",
        picture:
          "https://images.pexels.com/photos/3747435/pexels-photo-3747435.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260",
      },
    ],
  },
  {
    division: "Electrical",
    description:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
    members: [
      {
        name: "John Doe",
        position: "Electrical Engineer",
        desc: "Bacon ipsum dolor sit amet salami jowl corned beef, andouille flank.",
        picture:
          "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260",
      },
      {
        name: "Oliver Aguilerra",
        position: "Product Manager",
        desc: "Bacon ipsum dolor sit amet salami jowl corned beef, andouille flank.",
        picture:
          "https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260",
      },
      {
        name: "Anthony Geek",
        position: "Mechanical Engineer",
        desc: "Bacon ipsum dolor sit amet salami jowl corned beef, andouille flank.",
        picture:
          "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260",
      },
      {
        name: "Alice Melbourne Geek",
        position: "Artificial Intelligence Engineer",
        desc: "Bacon ipsum dolor sit amet salami jowl corned beef, andouille flank.",
        picture:
          "https://images.pexels.com/photos/3747435/pexels-photo-3747435.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260",
      },
    ],
  },
  {
    division: "Mechanical",
    description:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
    members: [
      {
        name: "John Doe",
        position: "Electrical Engineer",
        desc: "Bacon ipsum dolor sit amet salami jowl corned beef, andouille flank.",
        picture:
          "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260",
      },
      {
        name: "Oliver Aguilerra",
        position: "Product Manager",
        desc: "Bacon ipsum dolor sit amet salami jowl corned beef, andouille flank.",
        picture:
          "https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260",
      },
      {
        name: "Anthony Geek",
        position: "Mechanical Engineer",
        desc: "Bacon ipsum dolor sit amet salami jowl corned beef, andouille flank.",
        picture:
          "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260",
      },
      {
        name: "Alice Melbourne Geek",
        position: "Artificial Intelligence Engineer",
        desc: "Bacon ipsum dolor sit amet salami jowl corned beef, andouille flank.",
        picture:
          "https://images.pexels.com/photos/3747435/pexels-photo-3747435.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260",
      },
    ],
  },
];

export default Team;
