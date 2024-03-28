import HomeLooking from "@/components/HomeLooking/HomeLooking";
import HomeWelcome from "@/components/HomeWelcome/HomeWelcome";
import { ErrorBoundary } from "next/dist/client/components/error-boundary";
import Error from "./pokemon/[poke]/error";

export default function Home() {
    return (
        <>
            <main className="bg-white items-center">
                <HomeWelcome />
                <ErrorBoundary errorComponent={Error}>
                    <HomeLooking />
                </ErrorBoundary>
                <footer className="p-4 text-black font-semibold text-center">
                    <p>Made with ❤️ by Kazyel</p>
                </footer>
            </main>
        </>
    );
}
