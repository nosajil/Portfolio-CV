import React from 'react'
import Form from '../components/Form';
import '../sass/Contact.scss'

const Contact = () => {
  return (
    <div className='contact-wrapper'>
        <div className="contact-info">
            <h2>Contactez moi</h2>
            <div className="icons-reseaux">
                <div className="linkedin">Linkedin</div>
                <div className="email">Email</div>
                <div className="github">GitHub</div>
            </div>
        </div>
        <div className="form-wrapper">
            <Form/>
        </div>
    </div>
  )
}

export default Contact