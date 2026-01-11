// a partir de la clase 3 llamamos al array de prod mediante el mock service, ya no importamos el recurso.
// import products from "../data/products"
import Item from "./Item"
import getData from "../data/mockService"
//* named export/ import
import {getCategoryData} from "../data/mockService"
import { useEffect, useState } from "react"
import { useParams } from "react-router"

//TODO: agregar css a itemlist para q se vea mejor el listado

export default function ItemListContainer(props) {

    //* PETICION DE DATOS, ASINCRONIA */
    //console.log("Promesa: ", getData())
    /* then()
    recupero la data, el response es el "resolve(products)" que realizamos en mockService.
    La función dentro del then se ejecuta al finalizar la petiucion */
    /* Uso de state en las peticiones
    Cuando carga react no tiene el listado de prods de la ddbb, lo tiene q ir a buscar. Esos segundos q tarda hace q se muestre en blanco todas las cards o la pag falle, entonces para poder manejar el estado de renderizado tengo q usar estados.
    1️⃣ mockupService:
    1. importa products.js
    2. se inicia la promesa
    3. despues de 5 seg nos devuelve el array de productos a la f getData() ejecutada desde ItemListContainer.jsx
    2️⃣ ItemListContainer.jsx
    4. se ejecuta el then()
    5. llamamos a setProducts y guardamos la info en el estado
    6. se actualiza el componente
    */
   //! ojo siempre inicializar como array al estado que va a recibir el rdo de la consulta xq si no js lo toma como undefined y rompe todo
   //! ojo, para que la petición no se ejecute infinitamente cada vez que se actualiza el estado, usar useEffect() para seleccionar en qué estado del ciclo de vida del componente quiero ejecutar esa tarea. Si no, se cuelga la app.
   /*
   useEffect() tiene 2 params: el 1ro es la f q quiero ejecutar y el 2do es un array de dependencias, SIEMPRE hay q invocar a ese array si no es como si no hubiese llamado a useEffect(). Si lo pongo vacío la f se ejecuta solo en el montaje del componente. Si nombro alguna f externa, el useEffect se ejecuta cada vez que se llama a dicha f externa (dependencia). 
   En este caso nombro que cada vez que se actualiza el categoryId se vuelva a renderizar el componente.
   */
  const [products, setProducts] = useState([])
  //* cuando tenga category ID filtro los prods llamando a getCategoryData() más un IF dentro del useEffect()
  const {categoryId} = useParams()

  useEffect(()=> {
       if (categoryId) {
            getCategoryData(categoryId).then( (response) => {
               console.log("armo categorias")
               setProducts(response)
               console.log(products)
           }).catch( (err)=>{
               alert(err)
           })
       } else {
           getData().then( (response) => {
               console.log("Promesa terminada")
               setProducts(response)
           }).catch( (err)=>{
               alert(err)
           })
       }

   }, [categoryId])
   
   //* AWAIT - Try/ Catch
   /*
   Recordar que otra forma de trabajar con asincronía es con la f await (pero solo puede usarse en f asincronas)

    async function fetchProducts() {
        try {
            const respuesta = await getData()
            setProducts(respuesta)
        } catch (error) {
            alert(error)
        }
    }

    useEffect(fetchProducts, [])

   */

  

    return (
        <section>
            <h2>Hola, bienvenidos a mi tienda {props.greetings}</h2>
            {
            //** recordar q siempre q estoy en la parte HTML y quiero mostrar un metodo o f tengo q abrir llaves
                //** Array.map()
                /* Itero el array de obj q tengo en la const products (state)
                podría hacerlo con un forEach por ej:
                products.forEach( (itemjs)=>{} )
                Acá lo que estoy diciendo es q por cada item del array (itemjs) ejecute una f (la f flecha y lo q sea q yo le ponga adentro.
                pero el problema es q forEach y similares no tienen "return", no retornan ningun val q yo pueda usar.
                para eso me sirve el map() que funciona igual:
                products.map( (itemjs)=>{} )
                el obj del map es iterar y armar un nuevo array (se la llama "f transformadora")
                y convierto al array de objetos en un nuevo array con las props de los items ya formateados en JSX.
                Por ej:
                {
                    id: 1,
                    title: "Xiaomi Redmi Note 13",
                    price: 299.9,
                    category: "xiaomi",
                    stock: 15,
                    img: "https://i01.appmifile.com/webfile/globalimg/products/redmi-note-13-pro-plus.png",
                    description: "Smartphone Xiaomi Redmi Note 13."
                }
                lo convierto a:
                <Item
                    id= "1"
                    title= "Xiaomi Redmi Note 13"
                    price= "299.9"
                    category= "xiaomi"
                    stock= "15"
                    img = "https://i01.appmifile.com/webfile/globalimg/products/redmi-note-13-pro-plus.png"
                    description= "Smartphone Xiaomi Redmi Note 13."
                />

                El formato completo es:
                products.map( (itemjs) => {
                    return
                        <h3> itemjs.id </h3>
                        <h3> itemjs.title </h3>
                        <h3> itemjs.price </h3>
                        <h3> itemjs.category </h3>
                } )

                PEEERO si es una f sencilla q solo tiene 1 retorno puedo simplificarla:
                products.map( (itemjs) =>
                    <h3> itemjs.title </h3>
                )
                * * Es una de las caracteristicas de la f flecha: no estamos obligados a ponerle las llaves y el return cuando es una f chiquita.

                En este caso solo voy a renderear el componente >Item>, asi que puedo usar el formato reducido:
                products.map( (itemjs) => 
                    <Item
                        id={itemjs.id}
                        title={itemjs.title}
                        price={itemjs.price}
                        category={itemjs.category}
                        stock={itemjs.stock}
                        img={itemjs.img}
                        description={itemjs.description}
                    />
                )

                PEEEEEEEEEEEERO incluso hay un formato mas reducido para no tener q escribir todas las props, el operador spread: "{...}"

                 */
                products.map( (itemjs) => 
                    <Item
                    //** diferencia entre id y Key en React
                    /* - key: atributo interno de React, obligatorio en listas. No se pasa como prop al componente.
                    - id: es una prop mia.
                    Puedo matchear key y id para que sea más intuitivo (como está hecho abajo) o puedo inicializarlo creando una variable... 
                    Si ya tengo un id dentro del array, no hace falta pasarlo dos veces. Con {...itemjs} ya se incluye.*/
                        key={itemjs.id} // creo la key y la pareo con el id de cada item
                        {...itemjs} // mapeo todas las props de cada itemjs
                    />
                )
            }
        </section>
    )

}