import Particles from 'particlesjs';
import React from 'react'
import ScrollspyNav from 'react-scrollspy-nav';
import '../sass/FirstPage.scss'

const FirstPage = () => {
    window.onload = function() {Particles.init({
        selector: '.background',
        speed: .1,
        sizeVariations: 1,
        maxParticles: 10000,
        connectParticules: true,
    
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
            <ScrollspyNav
                    scrollTargetIds={["description"]}
                    offset={-100}
                    activeNavClass="is-active"
                    scrollDuration="50"
                    headerBackground="true"
                    smooth
                >  
                <a href="#description"><i class="fa-solid fa-shuttle-space"></i></a>
            </ScrollspyNav>    
            </div>
            
        </div>
    </div>
  )
}

export default FirstPage