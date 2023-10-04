import flower from '../assets/flowers-7030589_1920.jpg'
import lilas from '../assets/lilacs-1914124_1280.jpg'
import '../styles/Main.css'

const Main = () => {

    return <div className='main'>
        <img src={flower} alt='flowers' />
        <div>
            <h2> C'est parti !</h2>
            <p>Ce que vous attendiez</p>
        </div>
        <div className='articles'></div>
        <section className='about'>
            <div>
                <h2>Flowers store</h2>
                <p>
                Jamais nous n'aurions pu imaginer que notre marque connaisse autant de succès, et c'est à vous chers clients que nous le devons. Pour nous, ce que nous devons offrir aux acheteurs c'est un service irréprochable et une très bonne connaissance des produits que nous vendons. Maintenant que notre boutique éphémère est ouverte, nous vous invitons à découvrir nos articles exclusifs et nos offres exceptionnelles. Passez quand vous voulez !
                </p>
                <button>Contacter</button>
            </div>
            <img src={flower} alt='lilas' />
        </section>
        <section className='horaires'>
            <h3>Horaires d'ouverture</h3>
            <p>Venez nous rendre visite</p>
            <p>Lundi - Vendredi: 09h00 - 21h00</p>
            <p>Samedi et Dimanche : 10h00 - 22h00</p>
        </section>
    </div>
}

export default Main;
