import './index.css'
import Logo from './Assets/Logo/Logo.png'
import GoogleLogo from './Assets/Logo/Google.svg'
import InputField from './InputField.jsx'
import { NavLink, useNavigate } from 'react-router'

export function LoginPage() {
  return (
    <div id="login-page">
        <div className="box">
            <div className="logo">
                <img src={Logo} alt="Logo" />
            </div>
            <TitleForm 
              title="Masuk" 
              subtitle="Selamat datang kembali!" 
            />
            <FormLogin />
        </div>
    </div>
  )
}
function TitleForm (props) {
  return (
    <div className="title-form">
        <h3>{ props.title }</h3>
        <p>{ props.subtitle }</p>
    </div>
  )
}

function FormLogin () {
  let navigate = useNavigate();
  function masuk(event) {
    event.preventDefault();
    navigate("/homepage");
  }
  return (
    <div className="form">
        <form onSubmit={masuk}>
            <InputField 
              type="text" 
              name="username" 
              label="Username" 
              placeholder="Masukkan username" 
            />
            <InputField 
              type="password" 
              name="password" 
              label="Kata Sandi" 
              placeholder="Masukkan kata sandi" 
            />

            <div className="question">
                <p>Belum punya akun? 
                  <NavLink to="/register">
                    Daftar
                  </NavLink>
                </p>
                <p> <NavLink to="/forgot-password">Lupa kata sandi?</NavLink></p>
            </div>

            <div>
                <button 
                  className="login" 
                  type="submit">
                  Masuk
                </button>

                <p className="choose">Atau</p>
                <button 
                  className="login google-login" 
                  type="button">
                  <img src={GoogleLogo} alt="Google Logo"></img>
                    Masuk dengan Google
                </button>

            </div>
        </form>
    </div>
  )
}