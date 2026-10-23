
import { useState } from "react"
import "./navbar.css"


function NavBar({ search, setsearch, setcategory}) {

    return (

        <nav className="back">



            <input
                type="text" className="search" placeholder="Search the Products..."
                value={search}
                onChange={(i) => setsearch(i.target.value)} />


            <ul className="nav">

                <li> <button onClick={() => setcategory("All")}>All</button> </li>
                <li> <button onClick={() => setcategory("T-Shirts")}>T-Shirts</button> </li>
                <li> <button onClick={() => setcategory("Trousers")}>Trousers</button></li>
                <li> <button onClick={() => setcategory("Watches")}>Watches</button></li>
                <li> <button onClick={() => setcategory("Footwear")}>Footwear</button></li>
                <li> <button onClick={() => setcategory("Shirts")}>Shirts</button></li>

            </ul>
             
    
        </nav>
    )

}

 


export default NavBar
