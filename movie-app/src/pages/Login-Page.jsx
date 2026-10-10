import "../index.css";
import Logo from "../assets/Logo/Logo.png";
import GoogleLogo from "../assets/Logo/Google.svg";
import InputField from "../components/InputField.jsx";
import { NavLink, useNavigate } from "react-router";
import { useState, useEffect } from "react";
import Axios from "axios";
import Loading from "../components/Loading.jsx";
import Notification from "../components/Notification.jsx";

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
  const [loading, setLoading] = useState(false);
  const [notification, setNotification] = useState(null);
  const [closingNotification, setClosingNotification] = useState(false);

  const navigate = useNavigate();

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

  async function masuk(event) {
    event.preventDefault();
    
    if (!username || !password) {
      setNotification({
        type: "error",
        message: "Username dan password harus diisi",
      });
      return;
    }

    setLoading(true);

    try {
      const response = await Axios.get(import.meta.env.VITE_API_URL);

      const account = response.data.find((item) => {
        return item.username === username && item.password === password;
      });
      
      if (account) {
        localStorage.setItem("isLoggedIn", "true");
        navigate("/home");
      } else {
        setNotification({
          type: "error",
          message: "Username atau password salah",
        });
      }
    } catch (error) {
      console.log(error);
      setNotification({
        type: "error",
        message: "Terjadi kesalahan saat menghubungi server",
      });
    }
    finally {
      setLoading(false);
    }
  }

  return (
    <>
      {loading && <Loading />}
      {notification && (
        <Notification
          type={notification.type}
          message={notification.message}
          closing={closingNotification}
        />
      )}

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
          <button className="login" type="submit" disabled={loading}>
            {loading ? (
              <>
                <span className="spinner"></span>
                Memuat... 
              </>
            )
            : ("Masuk")}
          </button>

          <p className="choose">Atau</p>
          <button className="login google-login" type="button" disabled={loading}>
            <img src={GoogleLogo} alt="Google Logo"></img>
            Masuk dengan Google
          </button>
        </div>
      </form>
    </div>
    </>
  );
  
}
