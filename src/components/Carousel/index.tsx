import HeroeDetails from "../HeroeDetails";

import { IHeroesData } from "@/interfaces/heroes"


interface IProps {
    heroes: IHeroesData[];
    activeId: string;
}

export default function Carousel({ heroes, activeId }: IProps) {
    return (
        <>
            <h1>Componente Carousel: {activeId}</h1>
            <HeroeDetails data={heroes[0]} />
        </>
    );
}