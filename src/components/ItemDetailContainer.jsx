// Detalle de producto
import ItemCount from "./ItemCount";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
//* named export/ import xq tengo más de 1 f en mockservice
import { getItemData } from "../data/firestore";
// siempre voy a tener 2 import de context porque uno es la conexción (useContext) y el otro es el contexto al que me quiero conectar (cartContext)
import { useContext } from "react";
import cartContext from "../context/cartContext";

//! Hooks personalizados
/* puedo reemplazar estas 2 líneas si en cartContext.jsx creo un hook personalizado que me combine el useContext con el contexto en cuestión: useContext (cartContext)
Seria algo como agregar al final (googlear q es facil hacerlo):
export useCartContext()
y aca solo haría un import:
import { useCartContext } from "../context/cartContext.jsx"
*/

export default function ItemDetailContainer() {
  const { itemId } = useParams();
  const [product, setProduct] = useState({});
  /* //! creo el context,
    que va a ser el mismo value (un objeto) que el <DefaultContextProvider> que tengo en cartContext.jsx
    - en este componente no necesito a cart, solo addItemToCart, entonces vinculo directamente el valor de esa propiedad asi importo solamente lo que necesito:
    const context = useContext(cartContext).addItemToCart
    - tambien lo puedo hacer con propr desestructurando el objeto, como lo hicimos con otros elementos:
    */
  //TODO: ** ACA
  const { addItemToCart, removeItemFromCart } = useContext(cartContext);

  //reo una flag para evaluar el estado de la peticion
  const [loading, setLoading] = useState(true);

  function onAddToCart(count) {
    alert("Agregando " + count + " items");
    addItemToCart(product, count);
  }

  useEffect(() => {
    setLoading(true);
    getItemData(itemId)
      .then((response) => setProduct(response))
      .finally(() => setLoading(false));
  }, [itemId]); // actualizo el estado en funcion del itemId

  return (
    <section>
      {
        /* muestro un mensaje de cargando mientras espero la peticion    */
        loading ? (
          <div className="container">
            <div className="row">
              <div className="col">
                <h2
                  style={{
                    textTransform: "capitalize",
                    padding: "1rem",
                    color: "#fff",
                    fontWeight: "bold",
                  }}
                >
                  Cargando...
                </h2>
                <hr />
                <img
                  src="https://placehold.co/200x200?text=cargando..."
                  title="cargando"
                  style={{ width: "200px" }}
                />
                <p>
                  <strong>Descripcion:</strong>
                </p>
                <p>
                  <strong>Categoría:</strong>
                </p>
                <h4>
                  <strong>Precio:</strong>
                </h4>
              </div>
            </div>
          </div>
        ) : (
          <div className="container">
            <div className="row">
              <div className="col">
                <h2
                  style={{
                    textTransform: "capitalize",
                    padding: "1rem",
                    color: "#fff",
                    fontWeight: "bold",
                  }}
                >
                  {product.title}
                </h2>
                <hr />
                <img
                  src={`${product.img}/${product.color}/white?text=${product.title}&font=roboto`}
                  alt={product.title}
                  style={{ width: "200px" }}
                />
                <p style={{ marginTop: "20px" }}>
                  <strong>{product.description}</strong>
                </p>
                <p>
                  <strong>Categoría:</strong> {product.category}
                </p>
                <h4>
                  <strong>Precio:</strong> ${product.price}
                </h4>
                {/* <ItemCount>
                        // TODO pasar por props STOCK como val maximo.
                        1. le asigno un evento "onAddToCart"
                        2. cuando en <ItemCount> se ejecuta el evento le digo que tienen que llamar a una f. 
                        3. cuando el boton recibe clic se llama a la f addToCart, es decir: le delego al botón "agregar al carrito" la decisión de cuándo se debe llamar a la f addToCart
                        */}
                <ItemCount onAddToCart={onAddToCart} />
                {/* provisoriamente vamos a poner un boton aca para testear el removeItemFromCart, eso luego va a estar en la pag del carrito. */}
                <button onClick={() => removeItemFromCart(product.id)}>Eliminar</button>
              </div>
            </div>
          </div>
        )
      }
    </section>
  );
}
