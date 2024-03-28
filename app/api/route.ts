export const getPokemon = async (pokemon: string) => {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
    if (!res.ok) {
        throw new Error("Failed to fetch data!");
    }

    return await res.json();
};

export const getPokemonList = async () => {
    const res = await fetch(
        "https://pokeapi.co/api/v2/pokemon?limit=10&offset=0"
    );

    if (!res.ok) {
        throw new Error("Failed to fetch data!");
    }

    const jsonRes = await res.json();
    const pokeFetchData = jsonRes.results.map(
        async (pokemon: { name: string; url: string }) => {
            const pokemonResponse = await fetch(pokemon.url);
            return await pokemonResponse.json();
        }
    );

    const pokeList = await Promise.all(pokeFetchData);
    const pokeDataList: Array<{
        name: string;
        image: string;
    }> = [];

    pokeList.map((pokemon) => {
        pokeDataList.push({
            name: pokemon.name,
            image: pokemon.sprites.other["official-artwork"].front_default,
        });
    });

    return pokeDataList;
};
