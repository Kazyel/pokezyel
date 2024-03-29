"use client"; // Error components must be Client Components

import Image from "next/image";
import Link from "next/link";

export default function Error({
    error,
}: {
    error: Error & { digest?: string };
}) {
    return (
        <div className="text-black flex flex-col flex-grow justify-center items-center">
            <Image
                className="mb-16"
                src="/pokeball.svg"
                alt="Pokeball"
                width={175}
                height={175}
            />
            <h1 className="text-4xl font-semibold mb-10">
                <span className="text-red-400">Hey, sorry!</span> Something went
                wrong:
            </h1>
            <h2 className="text-2xl text-neutral-600 ">
                The <span className="font-medium">Pokémon</span> you were trying
                to find <span className="font-medium">doesnt exist</span>!
            </h2>
            <Link
                className="mt-16 text-lg border-4 p-4 border-yellow-400 font-semibold hover:bg-yellow-400 transition-all duration-150 rounded "
                href="/"
            >
                Wanna try to find another one?
            </Link>
        </div>
    );
}
