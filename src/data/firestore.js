//!FIRESTORE 
// https://firebase.google.com/docs/web/setup#available-libraries

// inicializamos firebase
import { initializeApp } from "firebase/app";
// nos conectamos a firestore
import { collection, doc, getDocs, getDoc, getFirestore, query, where, addDoc } from "firebase/firestore";
import firebaseConfig from "../js/config";

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// inicializo db
const db = getFirestore(app)

// rehago todas las f que hice en el mockservices con el mismo nombre asi es facil de reemplazar.
// getData() - recupero todos los documentos de firestore
// Firestore usa async/ await
//! Lectura - componentes que uso de firestore: collection, getDocs
export async function getData() {
    // referencio a la coleccion
    const collectionRef = collection(db, "products")
    // obtengo un snapshot del estado actual de la db
    // (pido un snapshot de los docs de la coleccion products que está en la db)
    const productsSnapshot = await getDocs(collectionRef)
    //console.log("productsSnapshot: " + productsSnapshot)
    //guardo el array de productos q recibo
    const docs = productsSnapshot.docs
    // console.log del item q cargué de prueba a ver si funca
    //console.log("docs[0].data(): " + docs[0].data())

    //* snapshot -> docs[] -> doc.data() -> data: el snapshot tiene un array de documentos, y cada doc (producto) tiene una propiedad data(), que es la que tengo que llamar para recibir la info de mis productos en un "return docs"
    /* lo que voy a necesitar es mapear ese array para convertirlo en uno que pueda manipular:
    creo mi array dataDocs donde mapeo docs, y por cada item guardo en dataDocs el item.data()
    const dataDocs = docs.map(item => item.data())

    -este mapeo me trae todo menos el id del documento, porque ese elemento no forma parte de la data sino que es el nombre del documento en sí. La propiedad del nombre la puedo llamar facil con un "item.id".
    
    -El problema es que lo que yo quiero es:
    -- que en el array, el objeto me quede con todas las propiedades juntas, no separadas....

    - si yo hago esto me quedan las propiedades separadas:
    const dataDocs = docs.map(item => {
        return ({ data: item.data(), id: item.id })
    })

    entonces tengo q usar el operador spread:
    */
    const dataDocs = docs.map(item => {
        return ({ ...item.data(), id: item.id })
    })

    // y listo :3
    return dataDocs
    // lo único que resta es reemplazar el import de getData() en ItemListContainer
}

//! Lectura - componentes que uso de firestore: doc, getDoc
// getItemData(itemId)
export async function getItemData(itemId) {
    // ahora no necesito una coleccion completa sino a un unico doc, asi q no necesito apuntar a una coleccion con collectionRef. uso documentRef y apunto a la db, a la coleccion y al itemId q recibo por param. tampoco necesito mapear porque no me traigo unarray sino un objeto.
    const documentRef = doc(db, "products", itemId)
    // el snapshot se hace directamente al doc, ojo que el "getDoc" va sin s al final porque es un unico documento, no estoy llamando una coleccion
    const docSnapshot = await getDoc(documentRef)
    //guardo el array de productos q recibo
    const docData = docSnapshot.data()
    console.log("itemId: " + itemId + "/n documentRef: " + documentRef + "/n docSnapshot: " + docSnapshot + "/n docData: " + docData)
    return { ...docData, id: docSnapshot.id }
}

//! Lectura - componentes que uso de firestore: collection, query, where
// getCategoryData(categoryId)
export async function getCategoryData(categoryId) {
    const collectionRef = collection(db, "products")
    const q = query(collectionRef, where("category", "==", categoryId))
    const productsSnapshot = await getDocs(q)
    const docs = productsSnapshot.docs
    const dataDocs = docs.map(item => {
        return ({ ...item.data(), id: item.id })
    })

    return dataDocs
}

//! Guardando informacion en firebase/ firestore: addDoc
// createBuyOrder() - funcion a ejecutar cuando se hace checkout
export async function createBuyOrder(buyOrderData) {
    // traer info del carrito y datos personales capturados en form aparte (cart.jsx)
    /**Pasos a seguir
    1. Creo la vista de CartContainer.jsx
    2. Creo el router
    3. Creo acá la f para insertar contenido
     */

    //* Ojo que no es la misma coleccion q de los procustos, estas son ordenes de compra
    //* Si la coleccion a la que agrego mi doc no existe, se crea automaticamente
    const collectionRef = collection(db, "orders")
    const docRef = await addDoc(collectionRef, buyOrderData)
    alert(`Gracias por tu compra, tu num de orden es: ${docRef.id}`)
}

