import tulips from '../assets/tulips-4026273_1280.jpg'
import '../styles/Contact.css'
const Contact = () => {

    return<div className='contact'>
        <h3>Formulaire de contact</h3>
        <form>
            <div className='infos'>
                <label htmlFor='mail'>E-mail</label>
                <input type="email" name="mail" id="mail" />
            </div>
            <div className='infos'>
                <label htmlFor='tel'>Téléphone</label>
                <input type="tel" name="tel" id="tel" />
            </div>
            <div className='infos'>
                <label htmlFor="message">Message</label>
                <textarea id='message' cols='25' rows='10'></textarea>
            </div>
            <button type="submit">Envoyer</button>
        </form>
</div>
}

export default Contact;