/* Funcion default del componente:
los datos que se le pasan a los componentes no son argumentos, se llaman "props" y es una convencion usarla tambien en la f.
Podria poner infoDinamica, o lo que sea.. sigue siendo un "props" */

import { Link } from "react-router";

// export default function Item(props) {
export default function Item ( {id, title, price, category, stock, img, description } ) {
    /* tambien puedo desestructurar el objeto y extraer dentro de 1 const cada propiedad, ej:
        const { title } = props
    De esta forma js busca dentro de props la propiedad title y la guarda dentro de una const con el mismo nombre 

    o podria hacerlo asi:
        const {title, price, image} = props
    y usarlo asi en el return (de esta forma escribo menos):
        return (
            <div style={{border: "solid 1px white", borderRadius: "8px", padding: "16px", margin: "12px auto"}}>
                <h3>{title}</h3>
                <img width="200px" src={image} />
                <p>Precio: {price}</p>
                <p>Descripción del producto</p>
                <button>Ver Producto</button>
            </div>
        )
    

    SUGAR SYNTAX ===
        Y si quiero escribir menos que menos, puedo hacerlo asi:
        export default function Item( {title, price, image}) {...}
    Con las {} indico que voy a recibir un objeto (recordar que SIEMPRE recibo un objeto, por eso si o si hay que poner las llaves), y directamente pido las propiedades que voy a recibir.
    Ojo! con esta modalidad el objeto "props" deja de existir porque directamente recibo las propiedades una por una. Luego en el return tambien uso las props solo con llave, ej: <h3>{title}</h3> 

    //* RECORDAR QUE SON BACKTICKS (y no backstrings)
    y que se hacen con ATL GR + }
    
    */
    return (
        <div style={{border: "solid 1px white", borderRadius: "8px", padding: "16px", margin: "12px auto"}}>
            <h3>{id} - {title}</h3>
            <img 
                src={`https://placehold.co/200x200?text=${title}&font=roboto`} 
                alt={title} 
            />
            <p>Precio: {price}</p>
            <p>Descripción del producto: {description}</p>
            <p>Categoría: {category} - Stock: {stock}</p>
            <Link to={`/producto/${id}`}>
                <button>Ver Producto</button>
            </Link>
        </div>
    )
}






//** Uso de export / export default
/* "export" solo se pone cuando en un mismo archivo exporto distintas funciones, ejemplo:
export function ItemButton() {
    return (
        <div>
            <h2>Hola ItemButton</h2>
            <button>Clic aqui</button>
        </div>
    )
}*/

//** Estructura básica de un componente
/* Esto es lo básico que debe tener mi componente:

function Item() {
    return (
        <>
        ...contenido...
        </>
    )
}

export default Item;


El "export" lo puedo poner abajo en linea aparte, o lo puedo poner directamente cuando declaro la funcion como hice arriba.


Tambien puedo usar arrow f (es lo mismo):
ItemArrow = () => {
}
*/