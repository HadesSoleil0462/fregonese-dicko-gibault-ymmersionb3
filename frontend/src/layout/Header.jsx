import { Link } from 'react-router-dom'
import panier from '../assets/carte.png'
import logo from '../assets/logo.png'
import Cart from '../components/Cart'
import '../styles/Header.css'

const Header = () => {
    return <header>
        <nav>
            <ul>
                <li><Link to='/store'>Boutique</Link></li>
                <li><Link to='/about'>Notre histoire</Link></li>
                <li><Link to='/contact'>Nous contacter</Link></li>
            </ul>
        </nav>
        <Link to='/'><img src={logo} alt='Flowers store' id='logo' /></Link>
        <div className='panier'>
            <Link to='/cart' ><img src={panier} alt='panier' /></Link>
            <span>0</span>
        </div>
    </header>
} 

export default Header;