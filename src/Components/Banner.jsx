import '../styles/Banner.scss';

function Banner({image, text}) {
  return (
    <div 
      className="banner"
      style={{ backgroundImage: `url(${image})` }}
    >
      {text && <h2>{text}</h2>}
    </div>
  );
}

export default Banner;