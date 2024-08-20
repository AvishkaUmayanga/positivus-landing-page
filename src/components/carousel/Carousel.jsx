'use client'

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Image from 'next/image'
import leanIcon from '@/../public/arrow.png'

const CarouselBar = ({data}) => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 5000, min: 1300 },
      items: 4
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
    <div className=' text-whiteColor'>
      <Carousel 
        responsive={responsive}
        swipeable={true}
        arrows={false}
        draggable={false}
        showDots={false}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={3000}
        keyBoardControl={true}>
          {data?.map((cardData, index) => (
            <div key={index} className='flex flex-col gap-5 p-4 mx-5 my-8 bg-black rounded-xl opacity-90'>
              <p>{cardData.text}</p>
              <button className='flex items-center gap-4 text-sm duration-300 text-lightGreen max-w-fit hover:scale-95'>
                <span>Learn more</span>
                <Image src={leanIcon} alt='arrow icon' className='w-3 ' />
              </button>
            </div>
          ))} 
      </Carousel>
    </div>
  )
}

export default CarouselBar