import '../styles/Modal.scss';
import { useState, useEffect } from 'react';

function Modal({ item, onClose }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
  
  if (item) {
    setCurrentIndex(0); // Reset à la première image de chaque logement sélectionné
  }
  }, [item]);

  if (!item) return null; // Ne rien afficher si aucun item n'est sélectionné

  const prevImage =(e) => {
    e.stopPropagation();
    setCurrentIndex((currentIndex - 1 + item.pictures.length) % item.pictures.length);
  }

  const nextImage = (e) => {
    e.stopPropagation(); 
    setCurrentIndex((currentIndex + 1) % item.pictures.length);
  }

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>

        {/* Carrousel d'images */}
        <div className="modal-carousel">
          <img
            src={item.pictures[currentIndex]}
            alt={`${item.title} - Image ${currentIndex + 1}`}
            className="modal-image"
          />
          {item.pictures.length > 1 && (
            <>
              <button className="carousel-button prev" onClick={prevImage}>&lt;</button>
              <button className="carousel-button next" onClick={nextImage}>&gt;</button>
              <div className="carousel-counter">
                {currentIndex + 1} / {item.pictures.length}
              </div>
            </>
          )}
        </div>

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