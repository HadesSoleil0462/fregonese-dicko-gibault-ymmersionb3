import panier from '../assets/carte.png'
import logo from '../assets/logo.png'
import '../styles/Header.css'

const Header = () => {
    
    return <header>
        <nav>
            <ul>
                <li>Boutique</li>
                <li>Notre histoire</li>
                <li>Nous contacter</li>
            </ul>
        </nav>
        <img src={logo} alt='Flowers store' />
        <div className='panier'>
            <img src={panier} alt='panier' />
            <span>0</span>
        </div>
    </header>
} 

export default Header;