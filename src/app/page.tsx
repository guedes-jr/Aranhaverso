import styles from "./page.module.scss";

import HeroesList from "@/components";
import { IHeroesData } from "@/interfaces/heroes";

async function getHeroesData(): Promise<{data: IHeroesData[]}> {
  const res = await fetch(`${process.env.DOMAIN_ORIGIN}/api/heroes`);

  if (!res.ok) {
    throw new Error("Failed to request heroes list");
  }

  return res.json();
}

export default async function Home() {
  const heroes = await getHeroesData();

  return (
    <main className={styles.main}>
      <HeroesList heroes={heroes.data}/>
    </main>
  )
}

