import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import PageModulo1 from "./pages/PageModulo1"


function App() {
 

  return (
    <>
      <Routes>
        <Route path="/" element={ <Home></Home> } />
        <Route path="modulo1" element={ <PageModulo1></PageModulo1>} />
        
      </Routes>
    </>
  )
}

export default App
