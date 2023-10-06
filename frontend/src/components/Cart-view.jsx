

const CartView = ({title, quantite, price}) => {

    return <div>
        <li className="cart-item">
          <div className="item-details">
            <h2>{title}</h2>
            <p>Prix : {price * quantite} €</p>
            <p>Quantité : {quantite}</p>
          </div>
          <button className="remove-item">Supprimer</button>
        </li>
    </div>

}
export default CartView;