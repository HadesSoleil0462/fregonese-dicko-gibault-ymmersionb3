import axios from "axios";
import { useState, useEffect } from "react";

const apiUrl = "http://localhost:8080/flowers";
export const Flowers = () => {
    const [flowers, setFlowers] = useState([])

    useEffect(() => {
        axios.get(apiUrl)
        .then((response) => {
            setFlowers(response.data)
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

export const VerifyLogin = (name, pass) => {
    const api_URL = "http:localhost:8080/admin/login"
    useEffect(() => {
        axios.post(api_URL, {
          user: name,
          password: pass
        })
        .then((res) => {
          console.log(res)
        })
        .catch((err) => {
          console.error(err)
        })
      }, [])
}

export const Admins = () => {
  const [admins, setAdmins] = useState([])
  const url = "http://localhost:8080/admins"
  useEffect(() => {
    axios.get(url)
    .then((res) => {
      setAdmins(res.data)
    })
    .catch((err) => {
      console.error("ici")
    })
  },[])
  //console.log(admins)

  return admins
}

  