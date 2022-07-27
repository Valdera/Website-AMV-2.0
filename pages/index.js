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

export default function Home() {
  return (
    <>
      <HeaderHome />
      <VideoHome />
      {/* <CTAInstagram /> */}
      <GridAchievement />
      <CTASubscribe />
      <PreviewProduct />
      <CTAMember />
      <Testimonial />
      <Sponsor />
      <FAQ />
      <Footer />
    </>
  );
}

export async function getStaticProps() {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  const res = await fetch("https://.../posts");
  const posts = await res.json();

  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      posts,
    },
  };
}
