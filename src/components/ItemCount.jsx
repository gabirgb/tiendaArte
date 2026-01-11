import { useState, useEffect } from "react"

export default function ItemCount () {
    // El valor iniciar siempre es 1, que es el minimo q el usuario puede tener en su carrito, si no no se muestra el item en el carrito.
    // TODO: establecer minimos y max (stock) para agregar items
    const [count, setCount] = useState(1)

    //* DESACTUALIZACION (desfazamiento) del VIRTUAL DOM
        /* Cuando actualizo un estado (setCount) React actualiza el Virtual DOM, (que es una copia del DOM real) para optimizar recursos. En una cuenta sencilla como esta mucho no se nota la optimizacion pero cuando se hacen peticiones a servicios externos o procesos más complejos se gana mucho tiempo y recursos.
        React evalúa el valor que tengo en el Virtual DOM y si es diferente, se actualiza. Si no es diferente no hace nada. Entonces en una funcion asi:
        function handleSuma (){
            count= count+1
            setCount(count)
        }

        0- Más allá de que NUNCA hay q actualizar el estado (porque eso lo hace react, nosotros deberiamos usar el setter), si incluso en vez de usar una const uso una let, pasa esto:
        
        1- La primera vez que se ejecuta la f la var count se actualiza a 2
        2- pero al ejecutar el setCount, antes de actualizar, React se va a fijar al virtual dom cuánto vale: vale 2 (porque lo modifiqué en la linea anterior con "count= count+1")
        3- entonces yo quiero actualizar a 2, una variable que en el virtual dom ya vale 2, entonces react no actualiza el dom real.
        4- recien al presionar nuevamente el boton "+", se va a actualizar.
        5- El funcionamiento siempre va a ser un clic q no hace nada y otro q actualiza, o directamente no hace nada, segun la forma en q haga la suma.

        La forma correcta es setCount(count + 1)

         */

    function handleSuma () {
        setCount(count + 1)
    }
    
    function handleResta () {
        setCount(count - 1)
    }
    //** ACTUALIZAR UN ESTADO HACE Q SE RECARGUE SOLO ESTE COMPONENTE */
    /* //* Y si quiero solo actualizar parte de un componente?????
    x ej si en mi componente trabajo con peticiones o servicios de terceros no quiero q se recargue completo solo al cambiar una variable (por ej un color picker q se recarga entero cuando cambio de color, o una peticion completa q se ejecuta cuando solo quiero filtrar algo, o un chat q se carga entero cada vez que envio un nuevo mensaje..)
    //** Necesitamos separar las tareas segun el CICLO DE VIDA  de los componentes
    Simulemos el ciclo de vida de un componente con console.log:
    */

    console.log("1. Montaje del componente - Carga inicial en el DOM")
    console.log("2. Actualización de estado del componente")
    console.log("3. 🔴 Tarea compleja/ pesada del componente no optimizada, se ejecuta cuando se monta el componente y cada vez q se actualiza.")
    // console.log("4. Desmontaje del componente") esta tarea solo ocurre al final del ciclo cuando el componente se cierra y deja de existir (x ej cierro un chat) o cambio de página (el contenido de la pag actual se desmonta para cargar el contenido de la nueva página. el desmontaje sirve para guardar los datos y no perderlos en el camino u optimizar el uso de recursos, será algo que veremos más adelante)
    //* HOOK useEffect()
    /*
    Este hook se usa para que la tarea compleja se realice solamente en el montaje del componente.
    Se importa como:
    import { useEffect } from "react"
    Si importo varias f desde react las puedo pedir todas juntas:
    import { useState, useEffect } from "react"

    Tiene 2 parámetros (la f y un "array de dependencias" ) y se usa asi:
    useEffect ( () => {} , [] )
    El array define cuándo se ejecuta la tarea, si no lo pongo la f se ejecuta siempre, es como si no hubiese usado el hook. Por el momento lo dejamos vacio y asi le indico q se ejecute en el montaje.

    */

    useEffect ( ()=>{ 
        console.log("3. 🟢 Tarea compleja/ pesada del componente optimizada, solo se ejecuta en el montaje y no en la actualizacion del componente.")
        /* //* DESMONTAJE
        Si yo quiero desmontar mi componente, la forma de hacerlo es con return y f flecha, esa f es la que se ejecuta al desmontar el componente.
        */
       return ()=>{ console.log("Tarea de desmontaje")}
       
    }, [])


    return (
        <div>
            <div>
                {/* //** no olvidar agregar los listeners a los botones */}
                <button onClick={handleResta}>-</button>
                <span>{count}</span>
                <button onClick={handleSuma}>+</button>
            </div>
            <button>Agregar al carrito</button>
        </div>   
    )
}