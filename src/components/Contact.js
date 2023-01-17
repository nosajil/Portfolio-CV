import React from 'react'
import Form from '../components/Form';
import '../sass/Contact.scss'

const Contact = () => {

    // const [email, setEmail] = useState([
    //     showemail
    // ]);

  return (
    <div className="contact-page_wrapper">
        <div className='contact-wrapper' id='contact'>
            <div className="contact-info">
                <h2>Je recherche...</h2>
                <div className="search">
                    <p>Actuellement à la recherche d'un stage d'un mois pour finaliser ma formation de Développeur Web & Web Mobile.</p>
                    <p className='style-date'>Date: 27 mars 2023 au 21 avril 2023  </p>
                    <p>Etant en formation accès sur React.js j'aimerais poursuivre mon apprentissage dans cette techno et appronfondir mes connaissances.</p>
                </div>
                <div className="pos-btn">
                    <button className='btn-cv'>Télécharger le CV en PDF</button>
                </div>
            </div>
        </div>
        <div className='contact-wrapper' id='contact'>
            <div className="contact-info">
                <h2>Contactez moi</h2>
                <div className="icons-reseaux">
                    <a className="icon" target='_blank' rel="noreferrer" href="https://www.linkedin.com/in/jason-lequenne-51135b164/">
                        <div className=" linkedin">
                            <i class="fa-brands fa-linkedin"></i>
                            <h4>Linkedin</h4>
                        </div>
                    </a>
                    <div className='icon email'>
                            <i class="fa-solid fa-envelope"></i>
                            <h4>Email</h4>
                    </div>
                    <a className="icon" target='_blank' rel="noreferrer" href='https://github.com/nosajil'>   
                        <div className=" github">
                            <i class="fa-brands fa-github"></i>
                            <h4>GitHub</h4>
                        </div>
                    </a>
                    <div className="icon github">
                        <i class="fa-solid fa-phone"></i>
                        <h4>Téléphone</h4>
                    </div>
                </div>
            </div>
            <div className="form-wrapper">
                <Form/>
            </div>
        </div>
    </div>
  )
}

export default Contact