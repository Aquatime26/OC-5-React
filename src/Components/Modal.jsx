function Modal({ item, onClose }) {
  if (!item) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>X</button>
        <h2>{item.title}</h2>
        <img src={item.cover} alt={item.title} className="modal-image" />
        <p>{item.description}</p>
        <p><strong>Hôte :</strong> {item.host.name}</p>
        <ul>
          {item.equipments.map((eq, i) => <li key={i}>{eq}</li>)}
        </ul>
        <div className="modal-tags">
          {item.tags.map((tag, i) => (
            <span key={i} className="modal-tag">{tag}</span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Modal;