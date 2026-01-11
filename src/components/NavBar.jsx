import { NavLink } from "react-router"

export default function NavBar() {
    return (

        <nav class="navbar navbar-expand-lg bg-body-tertiary">
            <div class="container-fluid">
                <NavLink class="navbar-brand" to="/">
                    <img src="../assets/images/logo-tienda.png" alt="Logo" width="30" height="24" class="d-inline-block align-text-top" />
                Tienda de arte
                </NavLink>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <NavLink class="nav-link active" aria-current="page" to="/">Todos los productos</NavLink>
                    </li>
                    {/* <li class="nav-item">
                        <a class="nav-link" href="#">Link</a>
                    </li> */}
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Categorías
                    </a>
                    <ul class="dropdown-menu">
                        <li><NavLink class="dropdown-item" to="/categoria/:collage">Collage</NavLink></li>
                        <li><NavLink class="dropdown-item" to="/categoria/:grafito">Grafito</NavLink></li>
                        <li><NavLink class="dropdown-item" to="/categoria/:pintura">Pintura</NavLink></li>
                        <li><hr class="dropdown-divider" /></li>
                        <li><NavLink class="dropdown-item" to="/categoria/:prints">Prints</NavLink></li>
                    </ul>
                    </li>
                    {/* <li class="nav-item">
                        <a class="nav-link disabled" aria-disabled="true">Disabled</a>
                    </li> */}
                </ul>
                <form class="d-flex" role="search">
                    <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                    <Link to="#">
                        <button class="btn btn-outline-success" type="submit">Buscar</button>
                    </Link>
                </form>
                </div>
            </div>
        </nav>

    )
}