import React from 'react'
import { data } from './data'
import Card from './Card'
const Cards = () => {

  return (
    <div className="cards-container">
        {
            data.map((item)=>
<Card key={item.id} item={item} />
            )
        } 

    </div>
  )
}

export default Cards