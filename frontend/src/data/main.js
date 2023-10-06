import axios from "axios";
import { useState, useEffect } from "react";

const apiUrl = "http://localhost:8080/flowers";
export const Flowers = () => {
    const [flowers, setFlowers] = useState([])

    useEffect(() => {
        axios.get(apiUrl)
        .then((response) => {
            setFlowers(response.data)
            console.log("Flowers : ",response.data)
        })
        .catch((error) => {
            console.error('Erreur lors de la récupération des données:', error);
        })
    }, [])
    return flowers;

}

export const Flower = ({id}) => {
    const url = "http://localhost:8080/flower"
    const [flower, setFlower] = useState({})
    useEffect(() => {
        axios.get(`${url}/${id}`)
        .then((res) => {
            setFlower(res.data)
            
        })
        .catch((err) => {
            console.error("Fleur non trouvée", err)
        })

    },[id] )
    return flower;
}

export function trouverSimilitudes(tableau1, tableau2) {
    const similitudes = [];
  
    for (const element1 of tableau1) {
      if (tableau2.includes(element1) && !similitudes.includes(element1)) {
        similitudes.push(element1);
      }
    }
  
    return similitudes;
  }

  