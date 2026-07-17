// import React from 'react'
import CardItems from "./CardItems"
const Cart = () => {
    const handleOrder = (itemName,itemPrice)=>{
        alert(`You have ordered ${itemName} for ${itemPrice}`)
    }
  return (
    <div>Cart
        <h2>Cart Items</h2>
        <CardItems name={"Phone"} price = {2000} onOrder ={handleOrder}/>
        <CardItems name={"Laptop"} price = {5000} onOrder ={handleOrder}/>
        <CardItems name={"Shirt"} price = {2000} onOrder ={handleOrder}/>
        <CardItems name={"Phone"} price = {2000} onOrder ={handleOrder}/>
    </div>
  )
}

export default Cart