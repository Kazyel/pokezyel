import Image from "next/image";
import { getPokemonList } from "../api/route";
import { Suspense } from "react";

export default async function Pokedex() {
    const data = await getPokemonList();

    return (
        <div className="text-black flex flex-row flex-wrap gap-4">
            {data.map((pokemon: { name: string; image: string }) => (
                <div className="" key={pokemon.name}>
                    <p>{pokemon.name}</p>
                    <Image
                        src={pokemon.image}
                        alt="Pokemon"
                        width={75}
                        height={75}
                    />
                </div>
            ))}
        </div>
    );
}
