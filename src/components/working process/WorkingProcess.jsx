'use client'
import ProcessAccordion from "../working process accordion/ProcessAccordion"

const WorkingProcess = () => {
  return (
    <div className="flex flex-col gap-16 max-xmd:gap-6">
      <div className="flex items-center gap-5 max-lg:text-center max-lg:flex-col">
        <h2 className="px-3 py-2 text-2xl font-bold rounded-md bg-lightGreen max-w-fit">Our Working Process </h2>
        <p className=" max-w-[350px]">Step-by-Step Guide to Achieving Your Business Goals</p>
      </div>
      <ProcessAccordion />
    </div>
  )
}

export default WorkingProcess