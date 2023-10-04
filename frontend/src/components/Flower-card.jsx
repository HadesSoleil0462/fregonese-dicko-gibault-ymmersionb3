import { Link } from 'react-router-dom';
import '../styles/Flower-card.css'
const FlowerCard = ({id, image, title, price}) => {

    return <div className="flower-card">
        <a href={`/store:${id}`}><img src={image} alt="image de la fleur" /></a>
        <div>
            <h4>{title}</h4>
            <p>{price} €</p>
        </div>
    </div>
}

export default FlowerCard;