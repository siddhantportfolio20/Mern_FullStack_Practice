const Products = () => {
    const products = [
        {id:1,name:"PS5",price:6000 , inStock:true},
        {id:2,name:"game 1 " , price:5000 , inStock:true},
        {id:3,name:"game 2 " , price:4000 , inStock:false},
        {id:4,name:"game 3 " , price:3000 , inStock:true},
        {id:5,name:"game 4 " , price:2000 , inStock:false}
    ]
    const filter = "asc"
    // const filteredComponents = products.filter(item => item.inStock)
    // console.log(filteredComponents);
    if(filter == "asc"){
      products.sort((a,b)=>a.price - b.price)
    }else{
      products.sort((a,b)=>a.price - b.price)
    }
    return (
    <div>
        <h1>Products</h1>
      
        <ul>
          {
          products.filter((item)=>item.inStock == true)
          .map((item)=> <li key={item.id}>{item.name} - {item.price}</li>)
          }
        </ul>

    </div>
  )
}


export default Products