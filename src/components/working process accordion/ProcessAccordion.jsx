import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
import { workingProcessData } from "@/data/workingProcessData"
  
const ProcessAccordion = () => {
  return (
    <Accordion type="single" collapsible className="flex flex-col gap-8">
      {workingProcessData.map((data,index) => (
        <AccordionItem key={index} value={`item-${index+1}`}>
          <AccordionTrigger ><p className="text-xl font-semibold max-sm:text-lg text-start">{`0${index+1}`} <span className="ml-5 ">{data.trigger}</span></p></AccordionTrigger>
          <AccordionContent>{data.content}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  )
}

export default ProcessAccordion