"use client"

import Link from "next/link";
// eslint-disable-next-line import/order
import { motion } from "framer-motion";

import HeroPicture from "@components/HeroePicture";
// eslint-disable-next-line import/order
import styles from "@components/HeroesList/heroesList.module.scss";
import { spidermanFont } from "@/app/fonts";
import { IHeroesData } from "@/interfaces/heroes";

interface IProps {
    heroes: IHeroesData[];
}

export default function HeroesList({ heroes } : IProps) {
    return (
        <>
            <motion.h1 
                className={`${spidermanFont.className} ${styles.title}`} 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 2, delay: 2 }}
            >
                Personagens
            </motion.h1>
            <motion.section 
                className={styles.heroes}
                initial={{ opacity: 0, y: -100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 2 }}
            >
            {heroes.map((hero) => (
                <motion.div
                    key={hero.id}
                    className={`${styles.imageContainer} ${styles[hero.id]}`}
                    whileHover={{ scale: 1.3 }}
                    whileTap={{ scale: 0.8 }}
                    transition={{ duration: 0.8 }}
                >
                    <Link href={`/hero/${hero.id}`}>
                        <HeroPicture hero={hero} />
                    </Link>
                </motion.div>
            ))}
            </motion.section>
        </>
    );
}