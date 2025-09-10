import '../styles/Header.scss';
import { Link } from "react-router-dom";
import logo from '../assets/pictures/logorouge.svg';

function Header() {
  return (
    <header>
      <div className="header-logo">
         <img src={logo} alt="Kasa Logo" />
      </div>
      <nav>
        <ul>
          <li><Link to="/">Accueil</Link></li>
          <li><Link to="/about">À Propos</Link></li>
          <li><Link to="/error">Test 404</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;