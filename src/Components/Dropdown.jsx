import { useState, useRef } from 'react';
import '../styles/Dropdown.scss';

function Dropdown({ title, children }) {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef(null);

  const toggleDropdown = (e) => {
    e.stopPropagation();
    setIsOpen(!isOpen);
  }
  
  return (
    <div className="dropdown">
      <div className="dropdown-title">{title}
        <button className="dropdown-button" aria-label="Toggle Dropdown" onClick={toggleDropdown}>
          <i className={`fa-solid fa-chevron-up ${isOpen ? 'open' : ''}`}></i>
        </button>
      </div>
      <div 
        ref={contentRef}
        className={`dropdown-content ${isOpen ? 'open' : ''}`}
        style={{
          maxHeight: isOpen ? `${contentRef.current.scrollHeight}px` : '0px'
        }}>
        {children}
      </div>
    </div>
  );
}

export default Dropdown;