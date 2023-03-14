import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import About from "../pages/jsx/about";
import Apartments from "../pages/jsx/apartments";
import Error from "../pages/jsx/error";
import Home from "../pages/jsx/home";

function App(){
  return(
    <Router>
      <Header/>
      <Routes>
          <Route path="/about" element={<About/>}/>
          <Route path="products/:productId" element={<Apartments/>}/>
          <Route path="*" element={<Error/>}/>
          <Route path="/" element={<Home/>}/>
      </Routes>
      <Footer/>
    </Router>
  )
}

export default App;