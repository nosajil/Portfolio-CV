import React from 'react'
import '../sass/FirstPage.scss'

const FirstPage = () => {


  return (
    <div>
        <div className="firstpage-wrapper">
            <div className="presentation">
                <p>Bonjour, je suis</p>
                <h1>Jason Lequenne</h1>
                <h2>Développeur Web & Web Mobile</h2>
            </div>
            <div className="image-code">
                <img src={`${process.env.PUBLIC_URL}/img/presentation-coding.png`} alt="presentation-en-code" />
            </div>
            <div className="icon-down">
                <i class="fa-solid fa-chevron-down"></i>
            </div>
        </div>
    </div>
  )
}

export default FirstPage