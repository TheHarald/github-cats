import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <main className={styles.main}>
      <div>
        <p>Try some pets</p>
        <Link href="/api/pets/?pet=cow">Cow</Link>
      </div>
    </main>
  );
}
