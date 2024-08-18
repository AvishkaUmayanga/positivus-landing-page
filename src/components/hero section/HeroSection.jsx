import heroImg from '@/../public/hero.png'
import Image from 'next/image'
import comImage1 from '@/../public/Company logo1.png'
import comImage2 from '@/../public/Company logo2.png'
import comImage3 from '@/../public/Company logo3.png'
import comImage4 from '@/../public/Company logo4.png'
import comImage5 from '@/../public/Company logo5.png'
import comImage6 from '@/../public/Company logo6.png'

const HeroSection = () => {
  return (
    <>
    <div className="flex items-center justify-between gap-10 mt-20 max-lg:flex-col xl:mt-28">
      <div className="flex flex-col gap-10 ">
        <h1 className="text-5xl font-bold">Navigating the<br/> digital landscape<br/> for success</h1>
        <p className=" max-w-96">Our digital marketing agency helps businesses grow and succeed online through a range of services including SEO, PPC, social media marketing, and content creation.</p>
        <button className="px-5 py-2 bg-black text-whiteColor max-w-fit rounded-xl">
          Book a consultation
        </button>
      </div>
      <Image src={heroImg} className=' max-w-[450px] 2xl:max-w-[600px] max-sm:max-w-[350px]' />
    </div>
    <div className="flex flex-wrap justify-center gap-10 mt-5 xl:justify-between grayscale">
      <Image src={comImage1}/>    
      <Image src={comImage2}/>   
      <Image src={comImage3}/>   
      <Image src={comImage4}/>   
      <Image src={comImage5}/>   
      <Image src={comImage6}/>   
    </div>
    </>
  )
}

export default HeroSection
