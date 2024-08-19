import leanIcon from '@/../public/learnMoreIcon.png'
import services1 from '@/../public/services1.png'
import { servicesData } from '@/data/servicesData'
import Image from 'next/image'
const ServicesSection = () => {
 const images = []
  return (
    <div className="flex flex-col gap-16">
      <div className="flex items-center gap-5 max-lg:text-center max-lg:flex-col">
        <h2 className="px-3 py-2 text-2xl font-bold rounded-md bg-lightGreen max-w-fit">Services</h2>
        <p className=" max-w-[550px]">At our digital marketing agency, we offer a range of services to help businesses grow and succeed online. These services include:</p>
      </div>
      <div className="grid gap-10 grid-cols-cols2 max-lg:grid-cols-cols1">
        {servicesData?.map((service, index) => (
        <div key={index} className={`flex justify-between p-10 border rounded-2xl bg-${service.bgColor} shadow-lg max-md:p-5`}>
          <div className='flex flex-col justify-between'>
            <div>
              <h3 className={`p-1 bg-${service.textBg} max-w-fit`}>{service.title1}</h3><h3 className={`p-1 bg-${service.textBg} max-w-fit`}>{service.title2}</h3>
            </div>
            <button className={`flex items-center gap-5 max-w-fit text-${service.btnText} hover:scale-95 duration-300 max-md:text-sm`}>
              <Image src={leanIcon} className='w-5 ' />
              <span>Learn more</span>
            </button>
          </div>
          <Image src={service.image} className='h-40 max-md:h-32 max-md:w-40' />
        </div>
        ))}
      </div>
    </div>
  )
}

export default ServicesSection
