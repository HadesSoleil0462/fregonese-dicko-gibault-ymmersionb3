import img1 from '../assets/flower-3140492_1280.jpg'
import img2 from '../assets/flowers-19830_1280.jpg'
import img3 from '../assets/rose-320868_1280.jpg'
import flower from '../assets/flowers-7030589_1920.jpg'
import '../styles/Main.css'
import { Link } from 'react-router-dom'

const Main = () => {

    return <div className='main'>
        <section className='about'>
            <div>
                <h2>Flowers store</h2>
                <p>
                Jamais nous n'aurions pu imaginer que notre marque connaisse autant de succès, et c'est à vous chers clients que nous le devons. Pour nous, ce que nous devons offrir aux acheteurs c'est un service irréprochable et une très bonne connaissance des produits que nous vendons. Maintenant que notre boutique éphémère est ouverte, nous vous invitons à découvrir nos articles exclusifs et nos offres exceptionnelles. Passez quand vous voulez !
                </p>
                <Link to='/flowers-store/store'><button>Visiter notre boutique</button></Link>
            </div>
            <img src={flower} alt='lilas' />
        </section>
        <section className='horaires'>
            <h3>Horaires d'ouverture</h3>
            <p>Venez nous rendre visite</p>
            <p>Lundi - Vendredi: 09h00 - 21h00</p>
            <p>Samedi et Dimanche : 10h00 - 22h00</p>
        </section>
        <section className='caroussel'>
            <h2>Nos fleurs vous feront rever</h2>
            <div id='flowers'>
                <img src={img1} className="img" alt='fleur' />
                <img src={img2} className="img" alt='fleur' />
                <img src={img3} className="img" alt='fleur' />
                <img src={flower} className="img" alt='fleur' />
            </div>
        </section>
    </div>
}

export default Main;
