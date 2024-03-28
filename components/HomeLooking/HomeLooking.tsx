"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function HomeLooking() {
    const [pokemon, setPokemon] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const router = useRouter();

    return (
        <section className="w-full flex-grow flex flex-col justify-center items-center py-24 text-black bg-slate-200">
            <h2 className="text-[2.5rem] font-bold">
                <span className="text-4xl text-neutral-400">
                    So, to start...
                </span>
                <br />
                Try looking for a specific pokémon!
            </h2>
            <input
                className="mt-20 w-1/3 text-center p-2 text-xl bg-transparent border-b border-black"
                onChange={(e) => setPokemon(e.target.value)}
                onKeyDown={(e) =>
                    e.key === "Enter" && pokemon
                        ? (setIsLoading(true),
                          setTimeout(
                              () => router.push(`/pokemon/${pokemon}`),
                              750
                          ))
                        : null
                }
            />

            <p
                className={`text-xl font-medium mt-8 ${
                    isLoading
                        ? "flex transition-all duration-[400ms] translate-y-0"
                        : "invisible -translate-y-2"
                }`}
            >
                Loading your Pokémon...
            </p>

            <p className="mt-20 text-2xl">
                Or, you can check the entire{" "}
                <Link
                    href="/pokedex"
                    className="text-red-500/90 font-semibold transition-all duration-150 hover:underline"
                >
                    list of pokémons.
                </Link>
            </p>
        </section>
    );
}
