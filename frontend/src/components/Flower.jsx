import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import fleur from '../assets/fleur.png'
import '../styles/Flower.css'
import fall from "../assets/saisons/icons8-printemps-80.png"
import summer from "../assets/saisons/icons8-feuille-d'érable-48.png"
const FlowerDetail = () => {
    const apiUrl = "http://localhost:8080/flower";
    const {id} = useParams()
    const [season, setSeason] = useState('')
    const [flower, setFlower] = useState({})
    const [quantite, setQuantite] = useState(1)
    const [message, setMessage] = useState('')
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
        setMessage(`Vous avez ajouté ${quantite} ${flower.FlowerName} ${flower.Type} `)
        window.location.reload()
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

    const verifySeason = () => {
        let otherSeason
        console.log(flower.Season)
        switch (flower.Season) {
            case "summer":
                otherSeason = summer
                break;
            case "fall":
                otherSeason = fall
                break
            case "winter":
                otherSeason = fall
                break
            case "spring":
                otherSeason = fall
                break
            default:
                break;
        }
        return otherSeason;
    }

    return <div className="flower-detail">
        <div>
            <img src={flower.Pic_URL} alt="image de la fleur" className="img flower-img" />
            <p>{flower.Tips}</p>
        </div>
        <div className="price">
            <h3>{flower.FlowerName + " " + flower.Type} <img src={fleur} /></h3>
            <span>{flower.Price} €</span>
            <label htmlFor="quantité">Quantité</label>
            <input type="number" onChange={changePrice} value={quantite} name="quantite" id="quantite" />
            <button onClick={addCart}>Ajouter</button>
            {message}
        </div>

    </div>
}

export default FlowerDetail;