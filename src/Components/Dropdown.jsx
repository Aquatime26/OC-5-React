import '../styles/Dropdown.scss';

function Dropdown({ title, children }) {
  
  return (
    <details className="dropdown">
      <summary className="dropdown-title">{title}</summary>
      <div className="dropdown-content">{children}</div>
    </details>
  );
}

export default Dropdown;