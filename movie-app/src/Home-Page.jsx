import "./App.css";
import { useRef, useState } from "react";

import Logo1 from "./assets/Logo/Logo.svg";
import Logo2 from "./assets/Logo/Logo-icon.svg";
import Profile from "./assets/Image/profile.png";
import VolumeOff from "./assets/Icon/volume_off.svg";

import { MovieCardLandscape, MovieCardPortrait } from "./Movie-Card.jsx";
import { NavLink } from "react-router";

export function HomePage() {
  return (
    <>
      <Navbar />
      <MovieBanner />
      <MovieContinue type="Film" />
      <MovieTopRated type="Film dan Series" />
      <MovieTrending type="Film" />
      <MovieNewRelease />
      <Footer />
    </>
  );
}

export function MyList() {
  return (
    <>
      <Navbar />
      <MovieMyList />
      <Footer />
    </>
  );
}
export function SeriesPage() {
  return (
    <>
      <Navbar />
      <MovieBanner />
      <SeriesContinue />
      <SeriesChill />
      <MovieTopRated type="Series" />
      <MovieTrending type="Series" />
      <MovieNewRelease />
      <Footer />
    </>
  );
}
export function MoviesPage() {
  return (
    <>
      <Navbar />
      <MovieBanner />
      <MovieContinue />
      <MovieChill />
      <MovieTopRated type="Film" />
      <MovieTrending type="Film" />
      <MovieNewRelease />
      <Footer />
    </>
  );
}

export function Navbar() {
  return (
    <div className="navbar">
      <div className="nav-left">
        <NavLink
          to="/home"
          className="navbar-logo"
        >
          <img
            className="logo-desktop"
            src={Logo1}
            alt="CHILL"
          ></img>
          <img
            className="logo-mobile"
            src={Logo2}
            alt="CHILL"
          ></img>
        </NavLink>

        <ul className="nav-menu">
          <li>
            <NavLink to="/series">Series</NavLink>
          </li>
          <li>
            <NavLink to="/movies">Film</NavLink>
          </li>
          <li>
            <NavLink to="/myList">Daftar Saya</NavLink>
          </li>
        </ul>
      </div>

      <div className="profile-menu">
        <NavLink to="/login">
          <img
            src={Profile}
            alt="Profile"
          ></img>
        </NavLink>
        <span className="material-symbols-outlined arrow">
          keyboard_arrow_down
        </span>

        <div className="dropdown-menu">
          <NavLink to="/login">
            <span className="material-symbols-outlined">person</span>
            Profil Saya
          </NavLink>

          <NavLink to="/upgrade">
            <span className="material-symbols-outlined">star</span>
            Ubah Premium
          </NavLink>

          <NavLink to="/logout">
            <span className="material-symbols-outlined">logout</span>
            Keluar
          </NavLink>
        </div>
      </div>
    </div>
  );
}
function MovieBanner() {
  return (
    <div className="hero">
      <div className="hero-content">
        <div className="hero-left">
          <h1>Avatar : The Way of Water</h1>
          <p>
            Set decades after the events of the first film, the story follows
            the Na'vi people and their struggle for survival against human
            invaders.
          </p>
          <div className="hero-button">
            <button className="btn-primary">Mulai</button>
            <button className="btn-secondary">Selengkapnya</button>
            <span className="btn-age">18+</span>
          </div>
        </div>
        <div className="hero-right">
          <button className="btn-third">
            <img
              src={VolumeOff}
              alt="Volume Off"
            ></img>
          </button>
        </div>
      </div>
    </div>
  );
}
function MovieRow({ children }) {
  const scrollRef = useRef(null);

  function scrollLeft() {
    scrollRef.current.scrollBy({
      left: -500,
      behavior: "smooth",
    });
  }

  function scrollRight() {
    scrollRef.current.scrollBy({
      left: 500,
      behavior: "smooth",
    });
  }

  return (
    <div className="movie-wrapper">
      <button
        className="css-arrow left material-symbols-outlined"
        onClick={scrollLeft}
      >
        arrow_back_ios
      </button>

      <div
        className="movie-scroll"
        ref={scrollRef}
      >
        <div className="movie-card">{children}</div>
      </div>

      <button
        className="css-arrow right material-symbols-outlined"
        onClick={scrollRight}
      >
        arrow_forward_ios
      </button>
    </div>
  );
}

function MovieContinue() {
  return (
    <section className="movie-section">
      <h3>Melanjutkan Tonton Film</h3>
      <MovieRow>
        <MovieCardLandscape
          folder="imagesBanner"
          id="dontlookup"
          title="Don't Look Up"
          rating="4.5"
          episode=""
          progress={60}
          duration="2j 18m"
          genre1="Dark Comedy"
          genre2="Fantasy"
          genre3="Drama"
        />
        <MovieCardLandscape
          folder="imagesBanner"
          id="allofusdead"
          title="All of Us are Dead"
          new="Episode Baru"
          progress={30}
          duration="2j 33m"
          rating="4.9"
          episode="Episode 1"
          genre1="Dark Comedy"
          genre2="Fantasy"
          genre3="Drama"
        />
        <MovieCardLandscape
          folder="imagesBanner"
          id="shazam"
          title="Shazam"
          rating="4.2"
          progress={55}
          duration="2j 12m"
          genre1="Action"
          genre2="Comedy"
          genre3="Pahlawan Super"
        />
        <MovieCardLandscape
          folder="imagesBanner"
          id="avatar"
          title="Avatar"
          rating="4.8"
          progress={29}
          duration="2j 41m"
          genre1="Sci-Fi"
          genre2="Action"
          genre3="Adventure"
        />
        <MovieCardLandscape
          folder="imagesBanner"
          id="fastx"
          title="Fast Furious X"
          rating="4.7"
          progress={29}
          duration="2j 21m"
          genre1="Aksi"
          genre2="Petualangan"
          genre3="Kriminal"
        />
        <MovieCardLandscape
          folder="imagesBanner"
          id="thelittlemermaid"
          title="Little Mermaid"
          rating="4.6"
          progress={29}
          duration="2j 15m"
          genre1="Musikal"
          genre2="Fantasi"
          genre3="Keluarga"
        />
        <MovieCardLandscape
          folder="imagesBanner"
          id="spiderman"
          progress={39}
          episode="2j 20m"
          genre1="Animasi"
          genre2="Pahlawan Super"
          genre3="Aksi"
        />
      </MovieRow>
    </section>
  );
}
function MovieTopRated(props) {
  return (
    <section className="movie-section">
      <h3>Top Rating {props.type} Hari Ini</h3>
      <MovieRow>
        <MovieCardPortrait
          folder="imagesCard"
          id="suzume"
          new="New Episode"
          age="10+"
          episode="2j 2m"
          genre1="Petualangan"
          genre2="Animasi"
          genre3="Fantasi"
        />
        <MovieCardPortrait
          folder="imagesCard"
          id="thetomorrowwar"
          age="13+"
          episode="2j 18m"
          genre1="Aksi"
          genre2="Fiksi Ilmiah"
          genre3="Militer"
        />
        <MovieCardPortrait
          folder="imagesCard"
          id="thebatman"
          age="13+"
          episode="2j 47m"
          genre1="Aksi"
          genre2="Kejahatan"
          genre3="Drama"
        />
        <MovieCardPortrait
          folder="imagesCard"
          id="amancalledotto"
          age="13+"
          episode="2j 6m"
          genre1="Drama"
          genre2="Komedi"
          genre3="Psikologikal"
        />
        <MovieCardPortrait
          folder="imagesCard"
          id="bighero6"
          age="13+"
          episode="1j 42m"
          genre1="Animasi"
          genre2="Aksi"
          genre3="Keluarga"
        />
        <MovieCardPortrait
          folder="imagesCard"
          id="doctorstrange"
          age="13+"
          episode="2j 6m"
          genre1="Aksi"
          genre2="Petualangan"
          genre3="Horor"
        />
        <MovieCardPortrait
          folder="imagesCard"
          id="antmanwasp"
          age="13+"
          episode="2j 4m"
          genre1="Petualangan"
          genre2="Pahlawan Super"
          genre3="Aksi"
        />
        <MovieCardPortrait
          folder="imagesCard"
          id="myheroacademia"
          age="13+"
          episode="8 Musim"
          genre1="Aksi"
          genre2="Fantasi"
          genre3="Pahlawan Super"
        />
      </MovieRow>
    </section>
  );
}
function MovieTrending(props) {
  return (
    <section className="movie-section">
      <h3>{props.type} Trending</h3>
      <MovieRow>
        <MovieCardPortrait
          folder="imagesCard"
          id="doctorstrange"
          top="Top 10"
          age="13+"
          episode="2j 6m"
          genre1="Aksi"
          genre2="Petualangan"
          genre3="Horor"
        />
        <MovieCardPortrait
          folder="imagesCard"
          id="blackadam"
          top="Top 10"
          age="13+"
          episode="2j 5m"
          genre1="Petualangan"
          genre2="Fantasi"
          genre3="Aksi"
        />
        <MovieCardPortrait
          folder="imagesCard"
          id="tedlasso"
          top="Top 10"
          new="Episode Baru"
          age="17+"
          episode="3 Musim"
          genre1="Komedi"
          genre2="Drama"
          genre3="Olahraga"
        />
        <MovieCardPortrait
          folder="imagesCard"
          id="spiderman"
          top="Top 10"
          age="SU"
          episode="2j 20m"
          genre1="Animasi"
          genre2="Pahlawan Super"
          genre3="Aksi"
        />
        <MovieCardPortrait
          folder="imagesCard"
          id="jurassicworld"
          top="Top 10"
          age="13+"
          episode="2j 26m"
          genre1="Fiksi Ilmiah"
          genre2="Petualangan"
          genre3="Aksi"
        />
        <MovieCardPortrait
          folder="imagesCard"
          id="baymax"
          top="Top 10"
          age="SU"
          episode="1j 42m"
          genre1="Petualangan"
          genre2="Fiksi Sains"
          genre3="Aksi"
        />
        <MovieCardPortrait
          folder="imagesCard"
          id="myheroacademia"
          top="Top 10"
          age="13+"
          episode="8 Musim"
          genre1="Aksi"
          genre2="Fantasi"
          genre3="Pahlawan Super"
        />
        <MovieCardPortrait
          folder="imagesCard"
          id="thelittlemermaid"
          top="Top 10"
          age="SU"
          episode="2j 15m"
          genre1="Musikal"
          genre2="Fantasi"
          genre3="Keluarga"
        />
      </MovieRow>
    </section>
  );
}
function MovieNewRelease() {
  return (
    <section className="movie-section">
      <h3>Rilis Baru</h3>

      <MovieRow>
        <MovieCardPortrait
          folder="imagesCard"
          id="myheroacademia"
          top="Top 10"
          age="13+"
          episode="8 Musim"
          genre1="Aksi"
          genre2="Fantasi"
          genre3="Pahlawan Super"
        />
        <MovieCardPortrait
          folder="imagesCard"
          id="sonic2"
          age="13+"
          episode="2j 2m"
          genre1="Petualangan"
          genre2="Komedi"
          genre3="Aksi"
        />
        <MovieCardPortrait
          folder="imagesCard"
          id="guardianofthegalaxy"
          age="13+"
          episode="2j 30m"
          genre1="Petualangan"
          genre2="Fiksi Sains"
          genre3="Aksi"
        />
        <MovieCardPortrait
          folder="imagesCard"
          id="spiderman"
          top="Top 10"
          age="SU"
          episode="2j 20m"
          genre1="Animasi"
          genre2="Pahlawan Super"
          genre3="Aksi"
        />
        <MovieCardPortrait
          folder="imagesCard"
          id="thelittlemermaid"
          premium="Premium"
          top="Top 10"
          age="SU"
          episode="2j 15m"
          genre1="Musikal"
          genre2="Fantasi"
          genre3="Keluarga"
        />
        <MovieCardPortrait
          folder="imagesCard"
          id="amancalledotto"
          age="13+"
          episode="2j 6m"
          genre1="Drama"
          genre2="Komedi"
          genre3="Psikologikal"
        />
        <MovieCardPortrait
          folder="imagesCard"
          id="doctorstrange"
          top="Top 10"
          age="13+"
          episode="2j 6m"
          genre1="Aksi"
          genre2="Petualangan"
          genre3="Horor"
        />

        <MovieCardPortrait
          folder="imagesCard"
          id="thetomorrowwar"
          age="13+"
          episode="2j 18m"
          genre1="Aksi"
          genre2="Fiksi Ilmiah"
          genre3="Militer"
        />
      </MovieRow>
    </section>
  );
}

function MovieChill() {
  return (
    <section className="movie-section">
      <h3>Film Persembahan Chill</h3>

      <MovieRow>
        <MovieCardPortrait
          folder="imagesCard"
          id="myheroacademia"
          age="13+"
          episode="8 Musim"
          genre1="Aksi"
          genre2="Fantasi"
          genre3="Pahlawan Super"
        />
        <MovieCardPortrait
          folder="imagesCard"
          id="sonic2"
          age="13+"
          episode="2j 2m"
          genre1="Petualangan"
          genre2="Komedi"
          genre3="Aksi"
        />
        <MovieCardPortrait
          folder="imagesCard"
          id="guardianofthegalaxy"
          age="13+"
          episode="2j 30m"
          genre1="Petualangan"
          genre2="Fiksi Sains"
          genre3="Aksi"
        />
        <MovieCardPortrait
          folder="imagesCard"
          id="spiderman"
          age="SU"
          episode="2j 20m"
          genre1="Animasi"
          genre2="Pahlawan Super"
          genre3="Aksi"
        />
        <MovieCardPortrait
          folder="imagesCard"
          id="thelittlemermaid"
          age="SU"
          episode="2j 15m"
          genre1="Musikal"
          genre2="Fantasi"
          genre3="Keluarga"
        />
        <MovieCardPortrait
          folder="imagesCard"
          id="amancalledotto"
          age="13+"
          episode="2j 6m"
          genre1="Drama"
          genre2="Komedi"
          genre3="Psikologikal"
        />
        <MovieCardPortrait
          folder="imagesCard"
          id="doctorstrange"
          age="13+"
          episode="2j 6m"
          genre1="Aksi"
          genre2="Petualangan"
          genre3="Horor"
        />

        <MovieCardPortrait
          folder="imagesCard"
          id="thetomorrowwar"
          age="13+"
          episode="2j 18m"
          genre1="Aksi"
          genre2="Fiksi Ilmiah"
          genre3="Militer"
        />
      </MovieRow>
    </section>
  );
}
function SeriesContinue() {
  return (
    <section className="movie-section">
      <h3>Melanjutkan Tonton Series</h3>
      <MovieRow>
        <MovieCardLandscape
          folder="imagesBanner"
          id="aliceinborderland"
          title="Alice in Borderland"
          new="Episode Baru"
          rating="4.5"
          episode="Episode 5"
          progress={60}
          duration="23m"
          genre1="Aksi"
          genre2="Petualangan"
          genre3="Survival"
        />
        <MovieCardLandscape
          folder="imagesBanner"
          id="allofusdead"
          title="All of Us are Dead"
          new="Episode Baru"
          progress={60}
          duration="33m"
          rating="4.9"
          episode="Episode 1"
          genre1="Dark Comedy"
          genre2="Fantasy"
          genre3="Drama"
        />
        <MovieCardLandscape
          folder="imagesBanner"
          id="myperfectstranger"
          title="My Perfect Stranger"
          new="Episode Baru"
          episode="Episode 3"
          rating="4.2"
          progress={55}
          duration="49m"
          genre1="Misteri"
          genre2="Kriminal"
          genre3="Romansa"
        />
        <MovieCardLandscape
          folder="imagesBanner"
          id="tedlasso"
          title="Ted Lasso"
          new="Episode Baru"
          episode="Episode 6"
          rating="4.8"
          progress={30}
          duration="22m"
          genre1="Komedi"
          genre2="Drama"
          genre3="Olahraga"
        />
        <MovieCardLandscape
          folder="imagesBanner"
          id="myheroacademia"
          title="My Hero Academia"
          new="Episode Baru"
          episode="Episode 9"
          rating="4.7"
          progress={80}
          duration="8m"
          genre1="Aksi"
          genre2="Fantasi"
          genre3="Pahlawan Super"
        />
      </MovieRow>
    </section>
  );
}
function SeriesChill() {
  return (
    <section className="movie-section">
      <h3>Series Persembahan Chill</h3>

      <MovieRow>
        <MovieCardPortrait
          folder="imagesCard"
          id="thelittlemermaid"
          premium="Premium"
          age="13+"
          episode="8 Musim"
          genre1="Aksi"
          genre2="Fantasi"
          genre3="Pahlawan Super"
        />
        <MovieCardPortrait
          folder="imagesCard"
          id="dutyafterschool"
          premium="Premium"
          age="13+"
          episode="2j 2m"
          genre1="Petualangan"
          genre2="Komedi"
          genre3="Aksi"
        />
        <MovieCardPortrait
          folder="imagesCard"
          id="bighero6"
          premium="Premium"
          age="13+"
          episode="2j 30m"
          genre1="Petualangan"
          genre2="Fiksi Sains"
          genre3="Aksi"
        />
        <MovieCardPortrait
          folder="imagesCard"
          id="allofusdead"
          premium="Premium"
          age="SU"
          episode="2j 20m"
          genre1="Animasi"
          genre2="Pahlawan Super"
          genre3="Aksi"
        />
        <MovieCardPortrait
          folder="imagesCard"
          id="tedlasso"
          premium="Premium"
          age="SU"
          episode="2j 15m"
          genre1="Musikal"
          genre2="Fantasi"
          genre3="Keluarga"
        />
        <MovieCardPortrait
          folder="imagesCard"
          id="aliceinborderland"
          new="New Episode"
          age="13+"
          episode="2j 6m"
          genre1="Drama"
          genre2="Komedi"
          genre3="Psikologikal"
        />
        <MovieCardPortrait
          folder="imagesCard"
          id="doctorstrange"
          top="Top 10"
          age="13+"
          episode="2j 6m"
          genre1="Aksi"
          genre2="Petualangan"
          genre3="Horor"
        />

        <MovieCardPortrait
          folder="imagesCard"
          id="thetomorrowwar"
          age="13+"
          episode="2j 18m"
          genre1="Aksi"
          genre2="Fiksi Ilmiah"
          genre3="Militer"
        />
      </MovieRow>
    </section>
  );
}

function MovieMyList() {
  return (
    <section className="movie-section">
      <h3>Daftar Saya</h3>
      <div className="movie-list">
        <div className="movie-card">
          <MovieCardPortrait
            folder="imagesCard"
            id="myheroacademia"
            age="13+"
            episode="8 Musim"
            genre1="Aksi"
            genre2="Fantasi"
            genre3="Pahlawan Super"
          />
          <MovieCardPortrait
            folder="imagesCard"
            id="sonic2"
            age="13+"
            episode="2j 2m"
            genre1="Petualangan"
            genre2="Komedi"
            genre3="Aksi"
          />
          <MovieCardPortrait
            folder="imagesCard"
            id="guardianofthegalaxy"
            age="13+"
            episode="2j 30m"
            genre1="Petualangan"
            genre2="Fiksi Sains"
            genre3="Aksi"
          />
          <MovieCardPortrait
            folder="imagesCard"
            id="spiderman"
            age="SU"
            episode="2j 20m"
            genre1="Animasi"
            genre2="Pahlawan Super"
            genre3="Aksi"
          />
          <MovieCardPortrait
            folder="imagesCard"
            id="thelittlemermaid"
            age="SU"
            episode="2j 15m"
            genre1="Musikal"
            genre2="Fantasi"
            genre3="Keluarga"
          />
          <MovieCardPortrait
            folder="imagesCard"
            id="amancalledotto"
            age="13+"
            episode="2j 6m"
            genre1="Drama"
            genre2="Komedi"
            genre3="Psikologikal"
          />
          <MovieCardPortrait
            folder="imagesCard"
            id="thetomorrowwar"
            age="13+"
            episode="2j 18m"
            genre1="Aksi"
            genre2="Fiksi Ilmiah"
            genre3="Militer"
          />
          <MovieCardPortrait
            folder="imagesCard"
            id="bighero6"
            age="13+"
            episode="1j 42m"
            genre1="Animasi"
            genre2="Aksi"
            genre3="Keluarga"
          />
          <MovieCardPortrait
            folder="imagesCard"
            id="doctorstrange"
            age="13+"
            episode="2j 6m"
            genre1="Aksi"
            genre2="Petualangan"
            genre3="Horor"
          />
          <MovieCardPortrait
            folder="imagesCard"
            id="jurassicworld"
            age="13+"
            episode="2j 26m"
            genre1="Fiksi Ilmiah"
            genre2="Petualangan"
            genre3="Aksi"
          />
          <MovieCardPortrait
            folder="imagesCard"
            id="baymax"
            age="SU"
            episode="1j 42m"
            genre1="Petualangan"
            genre2="Fiksi Sains"
            genre3="Aksi"
          />
          <MovieCardPortrait
            folder="imagesCard"
            id="shazam"
            title="Shazam"
            rating="4.2"
            progress={55}
            duration="2j 12m"
            genre1="Action"
            genre2="Comedy"
            genre3="Pahlawan Super"
          />
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  const [genreOpen, setGenreOpen] = useState(false);
  const [helpOpen, setHelpOpen] = useState(false);

  return (
    <div className="footer">
      <div className="footer-logo">
        <NavLink to="home-page.html">
          <img
            src="./Assets/Logo/Logo.svg"
            alt=""
          ></img>
        </NavLink>
        <p className="copyright">@2023 Chill All Rights Reserved.</p>
      </div>

      <div className="footer-menu">
        <div
          className="footer-title"
          onClick={() => setGenreOpen(!genreOpen)}
        >
          <p>Genre</p>
          <span className="material-symbols-outlined footer-arrow">
            chevron_right
          </span>
        </div>

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
        <div
          className="footer-title"
          onClick={() => setHelpOpen(!helpOpen)}
        >
          <p>Bantuan</p>
          <span className="material-symbols-outlined footer-arrow">
            chevron_right
          </span>
        </div>

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
