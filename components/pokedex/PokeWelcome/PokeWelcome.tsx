export default function PokeWelcome({
    setSearchPoke,
}: {
    setSearchPoke: (e: any) => void;
}) {
    return (
        <>
            <h2 className="text-5xl text-white text-center pt-16 pb-12 font-semibold">
                Pokédex
            </h2>
            <div className="text-white pb-16 text-center text-xl">
                <p>
                    Here are listed all the 151 pokémons of the first
                    generation, from the region of Kanto.{" "}
                </p>
                <p>
                    Click any the cards to view information about each of them!
                </p>
            </div>
            <div className="flex justify-center pb-8">
                <input
                    className="p-4 text-black w-[300px] rounded-sm"
                    placeholder="Search the pokémon you want..."
                    onChange={(e) => setSearchPoke(e.target.value)}
                />
            </div>
        </>
    );
}
