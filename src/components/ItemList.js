import ItemDetailContainer from "./ItemDetailContainer";
import { Link } from "react-router-dom"

const ItemList = ({vehicles}) => {

    console.log(vehicles)

    return (vehicles.map(vehicle => (
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
    )))

}
 
export default ItemList;