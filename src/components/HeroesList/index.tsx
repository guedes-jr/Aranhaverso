import HeroPicture from "../HeroePicture";

import styles from "./heroesList.module.scss"

import { spidermanFont } from "@/app/fonts";
import { IHeroesData } from "@/interfaces/heroes";

interface IProps {
    heroes: IHeroesData[];
}

export default function HeroesList({ heroes } : IProps) {
    return (
        <>
            <h1 className={`${spidermanFont.className} ${styles.title}`}>
                Personagens
            </h1>
            <section className={styles.heroes}>
                {heroes.map((hero) => (
                    <div
                        key={hero.id}
                        className={`${styles.imageContainer} ${styles[hero.id]}`}
                    >
                        <HeroPicture hero={hero} />
                    </div>
                ))}
            </section>
        </>
    );
}