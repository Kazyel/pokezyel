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

    const resList = await res.json();
    const pokemonDataList: any = [];

    await Promise.all(
        resList.results.map(async (pokemon: { name: string; url: string }) => {
            const pokemonResponse = await fetch(pokemon.url);
            const pokemonData = await pokemonResponse.json();

            pokemonDataList.push({
                name: pokemon.name,
                image: pokemonData.sprites.other["official-artwork"]
                    .front_default,
            });
        })
    );

    return await pokemonDataList;
};
