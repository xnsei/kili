import Link from "next/link";
import Image from "next/image";
import {LinkedInLogoIcon, TwitterLogoIcon} from "@radix-ui/react-icons";

export default function Navbar() {

    return (
        <div
            className="sticky top-0 z-40 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container grid grid-cols-1 h-16 max-w-screen-2xl items-center">
                <div className="mr-4 flex justify-between items-center mx-4 px-4">
                    <div className="mr-4 flex items-center cursor-pointer">
                        <Image className="mr-2" src="/kili.png" alt="Kili logo" width={48} height={48}/>
                        <h1 className="text-center sm:inline-block text-3xl font-medium">KILI</h1>
                    </div>
                    <nav className="flex items-center gap-4 text-sm">
                        <div className="flex gap-4">
                            <Link
                                className="hidden md:inline-flex no-underline font-normal text-muted-foreground hover:text-blue-600 hover:underline"
                                href={"https://www.linkedin.com/company/94291555"}
                                target="_blank"
                            >
                                <LinkedInLogoIcon className="w-8 h-8 text-muted-foreground"/>
                            </Link>
                            <Link
                                className="hidden md:inline-flex no-underline font-normal text-muted-foreground hover:text-blue-600 hover:underline"
                                href={"https://twitter.com/withkili"}
                                target="_blank"
                            >
                                <TwitterLogoIcon className="w-8 h-8 text-muted-foreground"/>
                            </Link>
                        </div>
                        <Link className="bg-muted-foreground text-white px-4 py-2 rounded no-underline font-bold"
                              href={"/early-access"}>Early Access</Link>
                    </nav>
                </div>
            </div>
        </div>
    );
}