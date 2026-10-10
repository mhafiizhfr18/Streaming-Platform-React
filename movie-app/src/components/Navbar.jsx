import "../App.jsx";
import { NavLink, useNavigate } from "react-router";
import { useState } from "react";

import Loading from "./Loading.jsx";
import Logo1 from "../assets/Logo/Logo.svg";
import Logo2 from "../assets/Logo/Logo-icon.svg";
import Profile from "../assets/Image/profile.png";

function Navbar() {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  function handleLogout() {
    setLoading(true);
    localStorage.removeItem("isLoggedIn");

    setTimeout(() => {
      navigate("/login");
    }, 500);
  }

  return (
    <>
      {loading && <Loading />}

    <div className="navbar">
      <div className="nav-left">
        <NavLink to="/home" className="navbar-logo">
          <img className="logo-desktop" src={Logo1} alt="CHILL"></img>
          <img className="logo-mobile" src={Logo2} alt="CHILL"></img>
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
        <button to="/login">
          <img src={Profile} alt="Profile"></img>
        </button>
        <span className="material-symbols-outlined arrow">
          keyboard_arrow_down
        </span>

        <div className="dropdown-menu">
          <button onClick={() => navigate("/Profile")}>
            <span className="material-symbols-outlined">person</span>
            <span>Profil Saya</span>
          </button>

          <button onClick={() => navigate("/upgrade")}>
            <span className="material-symbols-outlined">star</span>
            <span>Ubah Premium</span>
          </button>

          <button onClick={handleLogout}>
            <span className="material-symbols-outlined">logout</span>
            <span>Keluar</span>
          </button>
        </div>
      </div>
    </div>
    </>
  );
}

export default Navbar;