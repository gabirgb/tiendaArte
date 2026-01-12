// Listado de productos
import Item from "./Item"
import getData from "../data/mockService"
import {getCategoryData} from "../data/mockService"
import { useEffect, useState } from "react"
import { useParams } from "react-router"

export default function ItemListContainer(props) {

  const [products, setProducts] = useState([])
  const {categoryId} = useParams()

  useEffect(()=> {
       if (categoryId) {
            getCategoryData(categoryId).then( (response) => {
               setProducts(response)
           }).catch( (err)=>{
               alert(err)
           })
       } else {
           getData().then( (response) => {
               setProducts(response)
           }).catch( (err)=>{
               alert(err)
           })
       }
   }, [categoryId])

    return (
        <section>
            {
                (categoryId) ?
                    <h2 style={{padding: '1rem', textTransform:'capitalize'}}>{categoryId}</h2>
                    :
                    <h2 style={{padding: '1rem'}}>Hola, bienvenidos a mi tienda {props.greetings}</h2>
            }
            {/* armo grilla bootstrap */}
            <div className="container">
                <div className="row g-4">
                    {
                        products.map( (itemjs) => 
                            <Item                        
                                key={itemjs.id}
                                {...itemjs}
                            />
                        )
                    }
                </div>
            </div>
        </section>
    )

}