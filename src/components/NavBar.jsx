import { Link, NavLink } from "react-router"
import CartWidget from "./CartWidget"

export default function NavBar() {
    return (

        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <NavLink className="navbar-brand" to="/">
                    <img src="../assets/images/logo-tienda.png" alt="Logo" width="40" className="d-inline-block align-text-middle" style={{margin: 'auto 1rem'}} />
                Tienda de arte
                </NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <NavLink className="nav-link active" aria-current="page" to="/">Productos</NavLink>
                    </li>
                    <li className="nav-item dropdown">
                        <NavLink className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Categorías
                        </NavLink>
                        <ul className="dropdown-menu">
                            <li><NavLink className="dropdown-item" to="/categoria/collage">Collage</NavLink></li>
                            <li><NavLink className="dropdown-item" to="/categoria/grafito">Grafito</NavLink></li>
                            <li><NavLink className="dropdown-item" to="/categoria/pintura">Pintura</NavLink></li>
                            <li><hr className="dropdown-divider" /></li>
                            <li><NavLink className="dropdown-item" to="/categoria/print">Prints</NavLink></li>
                        </ul>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link active" aria-current="page" to="/nosotros">Nosotros</NavLink>
                    </li>
                    <li className="nav-item">
                        <CartWidget />
                    </li>
                </ul>
                <form className="d-flex" role="search">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                    <Link to="#">
                        <button className="btn btn-outline-success" type="submit">Buscar</button>
                    </Link>
                </form>
                </div>
            </div>
        </nav>

    )
}