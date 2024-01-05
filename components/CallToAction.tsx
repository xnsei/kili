import Link from "next/link";

export default function CallToAction() {
    return (
        <div className="w-full bg-black py-24">
            <div className="container text-white text-center">
                <h1 className="text-xl md:text-3xl font-bold mb-4">
                    Transform the way your sales and marketing teams operate
                </h1>
                <p className="text-sm md:text-base mb-8">Leverage AI to optimize your revenue generation</p>
                <Link
                    className="mt-8 bg-white max-w-fit px-4 py-2 rounded text-black no-underline font-bold"
                    href={"/early-access"}
                >
                    Early Access
                </Link>
            </div>
        </div>
    )
}