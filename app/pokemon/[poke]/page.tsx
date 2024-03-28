import { getPokemon } from "@/app/api/route";
import Image from "next/image";

export default async function Pokemon({
    params,
}: {
    params: { poke: string };
}) {
    const data = await getPokemon(params.poke.toLowerCase());

    return (
        <>
            <div className="text-black">
                <h2 className="text-black">{data.species.name}</h2>
                <Image
                    src={data.sprites.other["official-artwork"].front_default}
                    alt="Pokemon"
                    width="300"
                    height={300}
                />
            </div>
        </>
    );
}
