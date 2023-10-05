import { Link } from 'react-router-dom'
import panier from '../assets/carte.png'
import logo from '../assets/B1.png'
import Cart from '../components/Cart'
import '../styles/Header.css'
import { useState, useEffect } from 'react'

const Header = () => {
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [cartItems, setCartItems] = useState([]);

    const openCart = () => {
        setIsCartOpen(true);
    }; 
    const closeCart = () => {
        setIsCartOpen(false);
    };

    useEffect(() => {
        // Récupérez les clés du localStorage
        const storageKeys = Object.keys(localStorage);
        
        // Utilisez les clés pour récupérer les valeurs du localStorage
        const items = storageKeys.map(key => ({
            name: key,
            value: localStorage.getItem(key)
        }));

        setCartItems(items);
    }, []); // Le tableau vide [] signifie que cela ne s'exécute qu'une fois au montage du composant

    return (
        <header>
            <nav>
                <ul>
                    <li><Link to='/flowers-store/store'>Boutique</Link></li>
                    <li><Link to='/flowers-store/about'>Notre histoire</Link></li>
                    <li><Link to='/flowers-store/contact'>Nous contacter</Link></li>
                    <li><Link to='/flowers-store/cart'>Panier{`(${localStorage.length})`}</Link></li>
                </ul>
            </nav>
            <Link to='/'><h1 id='logo'>FLOWERS STORE</h1></Link>
            {/* <div className='panier'>
                <Link to='/cart' >
                    <img src={panier} alt='panier' onClick={openCart}/>
                </Link>
                <span>{cartItems.length}</span>
                {isCartOpen && <Cart items={cartItems} onClose={closeCart} />}
            </div>
            <img src={logo} alt='Flowers store' id='logo' />
             */}
        </header>
    );
} 

export default Header;
