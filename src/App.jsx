//import { useState } from 'react'
//import './App.css'
import CustomRoutes from "./routers/CustomRoutes"
import { BrowserRouter as Router } from "react-router-dom"
import Gallery from "./pages/Gallery"
import Skills from "./pages/Skills"
function App() {
  //const [count, setCount] = useState(0)

  return (
    <>
      <Router>
         
        <CustomRoutes/>
      </Router>
    </>
  )
}

export default App
