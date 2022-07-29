import HeaderHome from "@components/header/home/HeaderHome";
import Testimonial from "@components/testimonial/Testimonial";
import PreviewProduct from "@components/preview/product/PreviewProduct";
import VideoHome from "@components/video/home/VideoHome";
import FAQ from "@components/faq/FAQ";
import Footer from "@components/footer/Footer";
import CTAMember from "@components/cta/member/CTAMember";
import CTASubscribe from "@components/cta/subscribe/CTASubscribe";
import GridAchievement from "@components/grid/achievement/GridAchievement";
import Sponsor from "@components/sponsor/Sponsor";
import CTAInstagram from "@components/cta/documentation/CTAInstagram";

export default function Home({
  sponsors,
  robots,
  divisions,
  achievements,
  testimonials,
  faqs,
}) {
  return (
    <>
      <HeaderHome />
      <VideoHome />
      {/* <CTAInstagram /> */}
      <GridAchievement achievements={achievements} />
      <CTASubscribe />
      <PreviewProduct robots={robots} />
      <CTAMember divisions={divisions} />
      <Testimonial testimonials={testimonials} />
      <Sponsor sponsors={sponsors} />
      <FAQ faqs={faqs} />
      <Footer />
    </>
  );
}

export async function getStaticProps() {
  const fs = require("fs");
  const path = require("path");

  const sponsorsData = JSON.parse(
    fs.readFileSync(
      path.join(path.resolve(process.cwd(), "public/data"), "sponsors.json"),
      "utf8"
    )
  );
  const robotsData = JSON.parse(
    fs.readFileSync(
      path.join(path.resolve(process.cwd(), "public/data"), "robots.json"),
      "utf8"
    )
  );
  const divisionsData = JSON.parse(
    fs.readFileSync(
      path.join(path.resolve(process.cwd(), "public/data"), "divisions.json"),
      "utf8"
    )
  );
  const achievementsData = JSON.parse(
    fs.readFileSync(
      path.join(
        path.resolve(process.cwd(), "public/data"),
        "achievements.json"
      ),
      "utf8"
    )
  );
  const testimonialsData = JSON.parse(
    fs.readFileSync(
      path.join(
        path.resolve(process.cwd(), "public/data"),
        "testimonials.json"
      ),
      "utf8"
    )
  );
  const faqsData = JSON.parse(
    fs.readFileSync(
      path.join(path.resolve(process.cwd(), "public/data"), "faqs.json"),
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
  const sponsors = Object.entries(sponsorsData).map(([_, item]) => item);
  const testimonials = Object.entries(testimonialsData).map(
    ([_, item]) => item
  );
  const divisions = Object.entries(divisionsData).map(([_, item]) => item);
  const achievements = Object.entries(achievementsData).map(
    ([_, item]) => item
  );
  const faqs = Object.entries(faqsData).map(([_, item]) => item);

  return {
    props: {
      sponsors: sponsors,
      robots: robots,
      divisions: divisions,
      achievements: achievements,
      testimonials: testimonials,
      faqs: faqs,
    },
  };
}
