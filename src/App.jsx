import './styles/App.scss'
import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import About from "./components/About";
import Error from "./components/Error404";
import Header from "./components/Header";
import Footer from "./components/Footer"; // Assuming you have a Footer component

function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Error />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;