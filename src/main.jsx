import { createRoot } from "react-dom/client"
import "./index.css"
import App from "./App.jsx"

// vinculo con html la const
const rootDiv = document.getElementById("root")

createRoot(rootDiv).render(
  <App />
)
