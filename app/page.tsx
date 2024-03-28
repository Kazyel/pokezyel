import HomeLooking from "@/components/HomeLooking/HomeLooking";
import HomeWelcome from "@/components/HomeWelcome/HomeWelcome";

export default function Home() {
    return (
        <>
            <main className="flex flex-col bg-white min-h-screen items-center">
                <HomeWelcome />
                <HomeLooking />
                <footer className="p-4 text-black font-semibold">
                    <p>Made with ❤️ by Kazyel</p>
                </footer>
            </main>
        </>
    );
}
