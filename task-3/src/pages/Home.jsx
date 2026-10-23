import './Home.css'
import { useState, useEffect } from "react";
import { Link } from "react-router-dom"
import axios from "axios"
import Navbar from "../components/navbar";
import { useNavigate } from "react-router-dom"

function Home() {

    const [movies, setMovies] = useState([]);
    const navigate = useNavigate();
    function Handledetails(_id) {
        navigate(`/details/${_id}`);
    }
    useEffect(() => {
        axios
            .get('https://backend-crud-one.vercel.app/product/')
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
                        <button
                            onClick={() => Handledetails(movie._id)}
                            className="button"
                        >VIEW DETAILS</button>
                    </div>
                ))
                }
            </div>
        </>
    )
}
export default Home