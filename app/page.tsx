import HomeLooking from "@/components/home/HomeLooking/HomeLooking";
import HomeWelcome from "@/components/home/HomeWelcome/HomeWelcome";
import { ErrorBoundary } from "next/dist/client/components/error-boundary";
import Error from "./pokemon/[poke]/error";

export default function Home() {
    return (
        <main className="bg-white items-center">
            <HomeWelcome />
            <ErrorBoundary errorComponent={Error}>
                <HomeLooking />
            </ErrorBoundary>
        </main>
    );
}
