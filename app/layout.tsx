import type { Metadata } from "next";
import { Ubuntu } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";

const inter = Ubuntu({
    weight: ["300", "400", "500", "700"],
    preload: true,
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
            <body className={`${inter.className} min-h-screen flex flex-col`}>
                <Navbar />
                {children}
            </body>
        </html>
    );
}
