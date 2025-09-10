import { Routes, Route } from "react-router-dom";

import Home from "./Components/Home";
import About from "./Components/About";
import Error from "./Components/Error404";
import Header from "./Components/Header";
import Footer from "./Components/Footer"; 

import './styles/App.scss'


function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        {/* <Route path="/logement/:id" element={<Logement />} /> */}
        <Route path="/error" element={<Error />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;