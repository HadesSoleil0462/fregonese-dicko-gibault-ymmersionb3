
const FlowerDetail = ({flower}) => {

    return <div className="flower-detail">
        <div>
            <img src={flower.img} alt="image de la fleur" />
            <p>{flower.tips}</p>
        </div>
        <div>
            <p>{flower.name}</p>
            <p>{flower.price}</p>
            <label htmlFor="quantité">Quantité</label>
            <input type="number" name="quantite" id="quantite" />
            <button>Ajouter au panier</button>
        </div>

    </div>
}

export default FlowerDetail;