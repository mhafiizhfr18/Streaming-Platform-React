import "../App.css";
import "../css/Profile-Page.css";
import Navbar from "../components/Navbar";
import { MovieMyList } from "./MovieList-Page";
import { useState, useEffect } from "react";
import Axios from "axios";
import Footer from "../components/Footer";
import InputField from "../components/InputField";
import PhotoProfile from "../assets/Image/profile.png";
import UploadFile from "../assets/Icon/upload.svg";
import Warning from "../assets/Icon/Warning.svg";
import Notification from "../components/Notification";
import Loading from "../components/Loading";

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
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loadingProfile, setLoadingProfile] = useState(true);
    const [profileError, setProfileError] = useState("");
    const [saving, setSaving] = useState(false);
    const [notification, setNotification] = useState(null);
    const [closingNotification, setClosingNotification] = useState(false);

    // Changes Notification
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

    // Load profile
    useEffect(() => {
        async function fetchProfile() {
            const accountId = localStorage.getItem("accountId");

            if (!accountId) {
                setProfileError(
                    "Identitas akun tidak ditemukan. Silakan login kembali.",
                );
                setLoadingProfile(false);
                return;
            }

            try {
                const response = await Axios.get(
                    `${import.meta.env.VITE_API_URL}/${accountId}`,
                );

                const account = response.data;

                setUsername(account.username ?? "");
                setEmail(account.email ?? "");
            } catch (error) {
                console.error("Gagal mengambil profil:", error);
                setProfileError("Gagal memuat profil. Silakan coba lagi.");
            } finally {
                setLoadingProfile(false);
            }
        }

        fetchProfile();
    }, []);

    if (loadingProfile) {
        return <Loading />;
    }

    if (profileError) {
        return (
            <div className="profile-box">
                <p>{profileError}</p>
            </div>
        );
    }

    // Save profile changes
    async function handleSaveProfile() {
        const accountId = localStorage.getItem("accountId");

        if (!accountId) {
            setNotification({
                message: "Identitas akun tidak ditemukan",
                type: "error",
            });
            return;
        }

        if (!username.trim() || !email.trim()) {
            setNotification({
                message: "Nama pengguna dan email wajib diisi",
                type: "error",
            });
            return;
        }

        setSaving(true);

        try {
            await Axios.put(`${import.meta.env.VITE_API_URL}/${accountId}`, {
                username: username.trim(),
                email: email.trim(),
            });

            setNotification({
                message: "Profil berhasil diperbarui",
                type: "success",
            });
        } catch (error) {
            console.error("Gagal menyimpan profil:", error);

            setNotification({
                message: "Gagal menyimpan profil",
                type: "error",
            });
        } finally {
            setSaving(false);
        }
    }

    return (
        <>
            {notification && (
                <Notification
                    type={notification.type}
                    message={notification.message}
                    closing={closingNotification}
                />
            )}
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
                        <div className="form-change">
                            <InputField
                                type="text"
                                name="username"
                                label="Nama Pengguna"
                                placeholder="Pengguna"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                            />
                            <InputField
                                type="text"
                                name="email"
                                label="Email"
                                placeholder="Email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <InputField
                                type="password"
                                name="confirmPassword"
                                label="Ganti Sandi"
                                placeholder="Masukkan kata sandi baru"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <button
                                type="button"
                                className="profile-save"
                                onClick={handleSaveProfile}
                                disabled={saving}
                            >
                                {saving ? "Menyimpan..." : "Simpan"}
                            </button>
                        </div>
                    </div>
                    <div className="profile-right">
                        <div className="subscribe">
                            <img src={Warning} alt=""></img>
                            <div className="subscribe-info">
                                <h5>Saat ini anda belum berlangganan</h5>
                                <p>
                                    Dapatkan Akses Tak Terbatas ke Ribuan Film
                                    dan Series Kesukaan Kamu
                                </p>
                            </div>
                        </div>
                        <button>Mulai Berlangganan</button>
                    </div>
                </div>
            </div>
        </>
    );
}
