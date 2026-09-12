import './index.css'
import Logo from './assets/Logo/Logo.png'
import GoogleLogo from './assets/Logo/Google.svg'
import InputField from './InputField.jsx'
import { NavLink } from 'react-router'


export function RegisterPage () {
  return (
    <div id="register-page">
        <div className="box">
            <div className="logo">
                <img src={Logo} alt="Logo" />
            </div>
            <TitleForm 
                title="Daftar" 
                subtitle="Selamat datang!" />
            <FormRegister />
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

function FormRegister () {
  return (
    <div className="form">
        <form action="">
          <InputField 
            type="text"
            name="username" 
            label="Username" 
            placeholder="Masukkan username" />
          <InputField 
            type="password" 
            name="password" 
            label="Kata Sandi" 
            placeholder="Masukkan kata sandi" />
          <InputField 
            type="password" 
            name="confirm-password" 
            label="Konfirmasi Kata Sandi" 
            placeholder="Masukkan kembali kata sandi" />
            <QuestionRegister />
            <ButtonRegister />
        </form>
    </div>
  )
}

function QuestionRegister () {
  return (
    <div className="question">
        <p>Sudah punya akun? 
            <NavLink to="/login">Masuk</NavLink>
        </p>
    </div>
  )
}

function ButtonRegister () {
  return (
    <div>
        <button className="login" type="submit">Daftar</button>
        <p className="choose">Atau</p>
        <button className="login google-login" type="button">
            <img src={GoogleLogo} alt="Google Logo"></img>Daftar dengan Google
        </button>
    </div>
  )
}