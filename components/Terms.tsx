import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import {CompanyAbout, Limitations, OtherTerms} from "@/constants/terms";
import {marked} from "marked";
import {ScrollArea} from "@/components/ui/scroll-area";

export default function Terms() {
    return (
        <Dialog>
            <DialogTrigger className="text-muted-foreground hover:text-blue-600 hover:underline">Terms</DialogTrigger>
            <DialogContent className="w-full sm:max-w-lg">
                <DialogHeader className="text-2xl">
                    <DialogTitle className="text-2xl font-bold">{CompanyAbout.title}</DialogTitle>
                </DialogHeader>
                <ScrollArea className="h-[600px]">
                    <div className="mb-2">
                        {CompanyAbout.description.map(description => {
                            return (
                                <div className="mb-2 text-sm text-muted-foreground" key={description.id}
                                     dangerouslySetInnerHTML={{__html: marked(description.text)}}/>
                            )
                        })}
                    </div>
                    <div className="mb-2">
                        <h1 className="text-lg font-bold mb-2">{Limitations.heading}</h1>
                        <p className="mb-2 text-sm text-muted-foreground">{Limitations.description}</p>
                        <div className="mb-2">
                            {Limitations.limitations.map(limitation => {
                                return (
                                    <div key={limitation.id} className="flex">
                                        <p className="text-sm text-muted-foreground mr-2">{limitation.id}.</p>
                                        <div className="mb-2 text-sm text-muted-foreground"
                                             dangerouslySetInnerHTML={{__html: marked(limitation.text)}}/>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                    <div className="mb-2">
                        {OtherTerms.map(term => {
                            return (
                                <div key={term.id} className="mb-2">
                                    <h1 className="text-lg font-bold mb-2">{term.title}</h1>
                                    {term.description.map(description => {
                                        return (
                                            <div key={description.id} className="mb-2 text-sm text-muted-foreground"
                                                 dangerouslySetInnerHTML={{__html: marked(description.text)}}/>
                                        )
                                    })}
                                </div>
                            )
                        })}
                    </div>
                </ScrollArea>
            </DialogContent>
        </Dialog>
    );
}