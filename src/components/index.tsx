import { IHeroesData } from "@/interfaces/heroes";

interface IProps {
    heroes: IHeroesData[];
}

export default function HeroesList({ heroes } : IProps) {
    return (
        <>
            <h1>Personagens</h1>
        </>
    );
}