import './App.css'
import Logo from './Assets/Logo/Logo.png'
import GoogleLogo from './Assets/Logo/Google.svg'

export default function LoginPage() {
  return (
    <div id="login-page">
        <div className="box">
            <div className="logo">
                <img src={Logo} alt="Logo"></img>
            </div>
            <div className="title-form">
                <h3>Masuk</h3>
                <p>Selamat datang kembali!</p>
            </div>
            <FormLogin />
          </div>
    </div>
  )
}

function FormLogin () {
  return (
    <div className="form">
        <form action="">
            <div className="input-form">
                <label for="username">Username</label>
                <input type="text" name="username" id="username" placeholder="Masukkan username"></input>
            </div>
            <div className="input-form">
                <label for="password">Kata Sandi</label>
                <input type="password" name="password" id="password" placeholder="Masukkan kata sandi"></input>
            </div>
        </form>
        <div className="question">
            <p>Belum punya akun? <a href="register-page.html">Daftar</a></p>
            <p> <a href="#">Lupa kata sandi?</a></p>
        </div>
        <div>
            <button className="login" type="submit" onClick={() => (window.location.href = './home-page.html')}>Masuk</button>
            <p className="choose">Atau</p>
            <button className="google-login" type="button">
                <img src={GoogleLogo} alt="Google Logo"></img>Masuk dengan Google
            </button>
        </div>
    </div>
  )
}

