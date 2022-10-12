import { useEffect, useState } from "react";
import { Link } from "react-router-dom"
import ItemDetailContainer from "./ItemDetailContainer";

const ItemListContainer = () => {
    
    const [vehicles, setVehicles] = useState(null)

    useEffect( () => {
        
        fetch("http://localhost:8000/vehicles")
        .then( res => {
            return res.json()
        })
        .then( data => {
            setVehicles(data)
            console.log(vehicles)
        })

    },[])

    return(
        <div className="itemListContainer">
            {vehicles && vehicles.map(vehicle => (
                <Link to={`/item/${vehicle.id}`} element={<ItemDetailContainer />} key={vehicle.id}>
                    <div className="vehicle">
                    <div className="vehicleImg">
                        <img src={vehicle.img} alt={vehicle.img} />
                    </div>
                    <div className="vehicleInfo">
                        <p className="precio">u$s {vehicle.precio}</p>
                        <p className="titulo">{`${vehicle.marca} ${vehicle.modelo}`}</p>
                        <p className="kilometros">{`${vehicle.kilometros} km.`}</p>
                    </div>
                </div>
                </Link>
            ))}
        </div>
    )
}

export default ItemListContainer;
