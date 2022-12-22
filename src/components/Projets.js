import React from 'react'
import '../sass/Projets.scss'
import Slider from './Slider'

const Projets = () => {
  return (
    <div className='project-wrapper'>
        <div className="container">
            <div className="slider-title">
                <h2>Mes projets</h2>
            </div>
            <div className="section-slider">
                <Slider />
            </div>
        </div>
    </div>
  )
}

export default Projets