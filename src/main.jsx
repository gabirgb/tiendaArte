// importo la f para crear el root de react
import { createRoot } from "react-dom/client"
import "./index.css"
// importo el contenido de mi aplicacion desde aca
import App from "./App.jsx"

// vinculo con html la const
const rootDiv = document.getElementById("root")

createRoot(rootDiv).render(
  //con el metodo render le digo a react qué componente debe mostrar. render != compilar
  <App />, // SIEMPRE hay q cerrar los tags en react, si no tiene tag de cierre se hace autocierre.
)

/* *
! No tocar el archivo main.jsx que se arma por defecto, esto es solo para mostrar qué lineas son indispensables.

*/