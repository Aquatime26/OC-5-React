import { useEffect, useState } from "react";
import Banner from "./Banner";
import homeBanner from '../assets/pictures/BannerPicture1.webp';
import CardGrid from "./CardGrid";

function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('/data.json')
      .then(res => res.json())
      .then(json => setData(json))
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      <Banner image={homeBanner} text="Chez vous et partout ailleurs" />
      <CardGrid items={data} />
    </div>
  );
}


export default Home;