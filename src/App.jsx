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

function App() {

  return (
    // navegacion
    <BrowserRouter>
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
    </BrowserRouter>
  )
}

export default App
