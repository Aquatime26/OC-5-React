import './styles/App.scss'
import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/About";
import Error from "./Components/Error404";
import Header from "./Components/Header";
import Banner from "./Components/Banner";
import CardList from "./Components/Cardlist";
import Footer from "./Components/Footer"; 

function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Banner />
      <CardList />
      <Footer />
    </>
  );
}

export default App;