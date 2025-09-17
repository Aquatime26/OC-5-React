import { Routes, Route } from "react-router-dom";

import Home from "./Components/Home";
import About from "./Components/About";
import Error from "./Components/Error404";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Logement from "./Components/Logement";

import './styles/App.scss'


function App() {
  return (
    <>
      <div className="app-content">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/logement/:id" element={<Logement />} />
          <Route path="/404" element={<Error />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </div>  
      <Footer />
    </>
  );
}

export default App;