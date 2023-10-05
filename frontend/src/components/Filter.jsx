import { useEffect, useState } from "react"
import '../styles/Filter.css'
import axios from "axios"
import { Flowers } from "../data/main"
import FlowerCard from "./Flower-card"

const Filter = () => {
    const api_URL = "http://localhost:8080"
    const [priceFilter, setPriceFilter] = useState("Tous les prix")
    const [typeFilter, setTypeFilter] = useState("Tous les types")
    const flowers = Flowers()
    const changePrice = (e) => {
        setPriceFilter(e.target.value)
    }
    const changeType = (e) => {
        setTypeFilter(e.target.value)
    }
    
    /*const clickFilter = () => {
        if (typeFilter === "Tous les types" && priceFilter === "Tous les prix") {
            // Aucun filtre, afficher toutes les fleurs
            setFlowers(Flowers());
        } else {
            const filteredFlowers = Flowers().filter(item => {
                const priceInRange = priceFilter === "Tous les prix" || item.Price === priceFilter;
                const typeMatches = typeFilter === "Tous les types" || item.Type === typeFilter;
                return priceInRange && typeMatches;
            });
            setFlowers(filteredFlowers);
        }
    }; */
    
    return <div>
        <div className="filter">
            <div className="filters">
                <label htmlFor="price">Prix</label>
                <select onChange={changePrice} value={priceFilter} name="price" id="price">
                    <option defaultChecked value="Tous les prix">Tous les prix</option>
                    <option value="0-10">0€ - 10€</option>
                    <option value="10-20">10€ - 20€</option>
                    <option value="20-30">20€ - 30€</option>
                    <option value="30-40">30€ - 40€</option>
                </select>
            </div>
            <div className="filters">
                <label htmlFor="type">Type</label>
                <select onChange={changeType} value={typeFilter} name="type" id="type">
                    <option defaultChecked value="Tous les types">Tous les types</option>
                    <option value="iris">Iris</option>
                    <option value="lilas">Lilas</option>
                    <option value="rose">Rose</option>
                    <option value="orchidée">Orchidée</option>
                    <option value="lys">Lys</option>
                </select>
            </div>
            <div>
                <button>Filter</button>
            </div>
        </div>
        <div className='flowers'>
        {
            flowers.map(item => {
                return <FlowerCard key={item.id} id={item.id} image={item.Pic_URL} title={item.FlowerName + " " + item.Type} price={item.Price} />
            })
        }
    </div>
    </div>
}
export default Filter;