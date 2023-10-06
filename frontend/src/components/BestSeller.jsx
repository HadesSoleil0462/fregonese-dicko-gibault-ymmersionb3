import '../styles/BestSeller.css'
import FlowerCard from './Flower-card'
import { Flowers } from '../data/main'


const BestSeller = () => {

    const flowers = Flowers()
    return <div className="best-sellers">
        {
            flowers.slice(-3).map(flower => {
                return <FlowerCard id={flower.id} image={flower.Pic_URL} title={flower.FlowerName} price={flower.Price} />
            })
        }
    </div>
}

export default BestSeller;