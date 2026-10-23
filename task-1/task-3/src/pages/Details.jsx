import { useState, useEffect } from "react"
import "./Details.css"
import Navbar from "../components/navbar"
import axios from "axios"

function Details() {
    const [Details, setDetails] = useState([])

    useEffect(() => {
        axios

            .get("https://backend-crud-one.vercel.app/product")
            .then((res) =>
                setDetails(res.data))

            .catch((Error) => {
                console.log(Error)
            }
            )
    }, [])

    return (
        <>
            <Navbar />
            <div className="box1">
                {Details.map((Details) =>
                    <div className="box2">
                        <img className="img" src={Details.image} />
                        <p><b>Releasedate:</b>{Details.releasedate}</p>
                        <p><b>Budget:</b>{Details.budget}</p>
                        <p>Description:{Details.description}</p>
                    </div>

                )
                }
            </div>
        </>
    )


}
export default Details