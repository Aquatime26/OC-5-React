import { useEffect, useState } from 'react';
import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/About";
import Error from "./Components/Error404";
import Header from "./Components/Header";
import Banner from "./Components/Banner";
import Footer from "./Components/Footer"; 
import CardGrid from "./Components/CardGrid";
import Modal from "./Components/Modal";
import './styles/App.scss'

function App() {
  const [data, setData] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);

  useEffect(() => {
    fetch('/data.json')
      .then(res => res.json())
      .then(json => setData(json))
      .catch(err => console.error(err));
  }, []);

  const handleCardClick = (item) => setSelectedItem(item); // ouvre la modale
  const handleCloseModal = () => setSelectedItem(null);    // ferme la modale

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Banner />

      <CardGrid items={data} onCardClick={handleCardClick} />
      <Modal item={selectedItem} onClose={handleCloseModal} />

      <Footer />
    </>
  );
}

export default App;