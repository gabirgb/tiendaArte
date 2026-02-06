// TODO: conectarnos al contexto, leer la variable cart, obtenerla, hacer la sintaxis propia de un componente, y hacer un map por donde por cada elemento muestre una tarjetita/listado con, xej, fotito, titulo, precio y cantidad... botoncito de elimnar

import { useContext, useState } from "react";
import cartContext from "../context/cartContext";
import { createBuyOrder } from "../data/firestore";

export default function CartContainer() {
  const { cart } = useContext(cartContext);

  //* ESTADO DINÁMICO
  /* creo el estado que va a tomar en tiempo real los datos de los campos del form, para eso usamos el evento onChange() en el campo
   formData guarda cualquier valor que se guarde en cualquier campo, va a depender de dónde el usuario esté tipeando y qué esté tipeando:*/
  const [formData, setFormData] = useState({
    username: "", //acá se guarda el value
    telefono: "",
    email: "",
  });
  console.log(formData);

  function handleCheckout() {
    const buyOrder = {
      buyer: formData,
      items: cart,
      total: 999.99, // TODO: calcular total desde el context
      date: new Date(),
    };
    createBuyOrder(buyOrder);
  }

  /* //* Eventos (e/evt) 
  - evento por defecto: manejado por navegador de forma automatica
  - eventpreventDefault() -> previene comportamientos por defecto del controlador (submit, reset, mostrar un texto en keyDown, etc)
  - event.stopPropagation() -> previene el bubbling: que el evento se propague a los contenedores padres del button (su valor por defecto)
  Conceptualemnte es un problema q x defecto los vamcios visuales en la interfaz los maneje el navegador porque todo lo que es front lo debe manejar React, React debe tener conocimiento para poder controlarlo. Esto me permite que por ej cuando en el buscador escribo una P, en tiempo real el campo me muestre sugerencias. Eso el navegador no lo hace por defecto. ¿Cómo hago para q esa info React la guarde en tiempo real? PUES CON UN ESTAAADO..! Ya deberías saberlo pequeño saltamontes...*/
  /* //*FORMULARIOS Y COMPONENTES CONTROLADOS
   -> que React tenga la potestad sobre el navegador para controlar la interfaz.
  -> la forma que vemos en el curso es la más basica, que recomienda react, pero hay miles de formas y modulos para esto.
  */

  //* f para enviar los datos del form a handleCheckout()
  function handleSubmit(event) {
    event.preventDefault();
  }

  /* //* handleChange()
  lo ideal siempre es tener 1 handler para todos los campos, porque si hago uno x campo se puede hacer eterno.
  En esta f tambien me interesa recibir el evento, porque guarda:
  event.target.value -> el value que el usuario ingresa en tiempo real
  event.target.name -> el nombre del campo que está siendo editado
  De esta forma ya tengo capturado los 2 elementos que necesito escuchar.*/

  /*//* ACCEDER A LAS PROPIEDADES DINAMICA DE UN OBJETO
  OBJETIVO:
  Setear el estado formData.username / formData.telefono / formData.email para poder asignar el valor que tiene el campo en tiempo real.

  PROBLEMAS:
  Yo puedo acceder al estado "formData" pero:
  - no puedo saber de antemano si el usuario está escribiendo su email, telefono o nombre (como para ya escribir en mi código xej "formData.username"): es un valor dinámico que se va a definir por la accion del usuario en tiempo real.
  - tampoco puedo hacer formData.name: no puedo concatenar estado.const (lo que yo quiero es concatenar el nombre del campo que viene adentro de la const name)

  SOLUCION:
  1. capturar en 2 const lo que se escribe en el campo y en qué campo
  2. crear una copia del objeto (por eso suo spread) a actualizar
  3. asignarle la clave var/value a la fuerza, sin usar el setState
  4. actualizar el estado real ahora si de forma correcta con setState
  OJO! Si el componente/ form es muy grande y se renderiza todo el tiempo, puede generar un problema. Evaluar consumo de recursos.

  -> Con esto logramos que la data viaje del form a React.
  -> Resta q el form muestre lo mismo que tiene el estado (y no lo que va escribiendo el usuario, asi no lo maneja el navegador)
  Para esto, el paso final es ir al input en el form y agregar q el atributo value sea igual al del estado, para FORZAR que la info que tiene React tambien se refleje en lo que muestra el navegador. React es la "única fuente de la verdad": los datos de React son los unicos valores que se consideran reales.
  -> logamos conexion ida y vuelta entre React y el form esto se conoce como:
  //* two-way data binding
  */
  function handleChange(event) {
    const { value, name } = event.target;
    const newFormData = { ...formData };
    newFormData[name] = value;
    setFormData(newFormData);
  }

  function handleReset() {
    setFormData({
      username: "",
      telefono: "",
      email: "",
    });
  }

  return (
    <>
      <div>
        <h2>🛒 Tu carrito de compras tiene:</h2>
        <div>
          <ul>
            {cart.map((item) => (
              <li>
                {/* //TODO: aplicar f de eliminar item al boton */}
                {item.title} - USD {item.price} - Cantidad: {item.count}{" "}
                <button>🗑️ Eliminar</button>
              </li>
            ))}
          </ul>
        </div>
        {/* //!RECORDAR: SEPARAR F DE FRONEND (VISUALIZACION/ REACT) CON F DE BACKEND (LÓGICA/ DB)
        -> No puedo invocar desde el bt "confirmar compra" a la funcion "createBuyOrder"
        --> A FIREBASE tengo q ENVIAR la info del context.
        --> La conexión al context para extraer los datos que necesito pasarle a FIREBASE (del usuario, precio total, etc...) la hago en el FRONTEND, con REACT. Por ej los datos del usuario están en un form en el frontend, sería raro que procese esos datos con una f desde firestore.jsx
        --> por eso creo una f de handleCheckout para levantar el objeto que debo pasarle a createBuyOrder.
        --> MANTENER SEPARADO FRONTEND DE BACKEND (DB) */}
        <button onClick={handleCheckout}>✅ Confirmar compra</button>
      </div>
      <div className="checkout-form">
        <form onSubmit={handleSubmit}>
          <p>
            <label htmlFor="username">
              Nombre completo:
              <input
                onChange={handleChange}
                name="username"
                type="text"
                placeholder="Nombre completo"
                value={formData.username}
                required
              />
            </label>
          </p>
          <p>
            <label htmlFor="email">
              Email:
              <input
                onChange={handleChange}
                name="email"
                type="email"
                placeholder="@"
                value={formData.email}
                required
              />
            </label>
          </p>
          <p>
            <label htmlFor="telefono">
              Teléfono:
              <input
                onChange={handleChange}
                name="telefono"
                type="number"
                placeholder="54 11..."
                value={formData.telefono}
                required
              />
            </label>
          </p>
          {/* Bottones
          - botones siempre dentro del form.
          - 3 tipos: submit, reset y button (para otras acciones, siempre ponerle el tipo xq si no intenta hacer un submit. 
          - Se usa el evento "Submit" para el form, no onCLick.
          */}
          <p>
            <button type="submit">Enviar</button>
            <button onClick={handleReset} type="reset">
              Borrar
            </button>
            <button type="button">Otra cosa</button>
          </p>
        </form>
      </div>
    </>
  );
}

// Armamos el formulario con los datos del usuario aca pero lo ideal seria hacerlo en ruta aparte, como paso intermedio entre confirmar la compra y guardar la oc en firestore
