import { teamData } from "@/data/teamData"
import Image from "next/image"
import linkedInImg from "@/../public/Social icon.png"

const OurTeam = () => {
  return (
    <div className="flex flex-col gap-16 max-xmd:gap-6">
      <div className="flex items-center gap-5 max-lg:text-center max-lg:flex-col">
        <h2 className="px-3 py-2 text-2xl font-bold rounded-md bg-lightGreen max-w-fit">Team</h2>
        <p className=" max-w-[350px]">Meet the skilled and experienced team behind our successful digital marketing strategies</p>
      </div>
      <div className="grid gap-8 lg:grid-cols-cols3 sm:grid-cols-cols2 ">
        {teamData.map((data, index) => (
        <div key={index} className="flex flex-col p-5 border shadow-lg rounded-xl">
          <div className="flex justify-between gap-5 pb-3 border-b-2">
            <Image src={data.image} alt={data.name} className="w-16 h-16" />
            <div className="flex flex-col justify-between flex-1 ">
              <Image src={linkedInImg} alt="linkedIn"  className="self-end w-6 h-6 cursor-pointer"/>
              <div>
              <h4 className="font-medium ">{data.name}</h4>
              <p className="text-sm ">{data.position}</p>
              </div>
            </div>
          </div>
          <div className="pt-3 ">
            <p>{data.text}</p>
          </div>
        </div>
        ))}
      </div>
      <button className="self-end px-4 py-1 -mt-10 duration-200 bg-black rounded-lg text-whiteColor w-fit hover:scale-95">See all team</button>
    </div>
  )
}

export default OurTeam