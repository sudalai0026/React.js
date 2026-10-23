import { useState } from "react"
import background from "./Assets/background.mp4"
import NavBar from "./component/navbar.jsx"
import Product from "./component/productdata.js"

import './App.css'

     
function App() {
 
  const [search, setsearch] = useState("");

  const [category,setcategory]=useState("All");


  const pro = Product.filter((item) =>{

  const matchsearch=
      item.name.toLowerCase().includes(search.toLowerCase());
    
    const matchcategory=
      category === "All" || item.category === category


    return   matchsearch && matchcategory
    })
  
  .map(items =>
    <div className="cart" key={items._id}>
      <img src={items.img} alt="error" />
      <h2 >Price: {items.price}</h2>
      <h2 >StockQuantity: {items.stockQuantity}</h2>
      <h1 >Category: {items.category}</h1>
      <h2 >Name: {items.name}</h2>
      <h2 >Size: {items.description}</h2>
      <button className="button">ADD TO CART</button>
    </div>
  )
  return (
    <>
      <video className="backgroundvid"
      src= {background} type="video/mp4"
      autoPlay
      muted
      loop
      playsInline
      controls
      
      />
   
      <NavBar
        search={search}
        setsearch={setsearch}
        setcategory={setcategory}
       
        />
    
      <p className="container">{pro}</p>
    </>
  )
}
export default App

