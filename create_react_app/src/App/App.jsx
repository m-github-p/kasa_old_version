//Import du routing depuis le React Router DOM.
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

//Import des composants "Footer" et "Header".
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";

//Import des pages de l'application.
import About from "../pages/jsx/about";
import Apartments from "../pages/jsx/apartments";
import Error from "../pages/jsx/error";
import Home from "../pages/jsx/home";

//Fonction de sélection de routes, selon la page sélectionnée.
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

//Export de l'application, pour un usage externe.
export default App;