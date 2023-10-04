import { useState } from "react"
import '../styles/Filter.css'

const Filter = () => {
    const [price, setPrice] = useState("")
    const [type, setType] = useState("")

    const handleChangeType = (event) => {
       setType(event.target.value)
       console.log(type)
    }
    const handleChangePrice = (event) => {
        setPrice(event.target.value)
        console.log(price)
     }
    return <aside>
        <div>
            <div>
                <p>Filtrer par</p>
            </div>
            <hr />
            <fieldset>
                <legend>Prix</legend>
                <div>
                    <input type="radio" id="0-5" name="price" />
                    <label htmlFor="O-5">0€ - 5€</label>
                </div>
                <div>
                    <input type="radio" id="5-10" name="price" />
                    <label htmlFor="5-10">5€ - 10€</label>
                </div>
                <div>
                    <input type="radio" id="10-20" name="price" />
                    <label htmlFor="10-20">10€ - 20€</label>
                </div>
            </fieldset>
            <fieldset>
                <legend>Type</legend>
                <div>
                    <input type="radio" id="rosier" name="type" />
                    <label htmlFor="rosier">Rose</label>
                </div>
                <div>
                    <input type="radio" id="orchidee" name="type" />
                    <label htmlFor="orchidee">Orchidée</label>
                </div>
                <div>
                    <input type="radio" name="type" id="lys" />
                    <label htmlFor="lys">Lys</label>
                </div>
                <div>
                    <input type="radio" name="type" id="lilas" />
                    <label htmlFor="lilas">Lilas</label>
                </div>
                <div>
                    <input type="radio" name="type" id="iris" />
                    <label htmlFor="iris">Iris</label>
                </div>
            </fieldset>
        </div>
    </aside>
}
export default Filter;