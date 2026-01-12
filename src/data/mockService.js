import products from "./products"

// mock de solicitud de datos a la ddbb (products.js)
function getData() {
    const promiseData = new Promise((resolve, reject) => {
        console.log("Solicitando datos...")
        setTimeout(() => { resolve(products) }, 1000)
    })
    return promiseData
}


// ITEM
export function getItemData(itemId) {

    const promiseData = new Promise((resolve, reject) => {
        try {
            const itemRequested = products.find(
                (item) => item.id === Number(itemId)
            );

            if (!itemRequested) {
                // Si no existe el item, rechazo la promesa
                reject(new Error(`No se encontró el producto con id ${itemId}`));
                return;
            }

            // Simulamos delay de 5 segundo
            setTimeout(() => {
                resolve(itemRequested);
            }, 5000);
        } catch (error) {
            // Si ocurre algún error inesperado
            reject(error);
        }
    });

    return promiseData;
}

// CATEGORIAS
export function getCategoryData(categoryId) {
    /** esta f es identica a la anterior, solo q tengo q tomar el param enviado (categoryId) y usarlo en un filter() para traer solo la categ solicitada. */
    const promiseData = new Promise((resolve, reject) => {
        try {
            const categoryRequested = products.filter(
                (item) => item.category === categoryId);
            console.log("category requested", categoryRequested)

            if (!categoryRequested) {
                reject(new Error(`No se encontró la categoría ${categoryId}`));
                return;
            }

            // Simulamos delay de 1 segundo
            setTimeout(() => {
                resolve(categoryRequested);
            }, 1000);
        } catch (error) {
            reject(error);
        }
    });

    return promiseData;
}

export default getData