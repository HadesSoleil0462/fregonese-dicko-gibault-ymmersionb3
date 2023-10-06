import '../styles/Cart-view.css'
import fall from "../assets/saisons/icons8-printemps-80.png"

const CartView = ({title, price}) => {

  const removeItem = () => {
    localStorage.removeItem(title)
    window.location.reload()
}
    return <div>
        <li className="cart-item">
            <h3>{title} <img id='flower-card-img' src={fall} /></h3>
            <em>Total : {price} €</em>
          <button className="remove-item" onClick={removeItem}>Supprimer</button>
        </li>
    </div>

}
export default CartView;