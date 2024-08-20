import Image from 'next/image'
import leanIcon from '@/../public/arrow.png'
import { caseStudiesData } from '@/data/caseStudiesData'
import Carousel from '../carousel/Carousel'

const CaseStudies = () => {
  return (
    <div className="flex flex-col gap-16 max-xmd:gap-6">
      <div className="flex items-center gap-5 max-lg:text-center max-lg:flex-col">
        <h2 className="px-3 py-2 text-2xl font-bold rounded-md bg-lightGreen max-w-fit">Case Studies</h2>
        <p className=" max-w-[550px]">Explore Real-Life Examples of Our Proven Digital Marketing Success through Our Case Studies</p>
      </div>
      <div className="relative flex items-center justify-start gap-10 p-10 bg-black rounded-2xl max-xmd:hidden">
        <div className="grid gap-6 text-white grid-cols-cols3 ">
          {caseStudiesData?.map((data, index) => (
            <div key={index} className={`flex flex-col gap-5 border-${data.border} opacity-90 p-2`}>
              <p>{data.text}</p>
              <button className='flex items-center gap-4 text-sm duration-300 text-lightGreen max-w-fit hover:scale-95'>
                <span>Learn more</span>
                <Image src={leanIcon} alt='arrow icon' className='w-3 ' />
              </button>
            </div>
          ))}
        </div>
      </div>
      <div className=' xmd:hidden'>
        <Carousel data={caseStudiesData}/>
      </div>
    </div>
  )
}

export default CaseStudies