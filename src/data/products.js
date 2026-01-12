const products = [
    {
        id: 1,
        title: "obra en grafito abstracta",
        price: 299.9,
        category: "grafito",
        stock: 15,
        img: "https://placehold.co/200x200",
        color: "#f2f2f2",
        description: "Composición en grafito con formas orgánicas y trazos superpuestos."
    },
    {
        id: 2,
        title: "collage urbano contemporáneo",
        price: 450.0,
        category: "collage",
        stock: 10,
        img: "https://placehold.co/200x200",
        color: "#e0e0e0",
        description: "Recortes de revistas y texturas urbanas integradas en una pieza dinámica."
    },
    {
        id: 3,
        title: "pintura al óleo minimalista",
        price: 799.5,
        category: "pintura",
        stock: 8,
        img: "https://placehold.co/200x200",
        color: "#d9c2a3",
        description: "Paleta reducida y planos de color que enfatizan el vacío y la forma."
    },
    {
        id: 4,
        title: "print digital geométrico",
        price: 199.9,
        category: "print",
        stock: 20,
        img: "https://placehold.co/200x200",
        color: "#c2c2c2",
        description: "Diseño vectorial con patrones geométricos y contraste marcado."
    },
    {
        id: 5,
        title: "grafito retrato expresivo",
        price: 350.0,
        category: "grafito",
        stock: 12,
        img: "https://placehold.co/200x200",
        color: "#aaaaaa",
        description: "Retrato en grafito con énfasis en luces y sombras dramáticas."
    },
    {
        id: 6,
        title: "collage surrealista",
        price: 520.0,
        category: "collage",
        stock: 7,
        img: "https://placehold.co/200x200",
        color: "#ffccaa",
        description: "Elementos dispares combinados para crear una narrativa onírica."
    },
    {
        id: 7,
        title: "pintura acrílica vibrante",
        price: 680.0,
        category: "pintura",
        stock: 9,
        img: "https://placehold.co/200x200",
        color: "#ccffaa",
        description: "Capas de acrílico con colores saturados y textura marcada."
    },
    {
        id: 8,
        title: "print tipográfico moderno",
        price: 220.0,
        category: "print",
        stock: 25,
        img: "https://placehold.co/200x200",
        color: "#aaffcc",
        description: "Composición tipográfica con jerarquías claras y estilo contemporáneo."
    },
    {
        id: 9,
        title: "grafito paisaje detallado",
        price: 400.0,
        category: "grafito",
        stock: 11,
        img: "https://placehold.co/200x200",
        color: "#999999",
        description: "Paisaje en grafito con atención minuciosa a texturas naturales."
    },
    {
        id: 10,
        title: "collage con recortes vintage",
        price: 480.0,
        category: "collage",
        stock: 6,
        img: "https://placehold.co/200x200",
        color: "#ffeecc",
        description: "Recortes retro y paleta cálida para una estética nostálgica."
    },
    {
        id: 11,
        title: "pintura óleo abstracta",
        price: 720.0,
        category: "pintura",
        stock: 5,
        img: "https://placehold.co/200x200",
        color: "#ccddff",
        description: "Gestos amplios y mezcla de óleo para una abstracción expresiva."
    },
    {
        id: 12,
        title: "print monocromo minimalista",
        price: 180.0,
        category: "print",
        stock: 30,
        img: "https://placehold.co/200x200",
        color: "#dddddd",
        description: "Diseño en blanco y negro con énfasis en el espacio negativo."
    },
    {
        id: 13,
        title: "grafito figura humana",
        price: 310.0,
        category: "grafito",
        stock: 14,
        img: "https://placehold.co/200x200",
        color: "#bbbbbb",
        description: "Estudio anatómico en grafito con líneas precisas y volumen."
    },
    {
        id: 14,
        title: "collage experimental",
        price: 530.0,
        category: "collage",
        stock: 8,
        img: "https://placehold.co/200x200",
        color: "#ffdddd",
        description: "Superposición de materiales y texturas para un resultado disruptivo."
    },
    {
        id: 15,
        title: "pintura acrílica paisaje",
        price: 650.0,
        category: "pintura",
        stock: 10,
        img: "https://placehold.co/200x200",
        color: "#ddffaa",
        description: "Paisaje con acrílico, pinceladas sueltas y atmósfera luminosa."
    },
    {
        id: 16,
        title: "print colorido abstracto",
        price: 210.0,
        category: "print",
        stock: 18,
        img: "https://placehold.co/200x200",
        color: "#aaddff",
        description: "Formas orgánicas y paleta vibrante en impresión digital."
    },
    {
        id: 17,
        title: "grafito boceto arquitectónico",
        price: 370.0,
        category: "grafito",
        stock: 13,
        img: "https://placehold.co/200x200",
        color: "#cccccc",
        description: "Estructuras y perspectivas en grafito con trazos técnicos."
    },
    {
        id: 18,
        title: "collage con texturas naturales",
        price: 490.0,
        category: "collage",
        stock: 9,
        img: "https://placehold.co/200x200",
        color: "#ffeeaa",
        description: "Papeles artesanales y fibras integradas en una composición orgánica."
    },
    {
        id: 19,
        title: "pintura óleo retrato",
        price: 780.0,
        category: "pintura",
        stock: 4,
        img: "https://placehold.co/200x200",
        color: "#aaffee",
        description: "Retrato al óleo con modelado suave y mirada intensa."
    },
    {
        id: 20,
        title: "print geométrico en blanco y negro",
        price: 190.0,
        category: "print",
        stock: 22,
        img: "https://placehold.co/200x200",
        color: "#eeeeee",
        description: "Patrones geométricos en alto contraste para impacto visual."
    },
    {
        id: 21,
        title: "grafito retrato clásico",
        price: 330.0,
        category: "grafito",
        stock: 16,
        img: "https://placehold.co/200x200",
        color: "#dddddd",
        description: "Retrato tradicional con sombreado gradual y detalle fino."
    },
    {
        id: 22,
        title: "collage digital futurista",
        price: 560.0,
        category: "collage",
        stock: 7,
        img: "https://placehold.co/200x200",
        color: "#ffccff",
        description: "Capas digitales y motivos tecnológicos en una estética futurista."
    },
    {
        id: 23,
        title: "pintura acrílica abstracta",
        price: 700.0,
        category: "pintura",
        stock: 6,
        img: "https://placehold.co/200x200",
        color: "#ccffaa",
        description: "Gestualidad y manchas de color que sugieren movimiento."
    },
    {
        id: 24,
        title: "print tipográfico colorido",
        price: 230.0,
        category: "print",
        stock: 28,
        img: "https://placehold.co/200x200",
        color: "#aaffdd",
        description: "Tipografías combinadas con paleta alegre y jerarquías claras."
    },
    {
        id: 25,
        title: "grafito paisaje urbano",
        price: 360.0,
        category: "grafito",
        stock: 12,
        img: "https://placehold.co/200x200",
        color: "#bbbbbb",
        description: "Escena citadina en grafito con enfoque en arquitectura y tránsito."
    },
    {
        id: 26,
        title: "collage con elementos tipográficos",
        price: 510.0,
        category: "collage",
        stock: 8,
        img: "https://placehold.co/200x200",
        color: "#ffeeee",
        description: "Letras recortadas y símbolos integrados en una composición dinámica."
    },
    {
        id: 27,
        title: "pintura óleo paisaje marino",
        price: 820.0,
        category: "pintura",
        stock: 5,
        img: "https://placehold.co/200x200",
        color: "#aaddcc",
        description: "Mar y cielo en óleo con veladuras y profundidad cromática."
    },
    {
        id: 28,
        title: "print abstracto monocromo",
        price: 200.0,
        category: "print",
        stock: 24,
        img: "https://placehold.co/200x200",
        color: "#cccccc",
        description: "Formas abstractas en escala de grises con textura sutil."
    },
    {
        id: 29,
        title: "grafito estudio de manos",
        price: 340.0,
        category: "grafito",
        stock: 10,
        img: "https://placehold.co/200x200",
        color: "#cfcfcf",
        description: "Serie de manos en distintas poses con detalle anatómico."
    },
    {
        id: 30,
        title: "collage botánico",
        price: 540.0,
        category: "collage",
        stock: 9,
        img: "https://placehold.co/200x200",
        color: "#e6ffcc",
        description: "Hojas y flores recortadas combinadas con texturas naturales."
    }
]

export default products