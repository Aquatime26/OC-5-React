import '../styles/CardGrid.scss';
import Card from "./Card";

function CardGrid({ items, onCardClick }) {
  return (
    <div className="card-grid">
      {items.map(item => (
        <Card key={item.id} data={item} onClick={onCardClick} />
      ))}
    </div>
  );
}

export default CardGrid;

// import '../styles/CardGrid.scss';
// import Card from "./Card";

// function CardGrid({ items }) {
//   return (
//     <div className="card-grid">
//       {items.map(item => (
//         <Card key={item.id} data={item} />
//       ))}
//     </div>
//   );
// }

// export default CardGrid;