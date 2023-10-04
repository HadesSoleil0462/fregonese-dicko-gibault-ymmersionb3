import datas from '../data/data.json'
import FlowerCard from './Flower-card'
import '../styles/Flower-list.css'
const FlowerList = () => {

    

    return <div className='flowers'>
        {
            datas.map(item => {
                return <FlowerCard id={item.ID} image={item.Pic_URL} title={item.FlowerName + " " + item.Type} price={item.Price} />
            })
        }
    </div>
}

export default FlowerList;