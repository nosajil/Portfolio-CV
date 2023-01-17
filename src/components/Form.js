import React from 'react'
import "../sass/Form.scss"

function Form() {
  return (
    <div className='contact'>
        <form className='contact-form' name="contact" method="post" data-netlify="true" onSubmit="submit">
          
            <input type="hidden" name="form-name" value="contact" />
            <label for="name">Nom</label>
            <input type="text" name="name" required/>
              
            <label for="email">Email</label>
            <input type="email" name="email" required/>
             
            <label for="message">Message</label>
            <textarea rows={5} name="message" required></textarea>
         
            <button className='btn-send' type="submit">Envoyer</button>
        </form>
    </div>
  )
}

export default Form