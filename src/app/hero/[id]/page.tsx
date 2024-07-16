import Carousel from "@/components/Carousel";
import { IHeroesData } from "@/interfaces/heroes";

interface IPropos {
    params: {
        id: string;
    }
}

async function getHeroesData(): Promise<{ data: IHeroesData[] }> {
    const res = await fetch(`${process.env.DOMAIN_ORIGIN}/api/heroes`);

    if (!res.ok) {
        throw new Error("Failed to request heroes list")
    }

    return res.json();
}

export default async function Hero({ params: { id } }: IPropos) {
    const heroes = await getHeroesData();

    return (
        <Carousel 
            heroes={heroes.data} 
            activeId={id}
        />
    );
}