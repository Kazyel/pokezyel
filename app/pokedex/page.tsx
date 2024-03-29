import PokedexSection from "@/components/pokedex/PokedexSection/PokedexSection";
import { getPokemonList } from "@/hooks/getPokemons";

export default async function Pokedex() {
    const data = await getPokemonList();
    return (
        <div className="text-black flex flex-col flex-grow bg-slate-200 pb-16">
            <PokedexSection pokelist={data} />
        </div>
    );
}
