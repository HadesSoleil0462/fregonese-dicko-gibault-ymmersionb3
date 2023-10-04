import '../styles/Flower-card.css'

const FlowerCard = ({image, title, price}) => {

    return <div className="flower-card">
        <img src={image} alt="image de la fleur" />
        <div>
            <h4>{title}</h4>
            <p>{price} €</p>
        </div>
    </div>
}

export default FlowerCard;