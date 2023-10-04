import tulips from '../assets/tulips-4026273_1280.jpg'
const Contact = () => {

    return<div>
        <form>
            <legend>Formulaire de contact</legend>
            <div className='infos'>
                <label htmlFor='mail'>E-mail</label>
                <input type="email" name="mail" id="mail" />
            </div>
            <div className='infos'>
                <label htmlFor='tel'>E-mail</label>
                <input type="tel" name="tel" id="tel" />
            </div>
            <div className='infos'>
                <label htmlFor="message">Message</label>
                <input type="text" name="message" id="message" />
            </div>
            <button type="submit">Envoyer</button>
        </form>
</div>
}

export default Contact;