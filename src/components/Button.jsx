//AP ESTADOS: TEORIA
/*ESTADOS
Cómo manipular el DOM visible y estilos desde React
Los estados son lo que le dan vida al componente. ❤️
Los estados permiten que un componente "recuerde" información entre renderizados, lo que es esencial para crear aplicaciones dinámicas donde la información puede cambiar en respuesta a las interacciones del usuario.

Esto es un componente estático, se renderiza una vez y por más que el handler escuche los clics, el render del boton no se hace continuamente. En JS una vez q paso el cabezal y retornó la f, lo que ya no se usa se descarta. No tienen memoria (Hooks) como para ir alternando entre distintas propiedades. Para que cambie y sea dinamico se usan los ESTADOS
export default function Button(props) {
    let colorFondo ="Red"
    function handleChangeColor() {
        colorFondo = "Orange"
    }

    return (
        <>
        <button onClick={handleChangeColor} style={{backgroundColor: colorFondo}}>{props.label}</button>
        </>
    )
}


Hooks 🪝
Para manejar los estados en los componentes funcionales de React, existe un concepto clave conocido como "hooks". Los hooks son funciones especiales que permiten acceder a características avanzadas de React, como el estado o el ciclo de vida del componente, sin la necesidad de escribir componentes basados en clases. Uno de los hooks más fundamentales y ampliamente utilizados es useState.
Son funciones de react que permiten *enganchar* cierta funcionalidad a otra funcion.
Todos los hooks empeizan con la palabra "use". SIempre se usan dentro de un componente
Hay hooks de react, hay librerias de hooks, uno puede armar sus propios hooks tb, etc etc...
Por ej aca quiero agregar una funcionalidad de estado a una f de boton.
useState: es el hook principal/ padre de todos los hooks de react
lo importo directo de react:
import { useState } from "react";
*/
export default function Button(props) {
   //AP useSTate()
   /* 
    const X = useState()
    El useState me va a dar una var de estado y un setter, que es una f q se usa para actualizar el val de la var de estado.
    Los setters son f q nos permiten modificar vals.
    La var de estado NO LA PUEDO EDITAR. 🔒
    Para extraer esos 2 vals se hace similar a la extructuracion, pero se usan [] porque retorna un array. Ej:
    const [ nombreQueLePongoAMiConst/Estado, setnombreQueLePongoAMiConst/Estado ] = useState("valor inicial que va a tomar mi estado") -> esto es una convencion tb de como nombrar la var y a su setter: [ var, setVar ]
    */
    const [ colorFondo, setColorFondo ] = useState("Red")

    function handleChangeColor() {
        //AP useState(): llamada
        /*
        colorFondo = "Blue" ->  NUNCA EDITO LA CONST/ESTADO DIRECTAMENTE XQ NO TOMA EL VALOR.
        SE USA EL SETTER PARA CAMABIAR EL VAL: esto le indica a react que ademas tiene que re-renderizar/ actualizar TODO EL COMPONENTE
        No es lento, es super rapido, es la forma en q funciona React...
        */
        setColorFondo("Blue")
    }

    return (
        <>
        <button
        // AP al hacer clic llamo a la f de arriba que cambia el estado 
        onClick={handleChangeColor}
        // AP uso la var x defecto para el estado
        style={{backgroundColor: colorFondo}}
        > 
            {props.label}
        </button>
        </>
    )
}