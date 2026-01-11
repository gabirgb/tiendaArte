/* Esta componente es muy similar a ItemListContainer, solo que muestra el detalle de un solo prod. Se carga desde ItemProduct al hacer clic en "Ver producto". 
La información para esta pag no se pasa por props, porque si el cliente llega desde la url directamente tiene q poder cargar igual el producto. Para ello nos vamos a armar una URL dinamica pasando el ID del prod, y con ese ID desde aca volvemos a hacer un fecth pero solamente de ese ID. */
import { useEffect, useState } from 'react'
import ItemCount from './ItemCount'
import { useParams } from 'react-router'
//* named export/ import
import { getItemData } from '../data/mockService'

export default function ItemDetailContainer() {

    /* const parametrosURL = useParams()
     useParams() me devuelve un objeto con los nombres de los parametros y su valor. Como en este caso yo se que el nombre del param siempre va a ser itemId (porque es el nombre de param que paso desde donde hago clic para llegar acá (boton "Ver producto"), ya puedo reemplazarlo directamente al crear la const sin tener q evaluar el objeto completo recibido.*/
    const {itemId} = useParams()
    /*
    1. creo (en mockServices.js) y llamo desde acá una f similar a getData() para solicitar el producto particular en cuestion.
    Lo uso dentro de useEffect para que se cargue en el montaje.
    2. creo un estado para que el componente se actualice cuando termine de recibir toda la data.
    //* tener en cuenta que como se que en este estado voy a recibir un objeto con todos los params del producto, lo inicializo como un objeto vacio (y no como un array cuando trabajo con el listado de productos).
    */

    const [product, setProduct] = useState({})

    useEffect( ()=>{
        getItemData(itemId).then(response => setProduct(response))
    }, [])

    return (
        <section>
            {/**
             * Este es el lugar para usar un condicional ternario y mostrar (en base al estado del componente) una anim chiquita de "cargando" para que mientras se hace la peticion no se muestre el html truncado... 
             */}
            <h2>{product.title}</h2>
            <hr />
            <img 
                src={`https://placehold.co/200x200?text=${product.title}&font=roboto`} 
                alt={product.title} 
            />
            <p>Descripcion: {product.description}</p>
            <p>Categoría: {product.category}</p>
            <h4>Precio: ${product.price}</h4>
            <ItemCount />
        </section>
    )
}

