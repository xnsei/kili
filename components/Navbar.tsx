import Link from "next/link";
import Image from "next/image";

export default function Navbar() {

    return (
        <div
            className="sticky top-0 z-40 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container h-14 max-w-screen-2xl items-center">
                <div className="mr-4 hidden md:flex justify-between items-center mt-2 mx-4 px-4">
                        <div className="mr-4 flex items-center cursor-pointer">
                            <Image className="mr-2" src="/kili.png" alt="Kili logo" width={48} height={48}/>
                            <h1 className="text-center sm:inline-block text-3xl font-bold">Kili</h1>
                        </div>
                    <nav className="flex items-center gap-6 text-sm">
                        <Link className="bg-black text-white px-4 py-2 rounded no-underline font-medium" href={"/early-access"}>Early Access</Link>
                    </nav>
                </div>
            </div>
        </div>
    );
}