import contactImg from '@/../public/contact.png'
import Image from 'next/image'
const ContactUs = () => {
  return (
    <div className="flex flex-col gap-16 max-xmd:gap-6">
      <div className="flex items-center gap-5 max-lg:text-center max-lg:flex-col">
        <h2 className="px-3 py-2 text-2xl font-bold rounded-md bg-lightGreen max-w-fit">Contact Us</h2>
        <p className=" max-w-[350px]">Connect with Us: Let's Discuss Your Digital Marketing Needs</p>
      </div>
      <div className="flex p-8 bg-lightGray rounded-xl max-xmd:justify-center">
        <div className="xmd:w-2/3 lg:w-1/2 max-xmd:w-full">
          <form>
            <div className="flex gap-7">
              <div>
                <input type="radio" id="hi" name="fav" value="Say hi"/>
                <label className="ml-1 " for="hi">Say Hi</label>
              </div>
              <div>
                <input type="radio" id="Quote" name="fav" value="Get a Quote"/>
                <label className="ml-1 " for="Quote">Get a Quote</label>
              </div>
            </div>
              <div className="flex flex-col ">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" className="p-1 border rounded-md" />
                <br />
                <label htmlFor="email">Email*</label>
                <input type="text" id="email"  className="p-1 border rounded-md"/>
              </div>
              <br />
              <label htmlFor="message">Message*</label><br></br>
              <textarea id="message" rows="4" className="w-full p-1 border rounded-md"/>
            </form>
        </div>
        <div className='relative w-full max-xmd:hidden'>
          <Image src={contactImg} alt='contact' className='absolute self-end -right-44 w-80 h-80' />
        </div>
      </div>
    </div>
  )
}

export default ContactUs