import "../App.css";
import "../css/Profile-Page.css";
import Navbar from "../components/Navbar";
import { MovieMyList } from "./MovieList-Page";
import { useState } from "react";
import Footer from "../components/Footer";
import InputField from "../components/InputField";
import PhotoProfile from "../assets/Image/Profile.png";
import UploadFile from "../assets/Icon/upload.svg";
import Warning from "../assets/Icon/Warning.svg";

function ProfilePage() {
    return (
        <>
            <Navbar />
            <ProfileMenu />
            <MovieMyList all="Lihat Semua" />
            <Footer />
        </>
    );
}
export default ProfilePage;

function ProfileMenu() {
    const [username, setUsername] = useState(null);

    return (
        <div className="profile-box">
            <h3>Profil Saya</h3>
            <div className="profile-wrapper">
                <div className="profile-left">
                    <div className="photo-profile">
                        <div>
                            <img
                                className="photo"
                                src={PhotoProfile}
                                alt="Foto Profil"
                            ></img>
                        </div>
                        <div className="photo-change">
                            <input
                                type="file"
                                id="profile-photo"
                                accept="image/png,image/jpeg,image/jpg"
                                hidden
                            />
                            <label
                                htmlFor="profile-photo"
                                className="btn-upload"
                            >
                                Ubah Foto
                            </label>
                            <span>
                                <img src={UploadFile} alt=""></img>
                                <span> Maksimal 2MB</span>
                            </span>
                        </div>
                    </div>
                    <InputField
                        type="text"
                        name="username"
                        label="Nama Pengguna"
                        placeholder="Pengguna"
                        value="{username}"
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <InputField
                        type="text"
                        name="email"
                        label="Email"
                        placeholder="Email"
                    />
                    <InputField
                        type="password"
                        name="confirmPassword"
                        label="Kata Sandi"
                        placeholder="Masukkan kata sandi"
                    />
                </div>
                <div className="profile-right">
                    <div className="subscribe">
                        <img src={Warning} alt=""></img>
                        <div className="subscribe-info">
                            <h5>Saat ini anda belum berlangganan</h5>
                            <p>
                                Dapatkan Akses Tak Terbatas ke Ribuan Film dan
                                Series Kesukaan Kamu
                            </p>
                        </div>
                    </div>
                    <button>Mulai Berlangganan</button>
                </div>
            </div>
        </div>
    );
}
