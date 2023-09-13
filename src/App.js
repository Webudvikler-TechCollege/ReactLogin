/**
 * Component med login form.
 * Skal wrappes i AuthProvider som er sat ind i index.js
 */
import { useForm } from "react-hook-form";
import "./App.scss"
import { useAuth } from "./Components/Providers/AuthProvider"
import axios from "axios"

function App() {
  // Destructor loginData + setter fra useAuth
  const { loginData, setLoginData } = useAuth()
  // Destructor elementer fra useForm
  const { register, handleSubmit, formState: { errors } } = useForm();

  /**
   * Kaldes når form submittes
   * Samler form input values og kalder API endpoint med et POST request
   * @param {object} form Form som javascript objekt 
   */
  const onSubmit = async form => {
    // Samler data med URLSearchParams API
    const formData = new URLSearchParams()
    formData.append("username", form.username)
    formData.append("password", form.password)

    try {
      // Kalder API
      const result = await axios.post("http://localhost:3000/login",formData)
      if(result.data) {
        // Gemmer json retursvar i sessionstorage
        sessionStorage.setItem("token", JSON.stringify(result.data))
        // Skriver json retursvar til tilstandsvariabel loginData
        setLoginData(result.data)  
      }
    } catch (error) {
        console.log(`Kunne ikke logge ind: ${error}`);
    }
  }

  /**
   * Kaldes ved klik på logout knap
   */
  const logOut = () => {
    // Fjerner login info fra session storage
    sessionStorage.removeItem("token")
    // Nulstiller tilstandsvariabel
    setLoginData("")
  }

  return (
    <div>
      {/* Vis form hvis loginData er false */}
      {!loginData && !loginData.username ? (
        // Sætter onSubmit event med closure function
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            {/* Input username med form hook settings */}
            <label htmlFor="username">Brugernavn: </label>
            <input placeholder="Indtast brugernavn" {...register('username', { required: true })} />
            {/* Udskriver valideringsfejl hvis der er nogle */}            
            {errors.username && <span className="error">Du skal indtaste dit brugernavn</span>}
          </div>
          <div>
            {/* Input password med form hook settings */}
            <label htmlFor="password">Adgangskode: </label>
            <input placeholder="Indtast password" {...register('password', { required: true })} />
            {/* Udskriver valideringsfejl hvis der er nogle */}            
            {errors.password && <span className="error">Du skal indtaste din adgangskode</span>}
          </div>
          <div>
            <button type="submit">Send</button>
          </div>
        </form>
      ) : (
        // Vis logindata hvis bruger er logget ind
        <div>
          <p>
            Du er logget ind som{" "}
            {`${loginData.user.firstname} ${loginData.user.lastname} `}
          </p>
          <button onClick={logOut}>Log ud</button>
        </div>
      )}
    </div>
  )
}

export default App
