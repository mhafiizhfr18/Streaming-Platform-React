import "../App.css"
import { NavLink } from "react-router";
import Logo1 from "../assets/Logo/Logo.png";
import { useState } from "react";

function Footer() {
  const [genreOpen, setGenreOpen] = useState(false);
  const [helpOpen, setHelpOpen] = useState(false);

  return (
    <div className="footer">
      <div className="footer-logo">
        <NavLink to="home-page.html">
          <img src={Logo1} alt=""></img>
        </NavLink>
        <p className="copyright">@2023 Chill All Rights Reserved.</p>
      </div>

      <div className="footer-menu">
        <button type="button" className="footer-title" onClick={() => setGenreOpen(!genreOpen)}>
          <p>Genre</p>
          <span className="material-symbols-outlined footer-arrow">
            chevron_right
          </span>
        </button>

        <ul className={genreOpen ? "show" : ""}>
          <li>
            <NavLink to="#">Aksi</NavLink>
          </li>
          <li>
            <NavLink to="#">Anak-anak</NavLink>
          </li>
          <li>
            <NavLink to="#">Anime</NavLink>
          </li>
          <li>
            <NavLink to="#">Britania</NavLink>
          </li>

          <li>
            <NavLink to="#">Drama</NavLink>
          </li>
          <li>
            <NavLink to="#">Fantasi Ilmiah & Fantasi</NavLink>
          </li>
          <li>
            <NavLink to="#">Kejahatan</NavLink>
          </li>
          <li>
            <NavLink to="#">KDrama</NavLink>
          </li>

          <li>
            <NavLink to="#">Komedi</NavLink>
          </li>
          <li>
            <NavLink to="#">Petualangan</NavLink>
          </li>
          <li>
            <NavLink to="#">Perang</NavLink>
          </li>
          <li>
            <NavLink to="#">Romantis</NavLink>
          </li>

          <li>
            <NavLink to="#">Sains & Alam</NavLink>
          </li>
          <li>
            <NavLink to="#">Thriller</NavLink>
          </li>
        </ul>
      </div>

      <div className="footer-help">
        <button type="button" className="footer-title" onClick={() => setHelpOpen(!helpOpen)}>
          <p>Bantuan</p>
          <span className="material-symbols-outlined footer-arrow">
            chevron_right
          </span>
        </button>

        <ul className={helpOpen ? "show" : ""}>
          <li>
            <NavLink to="#">FAQ</NavLink>
          </li>
          <li>
            <NavLink to="#">Kontak Kami</NavLink>
          </li>
          <li>
            <NavLink to="#">Privasi</NavLink>
          </li>
          <li>
            <NavLink to="#">Syarat & Ketentuan</NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;