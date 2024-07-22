
import Image from "next/image";
import { Quicksand } from "next/font/google";

import { spidermanFont } from "@/app/fonts";
import styles from "@components/HeroeDetails/heroDetails.module.scss";
import { IHeroesData } from "@/interfaces/heroes";



const quicksand = Quicksand({
    subsets: ["latin"],
    weight: ["400", "600", "700"],
});

interface IProps {
    data: IHeroesData;
}
export default function HeroeDetails({ data }: IProps) {
    const { id, name, universe, details } = data;
    return (
        <div className={quicksand.className}>
            <h1 className={`${spidermanFont.className} ${styles.title}`}>
                {name} (Universo-{universe})
            </h1>
            <div className={styles.details}>
                <h2 className={styles.subtitle}>informações</h2>
                <table className={styles.table}>
                    <tbody>
                        <tr>
                            <td className={styles.label}>Nome Completo</td>
                            <td>{details.fullName}</td>
                        </tr>
                        <tr>
                            <td className={styles.label}>Data de Nascimento</td>
                            <td>{new Date(details.birthday).toLocaleDateString("PT-BR")}</td>
                        </tr>
                        <tr>
                            <td className={styles.label}>Terra Natal</td>
                            <td>{details.homeland}</td>
                        </tr>
                        <tr>
                            <td className={styles.label}>Altura</td>
                            <td>{details.height.toFixed(2)}</td>
                        </tr>
                        <tr>
                            <td className={styles.label}>Peso</td>
                            <td>{details.weight.toFixed(2)}kg</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className={styles.details}>
                <h2 className={styles.subtitle}>Primeira Aparição</h2>
                <Image 
                  src={`/spiders/${id}-comic-book.png`}
                  alt={`Primeira aparição nos quadrinhos do personagem ${name} no universo ${universe}`}
                  width={80}
                  height={122}
                />
            </div>
        </div>
    );
}