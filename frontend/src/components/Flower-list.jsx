import { useState } from 'react'
import { Flowers } from '../data/main'
import FlowerCard from './Flower-card'
import '../styles/Flower-list.css'
import Filter from './Filter'

const FlowerList = () => {

    const flowers = Flowers()
    console.log(Flowers())
    return <div>
        <div className='flowers'>
        {
            flowers.map(item => {
                return <FlowerCard id={item.ID} key={item.id} image={item.Pic_URL} title={item.FlowerName + " " + item.Type} price={item.Price} />
            })
        }
    </div>
    </div>
}

export default FlowerList;