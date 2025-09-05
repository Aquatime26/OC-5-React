import Banner from "./Banner";
import aboutBanner from "../assets/pictures/BannerPicture2.webp";

function About() {
  return (
    <div>
      <Banner image={aboutBanner} text="À propos" />
      <p>
        Voici la page À propos. Tu peux présenter ton projet, ton parcours,
        ou toute information utile.
      </p>
    </div>
  );
}

export default About;