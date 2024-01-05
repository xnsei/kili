export default function Pricing() {
    return (
        <div className="w-full mb-24">
            <h1 className="text-indigo-600 text-center mt-8">PRICING</h1>
            <h1 className="text-3xl font-bold text-center mt-8">Choose the Right Plan for Your Team</h1>
            <p className="text-center text-muted-foreground my-4 pb-8">Unlock the full potential of AI for your sales
                and
                marketing teams with our flexible pricing options</p>
            <div className="container max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-16">
                <div className="w-full bg-white rounded-lg shadow-lg p-8">
                    <h1 className="text-2xl font-bold mb-4">Free</h1>
                    <p className="text-sm mb-4 text-muted-foreground">A free plan with limited features</p>
                    <div className="flex flex-col space-y-2 mb-4">
                        <div className="flex space-x-2 items-center">
                            <TickSVG/>
                            <p>Access to basic features</p>
                        </div>
                        <div className="flex space-x-2 items-center">
                            <TickSVG/>
                            <p>Limited number of contacts</p>
                        </div>
                        <div className="flex space-x-2 items-center">
                            <TickSVG/>
                            <p>Limited storage space</p>
                        </div>
                        <div className="flex space-x-2 items-center">
                            <TickSVG/>
                            <p>Basic customer support</p>
                        </div>
                    </div>
                    <button className="border border-black px-4 py-2 text-sm font-bold rounded-3xl w-full">Continue with Free</button>
                </div>
                <div className="w-full bg-white rounded-lg shadow-lg p-8">
                    <h1 className="text-2xl font-bold mb-4">Basic</h1>
                    <p className="text-sm mb-4">For small teams or individuals</p>
                    <div className="flex flex-col space-y-2 mb-4">
                        <div className="flex space-x-2 items-center">
                            <TickSVG/>
                            <p>All Features of FREE plan</p>
                        </div>
                        <div className="flex space-x-2 items-center">
                            <TickSVG/>
                            <p>Access to advanced AI features</p>
                        </div>
                        <div className="flex space-x-2 items-center">
                            <TickSVG/>
                            <p>Increased number of contacts</p>
                        </div>
                        <div className="flex space-x-2 items-center">
                            <TickSVG/>
                            <p>Expanded storage space</p>
                        </div>
                        <div className="flex space-x-2 items-center">
                            <TickSVG/>
                            <p>Priority customer support</p>
                        </div>
                    </div>
                    <button className="bg-black text-white px-4 py-2 text-sm font-bold rounded-3xl w-full">Try Basic Plan</button>
                </div>
                <div className="w-full bg-white rounded-lg shadow-lg p-8">
                    <h1 className="text-2xl font-bold mb-4">Pro</h1>
                    <p className="text-sm mb-4 text-muted-foreground">A professional plan with comprehensive features
                        and support</p>
                    <div className="flex flex-col space-y-2 mb-4">
                        <div className="flex space-x-2 items-center">
                            <TickSVG/>
                            <p>All features of BASIC plan</p>
                        </div>
                        <div className="flex space-x-2 items-center">
                            <TickSVG/>
                            <p>Access to all AI features</p>
                        </div>
                        <div className="flex space-x-2 items-center">
                            <TickSVG/>
                            <p>Unlimited number of contacts</p>
                        </div>
                        <div className="flex space-x-2 items-center">
                            <TickSVG/>
                            <p>Ample storage space</p>
                        </div>
                    </div>
                    <button className="bg-black text-white px-4 py-2 text-sm font-bold rounded-3xl w-full">Try Pro Plan</button>
                </div>
            </div>
        </div>
    )
}

const TickSVG = () => (
    <svg className="w-4 h-4 text-green-500" viewBox="0 0 24 24">
        <path fill="currentColor" d="M0 11l2-2 5 5L20 3l2 2L7 18z"/>
    </svg>
)