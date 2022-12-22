import React from 'react'
import '../sass/SecondPage.scss'

const SecondPage = () => {
  return (
    <div>
        <div id='skills' className="secondpage-wrapper">
            <h2>Compétences</h2>
            <div className="skills">
                <div className="section-skill">
                    <div className="skill">
                        <h3>React</h3> 
                        <img src={`${process.env.PUBLIC_URL}/img/logo-react.png`}/> 
                    </div>
                    <div className="skill">
                        <h3>JavaScript</h3> 
                        <img src={`${process.env.PUBLIC_URL}/img/js-logo.png`}/> 
                    </div>
                </div>
                <div className="section-skill">
                    <div className="skill">
                        <h3>SASS</h3> 
                        <img src={`${process.env.PUBLIC_URL}/img/logo-sass.png`}/> 
                    </div>
                    <div className="skill">
                        <h3>HTML</h3> 
                        <img src={`${process.env.PUBLIC_URL}/img/html-logo.png`}/> 
                    </div>
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default SecondPage