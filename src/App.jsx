import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import PageModulo1 from "./pages/PageModulo1"
import ScrollToTop from "./components/ScrollToTop" //componente para colocar en parte superior la redireccion


function App() {
 

  return (
    <>
     <ScrollToTop/> 
      <Routes>
        <Route path="/" element={ <Home></Home> } />
        <Route path="/modulo1" element={ <PageModulo1></PageModulo1>} />
        
      </Routes>
    </>
  )
}

export default App
