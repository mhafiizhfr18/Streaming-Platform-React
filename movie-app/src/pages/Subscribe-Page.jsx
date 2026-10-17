import "../App.css";
import "../css/Subscribe-Page.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import NoAds from "../assets/Icon/noads.svg";
import ListView from "../store/redux/listView";

function SubscribePage() {
    return (
        <>
            <Navbar />
            <ListView />
            <Subscribe />
            <Footer />
        </>
    );
}
export default SubscribePage;

function Subscribe() {
    return (
        <div className="subscribe-box">
            <div className="subscribe-wrapper-top">
                <div className="subscribe-top">
                    <h3>Kenapa Harus Berlangganan?</h3>
                    <div className="subscribe-desc">
                        <div className="item-info">
                            <span className="material-symbols-outlined">
                                download_2
                            </span>
                            <span>Download Konten Pilihan</span>
                        </div>
                        <div className="item-info">
                            <img src={NoAds} alt="" />
                            <span>Tidak Ada Iklan</span>
                        </div>
                        <div className="item-info">
                            <span className="material-symbols-outlined">
                                movie
                            </span>
                            <span>Tonton Semua Konten</span>
                        </div>
                        <div className="item-info">
                            <span className="material-symbols-outlined">
                                4k
                            </span>
                            <span>Kualitas Maksimal Sampai Dengan 4K</span>
                        </div>
                        <div className="item-info">
                            <span className="material-symbols-outlined">
                                devices
                            </span>
                            <span>
                                Tonton di Tv, Tablet, Mobile, dan Laptop
                            </span>
                        </div>
                        <div className="item-info">
                            <span className="material-symbols-outlined">
                                subtitles
                            </span>
                            <span>Substitle Untuk Konten Pilihan</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="subscribe-wrapper-bottom">
                <div className="subscribe-bottom">
                    <h3>Pilih Paketmu</h3>
                    <p>Temukan Paket Sesuai Kebutuhanmu</p>
                    <div className="subscribe-card">
                        <div className="card-info">
                            <h6>Individual</h6>
                            <span>Mulai dari Rp49,990/bulan</span>
                            <span>1 Akun</span>
                            <div className="benefits-info">
                                <div className="benefits-item">
                                    <span className="material-symbols-outlined">
                                        check
                                    </span>
                                    <span>Tidak ada iklan</span>
                                </div>
                                <div className="benefits-item">
                                    <span className="material-symbols-outlined">
                                        check
                                    </span>
                                    <span>Kualitas 720p</span>
                                </div>
                                <div className="benefits-item">
                                    <span className="material-symbols-outlined">
                                        check
                                    </span>
                                    <span>Download konten pilihan</span>
                                </div>
                            </div>
                                <div className="subscribe-button">
                                    <button>Langganan</button>
                                    <span>Syarat dan Ketentuan Berlaku</span>
                                </div>
                        </div>
                        <div className="card-info">
                            <h6>Berdua</h6>
                            <span>Mulai dari Rp79,990/bulan</span>
                            <span>2 Akun</span>
                            <div className="benefits-info">
                                <div className="benefits-item">
                                    <span className="material-symbols-outlined">
                                        check
                                    </span>
                                    <span>Tidak ada iklan</span>
                                </div>
                                <div className="benefits-item">
                                    <span className="material-symbols-outlined">
                                        check
                                    </span>
                                    <span>Kualitas 1080p</span>
                                </div>
                                <div className="benefits-item">
                                    <span className="material-symbols-outlined">
                                        check
                                    </span>
                                    <span>Download konten pilihan</span>
                                </div>
                            </div>
                                <div className="subscribe-button">
                                    <button>Langganan</button>
                                    <span>Syarat dan Ketentuan Berlaku</span>
                                </div>
                        </div>
                        <div className="card-info">
                            <h6>Keluarga</h6>
                            <span>Mulai dari Rp49,990/bulan</span>
                            <span>5-7 Akun</span>
                            <div className="benefits-info">
                                <div className="benefits-item">
                                    <span className="material-symbols-outlined">
                                        check
                                    </span>
                                    <span>Tidak ada iklan</span>
                                </div>
                                <div className="benefits-item">
                                    <span className="material-symbols-outlined">
                                        check
                                    </span>
                                    <span>Kualitas 4K</span>
                                </div>
                                <div className="benefits-item">
                                    <span className="material-symbols-outlined">
                                        check
                                    </span>
                                    <span>Download konten pilihan</span>
                                </div>
                            </div>
                                <div className="subscribe-button">
                                    <button>Langganan</button>
                                    <span>Syarat dan Ketentuan Berlaku</span>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
