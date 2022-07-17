import ContentGrid from "@components/content-grid/ContentGrid";
import Logos from "@components/logos/Logos";
import HeaderHome from "@components/headers/home/HeaderHome";
import styles from "./Home.module.css";
import Testimonials from "@components/testimonials/Testimonials";
import ProductCollections from "@components/product-collections/ProductCollections";
import VideoHome from "@components/video/home/VideoHome";
import FAQ from "@components/faq/FAQ";
import Footer from "@components/footer/Footer";

export default function Home() {
  return (
    <div className={styles.container}>
      <HeaderHome />
      <VideoHome />
      <ContentGrid />
      <Logos />
      <Testimonials />
      <ProductCollections />
      <FAQ />
      <Footer />
    </div>
  );
}
