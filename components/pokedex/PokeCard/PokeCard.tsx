import Image from "next/image";

export default function PokeCard(pokemon: { name: string; image: string }) {
    return (
        <div
            className="cursor-pointer flex flex-col border border-neutral-600/50 hover:bg-yellow-200/10 transition-all duration-150 justify-center items-center w-[400px] rounded bg-slate-300"
            key={pokemon.name}
        >
            <Image
                src={pokemon.image}
                alt="Pokémon Art"
                width={250}
                height={250}
                quality={75}
                className="m-4"
            />
            <div className="w-[400px] border-x border-neutral-600 h-full bg-red-400 rounded-b">
                <p className="text-white text-center p-6 text-2xl font-semibold">
                    {pokemon.name.charAt(0).toUpperCase() +
                        pokemon.name.slice(1, pokemon.name.length)}
                </p>
            </div>
        </div>
    );
}
