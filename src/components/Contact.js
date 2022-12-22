import React from 'react'
import Form from '../components/Form';
import '../sass/Contact.scss'

const Contact = () => {
  return (
    <div className='contact-wrapper'>
        <div className="contact-info">
            <h2>Contactez moi</h2>
            <div className="icons-reseaux">
                <div className="icon linkedin">
                    <i class="fa-brands fa-linkedin"></i>
                    <h4>Linkedin</h4>
                </div>
                <div className="icon email">
                    <i class="fa-solid fa-envelope"></i>
                    <h4>Email</h4>
                </div>
                <div className="icon github">
                    <i class="fa-brands fa-github"></i>
                    <h4>GitHub</h4>
                </div>
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
  )
}

export default Contact