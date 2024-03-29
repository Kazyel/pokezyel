"use client";

import dynamic from "next/dynamic";
import { useMemo, useState } from "react";
import PokeWelcome from "../PokeWelcome/PokeWelcome";
const PokeCard = dynamic(() => import("../PokeCard/PokeCard"));

export type PokeList = {
    name: string;
    image: string;
};

export default function PokedexSection({ pokelist }: { pokelist: PokeList[] }) {
    const [pokemons, _] = useState<PokeList[]>(pokelist);
    const [searchPoke, setSearchPoke] = useState<string>();

    const filteredPokemons = useMemo(() => {
        if (!searchPoke) return pokemons;
        return pokemons?.filter((pokemon) =>
            pokemon.name.includes(searchPoke.toLowerCase())
        );
    }, [pokemons, searchPoke]);

    return (
        <section>
            <div className="bg-neutral-800 mb-8">
                <PokeWelcome setSearchPoke={setSearchPoke} />
            </div>
            <div className="p-12 flex flex-row flex-wrap flex-grow justify-center items-center gap-6">
                {filteredPokemons?.map((pokemon: PokeList) => (
                    <PokeCard
                        name={pokemon.name}
                        image={pokemon.image}
                        key={pokemon.name}
                    />
                ))}
            </div>
        </section>
    );
}
