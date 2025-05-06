import {
  Routes,
  Route,
} from "react-router-dom";
import About from "./components/About"
import Hero from "./components/Hero"
import NavBar from "./components/NavBar"
import Projects from "./components/Projects"
//import Skills from "./components/Skills"
import Designs from "./components/Designs";

function App() {
  
  return (
    <>
      <NavBar />
      <Routes>
        <Route 
          path="/" 
          element={<Hero />} />
        <Route 
          path="/about" 
          element={<About />} />
        <Route 
          path="/projects" 
          element={<Projects />} />
        <Route 
          path="/designs" 
          element={<Designs />} />
        
      </Routes>
    </>
  )
}

export default App
