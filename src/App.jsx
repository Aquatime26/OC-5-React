import { useEffect, useState } from 'react'
import './styles/App.css'


function App() {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((json) => setData(json))
      .catch((err) => console.error("Erreur JSON :", err));
  }, []);

  return (
    <>
      <header>
        <h1>Kasa</h1>
      </header>

      <nav>
        <ul>
          <li><a href="index.html">Accueil</a></li>
          <li><a href="about.html">A Propos</a></li>
        </ul>
      </nav>

      <main>
        <section>
          <h2>Données depuis le JSON :</h2>
          {data ? (
            <pre>{JSON.stringify(data, null, 2)}</pre>
          ) : (
            <p>Chargement...</p>
          )}
        </section>
      </main>

      <footer>
        <h2>Kasa</h2>
        <p>© 2023 Kasa. All rights reserved.</p>
      </footer>
    </>
  );
}

export default App
