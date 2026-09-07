import './App.css'
import Logo1 from './assets/Logo/Logo.svg'
import Logo2 from './assets/Logo/Logo-icon.svg'
import Profile from './assets/Image/profile.png'
import VolumeOff from './assets/Icon/volume_off.svg'

import { MovieContinue } from './Movie-Continue.jsx'
import { NavLink } from 'react-router'

export function HomePage () {
  return (
    <>
      <Navbar />
      <MovieBanner />
      <MovieContinue />
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

                <NavLink to="/profile">
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
                    <span>18+</span>
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
