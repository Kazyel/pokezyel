"use client";

import { redirect } from "next/dist/server/api-utils";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function HomeLooking() {
    const [pokemon, setPokemon] = useState("");
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
                className="mt-10 w-1/3 text-center p-2 text-xl bg-transparent border-b border-black"
                onChange={(e) => setPokemon(e.target.value)}
                onKeyDown={(e) =>
                    e.key === "Enter" ? router.push(`/pokemon/${pokemon}`) : ""
                }
            />
            <p className="mt-28 text-2xl">
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
