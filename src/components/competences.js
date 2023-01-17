import React from 'react'
import '../sass/competences.scss'

const SecondPage = () => {
  return (
    <div className="skills-wrapper">
        <h2 className="title-skills">Compétences</h2>
        <div id='skills' className="secondpage-wrapper">
            <div className="skills-front">
                <h3>Front-end</h3>
                <div className="section-skill">
                    <div className="skill">
                        <h3>React</h3> 
                        <img alt='logo-react' src={`${process.env.PUBLIC_URL}/img/logo-react.png`}/> 
                    </div>
                    <div className="skill">
                        <h3>JavaScript</h3> 
                        <img alt='logo-js' src={`${process.env.PUBLIC_URL}/img/js-logo.png`}/> 
                    </div>
                </div>
                <div className="section-skill">
                    <div className="skill">
                        <h3>SASS</h3> 
                        <img alt='logo-sass' src={`${process.env.PUBLIC_URL}/img/logo-sass.png`}/> 
                    </div>
                    <div className="skill">
                        <h3>HTML</h3> 
                        <img alt='logo-html' src={`${process.env.PUBLIC_URL}/img/html-logo.png`}/> 
                    </div>
                </div>
            </div>
            <div className="skills-back">
                <h3>Back-end</h3>
                <div className="section-skill">
                    <div className="skill">
                        <h3>SQL</h3> 
                        <img alt='logo-sql' src={`${process.env.PUBLIC_URL}/img/sql.png`}/> 
                    </div>
                    <div className="skill">
                        <h3>PHP</h3> 
                        <img alt='logo-php' src={`${process.env.PUBLIC_URL}/img/php.png`}/> 
                    </div>
                </div>
                <div className="section-skill">
                    <div className="skill">
                        <h3>MySQL</h3> 
                        <img alt='logo-mysql' src={`${process.env.PUBLIC_URL}/img/mysql.png`}/> 
                    </div>
                    <div className="skill">
                        <h3>Node JS</h3> 
                        <img alt='logo-node-js' src={`${process.env.PUBLIC_URL}/img/nodejs.png`}/> 
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SecondPage