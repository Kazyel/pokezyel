import Image from "next/image";
import NavbarItem from "./NavbarItem";
import Link from "next/link";

export default function Navbar() {
    return (
        <>
            <nav className="w-full bg-red-500/90">
                <ul className="flex justify-around items-center cursor-pointer">
                    <Link href="/">
                        <Image
                            src="/poke-logo.png"
                            alt="Logo Pokézyel"
                            width={1000}
                            height={0}
                            priority
                            className="w-[150px] aspect-auto"
                        />
                    </Link>
                    <div className="flex gap-8">
                        <NavbarItem href="/pokedex" text="Full Pokedéx" />
                    </div>
                </ul>
            </nav>
        </>
    );
}
