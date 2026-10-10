import "../App.jsx";
import { NavLink, useNavigate } from "react-router";
import { useState, useEffect } from "react";
import Axios from "axios";

import Loading from "./Loading.jsx";
import Logo1 from "../assets/Logo/Logo.svg";
import Logo2 from "../assets/Logo/Logo-icon.svg";
import Profile from "../assets/Image/profile.png";

function Navbar() {
  const [loading, setLoading] = useState(false);
  const [avatar, setAvatar] = useState(localStorage.getItem("avatar") || "");

  const navigate = useNavigate();

  useEffect(() => {
    async function fetchAvatar() {
      const accountId = localStorage.getItem("accountId");

      if (!accountId) return;

      try {
        const response = await Axios.get(
          `${import.meta.env.VITE_API_URL}/${accountId}`,
        );

        const savedAvatar = response.data.avatar || "";
        if (savedAvatar) {
          setAvatar(savedAvatar);
          localStorage.setItem("avatar", savedAvatar);
        }
      } catch (error) {
        console.error("Gagal mengambil foto profil Navbar:", error);
      }
    }

    fetchAvatar();
  }, []);

  function handleLogout() {
    setLoading(true);
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("accountId");
    localStorage.removeItem("avatar");

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
          <button
            type="button"
            onClick={() => navigate("/Profile")}
            aria-label="Buka menu profil"
          >
            <img src={avatar || Profile} alt="Profile" />
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
