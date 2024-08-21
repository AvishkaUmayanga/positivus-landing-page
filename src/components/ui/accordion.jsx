"use client"

import * as React from "react"
import * as AccordionPrimitive from "@radix-ui/react-accordion"
import { ChevronDown } from "lucide-react"
import plusIcon from '@/../public/Plus icon.png'
import minusIcon from '@/../public/minus icon.png'

import { cn } from "@/lib/utils"
import Image from "next/image"


const Accordion = AccordionPrimitive.Root

const AccordionItem = React.forwardRef(({ className, ...props }, ref) => (
  <AccordionPrimitive.Item ref={ref} className={cn( className)} {...props} />
))
AccordionItem.displayName = "AccordionItem"

const AccordionTrigger = React.forwardRef(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Header className="flex">
    <AccordionPrimitive.Trigger
      ref={ref}
      className={cn(
        "flex flex-1 p-3 rounded-t-xl  items-center justify-between py-4 font-medium transition-all [&[data-state=open]>svg]:rotate-180 ",
        props['data-state'] === 'open' ? 'bg-lightGreen' : 'bg-lightGray',
        className
      )}
      {...props}>
      {children}
      <Image src={props['data-state'] === 'open' ? minusIcon : plusIcon} className="w-8 h-8 transition-transform duration-200 shrink-0" alt="plus minus"/>
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
))
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName

const AccordionContent = React.forwardRef(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Content
    ref={ref}
    className="overflow-hidden p-3 rounded-b-xl bg-lightGreen  text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
    {...props}>
    <div className={cn("pb-4 pt-0", className)}>{children}</div>
  </AccordionPrimitive.Content>
))

AccordionContent.displayName = AccordionPrimitive.Content.displayName

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent }
