// Detalle de producto
import { useEffect, useState } from 'react'
import ItemCount from './ItemCount'
import { useParams } from 'react-router'
//* named export/ import xq tengo más de 1 f en mockservice
import { getItemData } from '../data/mockService'

export default function ItemDetailContainer() {
    const {itemId} = useParams()
    const [product, setProduct] = useState({})
    // creo una flag para evaluar el estado de la peticion
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setLoading(true)
        getItemData(itemId)
            .then(response => setProduct(response))
            .finally(() => setLoading(false))
    }, [product]) // actualizo el estado en funcion del estado product

    return (
        <section>
            {/* muestro un mensaje de cargando mientras espero la peticion    */
             (loading) ? (
                <div className="container">
                    <div className="row">
                        <h2 style={{textTransform: 'capitalize', padding: '1rem'}}>Cargando...</h2>
                        <hr />
                        <img src='https://placehold.co/200x200?text=cargando...' title="cargando" style={{width: '200px'}} />
                        <p><strong>Descripcion:</strong></p>
                        <p><strong>Categoría:</strong></p>
                        <h4><strong>Precio:</strong></h4>
                        <ItemCount />
                    </div>
                </div>
             ) : (
                <div className="container">
                    <div className="row g-4">
                        <h2 style={{textTransform: 'capitalize', padding: '1rem'}}>{product.title}</h2>
                        <hr />
                        <img 
                            src={`${product.img}/${product.color}/white?text=${product.title}&font=roboto`} 
                            alt={product.title} 
                            style={{width: '200px'}} 
                        />
                        <p><strong>Descripcion:</strong> {product.description}</p>
                        <p><strong>Categoría:</strong> {product.category}</p>
                        <h4><strong>Precio:</strong> ${product.price}</h4>
                        <ItemCount />
                    </div>
                </div>
             ) 
            
            }
        </section>
    )
}

