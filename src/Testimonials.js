import React, {useState, useEffect} from 'react';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext, DotGroup } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import useWindowSize from './useWindowSize'

function Testimonials({data}) {

  const size = useWindowSize();
  const [mobileView, setMobileView] = useState(false)

  useEffect(() => {
    setMobileView(size.width < 768 ? true : false)
  }, [size])

  return (
      
        <CarouselProvider
          naturalSlideWidth={100}
          naturalSlideHeight={60}
          totalSlides={data.length}
          visibleSlides={mobileView ? 1 : 3}
          infinite={false}
          isIntrinsicHeight={true}
          className='testimonals-slider'
        >
        <Slider>
          {data && data.map((item, index) => {
            return <Slide  key={index} index={index+1} className='testimonial-slide'>
              <div className='testimonial-outer'>
                <div className='testimonial-inner'>
                  <div className='testimonial-image'><img src={item.image} alt={item.author} /></div>
                  <div className='testimonial-name'>{item.author}</div>
                  <div className='testimonial-quote'>{item.text}</div>
                </div>
              </div>
            </Slide>
          })}
        </Slider>
        <ButtonBack className="carousel-control-prev">
          <span className="control-icon prev"></span>
          <span className="sr-only">Previous</span>
        </ButtonBack>
        <ButtonNext className="carousel-control-next">
            <span className="control-icon next"></span>
            <span className="sr-only">Previous</span>
        </ButtonNext>
        {mobileView && <DotGroup />}
      </CarouselProvider>

  );

}

export default Testimonials;
