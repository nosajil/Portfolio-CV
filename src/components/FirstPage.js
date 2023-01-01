import React from 'react'
import '../sass/FirstPage.scss'

const FirstPage = () => {


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