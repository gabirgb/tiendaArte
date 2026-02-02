import { createContext } from "react" //importamos la f para crear contexto (iene en react x default)
// otros modulos como React-Router tb manejan sus propios contextos 
import "./App.css"
import ItemDetailContainer from "./components/ItemDetailContainer"
import ItemListContainer from "./components/ItemListContainer"
import NavBar from "./components/NavBar"
import { BrowserRouter, Routes, Route, Link } from "react-router"

//TODO: volver a integrar {props.greetings}
////volver a integrar cartWidget.jsx
//TODO: corregir estilos bootstrap a la navbar q se ven los elementos despeinados
//TODO: hacer funcional el buscador
////poner "cargando" en el detalle del producto
//TODO: validar la suma/resta de elementos en ItemCount.jsx
/** profe veremos useReducer??
 * redux y redux toolkit se usan mucho, aunque hoy dia hay muchas opciones tambien, por ej tanstack query, o zustand como dice el profe
los estados de loading, los optimistic updates, cache,  etc etc
cuando se pongan a hacer estado a mano, van a darse cuenta q tienen q prestar atencion a mil detalles, y esas librerias han pensado en todo */

/** CONTEXT -> se usa para guardar info de datos globales (nom usuario, avatar, carrito de compras,estado, notificaciones, etc... Por ejemplo:
 * contextos relacionados al usuario
 * contexto de theme (tema de dia/ noche)
 * contecto de ruta (si hay oarams de usr, si es dinamica estatica, etc...)
 * entre otros.

la idea es que NO creemos el context acá (para q app.jsx no sea interminable) sino en archivo aparte.
* solo para mostrar y probar como funciona:
1. Crear contexto (básico y estático) a traves de la funcion createContext() SIEMPRE CON EXPORT. -> createContext()
2. Consumir contexto -> useContext()
3. Qué es un Provider? SIEMPRE COMO METODO -> context.Provider()
es un intermediario a traves del cual se conectan los componentes para acceder al context. es el que tiene el VALUE. O sea el "{cart: ["producto1", "producto2"], totalPrice: 650}"
el privider es un componente del Context de React, y se invoca como un método desde el objeto "cartContext" que creé: cartContext.Provider
- el provider aloja los valores
- el contexto guarda las funciones y métodos 

a) selecciono qué parte de mi aplicación quiero que tenga acceso a ese contexto y lo encierro entre las etiquetas <cartContext.Provider> </cartContext.Provider>
En este caso va a ser mi <NavBar> y cada uno de los componentes que arman mis páginas (invocadas por el componente <Route>)

*/
//le doy un strig de valor solo como test, lo consumo desde CartWidget.jsx
//export const cartContext = createContext("carrucho") 

//algo mas realista seria pasarle un objeto, donde le diga los items y precio total x ej:
//export const cartContext = createContext({cart: ["producto1", "producto2"], totalPrice: 650}) 

//lo que aparece dentro del objeto es el valor por defecto, en caso de que el contextProvider no funcione (es un fallback). Dejo un  array vacío por las dudas que algun componente se conecte, como para q no de "undefined" y se rompa todo. El valor real se pasa en el contextProvider como value
export const cartContext = createContext({cart: []}) 
// al provider puedo llamarlo dentro del return asi:
// <cartContext.Provider value={{cart:["item1", "item2", "item3"]}}> 
// pero para no olvidar q el provider es un componente lo mejor es guardarlo aca, adentro de una const, y lo uso de la misma forma q cuando llamo a los componentes dentro del return
const CartContextProvider = cartContext.Provider

function App() {

  return (
    // navegacion
    <BrowserRouter>

      {/*recordar que abro 2 veces {} porque estoy en jsx y tengo q pasar js, y porque es un obj */}
      <CartContextProvider value={{cart:["item1", "item2", "item3"]}}> 

        <NavBar />
        
        <Routes>
          <Route path="/" element={<ItemListContainer />} />

          <Route path="/nosotros" element={<h3>Hola somos nosotros</h3>} />

          <Route path="/producto/:itemId" element={<ItemDetailContainer />} />
          
          <Route path="/categoria/:categoryId" element={<ItemListContainer />} />

          <Route path="*" element={
            <div>
              <h3>404 la pag no existe</h3>
              <Link to="/"> Regresar al Home</Link>
            </div>
            }
          />
        </Routes>
      </CartContextProvider>
    </BrowserRouter>
  )
}

export default App
