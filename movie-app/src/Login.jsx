import "./index.css";
import Logo from "./assets/Logo/Logo.png";
import GoogleLogo from "./assets/Logo/Google.svg";
import InputField from "./InputField.jsx";
import { NavLink, useNavigate } from "react-router";
import { useState } from "react";
import Axios from "axios";

export function LoginPage() {
  return (
    <div id="login-page">
      <div className="box">
        <div className="logo">
          <img src={Logo} alt="Logo" />
        </div>
        <TitleForm title="Masuk" subtitle="Selamat datang kembali!" />
        <FormLogin />
      </div>
    </div>
  );
}
function TitleForm(props) {
  return (
    <div className="title-form">
      <h3>{props.title}</h3>
      <p>{props.subtitle}</p>
    </div>
  );
}

function FormLogin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  async function masuk(event) {
    event.preventDefault();

    if (!username || !password) {
      alert("Username dan password wajib diisi");
      return;
    }
    try {
      const response = await Axios.get(import.meta.env.VITE_API_URL);

      const account = response.data.find((item) => {
        return item.username === username && item.password === password;
      });

      if (account) {
        navigate("/home");
      } else {
        alert("Username atau password salah");
      }
    } catch (error) {
      console.log(error);
      alert("Terjadi kesalahan saat menghubungi server");
    }
  }

  return (
    <div className="form">
      <form onSubmit={masuk}>
        <InputField
          type="text"
          name="username"
          label="Username"
          placeholder="Masukkan username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <InputField
          type="password"
          name="password"
          label="Kata Sandi"
          placeholder="Masukkan kata sandi"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <div className="question">
          <p>
            Belum punya akun?
            <NavLink to="/register">Daftar</NavLink>
          </p>
          <p>
            {" "}
            <NavLink to="/forgot-password">Lupa kata sandi?</NavLink>
          </p>
        </div>

        <div>
          <button className="login" type="submit">
            Masuk
          </button>

          <p className="choose">Atau</p>
          <button className="login google-login" type="button">
            <img src={GoogleLogo} alt="Google Logo"></img>
            Masuk dengan Google
          </button>
        </div>
      </form>
    </div>
  );
}
