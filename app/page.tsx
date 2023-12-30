'use client';

import Navbar from "@/components/Navbar";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import SlideDown from "@/components/SlideDown";
import FadeIn from "@/components/FadeIn";
import Footer from "@/components/Footer";

export default function Home() {
    return (
        <main className="w-full">
            <SlideDown>
                <Navbar/>
            </SlideDown>
            <div className="top-0 flex flex-col justify-center items-center min-h-screen">
                <div>
                    <div className="flex flex-col justify-center items-center">
                        <Reveal>
                            <div className="mx-auto text-center">
                                <h1 className="text-5xl font-bold">THE AI-FIRST PLATFORM</h1>
                                <p className="text-4xl font-bold">for</p>
                                <h1 className="text-5xl font-bold">REVENUE TEAMS</h1>
                            </div>
                        </Reveal>
                    </div>
                    <FadeIn>
                        <div className="flex flex-col text-muted-foreground justify-center items-center">
                            <p className="text-center text-2xl mt-8">
                                Transform the way your sales and marketing teams operate
                            </p>
                            <p className="text-center text-2xl">by leveraging AI</p>
                            <Link className="mt-4 bg-black text-white px-4 py-2 rounded no-underline font-medium"
                                  href={"/early-access"}
                            >
                                Early Access
                            </Link>
                        </div>
                    </FadeIn>
                </div>
            </div>
            <Footer />
        </main>
    )
}