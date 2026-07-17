// import React from 'react'

const CardItems = ({name,price,onOrder}) => {
  return (
    <div>CardItems
        <span>{name} - {price}</span>
    
        <button onClick={()=>onOrder(name,price)}>Order</button>


    </div>
  )
}

export default CardItems