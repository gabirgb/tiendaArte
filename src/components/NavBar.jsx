import { NavLink } from "react-router"

export default function NavBar() {
    return (
        <nav>
            <NavLink to="/">
                <h1>Logo</h1>
            </NavLink>
            <li><NavLink to="/categoria/samsung">Samsung</NavLink></li>
            <li><NavLink to="/categoria/xiaomi">Xiaomi</NavLink></li>
            <li><NavLink to="/categoria/motorola">Motorola</NavLink></li>
            {/* CartWidget */}
        </nav>

    )
}