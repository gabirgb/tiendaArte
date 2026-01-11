// si importo archivos q no sean jsx o js NECESITO escribir la extension
import "./App.css"
import ItemDetailContainer from "./components/ItemDetailContainer"
import ItemListContainer from "./components/ItemListContainer"
import NavBar from "./components/NavBar"
import { BrowserRouter, Routes, Route, Link } from "react-router"
//* REACTROUTER.COM - MANEJO DE RUTAS EN REACT
/*
React es un framework minimalista y el manejo de rutas es muy simple, se tendría que manejar con un operador ternario () ? : (porque no se puede usar if, porque no devuelve nada/ no tiene return)
debería evaluar por cada pagina en la q estoy y si es true mostrar el contenido, si no pasar a una nueva evaluación. Si bien funciona no es lo más optimo, por lo que usamos esta dependencia llamada react router.
Se instala con:
npm i react-router
React Router tiene varios modos, vamos a usar el DECLARATIVO. Tb nos da varios componentes (importados arriba). Los que vamos a usar en este ejemplo son:
<BrowserRouter> -> componente padre donde vamos a manejar las rutas
<Routes> -> define qué parte del render del componente se actualiza
<Route> -> define la url y qué se muestra
<Link> -> es el componente que reemplaza al funcionamiento de <a> para que solo se actualice el componente y no toda la página. tambien puede envolver a los botones con el mismo fin. El formato es:
<Link to="">
<NavLink> -> igual funcionamiento que Link solo que al utilizarse en la nav agrega una clase css de "active" para poder destacar la seccion en la q estoy con algun estilo personal.
*/
function App() {
  // Al principio del componente, antes del return, tb se declaran las vars, despues puedo llamarlas desde HTML con el nombre de la var entre {}.

  return (
    <BrowserRouter>
      <NavBar />

      <Routes>
        {/* Home -> "/" */}
        <Route path="/" element={<ItemListContainer />} />

        { /* Tambien puedo poner html inline: */}
        <Route path="/aboutus" element={<h3>Hola somos nosotros</h3>} />

        {/** Para indicar que una URL es dinamica se usan los ":" seguido del nombre del param query que vay a estar pasando. Para leer la URL en el componente que vaya a usar se usa el componente useParams de React Router. */}
        <Route path="/producto/:itemId" element={<ItemDetailContainer />} />
        
        {/* La página de categorias se arma con el mismo componente q muestra el listado de prod en la Home, solo que uso un filter en el array para solo mostrar la categ seleccionada.  */}
        <Route path="/categoria/:categoryId" element={<ItemListContainer />} />

        {/** Si el cliente solicita una pag q no existe, react muestra solamente el contenido de este componente que no se modifica (NavBar). Puedo sin embargo crear una pag q caze todos los 404 y mostrar un mensaje usando "*" */}
        <Route path="*" element={
          <div>
            <h3>404 la pag no existe</h3>
            <Link to="/"> Regresar al Home</Link>
          </div>
          }
        />
      </Routes>
    </BrowserRouter>
  )
}

export default App
