import axios from "axios";
import { useState, useEffect } from "react";

const apiUrl = "http://localhost:8080/flowers";
export const Flowers = () => {
    const [flowers, setFlowers] = useState([])

    useEffect(() => {
        axios.get(apiUrl)
        .then((response) => {
            setFlowers(response.data)
            console.log(flowers)
        })
        .catch((error) => {
            console.error('Erreur lors de la récupération des données:', error);
        })
    }, [])
    return flowers;

}

export const Flower = ({id}) => {
    const [flower, setFlower] = useState({})
    useEffect(() => {
        axios.get(`${apiUrl}/${id}`)
        .then((res) => {
            setFlower(res.data)
        })
        .catch((err) => {
            console.error("Fleur non trouvée", err)
        })

    },[id] )
    return flower;
}