import { useEffect, useState } from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import Dropdown from "./Dropdown";
import "../styles/Logement.scss";

function Logement() {
  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  
  const [item, setItem] = useState(location.state?.item || null);
  const [loading, setLoading] = useState(!item);
  const [error, setError] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    let isMounted = true; // Pour éviter les fuites de mémoire
    if (item) {
        setCurrentIndex(0); // Reset à la première image de chaque logement sélectionné
        setLoading(false);
        return;
    }

  setLoading(true);
    fetch("/data.json")
        .then((res) => res.json())
        .then((json) => {
            if (!isMounted) return;
            const foundItem = json.find((entry) => entry.id === id);
            if (foundItem) {
                setItem(foundItem);
                setCurrentIndex(0);
            } else {
                navigate("/404", { replace: true, state: { from: location } });
            }
        })
        .catch((err) => {isMounted && setError(err.message);})
        .finally(() => {isMounted && setLoading(false);});

    return () => { isMounted = false; };
  }, [id, item, navigate, location]);

  if (loading) return <div className="loading">Chargement...</div>;
  if (error) return <div className="error">Erreur: {error}</div>;
  if (!item) return null;
  

  const prevImage = () => {
    setCurrentIndex(
      (currentIndex - 1 + item.pictures.length) % item.pictures.length
    );
  };

  const nextImage = () => {
    setCurrentIndex((currentIndex + 1) % item.pictures.length);
  };

  return (
    <div className="logement-page">
      {/* Carrousel */}
      <div className="logement-carousel">
        <img
          src={item.pictures[currentIndex]}
          alt={`${item.title} - Image ${currentIndex + 1}`}
          className="logement-image"
        />
        {item.pictures.length > 1 && (
          <>
            <button className="carousel-button prev" onClick={prevImage}>
              &lt;
            </button>
            <button className="carousel-button next" onClick={nextImage}>
              &gt;
            </button>
            <div className="carousel-counter">
              {currentIndex + 1} / {item.pictures.length}
            </div>
          </>
        )}
      </div>

      {/* Infos logement */}
      <div className="logement-header">
        <div className="logement-info">
          <h2 className="logement-title">{item.title}</h2>
          <p className="logement-location">{item.location}</p>
          <ul className="logement-tags">
            {item.tags.map((tag, i) => (
              <li key={i} className="logement-tag">
                {tag}
              </li>
            ))}
          </ul>
        </div>

        <div className="logement-host-rating">
          <div className="logement-host">
            <p className="host-name">{item.host.name}</p>
            <img
              src={item.host.picture}
              alt={item.host.name}
              className="host-picture"
            />
          </div>
          <div className="logement-rating">
            {"★".repeat(item.rating)}{"☆".repeat(5 - item.rating)}
          </div>
        </div>
      </div>

      {/* Dropdowns */}
      <div className="logement-dropdowns">
        <Dropdown title="Description">
          <p>{item.description}</p>
        </Dropdown>

        <Dropdown title="Équipements">
          <ul>
            {item.equipments.map((equip, i) => (
              <li key={i}>{equip}</li>
            ))}
          </ul>
        </Dropdown>
      </div>
    </div>
  );
}

export default Logement;