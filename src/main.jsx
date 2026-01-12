import { createRoot } from "react-dom/client"
import "./index.css"
import App from "./App.jsx"
//* Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'
// opcional, para NavBar colapsable, modals, tooltips
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

// vinculo con html la const
const rootDiv = document.getElementById("root")

createRoot(rootDiv).render(
  <App />
)
