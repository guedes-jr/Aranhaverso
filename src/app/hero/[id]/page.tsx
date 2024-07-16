
interface IPropos {
    params: {
        id: string;
    }
}

export default function Hero({ params: { id } }: IPropos) {
    return (
        <h1>Hero {id}</h1>
    );
}