import "./index.css";
import Logo from "./assets/Logo/Logo.png";
import GoogleLogo from "./assets/Logo/Google.svg";
import InputField from "./InputField.jsx";
import { NavLink } from "react-router";
import { useState, useEffect } from "react";
import Axios from "axios";
import Loading from "./Loading.jsx";
import Notification from "./Notification.jsx";

export function RegisterPage() {
  return (
    <div id="register-page">
      <div className="box">
        <div className="logo">
          <img src={Logo} alt="Logo" />
        </div>
        <TitleForm title="Daftar" subtitle="Selamat datang!" />
        <FormRegister />
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

function FormRegister() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [notification, setNotification] = useState(false);
  const [closingNotification, setClosingNotification] = useState(false);

  useEffect(() => {
    if (!notification) return;
    const timer = setTimeout(() => {
      setClosingNotification(true);

      setTimeout(() => {
        setNotification(false);
        setClosingNotification(false);
      }, 300);
    }, 2700);

    return () => clearTimeout(timer);
  }, [notification]);

  async function daftar(event) {
    event.preventDefault();

    try {
      // Ambil semua akun yang sudah terdaftar
      const response = await Axios.get(import.meta.env.VITE_API_URL);

      // Cek apakah username sudah digunakan
      const usernameExists = response.data.some(
        (account) => account.username === username,
      );

      if (usernameExists) {
        alert("Username sudah terdaftar");
        return;
      }

      if (!username || !password) {
        alert("Username dan password wajib diisi");
        return;
      }

      if (password !== confirmPassword) {
        alert("Konfirmasi password tidak sesuai");
        return;
      }
      setLoading(true);

      const data = {
        username,
        password,
      };

      await Axios.post(import.meta.env.VITE_API_URL, data);

      setNotification(true);

      setUsername("");
      setPassword("");
      setConfirmPassword("");
      setNotification(true);
    } catch (error) {
      console.error(error);
      alert("Terjadi kesalahan saat mendaftar");
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      {loading && <Loading />}
      {notification && (
        <Notification
          message="Akun berhasil dibuat"
          closing={closingNotification}
        />
      )}

      <div className="form">
        <form onSubmit={daftar}>
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
          <InputField
            type="password"
            name="confirmPassword"
            label="Konfirmasi Kata Sandi"
            placeholder="Masukkan kembali kata sandi"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <QuestionRegister />
          <ButtonRegister />
        </form>
      </div>
    </>
  );
}

function QuestionRegister() {
  return (
    <div className="question">
      <p>
        Sudah punya akun?
        <NavLink to="/login">Masuk</NavLink>
      </p>
    </div>
  );
}

function ButtonRegister() {
  return (
    <div>
      <button className="login" type="submit">
        Daftar
      </button>
      <p className="choose">Atau</p>
      <button className="login google-login" type="button">
        <img src={GoogleLogo} alt="Google Logo"></img>Daftar dengan Google
      </button>
    </div>
  );
}
