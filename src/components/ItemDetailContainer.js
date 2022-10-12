import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
    const { id } = useParams()

    const [vehicle, setVehicle] = useState(null)

    useEffect( () => {
        
        fetch("http://localhost:8000/vehicles/" + id)
        .then( res => {
            return res.json()
        })
        .then( data => {
            setVehicle(data)
        })
    },[id])

    return (
        <div className="itemDetailsContainer">
            {vehicle && <div className="car">
                <img src={vehicle.img} alt={vehicle.img} />
                <div className="carInfo">
                    <p className="carInfoTitulo">{`${vehicle.marca} ${vehicle.modelo}`}</p>
                    <p className="carInfoPrecio">{`Precio: u$s ${vehicle.precio}`}</p>
                    <p className="carInfoKm">{`Kilometros: ${vehicle.kilometros}`}</p>
                    <p className="carInfoYear">{`Año: ${vehicle.year}`}</p>
                    <p className="carInfoCat">{`Categoria: ${vehicle.categoria}`}</p>
                </div>
            </div>}
        </div>
    );
}
 
export default ItemDetailContainer;