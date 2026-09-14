import './App.css'
import { useState } from 'react'

import Logo1 from './assets/Logo/Logo.svg'
import Logo2 from './assets/Logo/Logo-icon.svg'
import Profile from './assets/Image/profile.png'
import VolumeOff from './assets/Icon/volume_off.svg'

import { MovieCardLandscape, MovieCardPortrait } from './Movie-Card.jsx'
import { NavLink } from 'react-router'

export function HomePage () {
return (
<>
<Navbar />
<MovieBanner />
<MovieContinue />
<MovieTopRated />
<MovieTrending />
<MovieNewRelease />
<Footer />
</>
)
}

function Navbar () {
return (
<div className="navbar">

    <div className="nav-left">  
        <NavLink to="/home" className="navbar-logo">
        <img className="logo-desktop" src={Logo1} alt="CHILL"></img>
        <img className="logo-mobile" src={Logo2} alt="CHILL"></img>
        </NavLink>

        <ul className="nav-menu">
            <li><NavLink to="/home">Beranda</NavLink></li>
            <li><NavLink to="/movies">Film</NavLink></li>
            <li><NavLink to="/watchlist">Daftar Saya</NavLink></li> 
        </ul>
    </div>

    <div className="profile-menu">
        <NavLink to="/login">
            <img src={Profile} alt="Profile"></img>
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
)
} 
function MovieBanner () {
return (
<div className="hero">
    <div className="hero-content">
        <div className="hero-left">
            <h1>Avatar : The Way of Water</h1>
            <p>Set decades after the events of the first film, the story follows the Na'vi people and their struggle for survival against human invaders.</p>
            <div className="hero-button">
                <button className="btn-primary">Mulai</button>
                <button className="btn-secondary">Selengkapnya</button>
                <span className='btn-age'>18+</span>
            </div>
        </div>
        <div className="hero-right">
            <button className="btn-third">
                <img src={VolumeOff} alt="Volume Off"></img>
            </button>
        </div>
    </div>
</div>
)
}
function MovieContinue () {
return (
    <section className="movie-section">
        <h3>Melanjutkan Tonton Film</h3>
        <div className="movie-wrapper">  
            <button className="css-arrow left material-symbols-outlined">arrow_back_ios</button>
        
            <div className="movie-card">
                <MovieCardLandscape folder="imagesBanner" id="dontlookup" title="Don't Look Up" rating="4.5" />
                <MovieCardLandscape folder="imagesBanner" id="shazam" title="Shazam" rating="4.2" />
                <MovieCardLandscape folder="imagesBanner" id="avatar" title="Avatar" rating="4.8" />
                <MovieCardLandscape folder="imagesBanner" id="fastx" title="Fast Furious X" rating="4.7" />
                <MovieCardLandscape folder="imagesBanner" id="bluelock" title="Blue Lock" rating="4.9" />
                <MovieCardLandscape folder="imagesBanner" id="thelittlemermaid" title="Little Mermaid" rating="4.6" />
            </div>
            
            <button className="css-arrow right material-symbols-outlined">arrow_forward_ios</button>
        </div>
    </section>
)
}
function MovieTopRated () {
return (
    <section className="movie-section">
        <h3>Top Rating Film dan Series Hari Ini</h3>
        <div className="movie-wrapper">  
            <button className="css-arrow left material-symbols-outlined">arrow_back_ios</button>
        
            <div className="movie-card">
                <MovieCardPortrait folder="imagesCard" id="thetomorrowwar" />
                <MovieCardPortrait folder="imagesCard" id="thebatman" />
                <MovieCardPortrait folder="imagesCard" id="amancalledotto" />
                <MovieCardPortrait folder="imagesCard" id="bighero6" />
                <MovieCardPortrait folder="imagesCard" id="suzume" />
                <MovieCardPortrait folder="imagesCard" id="antmanwasp" />
                <MovieCardPortrait folder="imagesCard" id="myheroacademia" />
            </div>
            
            <button className="css-arrow right material-symbols-outlined">arrow_forward_ios</button>
        </div>
    </section>
)
}
function MovieTrending () {
return (
    <section className="movie-section">
        <h3>Film Trending</h3>
        <div className="movie-wrapper">  
            <button className="css-arrow left material-symbols-outlined">arrow_back_ios</button>
        
            <div className="movie-card">
                <MovieCardPortrait folder="imagesCard" id="doctorstrange" />
                <MovieCardPortrait folder="imagesCard" id="blackadam" />
                <MovieCardPortrait folder="imagesCard" id="tedlasso" />
                <MovieCardPortrait folder="imagesCard" id="spiderman" />
                <MovieCardPortrait folder="imagesCard" id="jurassicworld" />
                <MovieCardPortrait folder="imagesCard" id="baymax" />
                <MovieCardPortrait folder="imagesCard" id="myheroacademia" />
            </div>
            
            <button className="css-arrow right material-symbols-outlined">arrow_forward_ios</button>
        </div>
    </section>
)
}
function MovieNewRelease () {
return (
    <section className="movie-section">
        <h3>Film Rilis Baru</h3>
        <div className="movie-wrapper">  
            <button className="css-arrow left material-symbols-outlined">arrow_back_ios</button>
        
            <div className="movie-card">
                <MovieCardPortrait folder="imagesCard" id="myheroacademia" />
                <MovieCardPortrait folder="imagesCard" id="sonic2" />
                <MovieCardPortrait folder="imagesCard" id="guardianofthegalaxy" />
                <MovieCardPortrait folder="imagesCard" id="spiderman" />
                <MovieCardPortrait folder="imagesCard" id="thelittlemermaid" />
                <MovieCardPortrait folder="imagesCard" id="amancalledotto" />
                <MovieCardPortrait folder="imagesCard" id="thetomorrowwar" />
            </div>
            
            <button className="css-arrow right material-symbols-outlined">arrow_forward_ios</button>
        </div>
    </section>
)
}
function Footer () {
const [genreOpen, setGenreOpen] = useState(false)
const [helpOpen, setHelpOpen] = useState(false)

return (
    <div className="footer">
        <div className="footer-logo">
            <NavLink to="home-page.html">
                <img src="./Assets/Logo/Logo.svg" alt=""></img>
            </NavLink>
            <p className="copyright">@2023 Chill All Rights Reserved.</p>
        </div>

    <div className="footer-menu">

        <div className="footer-title" onClick={() => setGenreOpen(!genreOpen)}>
            <p>Genre</p>
            <span className="material-symbols-outlined footer-arrow">
                chevron_right
            </span>
        </div>

        <ul className={genreOpen ? "show" : ""}>
            <li><NavLink to="#">Aksi</NavLink></li>
            <li><NavLink to="#">Anak-anak</NavLink></li>
            <li><NavLink to="#">Anime</NavLink></li>
            <li><NavLink to="#">Britania</NavLink></li>

            <li><NavLink to="#">Drama</NavLink></li>
            <li><NavLink to="#">Fantasi Ilmiah & Fantasi</NavLink></li>
            <li><NavLink to="#">Kejahatan</NavLink></li>
            <li><NavLink to="#">KDrama</NavLink></li>

            <li><NavLink to="#">Komedi</NavLink></li>
            <li><NavLink to="#">Petualangan</NavLink></li>
            <li><NavLink to="#">Perang</NavLink></li>
            <li><NavLink to="#">Romantis</NavLink></li>

            <li><NavLink to="#">Sains & Alam</NavLink></li>
            <li><NavLink to="#">Thriller</NavLink></li>
        </ul>
    </div>

    <div className="footer-help">

        <div className="footer-title" onClick={() => setHelpOpen(!helpOpen)}>
            <p>Bantuan</p>
            <span className="material-symbols-outlined footer-arrow">
                chevron_right
            </span>
        </div>

        <ul className={helpOpen ? "show" : ""}>
            <li><NavLink to="#">FAQ</NavLink></li>
            <li><NavLink to="#">Kontak Kami</NavLink></li>
            <li><NavLink to="#">Privasi</NavLink></li>
            <li><NavLink to="#">Syarat & Ketentuan</NavLink></li>
        </ul>

    </div>
</div>
)
}