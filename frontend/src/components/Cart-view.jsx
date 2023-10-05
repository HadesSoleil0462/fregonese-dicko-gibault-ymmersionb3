import '../styles/Cart-view.css'

const CartView = ({title, price}) => {

  const removeItem = () => {
    localStorage.removeItem(title)
    window.location.reload()
}
    return <div>
        <li className="cart-item">
            <h3>{title}</h3>
            <em>Total : {price} €</em>
          <button className="remove-item" onClick={removeItem}>Supprimer</button>
        </li>
    </div>

}
export default CartView;