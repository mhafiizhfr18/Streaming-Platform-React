import "../App.css"
import VolumeOff from "../assets/Icon/volume_off.svg";
import { imagesBanner } from "../components/Images.jsx";
import { NavLink } from "react-router";


function MovieBanner({ banner, title, description, showGenre }) {
  return (
    <div
      className="hero"
      style={{ backgroundImage: `url(${imagesBanner[banner]})` }}
    >
      {showGenre && <BannerHover />}

      <div className="hero-content">
        <div className="hero-left">
          <h1>{title}</h1>
          <p>{description}</p>
          <div className="hero-button">
            <button className="btn-primary">Mulai</button>
            <button className="btn-secondary">Selengkapnya</button>
            <span className="btn-age">18+</span>
          </div>
        </div>
        <div className="hero-right">
          <button className="btn-third">
            <img src={VolumeOff} alt="Volume Off"></img>
          </button>
        </div>
      </div>
    </div>
  );
}
export default MovieBanner

export function BannerHover() {
  return (
    <div className="genre-button">
      <div className="genre-header">
        <span>Genre</span>
        <span className="material-symbols-outlined">keyboard_arrow_down</span>
      </div>

      <div className="genre-menu">
        <NavLink to="/mylist">Aksi</NavLink>
        <NavLink to="/mylist">Anak-anak</NavLink>
        <NavLink to="/mylist">Anime</NavLink>
        <NavLink to="/mylist">Britania</NavLink>
        <NavLink to="/mylist">Drama</NavLink>
        <NavLink to="/mylist">Fantasi Ilmiah & Fantasi</NavLink>
        <NavLink to="/mylist">Kejahatan</NavLink>

        <NavLink to="/mylist">KDrama</NavLink>
        <NavLink to="/mylist">Komedi</NavLink>
        <NavLink to="/mylist">Petualangan</NavLink>
        <NavLink to="/mylist">Perang</NavLink>
        <NavLink to="/mylist">Romantis</NavLink>
        <NavLink to="/mylist">Sains & Alam</NavLink>
        <NavLink to="/mylist">Thriller</NavLink>
      </div>
    </div>
  );
}