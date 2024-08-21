'use client'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import testimonialsImg from '@/../public/Card.png'
import Image from 'next/image';
import CustomDot from '../custom dots/CustomDot';

const TestimonialsCarousel = () => {
  const cards = [
    {imgUrl: testimonialsImg},
    {imgUrl: testimonialsImg},
    {imgUrl: testimonialsImg}
  ]
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 5000, min: 1300 },
      items: 3
    },
    desktop: {
      breakpoint: { max:1300, min: 920 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 920, min: 500 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 500, min: 0 },
      items: 1
    }
  };

  return (
    <div className='p-5 bg-black rounded-xl'>
      <Carousel 
        responsive={responsive}
        swipeable={true}
        arrows={true}
        draggable={false}
        showDots={true}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={3000}
        keyBoardControl={true}
        customDot={<CustomDot />}
      >
          {cards.map((card, index) => (
          <div key={index} className='px-5 pb-14'>
            <Image src={card.imgUrl} alt='testimonials'/>
          </div>
          ))}
      </Carousel>
    </div>
  )
}

export default TestimonialsCarousel




