import { useEffect, useState } from "react"
import '../styles/Filter.css'
import axios from "axios"
import { Flowers, trouverSimilitudes } from "../data/main"
import FlowerCard from "./Flower-card"
import { useParams } from "react-router"
import CartLmj from "./CartLmj"

const Filter = () => {
    const api_URL = "http://localhost:8080"
    const [priceFilter, setPriceFilter] = useState("Tous les prix")
    const [typeFilter, setTypeFilter] = useState("Tous les types")
    const [othersflowers, setOtherFlowers] = useState([])
    const flowers = Flowers()
    const changePrice = (e) => {
        setPriceFilter(e.target.value)
    }
    const changeType = (e) => {
        setTypeFilter(e.target.value)
    }

    const filteredFlowersByName = flowers.filter(e => {
        return e['FlowerName'].toLowerCase().includes(typeFilter.toLowerCase())
    })

    const arrayPrice = priceFilter === "Tous les prix" ? flowers : priceFilter.split('-')
    const sortedPrice = () => {
        let sortedPriceArray = []
        if(arrayPrice === flowers){
            sortedPriceArray = flowers
        } else {
            const min = Number.parseInt(arrayPrice[0])
            const max = Number.parseInt(arrayPrice[1])
            sortedPriceArray = flowers.filter(e => {
                return e.Price >= min && e.Price < max
            })
            console.log(sortedPriceArray)
        }
        return sortedPriceArray
    }
    const filteredFlowersByPrice = flowers.filter(e => {
    })
    
    const clickFilter = () => {
        if(trouverSimilitudes(sortedPrice(), filteredFlowersByName).length === 0){
            setOtherFlowers(Flowers)
        } else {
            setOtherFlowers(trouverSimilitudes(sortedPrice(), filteredFlowersByName))
        }
    };
    const sortCroissant = () => {
        setOtherFlowers(flowers.sort((a, b) => a - b))
    }
    
    return <div className="list">
        <CartLmj />
        <div>
        <div className="filter">
            <div className="sort">
                <div className="sort-attributes">
                    <input type="radio" name="sort" id="croissant" />
                    <label htmlFor="croissant">Croissant</label>
                </div>
                <div className="sort-attributes">
                    <input type="radio" name="sort" id="decroissant" />
                    <label htmlFor="decroissant">Décroissant</label>
                </div>
                
            </div>
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
                <button onClick={clickFilter}>Filter</button>
            </div>
        </div>
        <div className='flowers'>
        {
            othersflowers.length === 0 ? flowers.map(item => {
                return <FlowerCard key={item.id} id={item.id} image={item.Pic_URL} title={item.FlowerName + " " + item.Type} price={item.Price} />
            }) : othersflowers.map(item => {
                return <FlowerCard key={item.id} id={item.id} image={item.Pic_URL} title={item.FlowerName + " " + item.Type} price={item.Price} />
            })
        }
        </div>
    </div>
    </div>
}
export default Filter;