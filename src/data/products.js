//aca vamos a crear la "db" con un arrary de prod, tb podría ser un archivo json. lo hago en archivo aparte para q sea más ordenado, reciuen para la ultima entrega vamos a usar db real.
const products = [
    {
        id: 1,
        title: "Xiaomi Redmi Note 13",
        price: 299.9,
        category: "xiaomi",
        stock: 15,
        img: "https://i01.appmifile.com/webfile/globalimg/products/redmi-note-13-pro-plus.png",
        description: "Smartphone Xiaomi Redmi Note 13."
    },
    {
        id: 2,
        title: "Samsung Galaxy S25",
        price: 999.9,
        category: "samsung",
        stock: 20,
        img: "https://images.samsung.com/is/image/samsung/p6pim/ar/s25/gallery.png",
        description: "Samsung Galaxy S25 con cámara avanzada."
    },
    {
        id: 3,
        title: "Motorola Edge 50",
        price: 549.9,
        category: "motorola",
        stock: 12,
        img: "https://motorolaus.vtexassets.com/arquivos/ids/157008/motorola-edge-50.png",
        description: "Motorola Edge 50 con pantalla OLED."
    },
    {
        id: 4,
        title: "iPhone 15 Pro",
        price: 1299.9,
        category: "apple",
        stock: 8,
        img: "https://store.storeimages.cdn-apple.com/iphone-15-pro.png",
        description: "iPhone 15 Pro con chip A17."
    },
    {
        id: 5,
        title: "HONOR Magic6",
        price: 799.9,
        category: "honor",
        stock: 10,
        img: "https://www.honor.com/content/dam/honor/global/product/magic6.png",
        description: "HONOR Magic6 con diseño premium."
    },
    {
        id: 6,
        title: "Samsung Galaxy Z Flip7",
        price: 1499.9,
        category: "samsung",
        stock: 5,
        img: "https://images.samsung.com/is/image/samsung/p6pim/ar/z-flip7/gallery.png",
        description: "Galaxy Z Flip7 plegable."
    },
    {
        id: 7,
        title: "Xiaomi 14 Ultra",
        price: 1099.9,
        category: "xiaomi",
        stock: 7,
        img: "https://i01.appmifile.com/webfile/globalimg/products/xiaomi-14-ultra.png",
        description: "Xiaomi 14 Ultra con cámara Leica."
    },
    {
        id: 8,
        title: "Motorola Razr 50",
        price: 1299.9,
        category: "motorola",
        stock: 6,
        img: "https://motorolaus.vtexassets.com/arquivos/ids/157009/motorola-razr-50.png",
        description: "Motorola Razr plegable."
    },
    {
        id: 9,
        title: "Samsung Galaxy A55",
        price: 399.9,
        category: "samsung",
        stock: 25,
        img: "https://images.samsung.com/is/image/samsung/p6pim/ar/a55/gallery.png",
        description: "Samsung Galaxy A55 económico."
    },
    {
        id: 10,
        title: "iPhone 15",
        price: 999.9,
        category: "apple",
        stock: 10,
        img: "https://store.storeimages.cdn-apple.com/iphone-15.png",
        description: "iPhone 15 con cámara dual."
    },
    {
        id: 11,
        title: "Huawei P60 Pro",
        price: 899.9,
        category: "huawei",
        stock: 9,
        img: "https://consumer.huawei.com/content/dam/huawei-cbg-site/common/mkt/pdp/phones/p60-pro.png",
        description: "Huawei P60 Pro con cámara XMAGE."
    },
    {
        id: 12,
        title: "Oppo Find X7",
        price: 799.9,
        category: "oppo",
        stock: 11,
        img: "https://www.oppo.com/content/dam/oppo/product/find-x7.png",
        description: "Oppo Find X7 con pantalla AMOLED."
    },
    {
        id: 13,
        title: "Realme GT 6",
        price: 699.9,
        category: "realme",
        stock: 14,
        img: "https://www.realme.com/global/product/gt6.png",
        description: "Realme GT 6 con Snapdragon."
    },
    {
        id: 14,
        title: "Vivo X100 Pro",
        price: 899.9,
        category: "vivo",
        stock: 10,
        img: "https://www.vivo.com/content/dam/vivo/global/product/x100-pro.png",
        description: "Vivo X100 Pro con óptica Zeiss."
    },
    {
        id: 15,
        title: "Samsung Galaxy M55",
        price: 349.9,
        category: "samsung",
        stock: 18,
        img: "https://images.samsung.com/is/image/samsung/p6pim/ar/m55/gallery.png",
        description: "Samsung Galaxy M55 accesible."
    },
    {
        id: 16,
        title: "Xiaomi Poco F6",
        price: 499.9,
        category: "xiaomi",
        stock: 20,
        img: "https://i01.appmifile.com/webfile/globalimg/products/poco-f6.png",
        description: "Xiaomi Poco F6 gamer."
    },
    {
        id: 17,
        title: "Motorola G85",
        price: 299.9,
        category: "motorola",
        stock: 22,
        img: "https://motorolaus.vtexassets.com/arquivos/ids/157010/motorola-g85.png",
        description: "Motorola G85 económico."
    },
    {
        id: 18,
        title: "iPhone SE (2025)",
        price: 499.9,
        category: "apple",
        stock: 15,
        img: "https://store.storeimages.cdn-apple.com/iphone-se.png",
        description: "iPhone SE compacto."
    },
    {
        id: 19,
        title: "HONOR X9b",
        price: 399.9,
        category: "honor",
        stock: 17,
        img: "https://www.honor.com/content/dam/honor/global/product/x9b.png",
        description: "HONOR X9b resistente."
    },
    {
        id: 20,
        title: "Samsung Galaxy S24 Ultra",
        price: 1199.9,
        category: "samsung",
        stock: 9,
        img: "https://images.samsung.com/is/image/samsung/p6pim/ar/s24-ultra/gallery.png",
        description: "Samsung Galaxy S24 Ultra."
    },
    {
        id: 21,
        title: "Xiaomi Redmi 13C",
        price: 199.9,
        category: "xiaomi",
        stock: 30,
        img: "https://i01.appmifile.com/webfile/globalimg/products/redmi-13c.png",
        description: "Xiaomi Redmi 13C básico."
    },
    {
        id: 22,
        title: "Motorola Edge 40",
        price: 499.9,
        category: "motorola",
        stock: 13,
        img: "https://motorolaus.vtexassets.com/arquivos/ids/157011/motorola-edge-40.png",
        description: "Motorola Edge 40."
    },
    {
        id: 23,
        title: "Huawei Mate 60",
        price: 999.9,
        category: "huawei",
        stock: 8,
        img: "https://consumer.huawei.com/content/dam/huawei-cbg-site/common/mkt/pdp/phones/mate-60.png",
        description: "Huawei Mate 60 con Kirin."
    },
    {
        id: 24,
        title: "Oppo Reno 12",
        price: 599.9,
        category: "oppo",
        stock: 16,
        img: "https://www.oppo.com/content/dam/oppo/product/reno-12.png",
        description: "Oppo Reno 12."
    },
    {
        id: 25,
        title: "Realme Narzo 70",
        price: 249.9,
        category: "realme",
        stock: 21,
        img: "https://www.realme.com/global/product/narzo-70.png",
        description: "Realme Narzo 70."
    }
]
// tambien tengo q exportar esdte archivo porque sino me queda incomunicado (en javascript necesito export/import)
export default products; 