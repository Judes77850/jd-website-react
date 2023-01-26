import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

function ContactUs(){
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_duwdtg9', 'template_cfu7i59', form.current, 'MK-TS7pXp5JJyRB91')
      .then((result) => {
          console.log(result);
          window.alert("Merci, Votre message a bien été transmis")
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <form className='contact-form' ref={form} onSubmit={sendEmail}>
      <h2>Formulaire de contact</h2>
      <label>Nom</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Message</label>
      <textarea name="message" />
      <input className='send' type="submit" value="Envoyer"/>
    </form>
  )
}

export default ContactUs