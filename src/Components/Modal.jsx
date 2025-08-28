// function Modal({ item, onClose }) {
//   if (!item) return null;

//   return (
//     <div className="modal-overlay" onClick={onClose}>
//       <div className="modal-content" onClick={e => e.stopPropagation()}>
//         <button className="modal-close" onClick={onClose}>X</button>
//         <h2>{item.title}</h2>
//         <img src={item.cover} alt={item.title} className="modal-image" />
//         <p>{item.description}</p>
//         <p><strong>Hôte :</strong> {item.host.name}</p>
//         <ul>
//           {item.equipments.map((eq, i) => <li key={i}>{eq}</li>)}
//         </ul>
//         <div className="modal-tags">
//           {item.tags.map((tag, i) => (
//             <span key={i} className="modal-tag">{tag}</span>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Modal;
import '../styles/Modal.scss';

function Modal({ item, onClose }) {
  if (!item) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>X</button>

        {/* Image principale */}
        <img src={item.cover} alt={item.title} className="modal-image" />

        <div className="modal-header">
          {/* Bloc gauche : titre + localisation + tags */}
          <div className="modal-info">
            <h2 className="modal-title">{item.title}</h2>
            <p className="modal-location">{item.location}</p>
            <ul className="modal-tags">
              {item.tags.map((tag, i) => (
                <li key={i} className="modal-tag">{tag}</li>
              ))}
            </ul>
          </div>

          {/* Bloc droit : host + rating */}
          <div className="modal-host-rating">
            <div className="modal-host">
              <p className="host-name">{item.host.name}</p>
              <img
                src={item.host.picture}
                alt={item.host.name}
                className="host-picture"
              />
            </div>
            <div className="modal-rating">
              {/* Exemple basique avec étoiles Unicode */}
              {"★".repeat(item.rating)}{"☆".repeat(5 - item.rating)}
            </div>
          </div>
        </div>

        {/* Menus déroulants */}
        <div className="modal-dropdowns">
          <details>
            <summary>Description</summary>
            <p>{item.description}</p>
          </details>

          <details>
            <summary>Équipements</summary>
            <ul>
              {item.equipments.map((eq, i) => (
                <li key={i}>{eq}</li>
              ))}
            </ul>
          </details>
        </div>
      </div>
    </div>
  );
}

export default Modal;