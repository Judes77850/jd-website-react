function Contact(){
    return(
      <div className="formBox">
        <form id="contact-form">
          <h2>Formulaire de contact</h2>
          <input type="hidden" name="contact_number" required />
            <label>Nom</label>
          <input type="text" name="user_name" placeholder="Votre nom" required />
            <label>Email</label>
          <input type="email" name="user_email" placeholder="Votre email" required />
            <label>Message</label>
          <textarea name="message"></textarea>
          <input className="send" type="submit" value="Envoyer" />
        </form>
      </div>
    )
}

export default Contact