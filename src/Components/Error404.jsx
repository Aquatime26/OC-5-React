import { Link } from "react-router-dom";
import '../styles/Error404.scss';

function Error404() {
  return (
    <div className="error-page">
      <h1 className="error-code">404</h1>
      <p className="error-message">Oups ! La page que vous recherchez n'existe pas.</p>
      <Link to="/" className="back-home">Retourner vers la page d'accueil</Link>
    </div>
  );
}

export default Error404;