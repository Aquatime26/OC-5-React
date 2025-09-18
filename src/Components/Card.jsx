
import '../styles/Card.scss';

function Card({ data, onClick }) {
  return (
    <div className="card" onClick={() => onClick(data)}>
      <img src={data.cover} alt={data.title} className="card__image" />
      <h3 className="card__title">{data.title}</h3>
    </div>
  );
}

export default Card;