import HeroeDetails from "../HeroeDetails";

import styles from "./carousel.module.scss";

import { IHeroesData } from "@/interfaces/heroes";


interface IProps {
    heroes: IHeroesData[];
    activeId: string;
}

export default function Carousel({ heroes, activeId }: IProps) {
    return (
        <div className={styles.container}>
            <div className={styles.carousel}>
                <div className={styles.wrapper}>
                    Lista com os heróis
                </div>
            </div>
            
            <div className={styles.details}>
                <HeroeDetails data={heroes[0]} />
            </div>
        </div>
    );
}