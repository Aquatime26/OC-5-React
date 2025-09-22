import '../styles/Header.scss';
import { Link, useLocation } from "react-router-dom";
import logo from '../assets/pictures/logorouge.svg';

function Header() {
  const location = useLocation();

  return (
    <header>
      <div className="header-logo">
         <img src={logo} alt="Kasa Logo" />
      </div>
      <nav>
        <ul>
          <li><Link to="/" style={{ textDecoration: location.pathname === '/' ? 'underline' : 'none' }}>Accueil</Link></li>
          <li><Link to="/about" style={{ textDecoration: location.pathname === '/about' ? 'underline' : 'none'}}>À Propos</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;