"use server";

import { PokeList } from "@/components/pokedex/PokedexSection/PokedexSection";

export const getPokemon = async (pokemon: string) => {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
    if (!res.ok) {
        throw new Error("Failed to fetch data!");
    }

    return await res.json();
};

export const getPokemonList = async () => {
    const res = await fetch(
        "https://pokeapi.co/api/v2/pokemon?limit=151&offset=0"
    );
    if (!res.ok) {
        throw new Error("Failed to fetch data!");
    }
    const jsonRes = await res.json();

    const pokeFetchData = await Promise.all(
        jsonRes.results.map(async (pokemon: { name: string; url: string }) => {
            const pokemonResponse = await fetch(pokemon.url);
            if (!pokemonResponse.ok) {
                throw new Error(`Failed to fetch details for ${pokemon.name}`);
            }
            return pokemonResponse.json();
        })
    );

    const pokeDataList: PokeList[] = pokeFetchData.map((pokemon) => ({
        name: pokemon.name,
        image: pokemon.sprites.other["official-artwork"].front_default,
    }));

    return pokeDataList;
};
