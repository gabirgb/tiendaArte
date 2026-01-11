import products from "./products"

//! Ejemplo
const miPromise = new Promise((resolve, reject) => {
    console.log("Iniciando promesa....")
    setTimeout(() => { resolve("Promesa terminada") }, 1000)
    // reject ("Error! pero nunca se va a producir porque es una peticion simulada")
})

//! Fetch 
function getData() {
    const promiseData = new Promise((resolve, reject) => {
        console.log("Solicitando datos...")
        setTimeout(() => { resolve(products) }, 1000)
    })
    return promiseData
}


// version mia con el try/ catch:
export function getItemData(itemId) {
    /** esta f es identica a la anterior, solo q tengo q tomar el param enviado (itemId) y usarlo en un find para matchearlo con el id del objeto en el array productos. */
    const promiseData = new Promise((resolve, reject) => {
        try {
            const itemRequested = products.find(
                (item) => item.id === Number(itemId)
                /*
                products.find((item) => { item.id === Number(itemId) })
                  busco un item en el que item.id (en de la db) sea igual a itemId (el de la url). el valor de itemId viene en formato string, asi que si mis id en el array son number tengo q convertirlos para q matcheen el tipo de dato (porque el operador === evalua tb tipo de dato.) Podria usar el operador == q solo evalua el valor, pero no es buena practica.
                */
            );

            if (!itemRequested) {
                // Si no existe el item, rechazo la promesa
                reject(new Error(`No se encontró el producto con id ${itemId}`));
                return;
            }

            // Simulamos delay de 1 segundo
            setTimeout(() => {
                resolve(itemRequested);
            }, 1000);
        } catch (error) {
            // Si ocurre algún error inesperado
            reject(error);
        }
    });

    return promiseData;
}

// version mia con el try/ catch:
export function getCategoryData(categoryId) {
    /** esta f es identica a la anterior, solo q tengo q tomar el param enviado (categoryId) y usarlo en un find para matchearlo con el id del objeto en el array productos. */
    const promiseData = new Promise((resolve, reject) => {
        try {
            const categoryRequested = products.filter(
                (item) => item.category === categoryId);
            console.log("category requested", categoryRequested)

            if (!categoryRequested) {
                // Si no existe el item, rechazo la promesa
                reject(new Error(`No se encontró la categoría ${categoryId}`));
                return;
            }

            // Simulamos delay de 1 segundo
            setTimeout(() => {
                resolve(categoryRequested);
            }, 1000);
        } catch (error) {
            // Si ocurre algún error inesperado
            reject(error);
        }
    });

    return promiseData;
}

export default getData