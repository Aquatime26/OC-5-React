import { useEffect, useState } from 'react';
import Card from './Card';

function CardList() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('/data.json')
      .then(res => res.json())
      .then(json => setData(json))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="card-list">
      {data.map(item => (
        <Card key={item.id} data={item} />
      ))}
    </div>
  );
}

export default CardList;