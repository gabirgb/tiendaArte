// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY, //importo las claves desde las variables de entorno de vercel para no expornerlas en github. Las variables deben empezar con VITE_ para que se inyecten en el frontend.

    authDomain: "tiendaarte-cf713.firebaseapp.com",
    projectId: "tiendaarte-cf713",
    storageBucket: "tiendaarte-cf713.firebasestorage.app",
    messagingSenderId: "855483804360",
    appId: import.meta.env.VITE_FIREBASE_APP_ID
};

export default firebaseConfig