import TestimonialsCarousel from "../testimonials carousel/TestimonialsCarousel"

const Testimonials = () => {
  return (
    <div className="flex flex-col gap-16 max-xmd:gap-6">
      <div className="flex items-center gap-5 max-lg:text-center max-lg:flex-col">
        <h2 className="px-3 py-2 text-2xl font-bold rounded-md bg-lightGreen max-w-fit">Testimonials</h2>
        <p className=" max-w-[550px]">Hear from Our Satisfied Clients: Read Our Testimonials to Learn More about Our Digital Marketing Services</p>
      </div>
      <TestimonialsCarousel />
    </div>
  )
}

export default Testimonials