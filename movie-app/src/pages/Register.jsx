import "../index.css";
import Logo from "../assets/Logo/Logo.png";
import GoogleLogo from "../assets/Logo/Google.svg";
import InputField from "../components/InputField.jsx";
import { NavLink } from "react-router";
import { useState, useEffect } from "react";
import Axios from "axios";
import Loading from "../components/Loading.jsx";
import Notification from "../components/Notification.jsx";

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
  const [email, setEmail] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [notification, setNotification] = useState(null);
  const [closingNotification, setClosingNotification] = useState(false);

  useEffect(() => {
    if (!notification) return;

    const closeTimer = setTimeout(() => {
      setClosingNotification(true);
    }, 2700);

    const removeTimer = setTimeout(() => {
      setNotification(null);
      setClosingNotification(false);
    }, 3000);

    return () => {
      clearTimeout(closeTimer);
      clearTimeout(removeTimer);
    };
  }, [notification]);

  async function daftar(event) {
    event.preventDefault();

    if (!username.trim() || !password.trim() || !email.trim()) {
      setNotification({
        message: "Semua kolom wajib diisi",
        type: "error",
      });
      return;
    }

    if (password.length < 8) {
      setNotification({
        message: "Kata sandi baru minimal 8 karakter",
        type: "error",
      });
      return;
    }

    if (password !== confirmPassword) {
      setNotification({
        message: "Konfirmasi password tidak sesuai",
        type: "error",
      });
      return;
    }

    setLoading(true);

    try {
      // Ambil semua akun yang sudah terdaftar
      const response = await Axios.get(import.meta.env.VITE_API_URL);

      // Cek apakah username sudah digunakan
      const usernameExists = response.data.some(
        (account) =>
          account.username?.trim().toLowerCase() ===
          username.trim().toLowerCase(),
      );

      if (usernameExists) {
        setNotification({
          message: "Username sudah terdaftar",
          type: "error",
        });
        return;
      }

      const emailExists = response.data.some(
        (account) =>
          account.email?.trim().toLowerCase() === email.trim().toLowerCase(),
      );

      if (emailExists) {
        setNotification({
          message: "Email sudah terdaftar",
          type: "error",
        });
        return;
      }

      const data = {
        username: username.trim(),
        password,
        email: email.trim(),
      };

      await Axios.post(import.meta.env.VITE_API_URL, data);

      setUsername("");
      setPassword("");
      setEmail("");
      setConfirmPassword("");

      setNotification({
        message: "Akun berhasil dibuat",
        type: "success",
      });
    } catch (error) {
      console.error(error);
      setNotification({
        message: "Terjadi kesalahan saat mendaftar",
        type: "error",
      });
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      {loading && <Loading />}
      {notification && (
        <Notification
          message={notification.message}
          type={notification.type}
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
            type="email"
            name="email"
            label="Email"
            placeholder="Masukkan email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
