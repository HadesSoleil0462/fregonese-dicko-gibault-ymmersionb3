import { Link } from "react-router-dom"
import '../styles/Error.css'

const Error = () => {

    return <div className="error">
        <h2>404</h2>
        <p>Oups...😐 ! La page que vous demandez est introuvable</p>
        <p><Link to='/'>Revenir à l'accueil</Link></p>
</div>
}

export default Error;