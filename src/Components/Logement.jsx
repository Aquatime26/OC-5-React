// import { useState } from "react";
// import { useParams, Navigate } from "react-router-dom";
// import Dropdown from "./Dropdown";
// import "../styles/Logement.scss";

// function Logement() {
//   const { id } = useParams();
//   const item = data.find((logement) => logement.id === id);

//   const [currentIndex, setCurrentIndex] = useState(0);

//   if (!item) {
//     // Si l'id n'existe pas → redirection vers page erreur
//     return <Navigate to="/error" replace />;
//   }

//   const prevImage = () => {
//     setCurrentIndex(
//       (currentIndex - 1 + item.pictures.length) % item.pictures.length
//     );
//   };

//   const nextImage = () => {
//     setCurrentIndex((currentIndex + 1) % item.pictures.length);
//   };

//   return (
//     <div className="logement-page">
//       {/* Carrousel */}
//       <div className="logement-carousel">
//         <img
//           src={item.pictures[currentIndex]}
//           alt={`${item.title} - Image ${currentIndex + 1}`}
//           className="logement-image"
//         />
//         {item.pictures.length > 1 && (
//           <>
//             <button className="carousel-button prev" onClick={prevImage}>
//               &lt;
//             </button>
//             <button className="carousel-button next" onClick={nextImage}>
//               &gt;
//             </button>
//             <div className="carousel-counter">
//               {currentIndex + 1} / {item.pictures.length}
//             </div>
//           </>
//         )}
//       </div>

//       {/* Infos logement */}
//       <div className="logement-header">
//         <div className="logement-info">
//           <h2 className="logement-title">{item.title}</h2>
//           <p className="logement-location">{item.location}</p>
//           <ul className="logement-tags">
//             {item.tags.map((tag, i) => (
//               <li key={i} className="logement-tag">
//                 {tag}
//               </li>
//             ))}
//           </ul>
//         </div>

//         <div className="logement-host-rating">
//           <div className="logement-host">
//             <p className="host-name">{item.host.name}</p>
//             <img
//               src={item.host.picture}
//               alt={item.host.name}
//               className="host-picture"
//             />
//           </div>
//           <div className="logement-rating">
//             {"★".repeat(item.rating)}{"☆".repeat(5 - item.rating)}
//           </div>
//         </div>
//       </div>

//       {/* Dropdowns */}
//       <div className="logement-dropdowns">
//         <Dropdown title="Description">
//           <p>{item.description}</p>
//         </Dropdown>

//         <Dropdown title="Équipements">
//           <ul>
//             {item.equipments.map((equip, i) => (
//               <li key={i}>{equip}</li>
//             ))}
//           </ul>
//         </Dropdown>
//       </div>
//     </div>
//   );
// }

// export default Logement;