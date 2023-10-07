import { Link } from 'react-router-dom';
import '../styles/Flower-card.css'
import fall from "../assets/saisons/icons8-printemps-80.png"
const FlowerCard = ({id, image, title, price, season}) => {

        return <div className="flower-card card" style={{width: 16 + 'rem'}}>
        <Link to={`/flowers-store/store/${id}`}> <img src={image} alt="image de la fleur" className='card-img-top' /></Link>
        <div>
            <h4 id='flower-title' className='card-title'>{title} <img id='flower-card-img' src={fall} /> : {price} €</h4>
            <span className='card-text'></span>
        </div>
    </div>
}

export default FlowerCard;