import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import {marked} from "marked";
import {ScrollArea} from "@/components/ui/scroll-area";
import {
    AdditionalDisclosuresAU, AdditionalDisclosuresEU, AdditionalDisclosuresUS,
    BusinessTransfers, ChangesToThisPolicy,
    ChildrensPrivacy,
    CompanyAbout, ContactUs, Cookies,
    Disclosure,
    information,
    InternationalTransfers, LimitsOfOurPolicy,
    YourRights
} from "@/constants/privacy";

interface EUDescription {
    id: string;
    text: string;
    textHeading?: string;
}

interface DescriptionWithList {
    id: string;
    text: string;
    list?: Array<{ id: string; text: string }>;
}

export default function Privacy() {
    return (
        <Dialog>
            <DialogTrigger className="text-muted-foreground hover:text-blue-600 hover:underline">Privacy</DialogTrigger>
            <DialogContent className="w-full sm:max-w-xl">
                <DialogHeader className="text-2xl">
                    <DialogTitle className="text-2xl font-bold">{CompanyAbout.title}</DialogTitle>
                </DialogHeader>
                <ScrollArea className="h-[800px]">
                    <div className="mb-2">
                        {CompanyAbout.description.map(description => {
                            return (
                                <div className="mb-2 text-sm text-muted-foreground" key={description.id}
                                     dangerouslySetInnerHTML={{__html: marked(description.text)}}/>
                            )
                        })}
                    </div>
                    <div className="mb-2">
                        <h1 className="text-lg font-bold mb-2">{information.title}</h1>
                        {information.description.map(description => {
                            return (
                                <div className="mb-2 text-sm text-muted-foreground" key={description.id}
                                     dangerouslySetInnerHTML={{__html: marked(description.text)}}/>
                            )
                        })}
                        {information.sections.map(section => {
                            return (
                                <div className="mb-2" key={section.id}>
                                    <h1 className="font-medium mb-2">{section.subheading}</h1>
                                    {section.description.map((description: DescriptionWithList) => {
                                        return (
                                            <div className="mb-2" key={description.id}>
                                                <div className="mb-2 text-sm text-muted-foreground"
                                                     dangerouslySetInnerHTML={{__html: marked(description.text)}}/>
                                                {description.list && (
                                                    <div className="list-disc">
                                                        {description.list.map((listItem) => (
                                                            <li className="text-sm text-muted-foreground"
                                                                key={listItem.id}>
                                                                {listItem.text}
                                                            </li>
                                                        ))}
                                                    </div>
                                                )}
                                            </div>
                                        )
                                    })}
                                </div>
                            )
                        })}
                        <div className="mb-2">
                            <h1 className="text-lg font-bold mb-2">{ChildrensPrivacy.title}</h1>
                            {ChildrensPrivacy.description.map(description => {
                                return (
                                    <div className="mb-2 text-sm text-muted-foreground" key={description.id}
                                         dangerouslySetInnerHTML={{__html: marked(description.text)}}/>
                                )
                            })}
                        </div>
                        <div className="mb-2">
                            <h1 className="text-lg font-bold mb-2">{Disclosure.title}</h1>
                            {Disclosure.description.map(description => {
                                return (
                                    <div className="mb-2" key={description.id}>
                                        <div className="mb-2 text-sm text-muted-foreground"
                                             dangerouslySetInnerHTML={{__html: marked(description.text)}}/>
                                        <div className="mb-2">
                                            {description.list && (description.list.map((listItem) => (
                                                <li className="text-sm text-muted-foreground"
                                                    key={listItem.id}>
                                                    {listItem.text}
                                                </li>
                                            )))}
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                        <div className="mb-2">
                            <h1 className="text-lg font-bold mb-2">{InternationalTransfers.title}</h1>
                            {InternationalTransfers.description.map(description => {
                                return (
                                    <div className="mb-2 text-sm text-muted-foreground" key={description.id}
                                         dangerouslySetInnerHTML={{__html: marked(description.text)}}/>
                                )
                            })}
                        </div>
                        <div className="mb-2">
                            <h1 className="text-lg font-bold mb-2">{YourRights.title}</h1>
                            {YourRights.sections.map(section => {
                                return (
                                    <div className="mb-2" key={section.id}>
                                        <h1 className="text-sm font-medium mb-2">{section.subheading}</h1>
                                        {section.description.map(description => {
                                            return (
                                                <div className="mb-2 text-sm text-muted-foreground"
                                                     key={description.id}
                                                     dangerouslySetInnerHTML={{__html: marked(description.text)}}/>
                                            )
                                        })}
                                    </div>
                                )
                            })}
                        </div>
                        <div className="mb-2">
                            <h1 className="text-lg font-bold mb-2">{Cookies.title}</h1>
                            {Cookies.description.map(description => {
                                return (
                                    <div className="mb-2 text-sm text-muted-foreground" key={description.id}
                                         dangerouslySetInnerHTML={{__html: marked(description.text)}}/>
                                )
                            })}
                        </div>
                        <div className="mb-2">
                            <h1 className="text-lg font-bold mb-2">{BusinessTransfers.title}</h1>
                            {BusinessTransfers.description.map(description => {
                                return (
                                    <div className="mb-2 text-sm text-muted-foreground" key={description.id}
                                         dangerouslySetInnerHTML={{__html: marked(description.text)}}/>
                                )
                            })}
                        </div>
                        <div className="mb-2">
                            <h1 className="text-lg font-bold mb-2">{LimitsOfOurPolicy.title}</h1>
                            {LimitsOfOurPolicy.description.map(description => {
                                return (
                                    <div className="mb-2 text-sm text-muted-foreground" key={description.id}
                                         dangerouslySetInnerHTML={{__html: marked(description.text)}}/>
                                )
                            })}
                        </div>
                        <div className="mb-2">
                            <h1 className="text-lg font-bold mb-2">{ChangesToThisPolicy.title}</h1>
                            {ChangesToThisPolicy.description.map(description => {
                                return (
                                    <div className="mb-2 text-sm text-muted-foreground" key={description.id}
                                         dangerouslySetInnerHTML={{__html: marked(description.text)}}/>
                                )
                            })}
                        </div>
                        <div className="mb-2">
                            <h1 className="text-lg font-bold mb-2">{AdditionalDisclosuresAU.title}</h1>
                            {AdditionalDisclosuresAU.sections.map(section => {
                                return (
                                    <div className="mb-2" key={section.id}>
                                        <h1 className="text-sm font-medium mb-2">{section.subheading}</h1>
                                        {section.description.map(description => {
                                            return (
                                                <div className="mb-2 text-sm text-muted-foreground"
                                                     key={description.id}
                                                     dangerouslySetInnerHTML={{__html: marked(description.text)}}/>
                                            )
                                        })}
                                    </div>
                                )
                            })}
                        </div>
                        <div className="mb-2">
                            <h1 className="text-lg font-bold mb-2">{AdditionalDisclosuresEU.title}</h1>
                            {AdditionalDisclosuresEU.sections.map(section => {
                                return (
                                    <div className="mb-2" key={section.id}>
                                        <h1 className="text-sm font-medium mb-2">{section.subheading}</h1>
                                        {section.description.map((description: EUDescription) => {
                                            return (
                                                <div className="mb-2" key={description.id}>
                                                    {description.textHeading &&
                                                        <h1 className="text-sm font-medium">{description.textHeading}</h1>}
                                                    <div className="mb-2 text-sm text-muted-foreground"
                                                         dangerouslySetInnerHTML={{__html: marked(description.text)}}/>
                                                </div>
                                            )
                                        })}
                                    </div>
                                )
                            })}
                        </div>
                        <div className="mb-2">
                            <h1 className="text-lg font-bold mb-2">{AdditionalDisclosuresUS.title}</h1>
                            {AdditionalDisclosuresUS.description.map(description => {
                                return (
                                    <div className="mb-2 text-sm text-muted-foreground" key={description.id}
                                         dangerouslySetInnerHTML={{__html: marked(description.text)}}/>
                                )
                            })}
                            {AdditionalDisclosuresUS.sections.map(section => {
                                return (
                                    <div className="mb-2" key={section.id}>
                                        <h1 className="text-sm font-medium mb-2">{section.subheading}</h1>
                                        {section.description.map((description: DescriptionWithList) => {
                                            return (
                                                <div key={description.id}>
                                                    <div className="mb-2 text-sm text-muted-foreground"
                                                         dangerouslySetInnerHTML={{__html: marked(description.text)}}/>
                                                    {description.list && (description.list.map((listItem) => (
                                                        <li className="text-sm text-muted-foreground"
                                                            key={listItem.id}>
                                                            {listItem.text}
                                                        </li>
                                                    )))}
                                                </div>
                                            )
                                        })}
                                    </div>
                                )
                            })}
                        </div>
                        <div className="mb-2">
                            <h1 className="text-lg font-bold mb-2">{ContactUs.title}</h1>
                            {ContactUs.description.map(description => {
                                return (
                                    <div className="mb-2 text-sm text-muted-foreground" key={description.id}
                                         dangerouslySetInnerHTML={{__html: marked(description.text)}}/>
                                )
                            })}
                        </div>
                    </div>
                </ScrollArea>
            </DialogContent>
        </Dialog>
    )
};