import "../App.css"
import Navbar from "../components/Navbar";
import { MovieChill, MovieTopRated, MovieTrending, MovieNewRelease, MovieRow } from "./Home-Page";
import { MovieCardLandscape } from "../components/Movie-Card";
import MovieBanner from "../components/Movie-Banner";
import Footer from "../components/Footer";


function SeriesPage() {
  return (
    <>
      <Navbar />
      <MovieBanner
        banner="myheroacademia.png"
        title="My Hero Academia"
        description="Society is devastated by recent battles, and a mysterious, massive fortress suddenly appears. 
        A man bearing a striking resemblance to 'All Might'—dubbed Dark Might-emerges, claiming to be the new symbol of a twisted order, forcing Class 1-A into action."
        showGenre
      />
      <SeriesContinue />
      <MovieChill type="Series" />
      <MovieTopRated type="Series" />
      <MovieTrending type="Series" />
      <MovieNewRelease />
      <Footer />
    </>
  );
}
export default SeriesPage

function SeriesContinue() {
  return (
    <section className="movie-section">
      <h3>Melanjutkan Tonton Series</h3>
      <MovieRow>
        <MovieCardLandscape
          folder="imagesBanner"
          id="aliceinborderland"
          type="series"
          title="Alice in Borderland"
          new="Episode Baru"
          rating="4.5"
          episode="Episode 5"
          progress={60}
          duration="23m"
          genre1="Aksi"
          genre2="Petualangan"
          genre3="Survival"
          year="2020"
          totalepisode="3 musim"
          fullage="18+"
          description="Arisu, seorang pemuda pengangguran yang kecanduan video game, tiba-tiba mendapati kota Tokyo yang biasanya padat menjadi kosong melongpong dan sunyi dalam sekejap bersama dua sahabatnya."
          cast="Kento Yamazaki, Tao Tsuchiya, Nijiro Murakami, dan lain-lain"
          pembuatfilm="Shinsuke Sato, Yoshiki Watabe, Yasuko Kuramitsu, dan Shinsuke Sato"
        />
        <MovieCardLandscape
          folder="imagesBanner"
          id="allofusdead"
          type="series"
          title="All of Us are Dead"
          new="Episode Baru"
          progress={60}
          duration="33m"
          rating="4.9"
          episode="Episode 1"
          genre1="Dark Comedy"
          genre2="Fantasy"
          genre3="Drama"
          year="2022"
          totalepisode="12 Episode"
          fullage="17+"
          description="Sebuah SMA biasa (SMA Hyosan) mendadak menjadi titik nol penyebaran wabah virus zombie yang mematikan. Sekelompok siswa terjebak di dalam area sekolah tanpa pasokan makanan, air, maupun sinyal telepon"
          cast="Park Ji-hu, Yoon Chan-young, Cho Yi-hyun, dan lain-lain"
          pembuatfilm="Lee Jae-kyoo, Kim Nam-su, Chun Sung-il"
        />
        <MovieCardLandscape
          folder="imagesBanner"
          id="myperfectstranger"
          type="series"
          title="My Perfect Stranger"
          new="Episode Baru"
          episode="Episode 3"
          rating="4.2"
          progress={55}
          duration="49m"
          genre1="Misteri"
          genre2="Kriminal"
          genre3="Romansa"
          year="2023"
          totalepisode="16 Episode"
          fullage="13+"
          description="Yoon Hae-jun, seorang pembawa berita yang menemukan sebuah mobil mesin waktu. Ia kembali ke tahun 1987 untuk menyelidiki kasus pembunuhan berantai demi mencegah kematian dirinya sendiri di masa depan."
          cast="Kim Dong-wook, Jin Ki-joo, Seo Ji-hye, Lee Won-jung"
          pembuatfilm="Kang Soo-yeon, Lee Woong-hee, Baek So-yeon"
        />
        <MovieCardLandscape
          folder="imagesBanner"
          id="tedlasso"
          type="series"
          title="Ted Lasso"
          new="Episode Baru"
          episode="Episode 6"
          rating="4.8"
          progress={30}
          duration="22m"
          genre1="Komedi"
          genre2="Drama"
          genre3="Olahraga"
          year="2020"
          totalepisode="10 Episode"
          fullage="21+"
          description="Pelatih sepak bola perguruan tinggi Amerika Ted Lasso pergi ke London untuk mengelola AFC Richmond, tim sepak bola Liga Utama Inggris yang kesulitan."
          cast="Jason Sudeikis, Brett Goldstein, Brendan Hunt, Nick Mohammed, dan lain-lain"
          pembuatfilm="Brendan Hunt, Joe Killy, Bill Lawrence"
        />
        <MovieCardLandscape
          folder="imagesBanner"
          id="myheroacademia"
          type="series"
          title="My Hero Academia"
          new="Episode Baru"
          episode="Episode 9"
          rating="4.7"
          progress={80}
          duration="8m"
          genre1="Aksi"
          genre2="Fantasi"
          genre3="Pahlawan Super"
          year="2016"
          totalepisode="8 Season"
          fullage="PG-13"
          description="Di dunia tempat 80% populasi manusia lahir dengan kekuatan super yang disebut Quirk, seorang anak laki-laki bernama Izuku Midoriya justru terlahir normal tanpa kekuatan sama sekali. Meski sering dirundung, ia tetap berambisi menjadi pahlawan nomor satu seperti idolanya, All Might."
          cast="Daiki Yamashita, Kenta Miyake, Nobuhiko Okamoto, dan lain-lain"
          pembuatfilm="Kōhei Horikoshi, Kenji Nagasaki, Kenji Nagasaki, Yōsuke Kuroda"
        />
      </MovieRow>
    </section>
  );
}

