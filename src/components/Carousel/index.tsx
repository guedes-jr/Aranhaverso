"use client"

import { useEffect, useState } from "react";

import HeroeDetails from "../HeroeDetails";
import HeroPicture from "../HeroePicture";

import styles from "./carousel.module.scss";

import { IHeroesData } from "@/interfaces/heroes";



interface IProps {
    heroes: IHeroesData[];
    activeId: string;
}

export default function Carousel({ heroes, activeId }: IProps) {
    const [visibleItems, setVisibleItems] = useState<IHeroesData[] | null>(null);
    const [activeIndex, setActiveIndex] = useState<number>(
        heroes.findIndex((hero) => hero.id === activeId)
    );

    useEffect(() => {
        const indexInArrayScope = ((activeIndex % heroes.length) + heroes.length) % heroes.length;

        const visibleItems = [...heroes, ...heroes].slice(indexInArrayScope, indexInArrayScope + 3);

        setVisibleItems(visibleItems);
    }, [heroes, activeIndex]);

    const hendleChangeActiveIndex = (newDirection: number) => {
        setActiveIndex((prevActiveIndex) => prevActiveIndex + newDirection);
    }

    if (!visibleItems) {
        return null;
    }

    return (
        <div className={styles.container}>
            <div className={styles.carousel}>
                <div className={styles.wrapper} onClick={() => hendleChangeActiveIndex(1)}>
                    {visibleItems.map((item) => (
                        <div key={item.id} className={styles.hero}>
                            <HeroPicture hero={item} />
                        </div>
                    ))}
                </div>
            </div>

            <div className={styles.details}>
                <HeroeDetails data={heroes[0]} />
            </div>
        </div>
    );
}