import { useState } from "react"


const Cart = () => {

    const [products, setProducts] = useState([])
    return <div>
        <h3>Panier</h3>
        <button>Passez au paiement</button>
    </div>
}
export default Cart;