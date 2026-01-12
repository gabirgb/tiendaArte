import { useState, useEffect } from "react"

export default function ItemCount () {
    // El valor iniciar siempre es 1, que es el minimo q el usuario puede tener en su carrito, si no no se muestra el item en el carrito.
    const [count, setCount] = useState(1)

    function handleSuma () {
        setCount(count + 1)
    }
    
    function handleResta () {
        setCount(count - 1)
    }
    
    useEffect ( ()=>{ 
       return ()=>{ console.log("Tarea de desmontaje")}
    }, [])


    return (
        <div>
            <div>
                {//** no olvidar agregar los listeners a los botones
                }
                <button onClick={handleResta} style={{margin: '1rem'}} className="btn btn-primary">-</button>
                <span>{count}</span>
                <button onClick={handleSuma}  style={{margin: '1rem'}} className="btn btn-primary">+</button>
            </div>
            <button style={{margin: '1rem'}} className="btn btn-primary">Agregar al carrito</button>
        </div>   
    )
}