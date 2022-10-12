import { Link } from "react-router-dom";
import CartWidget from "./CartWidget"


const NavBar = () => {
    return(
        <div className="navBarContainer">
            <Link to="/"><h1 className="logo">Kritsch Deportivos</h1></Link>
            <ul className="navLinks">
                <li><Link to="/category/autos">Autos</Link></li>
                <li><Link to="/category/suv">Suv</Link></li>
                <li><Link to="/category/camionetas">Camionetas</Link></li>
            </ul>
            <CartWidget />
        </div>
    )
}

export default NavBar;