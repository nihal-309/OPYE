import styles from "./page.module.css";
import Choose from "../components/WhyChoose"
import Ready from "../components/Ready"
import "./globals.css";


export default function Home() {
  return (
    <main className={styles.main}>
      <Choose />
      <Ready />
    </main>
  );
}
