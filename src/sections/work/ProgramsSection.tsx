import SignatureProgramItem from "@/components/SignatureProgramItem"
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

export default function ProgramsSection() {
    return (
        <div className="px-5 md:px-10 lg:px-20">
            <h1 className="text-[clamp(1.5rem,4vw,3rem)]">Our Signature Programs</h1>
            <div className="mt-8">
                <Accordion type="multiple">
                    <AccordionItem value="item-1">
                        <AccordionTrigger className="text-[clamp(1.5rem,4vw,5rem)] font-special-gothic-expanded uppercase">YC-FOUNDATION</AccordionTrigger>
                        <AccordionContent>
                            <SignatureProgramItem />
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                        <AccordionTrigger className="text-[clamp(1.5rem,4vw,5rem)] font-special-gothic-expanded uppercase" >YC-FRAMEWORK</AccordionTrigger>
                        <AccordionContent>
                            <SignatureProgramItem />
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3">
                        <AccordionTrigger className="text-[clamp(1.5rem,4vw,5rem)] font-special-gothic-expanded uppercase">YC-REPOSITION</AccordionTrigger>
                        <AccordionContent>
                            <SignatureProgramItem />
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-4">
                        <AccordionTrigger className="text-[clamp(1.5rem,4vw,5rem)] font-special-gothic-expanded uppercase">YC-SCALE</AccordionTrigger>
                        <AccordionContent>
                            <SignatureProgramItem />
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </div>

        </div>
    )
}
