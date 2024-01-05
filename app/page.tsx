'use client';

import Navbar from "@/components/Navbar";
import Link from "next/link";
import Reveal from "@/components/Framer/Reveal";
import SlideDown from "@/components/Framer/SlideDown";
import FadeIn from "@/components/FadeIn";
import Footer from "@/components/Footer";
import About from "@/components/About";
import Features from "@/components/Features";
import CallToAction from "@/components/CallToAction";
import Pricing from "@/components/Pricing";

export default function Home() {
    return (
        <main className="w-full">
            <div className="sticky top-0 z-40">
                <SlideDown>
                    <Navbar/>
                </SlideDown>
            </div>
            <div
                className="top-0 flex flex-col justify-center items-center py-64"
                style={{
                    backgroundImage: 'url("/background1.jpg")',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat'
                }}
            >
                <div className="order-2 lg:order-1 text-center lg:text-left mx-8">
                    <div className="flex flex-col justify-end">
                        <Reveal>
                            <div>
                                <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white">THE AI-FIRST
                                    PLATFORM</h1>
                                <h1 className="text-3xl md:text-5xl font-bold text-white text-start">FOR REVENUE
                                    TEAMS</h1>
                            </div>
                        </Reveal>
                    </div>
                    <FadeIn>
                        <div className="flex flex-col justify-center">
                            <p className="text-left text-white max-w-screen-md text-lg md:text-xl mt-8">
                                Transform the way your sales and marketing teams operate by leveraging AI
                            </p>
                            <Link
                                className="mt-8 bg-white max-w-fit px-4 py-2 rounded no-underline font-bold"
                                href={"/early-access"}
                            >
                                Early Access
                            </Link>
                        </div>
                    </FadeIn>
                </div>
            </div>
            <FadeIn>
                <About/>
            </FadeIn>
            <Features/>
            <Pricing/>
            <CallToAction/>
            <Footer/>
        </main>
    )
}