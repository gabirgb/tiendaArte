// ! Context consumer 

import { useContext } from "react"
//import named: importo cartContext.jsx
import cartContext from "../context/cartContext";
import { Link } from "react-router";

export default function CartWidget () {
    /** Para consumir usamos createContext() (es una f de react)
     * Para consumir usamos useContext() (es un hook)
     * Para que use context funcione, tengo que indicarle qué contexto debe consumir (puede haber varios contectos funcionando al mismo tiempo, el del usuario, el de las rutas, el del carrito, etc...)
     * useContext es un puente que le indica al componente a dónde se debe conectar, es decir, a la variable que creé en app.jsx
      const contextData = useContext(cartContext) // busca el provider
     */

      //una vez que creo el contexto de donde consumir y tambien el valor/objeto/f  que me interesa consumir, llamo directamente a ese elemento. En este caso es la f q me cuenta los items en el carrito:
    const {countItemsInCart} = useContext(cartContext) // busca el provider
    return (
        //muestro el length del arra para saber la cant tot de prod y "suma" de sus precios
        <Link to="/cart">
            <p>🛒 Items: {countItemsInCart()} - Total: 0</p>
        </Link>
    )
}