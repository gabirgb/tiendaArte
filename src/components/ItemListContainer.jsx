import Item from "./Item"
import getData from "../data/mockService"
import {getCategoryData} from "../data/mockService"
import { useEffect, useState } from "react"
import { useParams } from "react-router"
import "./itemList.css"

export default function ItemListContainer(props) {

  const [products, setProducts] = useState([])
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

    return (
        <section>
            <h2>Hola, bienvenidos a mi tienda {props.greetings}</h2>
            <div className="itemlist">
                {
            
                    products.map( (itemjs) => 
                        <Item                        
                            key={itemjs.id}
                            {...itemjs}
                        />
                    )
                }
            </div>
        </section>
    )

}