import '../styles/Header.scss';
import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <h1>Kasa</h1>
      <nav>
        <ul>
          <li><Link to="/">Accueil</Link></li>
          <li><Link to="/about">À Propos</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;