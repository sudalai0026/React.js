import { useState, useEffect } from "react";
import { Link } from "react-router-dom"
import axios from "axios"
import Navbar from "../components/navbar";
import './Home.css'
function Home() {

    const [movies, setMovies] = useState([]);

    useEffect(() => {
        axios
            .get("https://backend-crud-one.vercel.app/product")
            .then((Response) =>
                setMovies(Response.data))

            .catch((Error) => {
                console.log(Error)
            })

    },
        [])


    return (
        <>
            <Navbar />
            <div className="container">

                {movies.map((movie) => (

                    <div className="con"
                        key={movie._id}>
                       <div className="imagebox">
                        <img
                            className="img"
                            src={movie.image}
                        /></div> 
                        
                        <h3><b>Title:</b>{movie.title}</h3>

                        <button className="button">ADD TO CART</button>
                        <Link to="/details" >
                            <button className="button">VIEW DETAILS</button>
                        </Link>




                    </div>
                ))
                }
            </div>
        </>
    )
}
export default Home