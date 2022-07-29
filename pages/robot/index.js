import SectionRobot from "@components/section/robot/SectionRobot";
import Footer from "@components/footer/Footer";
import CTASauvc from "@components/cta/sauvc/CTASauvc";
import StatRobot from "@components/stat/robot/StatRobot";

const Robot = ({ robots }) => {
  return (
    <>
      <CTASauvc />
      <StatRobot />
      <SectionRobot robots={robots} />
      <Footer />
    </>
  );
};

export async function getStaticProps() {
  const fs = require("fs");
  const path = require("path");

  const robotsData = JSON.parse(
    fs.readFileSync(
      path.join(path.resolve(process.cwd(), "public/data"), "robots.json"),
      "utf8"
    )
  );

  const robots = Object.entries(robotsData).map(([_, item]) => {
    if (item.tags != "") {
      item.tags = item.tags.split(",");
    } else {
      item.tags = [];
    }

    item.tags.push(item.year);
    item.tags.push(item.type);
    return item;
  });

  return {
    props: {
      robots: robots,
    },
  };
}

export default Robot;
