import logo from '../assets/pictures/logo.svg';
import '../styles/Footer.scss';

function Footer() {
  return (
    <footer className="footer">
        <div className="footer-logo"><img src={logo} alt="Kasa Logo" /></div>
      <p>&copy; 2020 Kasa. All rights reserved.</p>
    </footer>
  );
}

export default Footer;