import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import '../sass/Slider.scss'
import data from '../components/projects'

const Slider = () => {

  return (
    <Carousel autoPlay interval={6000} infiniteLoop thumbWidth={120} showIndicators={false} showStatus={false}>
        {data.map((slide) => (
            <div className='slide' key={slide.id}>
                <img src= {`${process.env.PUBLIC_URL}/img/${slide.image}`}  alt="" />
                <div className="overlay">
                    <h2 className="overlay-title">
                        {slide.title}
                    </h2>
                    <p className="overlay-text">
                        {slide.text}
                    </p>
                    <a href={slide.url}>Voir ici</a>
                </div>
            </div>
        )
        )}
    </Carousel>
  )
}

export default Slider