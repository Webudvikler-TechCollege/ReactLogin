/**
 * I denne fil kan vi pakke vores App komponent ind i
 * higher ordered components som browserrouter og diverse
 * providers og dermed give child components adgang til deres
 * værdier og funktionalitet
 */
import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
import { AuthProvider } from "./Components/Providers/AuthProvider"
import { BrowserRouter } from "react-router-dom"

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <React.StrictMode>
    <AuthProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </AuthProvider>
  </React.StrictMode>
)
