import type { Metadata } from "next";
import { Ubuntu } from "next/font/google";
import Navbar from "@/components/navbar/Navbar";
import "./globals.css";

const ubuntu = Ubuntu({
    weight: ["300", "400", "500", "700"],
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Pokézyel",
    description: "More than a pokédex!",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${ubuntu.className} min-h-screen flex flex-col`}>
                <Navbar />
                {children}
                <footer className="p-4 text-black font-semibold text-center">
                    <p>Made with ❤️ by Kazyel</p>
                </footer>
            </body>
        </html>
    );
}
