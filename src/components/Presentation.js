import React from 'react'
import '../sass/Presentation.scss'

const Presentation = () => {
  return (
    <div>
        <div className="presentation-wrapper">
            <div className="my-photo">
                <img src={`${process.env.PUBLIC_URL}/img/my-photo2.png`} alt="presentation-en-code" />
            </div>
            <div className="aboutme">
                <h2>Développeur Web & Web Mobile</h2>
                <h4>A propos de moi</h4>
                <p>Passionné par le voyage, j'aime partir à l'aventure loin des sentiers battus. Sportif et compétiteur dans l'âme, j'aime travailler en équipe et partager des idées autour d'un projet. Autonome dans le travail comme dans la vie, j'aime m'approprier les projets sur lesquels je travaille.</p>
                <h4>Je cherche</h4>
                <p>Actuellement en formation Développeur Web & Web Mobile à M2I Formation à Villeneuve d'ascq, je suis à la recherche d'un stage de 1 à 2 mois (début fin Mars). Motivé, je cherche une entreprise prête à m'accueillir dans son équipe de développement. </p>
            </div>
        </div>
    </div>
  )
}

export default Presentation