import SectionRobot from "@components/section/robot/SectionRobot";
import Footer from "@components/footer/Footer";
import CTASauvc from "@components/cta/sauvc/CTASauvc";
import StatRobot from "@components/stat/robot/StatRobot";

const Robot = () => {
  return (
    <>
      <CTASauvc />
      <StatRobot />
      <SectionRobot />
      <Footer />
    </>
  );
};

const data = [
  {
    robotType: "Autonomous Surface Vehicle (ASV)",
    robotDescription: "Our robot that floats on the surface of the water",
    robots: [
      {
        name: "MAKARA 01",
        picture:
          "https://firebasestorage.googleapis.com/v0/b/webamv-c51f6.appspot.com/o/product%2Fproduct_makara01.png?alt=media&token=3b28e15f-f508-42b4-8359-773f4c66461a",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        achievement:
          " 3rd Inovative Creation Competition Universitas Indonesia",
        year: 2012,
      },
      {
        name: "MAKARA 02",
        picture:
          "https://firebasestorage.googleapis.com/v0/b/webamv-c51f6.appspot.com/o/product%2Fproduct_makara02.png?alt=media&token=3cb276b8-b811-403d-bb78-ad3434ad3aef",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        achievement: "SEA GHOST Project with Indonesian Navy",
        year: 2012,
      },
      {
        name: "MAKARA 03",
        picture:
          "https://firebasestorage.googleapis.com/v0/b/webamv-c51f6.appspot.com/o/product%2Fproduct_makara03.png?alt=media&token=5672cceb-8e9d-43d3-8166-9f32de98f371",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        achievement: "DRPM  UI Research with National and Rescue Agency",
        year: 2013,
      },
      {
        name: "MAKARA 04",
        picture:
          "https://firebasestorage.googleapis.com/v0/b/webamv-c51f6.appspot.com/o/product%2Fproduct_makara04.png?alt=media&token=95d31e1a-5067-4246-9653-ca41bfe3c32c",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        achievement: "3rd Autonomous Category KKCTBN 2014",
        year: 2014,
      },
      {
        name: "MAKARA 05",
        picture:
          "https://firebasestorage.googleapis.com/v0/b/webamv-c51f6.appspot.com/o/product%2Fproduct_makara05.png?alt=media&token=ca35aeb1-d54c-4682-8a2a-30548e0dd442",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        achievement: "5th AUVSI International Roboboat",
        year: 2015,
      },
      {
        name: "MAKARA 07",
        picture:
          "https://firebasestorage.googleapis.com/v0/b/webamv-c51f6.appspot.com/o/product%2Fproduct_makara07.png?alt=media&token=4cc3d4f7-fce8-4134-812a-801c1dcc9245",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        achievement: "Finalist AUVSI International Roboboat",
        year: 2017,
      },

      {
        name: "MAKARA 09",
        picture:
          "https://firebasestorage.googleapis.com/v0/b/webamv-c51f6.appspot.com/o/product%2Fproduct_makara09.JPG?alt=media&token=53903370-8ad7-417d-96a7-8cfb3b4f76c2",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        achievement: "Runner Up Autonomous Category KKCTBN 2018",
        year: 2018,
      },
      {
        name: "MAKARA 09 Mark II",
        picture:
          "https://firebasestorage.googleapis.com/v0/b/webamv-c51f6.appspot.com/o/product%2Fproduct_makara09mark2.JPG?alt=media&token=f6c89528-2e31-47d9-b63d-b9d2ddc66d37",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        achievement: "3rd AUVSI International Roboboat",
        year: 2019,
      },
    ],
  },
  {
    robotType: "Remotely Operated Vehicle (ROV)",
    robotDescription:
      "Our robot that sinks under the water and can be controlled remotely",
    robots: [
      {
        name: "MAKARA 06",
        picture:
          "https://firebasestorage.googleapis.com/v0/b/webamv-c51f6.appspot.com/o/product%2Fproduct_makara06.png?alt=media&token=71120ef7-6669-45cf-932e-0c01c4f9731a",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        achievement: "1st Tanoto Student Research",
        year: 2016,
      },
      {
        name: "MAKARA 08",
        picture:
          "https://firebasestorage.googleapis.com/v0/b/webamv-c51f6.appspot.com/o/product%2Fproduct_makara08.png?alt=media&token=3e3f1310-88df-4b88-9b5c-8882464e9bcd",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        achievement: "2nd ASEAN MATE Underwater",
        year: 2018,
      },
      {
        name: "MAKARA 08 Mark II",
        picture:
          "https://firebasestorage.googleapis.com/v0/b/webamv-c51f6.appspot.com/o/product%2Fproduct_makara08mark2.jpg?alt=media&token=f63ae03e-b898-42ad-aa9b-815519d9c56e",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        achievement: "1st ASEAN MATE Underwater",
        year: 2019,
      },
      {
        name: "MAKARA X",
        picture:
          "https://firebasestorage.googleapis.com/v0/b/webamv-c51f6.appspot.com/o/header%2Fship-1-bubble.jpg?alt=media&token=1a098424-757a-459e-87f3-c88acdb6dcce",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        achievement: "Shortlisted SAUVC",
        year: 2020,
      },
    ],
  },
  {
    robotType: "Aerial Drone",
    robotDescription: "Our robot that flies within the wind",
    robots: [
      {
        name: "Aero MAKARA",
        picture:
          "https://firebasestorage.googleapis.com/v0/b/webamv-c51f6.appspot.com/o/product%2Fproduct_aero_makara.png?alt=media&token=98856e83-d7cd-4324-891c-cae6c86e8d76",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        achievement: "5th AUVSI International Roboboat",
        year: 2017,
      },
    ],
  },
];

const overview = [
  {
    name: "MAKARA 09",
    picture:
      "https://firebasestorage.googleapis.com/v0/b/webamv-c51f6.appspot.com/o/product%2Fproduct_makara09.JPG?alt=media&token=53903370-8ad7-417d-96a7-8cfb3b4f76c2",
    achievement: "Runner Up Autonomous Category KKCTBN 2018",
    type: "Surface Vehicle",

    research: 0,
    achivements: 2,
    year: 2018,
  },
  {
    name: "MAKARA 09 Mark II",
    picture:
      "https://firebasestorage.googleapis.com/v0/b/webamv-c51f6.appspot.com/o/product%2Fproduct_makara09mark2.JPG?alt=media&token=f6c89528-2e31-47d9-b63d-b9d2ddc66d37",
    achievement: "3rd AUVSI International Roboboat",
    achivements: 1,
    research: 2,
    type: "Surface Vehicle",

    year: 2019,
  },
  {
    name: "MAKARA 08 Mark II",
    picture:
      "https://firebasestorage.googleapis.com/v0/b/webamv-c51f6.appspot.com/o/product%2Fproduct_makara08mark2.jpg?alt=media&token=f63ae03e-b898-42ad-aa9b-815519d9c56e",
    research: 0,
    type: "Underwater ROV",

    achivements: 1,
    achievement: "1st ASEAN MATE Underwater",
    year: 2019,
  },
  {
    name: "MAKARA X",
    picture:
      "https://firebasestorage.googleapis.com/v0/b/webamv-c51f6.appspot.com/o/header%2Fship-1-bubble.jpg?alt=media&token=1a098424-757a-459e-87f3-c88acdb6dcce",
    research: 1,
    achivements: 1,
    type: "Underwater ROV",

    achievement: "Shortlisted SAUVC",
    year: 2020,
  },
  {
    name: "Aero MAKARA",
    picture:
      "https://firebasestorage.googleapis.com/v0/b/webamv-c51f6.appspot.com/o/product%2Fproduct_aero_makara.png?alt=media&token=98856e83-d7cd-4324-891c-cae6c86e8d76",
    achievement: "5th AUVSI International Roboboat",
    research: 0,
    achivements: 2,
    type: "Drone",
    year: 2017,
  },
];

export default Robot;
