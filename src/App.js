/**
 * App Component.
 * Skal wrappes i AuthProvider som er sat ind i index.js
 */
import "./App.scss"
import { Link } from "react-router-dom";
import AppRouter from "./Components/Router/Router";

function App() {
  return (
    <div>
        <nav>
          <ul>
            <li><Link to="/">Forside</Link></li>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/post">Post</Link></li>
          </ul>
        </nav>
        <AppRouter />
    </div>
  )
}

export default App
