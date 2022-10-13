import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import ItemList from "./ItemList";

const ItemListContainer = () => {

    const { categoryId } = useParams()
    console.log(categoryId)
    
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

    return(
        <div className="itemListContainer">
            {vehicles && <ItemList vehicles={categoryId ? vehicles.filter(vehicle => vehicle.categoria === categoryId) : vehicles} />}
        </div>
    )
}

export default ItemListContainer;
