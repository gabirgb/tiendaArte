//TODO: useContext(cartContext)
//TODO: cart.map() -> renderizar jsx
//conectarnos al contexto, leer la variable cart, obtenerla, hacer la sintaxis propia de un componente, y hacer un map por donde por cada elemento muestre una tarjetita/listado con, xej, fotito, titulo, precio y cantidad... botoncito de elimnar

import { useContext } from "react";
import cartContext from "../context/cartContext";
import { createBuyOrder } from "../data/firestore";

export default function CartContainer() {
  const { cart } = useContext(cartContext);

  function handleCheckout() {
    //TODO: validar datos del form
    const buyOrder = {
      buyer: "Pepito",
      items: cart,
      total: 999.99, // TODO: calcular total desde el context
      date: new Date(),
    };
    createBuyOrder(buyOrder);
  }

  return (
    <div>
      <h2>🛒 Tu carrito de compras tiene:</h2>
      <div>
        <ul>
          {cart.map((item) => (
            <li>
              {/* //TODO: aplicar f de eliminar item al boton */}
              {item.title} - USD {item.price} - Cantidad: {item.count} <button>🗑️ Eliminar</button>
            </li>
          ))}
        </ul>
      </div>
      {/* //!RECORDAR QUE LOS ARCHIVOS LOS SEPARO EN F DE REACT Y F DE LA DB
      -> No puedo invocar desde el bt "confirmar compra" a la funcion "createBuyOrder"
      --> A FIREBASE tengo q ENVIAR la info del context.
      --> La conexión al context para extraer los datos que necesito pasarle a FIREBASE (del usuario, precio total, etc...) la hago en el FRONTEND, con REACT. Por ej los datos del usuario están en un form en el frontend, sería raro que procese esos datos con una f desde firestore.jsx
      --> por eso creo una f de handleCheckout para levantar el objeto que debo pasarle a createBuyOrder.
      --> MANTENER SEPARADO FRONTEND DE BACKEND (DB) */}
      <button onClick={handleCheckout}>✅ Confirmar compra</button>
    </div>
  );
}
