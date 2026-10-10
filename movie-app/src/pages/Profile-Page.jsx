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
    const [avatar, setAvatar] = useState(PhotoProfile);
    const [uploadingPhoto, setUploadingPhoto] = useState(false);

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
                setAvatar(account.avatar || PhotoProfile);
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

        // 1. Validasi identitas akun
        if (!accountId) {
            setNotification({
                message:
                    "Identitas akun tidak ditemukan. Silakan login kembali.",
                type: "error",
            });
            return;
        }

        // 2. Validasi username dan email
        if (!username.trim() || !email.trim()) {
            setNotification({
                message: "Nama pengguna dan email wajib diisi",
                type: "error",
            });
            return;
        }

        // 3. Validasi password jika pengguna ingin menggantinya
        if (password && password.length < 8) {
            setNotification({
                message: "Kata sandi baru minimal 8 karakter",
                type: "error",
            });
            return;
        }

        setSaving(true);

        try {
            // 4. Ambil data akun yang tersimpan saat ini
            const response = await Axios.get(
                `${import.meta.env.VITE_API_URL}/${accountId}`,
            );

            const currentAccount = response.data;

            // 5. Siapkan data yang akan diperbarui
            const updatedAccount = {
                ...currentAccount,
                username: username.trim(),
                email: email.trim(),
            };

            // Password hanya diperbarui jika pengguna mengisinya
            if (password) {
                updatedAccount.password = password;
            }

            // 6. Simpan perubahan ke MockAPI
            await Axios.put(
                `${import.meta.env.VITE_API_URL}/${accountId}`,
                updatedAccount,
            );

            // 7. Kosongkan field password setelah berhasil
            setPassword("");

            setNotification({
                message: password
                    ? "Profil dan kata sandi berhasil diperbarui"
                    : "Profil berhasil diperbarui",
                type: "success",
            });
        } catch (error) {
            console.error("Gagal memperbarui profil:", error);

            setNotification({
                message: "Gagal memperbarui profil. Silakan coba lagi.",
                type: "error",
            });
        } finally {
            setSaving(false);
        }
    }

    // Upload foto profil
    async function handlePhotoChange(event) {
        const file = event.target.files[0];

        // Jika pengguna tidak memilih file, hentikan proses
        if (!file) return;

        // Validasi format foto
        const allowedTypes = ["image/png", "image/jpeg"];

        if (!allowedTypes.includes(file.type)) {
            setNotification({
                message: "Format foto harus JPG, JPEG, atau PNG",
                type: "error",
            });

            event.target.value = "";
            return;
        }

        // Validasi ukuran foto: maksimal 2 MB
        if (file.size > 2 * 1024 * 1024) {
            setNotification({
                message: "Ukuran foto maksimal 2 MB",
                type: "error",
            });

            event.target.value = "";
            return;
        }

        const accountId = localStorage.getItem("accountId");

        if (!accountId) {
            setNotification({
                message:
                    "Identitas akun tidak ditemukan. Silakan login kembali.",
                type: "error",
            });

            event.target.value = "";
            return;
        }

        // Simpan foto sebelumnya untuk mengembalikannya jika upload gagal
        const previousAvatar = avatar;

        // Tampilkan preview foto yang dipilih
        const previewUrl = URL.createObjectURL(file);
        setAvatar(previewUrl);

        setUploadingPhoto(true);

        try {
            // 1. Siapkan file untuk dikirim ke Cloudinary
            const formData = new FormData();

            formData.append("file", file);
            formData.append(
                "upload_preset",
                import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET,
            );

            // 2. Upload foto ke Cloudinary
            const cloudinaryResponse = await Axios.post(
                `https://api.cloudinary.com/v1_1/${
                    import.meta.env.VITE_CLOUDINARY_CLOUD_NAME
                }/image/upload`,
                formData,
            );

            // 3. Ambil URL foto dari Cloudinary
            const imageUrl = cloudinaryResponse.data.secure_url;

            // 4. Simpan URL foto ke akun pengguna di MockAPI
            await Axios.put(`${import.meta.env.VITE_API_URL}/${accountId}`, {
                avatar: imageUrl,
            });

            // 5. Gunakan URL Cloudinary sebagai foto profil
            setAvatar(imageUrl);
            localStorage.setItem("avatar", imageUrl);

            setNotification({
                message: "Foto profil berhasil diperbarui",
                type: "success",
            });

            // Preview lokal tidak diperlukan lagi
            URL.revokeObjectURL(previewUrl);
        } catch (error) {
            console.error("Gagal mengunggah foto profil:", error);

            // Kembalikan foto sebelumnya jika proses gagal
            setAvatar(previousAvatar);

            URL.revokeObjectURL(previewUrl);

            setNotification({
                message: "Gagal mengunggah foto profil. Silakan coba lagi.",
                type: "error",
            });
        } finally {
            setUploadingPhoto(false);
            event.target.value = "";
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
                                    src={avatar}
                                    alt="Foto Profil"
                                ></img>
                            </div>
                            <div className="photo-change">
                                <input
                                    type="file"
                                    id="profile-photo"
                                    accept="image/png,image/jpeg,image/jpg"
                                    onChange={handlePhotoChange}
                                    disabled={uploadingPhoto}
                                    hidden
                                />
                                <label
                                    htmlFor="profile-photo"
                                    className="btn-upload"
                                >
                                    {uploadingPhoto
                                        ? "Mengunggah..."
                                        : "Ubah Foto"}
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
                                name="newpassword"
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
