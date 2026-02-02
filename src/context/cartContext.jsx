// ojo esto no es un componente, x eso se escribe con minus el arch
import { createContext } from "react"
import { useState } from "react"

//Por default esta const va a ser mi export (que contiene el contexto) 
const cartContext = createContext({cart: []}) 

//dejo esta consnt como el valor x default del provider
const DefaultContextProvider = cartContext.Provider

//named export
export function CartProvider ( {children}) {
    /* requerimientos de funcionalidad para mi app CRUD para el array de objetos (q van a ser estados xq necesito actualizar el componente)
    CRUD -> create, read, update, delete
    1. addItemToCart()
    2. 
    2. calcular precio total del carrito
    3. vaciar el carrito
    4. calcular unidades cargadas al carrito
    */
    
    // Para q todo esto funcione, el cart tiene q ser una var de estado, si no, no lo puedo actualizar.
    const [cart, setCart] = useState([])

    function addItemToCart(item, count) {
        // recordar que si quiero agregar items al carrito no puedo manipular directamente el estado, tengo q pasar por "setCart"
        //cart.push(item) -> MAL
        /* Copiar un Array
        hay distintas formas:
        -shallow: copia poco profunda, copia los valores al array nuevo pero si son objetos, estos siguen apuntando a la estructura de los objetois originales. No recomendable.
        -deep: crea de nuevo el array y sus elementos.
        -- forma vieja: JSON.parse(JSON.stringify(array)) -> clona de cero al array y sus objetos.
        -- forma nueva: structuredClone("objeto a ser clonado")  */
        const newCart = structuredClone(cart)
        /* ahora si puedo manipular al cart como quiera y hacer push, delete, etc...
        newCart.push( { item, count })
        Ahora, si yo quiero q la info del item y la cantidad quede todo en un mismo objeto, puedo usar el operador spread (...) para que en vez de hacer push del objeto item, me lo desestructure y me entregue todas esas propiedades sueltas. Así se hace el push de esas propiedades sumando la propiedad count, dentro de un mismo objeto junto a la cantidad
        */
        newCart.push( { ...item, count })
        setCart(newCart)
        console.log(count)
    }

    // En esta funcion buscamos eliminar un item del carrito, sin importar su cant
    function removeItemFromCart (idRemove){
        //el filter me crea un nuevo array, así q no necesito clonar el orig. el newCart consiste en todos los items q no coincidan con el ID del que quiero eliminar. 
        // ojo q cada f que quiera usar en el contexto tengo q agregarla al <DefaultContextProvider>
        //recordar: agregar el boton para elimianr el prod en ItemDetailContainer.jsx
        //recordar: agregar a ItemDetailContainer.jsx, en la const donde declaro el contexto a usar, esta funcion que tambien quiero extraer **
        const newCart = cart.filter(item => item.id !== idRemove)
        setCart(newCart)
    }

    function clearCart() {
        //TODO
    }

    function countItemsInCart() {
        let total = 0
        // para cada item del carrito, sumo la propiedad count de ese item y la guardo en total. Así tengo sumados en la var total todos los count de todos los prods.
        //tb se puede hacer con reduce
        cart.forEach( (item) => total += item.count)
        return (total)
    }

    function countToTalPrice() {
        //TODO
        //lo vamos a usar en el checkout
    }

    //TODO: si agrego el mismo prod en dif momentos, se generan distintos objetos en el array. Lo ideal seria q se modifique el count solamente. (ver en herramientas dev/ componentes/ context.provider). Habria q agregar un IF en addItemToCart

    return (
        /* En <DefaultContentProvider> tengo q pasar como value todo lo que vaya a usar y el nombre de la variable que lo invoca, por ejemplo aca hago match del estado con el nombre de la var/prop q le pongo, lo mismo con la f addItemToCart:
        <DefaultContextProvider value={ { cart: cart, addItemToCart: addItemToCart } }>
        Una forma más corta de hacerlo es poniendo el nombre solo una vez, si es que el nombre de la var y el del objeto se llaman igual: React hace el match solo automaticamente. 
        De esa forma todo componente que se conecte al cartContext va a tener acceso a esos objetos/ funciones.
        */
        <DefaultContextProvider value={ { cart: cart, addItemToCart, removeItemFromCart, countItemsInCart, clearCart } }>
            {/** Acá dentro tengo q pasar la prop children, así le indico dónde mostrarlos. En este mismo lugar armamos todas las f q va a usar el cartWidget para actualizar los valores. */}
            {children}
        </DefaultContextProvider>
    )
}

export default cartContext