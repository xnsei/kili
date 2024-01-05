import {CubeIcon} from "@radix-ui/react-icons";

export default function Features() {
    return (
        <div className="bg-muted-foreground/10 pb-24 pt-8">
            <h1 className="text-center text-indigo-600 mb-8">FEATURES</h1>
            <h1 className="text-xl md:text-3xl text-center font-bold mb-1">Unleash Productivity with Kili </h1>
            <h1 className="text-lg md:text-2xl text-center font-bold mb-4">Your AI Companion for Effortless
                Efficiency</h1>
            <p className="text-sm md:text-base text-muted-foreground text-center">Unlock the power of AI to transform
                your sales and
                marketing operations</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-8 lg:px-24 mt-16">
                <div className="bg-white rounded px-8 py-4 grid grid-cols-12">
                    <CubeIcon className="col-span-1 w-6 h-6 text-indigo-600 mr-4"/>
                    <div className="col-span-11">
                        <h1 className="text-xl font-medium mb-2">Intelligent Automation</h1>
                        <div className="text-sm text-muted-foreground">Streamline tasks effortlessly with Kili&apos;s
                            AI-driven automation, freeing up valuable time for more strategic endeavors.
                        </div>
                    </div>
                </div>
                <div className="bg-white rounded px-8 py-4 grid grid-cols-12">
                    <CubeIcon className="col-span-1 w-6 h-6 text-indigo-600 mr-4"/>
                    <div className="col-span-11">
                        <h1 className="text-xl font-medium mb-2">Tailored Research Solutions</h1>
                        <div className="text-sm text-muted-foreground">Elevate your prospecting game with Kili,
                            automating customer research to ensure targeted and informed outreach.
                        </div>
                    </div>
                </div>
                <div className="bg-white rounded px-8 py-4 grid grid-cols-12">
                    <CubeIcon className="col-span-1 w-6 h-6 text-indigo-600 mr-4"/>
                    <div className="col-span-11">
                        <h1 className="text-xl font-medium mb-2">Real-time Information Digest</h1>
                        <div className="text-sm text-muted-foreground">Stay informed effortlessly with Kili&apos;s weekly
                            news updates, delivering personalized insights on topics like X straight to your inbox.
                        </div>
                    </div>
                </div>
                <div className="bg-white rounded px-8 py-4 grid grid-cols-12">
                    <CubeIcon className="col-span-1 w-6 h-6 text-indigo-600 mr-4"/>
                    <div className="col-span-11">
                        <h1 className="text-xl font-medium mb-2">Dynamic CRM Integration</h1>
                        <div className="text-sm text-muted-foreground">Manage customer relationships seamlessly as Kili
                            automates CRM updates, ensuring your records are always current and reflective of your
                            latest interactions.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}