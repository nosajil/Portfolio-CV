import Particles from 'particlesjs';
import React from 'react'
import '../sass/FirstPage.scss'

const FirstPage = () => {
    window.onload = function() {Particles.init({
        selector: '.background',
        speed: .1,
        sizeVariations: 1,
        maxParticles: 10000,
        connectParticules: true,
    
        // color: ['#1B1464', '#404B69', '#5758BB'],
        color: ['#ffffff', '#898a8d', '#5758BB'],
        responsive: [{
          breakpoint: 768,
          options: {
            color: ['#ffffff', '#898a8d', '#5758BB'],
            connectParticules: true,
            maxParticles: 2500,
          }
        }]
        
    
      });
    };

  return (
    <div>
        <div className="firstpage-wrapper" id='accueil'>
            <div className="presentation">
                <p>Bonjour, je suis</p>
                <h1>Jason Lequenne</h1>
                <h2>Développeur Web & Web Mobile</h2>
            </div>
            <div className="image-code">
                <img src={`${process.env.PUBLIC_URL}/img/presentation-coding.png`} alt="presentation-en-code" />
            </div>
            <div className="icon-down">
                <a href="#description"><i class="fa-solid fa-chevron-down"></i></a>
            </div>
        </div>
    </div>
  )
}

export default FirstPage