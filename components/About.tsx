export default function About() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 py-24 items-center">
            <div className="flex flex-col justify-center mx-16 mb-4">
                <h1 className="font-bold text-3xl mb-4">About Kili</h1>
                <p className="text-muted-foreground max-w-screen-sm text-sm lg:text-lg">
                    Welcome to Kili, the forefront of innovation in AI-assisted productivity. At Kili, we&apos;re on a
                    mission to redefine the future of work by offering a cutting-edge platform that empowers every
                    individual to achieve unparalleled efficiency. With a commitment to simplicity and sophistication,
                    Kili transforms complex tasks into seamless workflows, ensuring you stay focused on what truly
                    matters. Elevate your productivity with Kili – where the future of work is now.
                </p>
            </div>
            <div className="place-content-center">
                <img src="/Hero.png" alt="About" className="w-full"/>
            </div>
        </div>
    )
}