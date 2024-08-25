import Image from "next/image"
import logo from '@/../public/logo-white.png'
import linkedinLogo from '@/../public/linkedin.png'
import facebookLogo from '@/../public/facebook.png'
import xLogo from '@/../public/x.png'

const Footer = () => {
  return (
    <div className='flex flex-col p-5 py-5 mx-12 mt-10 text-sm bg-black rounded-t-xl 2xl:mx-20 max-md:mx-5 text-whiteColor gap-10'>
      <div className='flex items-center justify-between max-md:flex-col'>
        <Image src={logo} className="w-24 h-5"/>
        <ul className="flex items-center gap-8 capitalize max-md:flex-col max-md:gap-4 max-md:mt-5">
          <li>About us</li>
          <li>services</li>
          <li>use cases</li>
          <li>pricing</li>
          <li>blog</li>
        </ul>
        <div className='flex items-center gap-4 max-md:hidden'>
          <Image src={linkedinLogo} alt="linkedIn" className="w-5 h-5"/>
          <Image src={facebookLogo} alt="Facebook" className="w-5 h-5"/>
          <Image src={xLogo} alt="X" className="w-5 h-5"/>
        </div>
      </div>
      <div className="flex justify-between border-b pb-10  max-md:flex-col max-md:items-center  ">
        <div className="flex flex-col gap-3 max-md:items-center ">
          <p className="px-1 text-base font-medium text-black rounded-md bg-lightGreen w-fit">Contact us:</p>
          <p>Email: info@positivus.com</p>
          <p>Phone: 555-567-8901</p>
          <p>Address: 1234 Main St<br/><span>Moonstone City, Stardust State 12345</span></p>
        </div>
        <div className="flex items-center justify-between w-1/3 gap-4 p-5 rounded-lg bg-[#292A32] max-xl:w-1/2 max-md:w-full max-md:flex-col max-md:mt-8">
          <input type="email" id="email" placeholder="Email" className="w-1/2 px-3 py-3 border rounded-md h-fit max-md:w-full"/>
          <button className="w-1/2 py-3 font-medium text-black rounded-md bg-lightGreen h-fit max-md:w-full">Subscribe to news</button>
        </div>
        <div className='flex items-center gap-4 md:hidden mt-8'>
          <Image src={linkedinLogo} alt="linkedIn" className="w-5 h-5"/>
          <Image src={facebookLogo} alt="Facebook" className="w-5 h-5"/>
          <Image src={xLogo} alt="X" className="w-5 h-5"/>
        </div>
      </div>
      <div className=" flex gap-8 max-md:flex-col items-center max-md:gap-5">
        <p>© 2023 Positivus. All Rights Reserved.</p>
        <p>Privacy Policy</p>
      </div>
    </div>
  )
}

export default Footer