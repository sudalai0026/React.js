import image from "../assets/image.png"
import "./navbar.css"
import {Link} from "react-router-dom"
export default function Navbar(){

return(
    <div className="navbox" >
    <nav>
      
       <ul className="nav">
       <li><Link to="/">
         Home
       </Link></li>
        
        <li><Link to="/login">Login</Link></li>
        
        
        <li><img src={image} alt="image" className="imga" /></li>    
       </ul>
    </nav>
    </div>
)




}