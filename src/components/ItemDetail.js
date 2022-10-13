const ItemDetail = ({vehicle}) => {
    
    return (
        <div className="car">
            <img src={vehicle.img} alt={vehicle.img} />
            <div className="carInfo">
                <p className="carInfoTitulo">{`${vehicle.marca} ${vehicle.modelo}`}</p>
                <p className="carInfoPrecio">{`Precio: u$s ${vehicle.precio}`}</p>
                <p className="carInfoKm">{`Kilometros: ${vehicle.kilometros}`}</p>
                <p className="carInfoYear">{`Año: ${vehicle.year}`}</p>
                <p className="carInfoCat">{`Categoria: ${vehicle.categoria}`}</p>
            </div>
        </div>
    );
}
 
export default ItemDetail;