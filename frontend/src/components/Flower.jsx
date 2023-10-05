import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import '../styles/Flower.css'

const FlowerDetail = () => {
    const apiUrl = "http://localhost:8080/flowers";
    const {id} = useParams()
    const [flower, setFlower] = useState({})
    const [quantite, setQuantite] = useState(1)
    const changePrice = (event) => {
        const value = event.target.value
        if(value < 0){
            setQuantite(0)
        } else {
            setQuantite(event.target.value)
        }
    }
    const addCart = () => {
        localStorage.setItem(`${flower.FlowerName} ${flower.Type}`, `${quantite * flower.Price}`)
        console.log(localStorage)
    }

     useEffect(() => {
        axios.get(`${apiUrl}/${id}`)
        .then((res) => {
            setFlower(res.data)
        })
        .catch((err) => {
            console.error("Fleur non trouvée", err)
        })

    },[id] )

    return <div className="flower-detail">
        <div>
            <img src={flower.Pic_URL} alt="image de la fleur" />
            <p>{flower.Tips}</p>
        </div>
        <div className="price">
            <span>{flower.FlowerName + " " + flower.Type}</span>
            <span>{flower.Price} €</span>
            <label htmlFor="quantité">Quantité</label>
            <input type="number" onChange={changePrice} value={quantite} name="quantite" id="quantite" />
            <button onClick={addCart}>Ajouter</button>
        </div>

    </div>
}

export default FlowerDetail;