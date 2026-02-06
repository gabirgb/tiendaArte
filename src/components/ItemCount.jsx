import { useState, useEffect } from "react";

// acá recibo la f como prop
export default function ItemCount(props) {
  // El valor iniciar siempre es 1, que es el minimo q el usuario puede tener en su carrito, si no no se muestra el item en el carrito.
  const [count, setCount] = useState(1);

  function handleSuma() {
    setCount(count + 1);
  }

  function handleResta() {
    setCount(count - 1);
  }

  useEffect(() => {
    return () => {
      console.log("Tarea de desmontaje");
    };
  }, []);

  return (
    <div>
      <div>
        {
          //** no olvidar agregar los listeners a los botones
        }
        <button onClick={handleResta} style={{ margin: "1rem" }} className="btn btn-primary">
          -
        </button>
        <span>{count}</span>
        <button onClick={handleSuma} style={{ margin: "1rem" }} className="btn btn-primary">
          +
        </button>
      </div>
      {/** Este botón es el que se va a conectar al carrito.
             * Al cartWidget quiero pasarle el producto con sus prop (imagen, precio, descr, etc etc) y quiero también pasarle la cant de items que quiero comprar.
             * //! ¿Cómo hago si la info está en 2 componentes distintos?
             * El que se conecta siempre es el componente padre, nunca se hace en 2 o más funciones (en este caso ItemDetailContainer.jsx, la pag del detalle del prod.)
             //! Entonces quiero agregar al contexto:
             1. de ItemDetailContainer.jsx al producto (const [product, useProduct]...)
             2. de ItemCount.jsx quiero agregar la cantidad (const [count, setCount]...)
             //! para eso le paso la cant a ItemDetailContainer.jsx
             1. al hacer clic en el botón "Agregar al carrito" tengo que llamar a la funcion addToCart y pasar como argumento la cantidad. El problema es que no puedo hacer:
             <button onClick={ props.onAddToCart (count) }>Agregar al carrito</button>
             porque la f se ejecuta al momento en que el cabezar lee esa línea de código (la pag ni siquiera terminó de cargar y no respeta el onClic). Entonces tengo 2 formas:
             - creo otra funcion afuera del return, que envuelva lo que quiero poner dentro del onClic
             - creo una f flecha que se ejecute al momento del clic
             2. a onAddToCart le va a llegar el valor de count como arg
             3. entonces en ItemDetailContainer.jsx ya tengo al producto y a la cantidad:
             //! ya puedo conectarme al contexto.
             */}
      <button
        style={{ margin: "1rem" }}
        className="btn btn-primary"
        onClick={() => props.onAddToCart(count)}
      >
        Agregar al carrito
      </button>
    </div>
  );
}
