import { Link } from 'react-router-dom';
import '../styles/Flower-card.css'
const FlowerCard = ({id, image, title, price}) => {

        return <div className="flower-card card" style={{width: 16 + 'rem'}}>
        <Link to={`/flowers-store/store/${id}`}><img src={image} alt="image de la fleur" className='card-img-top' /></Link>
        <div>
            <h4 id='des' className='card-title'>{title}</h4>
            <p className='card-text'>{price} €</p>
        </div>
    </div>
}

export default FlowerCard;