import styles from "./heroesList.module.scss"

import { spidermanFont } from "@/app/fonts";
import { IHeroesData } from "@/interfaces/heroes";

interface IProps {
    heroes: IHeroesData[];
}

export default function HeroesList({ heroes } : IProps) {
    return (
        <>
            <h1 className={`${spidermanFont.className} ${styles.title}`}>Personagens</h1>
        </>
    );
}