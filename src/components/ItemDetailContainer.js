/* eslint-disable eqeqeq */
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {

    const { id } = useParams()
    const [vehicles, setVehicles] = useState(null)

    useEffect( () => {

        fetch("https://6317c028f6b281877c5cb9c4.mockapi.io/api/autos")
        .then( res => {
            return res.json()
        })
        .then( data => {
            setVehicles(data)
        })

    },[])

    return (
        <div className="itemDetailsContainer">
            {vehicles && <ItemDetail vehicle={vehicles.find(vehicle => vehicle.id == id)} />}
        </div>
    );
}
 
export default ItemDetailContainer;