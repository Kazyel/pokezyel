import Image from "next/image";
import Link from "next/link";

export default function HomeWelcome() {
    return (
        <>
            <section className="text-center flex flex-col items-center p-12 w-full bg-neutral-800">
                <Image
                    src="/poke-logo.png"
                    alt="Logo Pokézyel"
                    width={450}
                    height={0}
                    className="aspect-auto"
                />
                <div>
                    <h2 className="text-4xl font-bold mb-8">
                        Hey, welcome to my Pokédex Project!
                    </h2>
                    <p className="pb-12 font-thin text-xl">
                        This project has the objective to further learn about{" "}
                        <Link
                            className="text-blue-300 font-medium hover:underline transition-all cursor-pointer "
                            href="https://nextjs.org/"
                            target="_blank"
                        >
                            Next.js
                        </Link>{" "}
                        <br /> and improve my use of APIs and data!
                    </p>
                </div>
            </section>
        </>
    );
}
