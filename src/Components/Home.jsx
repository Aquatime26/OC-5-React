import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Banner from "./Banner";
import homeBanner from '../assets/pictures/BannerPicture1.webp';
import CardGrid from "./CardGrid";

function Home() {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch('/data.json')
      .then(res => res.json())
      .then(json => setData(json))
      .catch(err => console.error(err));
  }, []);

   const handleCardClick = (item) => {
    navigate(`/logement/${item.id}`, { state: { item } });
  };


  return (
    <div>
      <Banner image={homeBanner} text="Chez vous et partout ailleurs" />
      <CardGrid items={data} onCardClick={handleCardClick} />
    </div>
  );
}


export default Home;