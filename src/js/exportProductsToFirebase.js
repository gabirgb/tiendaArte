//! Guardando múltiples docs al mismo tiempo

/* Esto se puede ejecutar en consola con:
//* npm exec exportProductsToFirebase.js
sin la necesidad de tener q poner un boton temporal en App.jsx para correrlo, averiguar cómo...
*/
// inicializamos firebase
import { initializeApp } from "firebase/app";
import { collection, addDoc } from "firebase/firestore";
import products from "./products";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCjpRfEbBgw7_4hbRT7jHzY4WYcyo94jKQ",
    authDomain: "tiendaarte-cf713.firebaseapp.com",
    projectId: "tiendaarte-cf713",
    storageBucket: "tiendaarte-cf713.firebasestorage.app",
    messagingSenderId: "855483804360",
    appId: "1:855483804360:web:8e5207cb295a4ea7fe93fd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// inicializo db
const db = getFirestore(app)


export async function exportProductsToFirestore() {
    const collectionRef = collection(db, "products")

    //! products.forEach(item => addDoc()) - NAIN!!! forEach no trabaja bien con asincronía!!
    //* usar for... of
    for (let product of products) {
        //no pasa nada si lo agrego con el id porque firestore igual crea el propio como nombre del doc... solo que queda esa propiedad al pepe cargada... Para borrarla se usa delete y la propiedad:
        delete product.id
        const docRef = await addDoc(collectionRef, product)
        console.log("Doc creado: " + docRef.id)
    }
}