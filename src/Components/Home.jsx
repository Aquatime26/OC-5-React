import { useEffect, useState } from "react";
import Banner from "./Banner";
import homeBanner from '../assets/pictures/BannerPicture1.webp';
import CardGrid from "./CardGrid";
import Modal from "./Modal";

function Home() {
  const [data, setData] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);

  useEffect(() => {
    fetch('/data.json')
      .then(res => res.json())
      .then(json => setData(json))
      .catch(err => console.error(err));
  }, []);

  const handleCardClick = (item) => setSelectedItem(item);
  const handleCloseModal = () => setSelectedItem(null);

  return (
    <div>
      <Banner image={homeBanner} text="Chez vous et partout ailleurs" />
      <CardGrid items={data} onCardClick={handleCardClick} />
      <Modal item={selectedItem} onClose={handleCloseModal} />
    </div>
  );
}


export default Home;