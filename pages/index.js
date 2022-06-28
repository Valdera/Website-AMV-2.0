import ContentGrid from "@components/content-grid/ContentGrid";
import Logos from "@components/logos/Logos";
import HeaderHome from "@components/headers/home/HeaderHome";
import styles from "./Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <HeaderHome />
      <Logos />
      <ContentGrid />
    </div>
  );
}
