import { useNavigate } from "react-router-dom";
import '../styles/Card.scss';

function Card({ data }) {
  const navigate = useNavigate();
  const onClick = (item) => {
    navigate(`/logement/${item.id}`, { state: { item } });
  };
  return (
    <div className="card" onClick={() => onClick(data)}>
      <img src={data.cover} alt={data.title} className="card__image" />
      <h3 className="card__title">{data.title}</h3>
    </div>
  );
}

export default Card;