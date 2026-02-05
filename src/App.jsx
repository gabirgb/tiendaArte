import "./App.css";
import ItemDetailContainer from "./components/ItemDetailContainer";
import ItemListContainer from "./components/ItemListContainer";
import CartContainer from "./components/CartContainer.jsx";
import NavBar from "./components/NavBar";
import { BrowserRouter, Routes, Route, Link } from "react-router";
//named import: importo la f q me da los valores del contexto del cart
import { CartProvider } from "./context/cartContext.jsx";
import { getData } from "./data/firestore.js";

//TODO: volver a integrar {props.greetings}
////volver a integrar cartWidget.jsx
//TODO: corregir estilos bootstrap a la navbar q se ven los elementos despeinados
//TODO: hacer funcional el buscador
////poner "cargando" en el detalle del producto
//TODO: validar la suma/resta de elementos en ItemCount.jsx
//TODO: vaciar carrito de compra una vez que se envio la orden
//TODO: validar que el carrito no esté vacío antes de enviar una oc
//TODO: paginar itemList

function App() {
  getData();

  return (
    //Boton para exportar prods a firebase, uso unico
    // navegacion
    <BrowserRouter>
      {/*selecciono qué contexto le voy a entregar a la f CartProvider.
      Esta a su vez es entregada a la const DefaultCartProvider dentro de la f por medio de la prop "children".
      <CartProvider> toma como child a todos los elementos hijos q contiene, y se los pasa como prop (un obj) a la funcion CartProvider dentro de cartContext.jsx
      Todos los elementos que estén dentro de <CartProvider> van a poder acceder a las funciones y obj q se compartan.
      */}
      <CartProvider>
        <NavBar />

        <Routes>
          <Route path="/" element={<ItemListContainer />} />

          <Route path="/nosotros" element={<h3>Hola somos nosotros</h3>} />

          <Route path="/producto/:itemId" element={<ItemDetailContainer />} />

          <Route path="/categoria/:categoryId" element={<ItemListContainer />} />

          <Route path="/cart" element={<CartContainer />} />

          <Route
            path="*"
            element={
              <div>
                <h3>404 la pag no existe</h3>
                <Link to="/"> Regresar al Home</Link>
              </div>
            }
          />
        </Routes>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
