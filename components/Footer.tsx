import Link from "next/link";
import {LinkedInLogoIcon, TwitterLogoIcon} from "@radix-ui/react-icons";
import Terms from "@/components/Terms";
import Privacy from "@/components/Privacy";

export default function Footer() {
    return (
        <div className="w-full border-t border-border/40 bg-background/95 mb-8">
            <div className="container max-w-screen-2xl items-center">
                <div className="grid grid-cols-3 gap-4 text-center my-8">
                    <div className="col-span-3 sm:col-span-1">
                        <h1 className="text-2xl font-bold mb-4">Product</h1>
                        <Link
                            className="no-underline font-normal text-muted-foreground hover:text-blue-600 hover:underline"
                            href={"/early-access"}
                        >
                            Early Access
                        </Link>
                    </div>
                    <div className="col-span-3 sm:col-span-1 flex flex-col">
                        <h1 className="text-2xl font-bold mb-4">Company</h1>
                        <Link
                            className="no-underline font-normal text-muted-foreground hover:text-blue-600 hover:underline"
                            href={"/careers"}
                        >
                            Careers
                        </Link>
                        <Terms/>
                        <Privacy/>
                    </div>
                    <div className="col-span-3 sm:col-span-1">
                        <h1 className="text-2xl font-bold mb-4">Support</h1>
                        <Link
                            className="no-underline font-normal text-muted-foreground hover:text-blue-600 hover:underline"
                            href={"mailto:support@kili.so"}
                        >
                            Contact
                        </Link>
                    </div>
                </div>
                <div className="flex justify-between">
                    <p className="text-muted-foreground">All rights reserved</p>
                    <div className="flex gap-4">
                        <Link
                            className="no-underline font-normal text-muted-foreground hover:text-blue-600 hover:underline"
                            href={"https://www.linkedin.com/company/94291555"}
                            target="_blank"
                        >
                            <LinkedInLogoIcon className="w-6 h-6 text-muted-foreground"/>
                        </Link>
                        <Link
                            className="no-underline font-normal text-muted-foreground hover:text-blue-600 hover:underline"
                            href={"https://twitter.com/withkili"}
                            target="_blank"
                        >
                            <TwitterLogoIcon className="w-6 h-6 text-muted-foreground"/>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}