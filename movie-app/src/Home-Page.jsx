import "./App.css";
import React, { useRef, useState } from "react";

import Logo1 from "./assets/Logo/Logo.svg";
import Logo2 from "./assets/Logo/Logo-icon.svg";
import Profile from "./assets/Image/profile.png";
import VolumeOff from "./assets/Icon/volume_off.svg";
import { imagesBanner } from "./Images.jsx";
import { BannerHover, MoviePopUp } from "./Movie-Card.jsx";

import { MovieCardLandscape, MovieCardPortrait } from "./Movie-Card.jsx";
import { NavLink } from "react-router";

export function HomePage() {
  return (
    <>
      <Navbar />
      <MovieBanner
        banner="avatar.png"
        title="Avatar The Way of Water"
        description="Set decades after the events of the first film, the story follows
            the Na'vi people and their struggle for survival against human
            invaders."
      />
      <MovieContinue type="Film" />
      <MovieTopRated type="Film dan Series" />
      <MovieTrending type="Film" />
      <MovieNewRelease />
      <Footer />
    </>
  );
}
export function MyList() {
  return (
    <>
      <Navbar />
      <MovieMyList />
      <Footer />
    </>
  );
}
export function SeriesPage() {
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
export function MoviesPage() {
  return (
    <>
      <Navbar />
      <MovieBanner
        banner="thelittlemermaid.png"
        title="The Little Mermaid"
        description="“The Little Mermaid” is the beloved story of Ariel, a beautiful and spirited young mermaid with a thirst for adventure. The youngest of King Triton’s daughters and the most defiant, Ariel longs to find out more about the world beyond the sea and, while visiting the surface, falls for the dashing Prince Eric."
        showGenre
      />
      <MovieContinue />
      <MovieChill type="Film" />
      <MovieTopRated type="Film" />
      <MovieTrending type="Film" />
      <MovieNewRelease />
      <Footer />
    </>
  );
}
export function Navbar() {
  return (
    <div className="navbar">
      <div className="nav-left">
        <NavLink
          to="/home"
          className="navbar-logo"
        >
          <img
            className="logo-desktop"
            src={Logo1}
            alt="CHILL"
          ></img>
          <img
            className="logo-mobile"
            src={Logo2}
            alt="CHILL"
          ></img>
        </NavLink>

        <ul className="nav-menu">
          <li>
            <NavLink to="/series">Series</NavLink>
          </li>
          <li>
            <NavLink to="/movies">Film</NavLink>
          </li>
          <li>
            <NavLink to="/myList">Daftar Saya</NavLink>
          </li>
        </ul>
      </div>

      <div className="profile-menu">
        <NavLink to="/login">
          <img
            src={Profile}
            alt="Profile"
          ></img>
        </NavLink>
        <span className="material-symbols-outlined arrow">
          keyboard_arrow_down
        </span>

        <div className="dropdown-menu">
          <NavLink to="/login">
            <span className="material-symbols-outlined">person</span>
            Profil Saya
          </NavLink>

          <NavLink to="/upgrade">
            <span className="material-symbols-outlined">star</span>
            Ubah Premium
          </NavLink>

          <NavLink to="/logout">
            <span className="material-symbols-outlined">logout</span>
            Keluar
          </NavLink>
        </div>
      </div>
    </div>
  );
}
function MovieBanner({ banner, title, description, showGenre }) {
  return (
    <div
      className="hero"
      style={{ backgroundImage: `url(${imagesBanner[banner]})` }}
    >
      {showGenre && <BannerHover />}

      <div className="hero-content">
        <div className="hero-left">
          <h1>{title}</h1>
          <p>{description}</p>
          <div className="hero-button">
            <button className="btn-primary">Mulai</button>
            <button className="btn-secondary">Selengkapnya</button>
            <span className="btn-age">18+</span>
          </div>
        </div>
        <div className="hero-right">
          <button className="btn-third">
            <img
              src={VolumeOff}
              alt="Volume Off"
            ></img>
          </button>
        </div>
      </div>
    </div>
  );
}
function MovieRow({ children }) {
  const scrollRef = useRef(null);

  const [selectedMovie, setSelectedMovie] = useState(null);

  function scrollLeft() {
    scrollRef.current.scrollBy({
      left: -500,
      behavior: "smooth",
    });
  }

  function scrollRight() {
    scrollRef.current.scrollBy({
      left: 500,
      behavior: "smooth",
    });
  }

  const MovieCards = React.Children.map(children, (child) => {
    return React.cloneElement(child, {
      onClick: () => setSelectedMovie(child.props),
    });
  });

  return (
    <div className="movie-wrapper">
      <button
        className="css-arrow left material-symbols-outlined"
        onClick={scrollLeft}
      >
        arrow_back_ios
      </button>

      <div
        className="movie-scroll"
        ref={scrollRef}
      >
        <div className="movie-card">{MovieCards}</div>
      </div>

      <button
        className="css-arrow right material-symbols-outlined"
        onClick={scrollRight}
      >
        arrow_forward_ios
      </button>

      {selectedMovie && (
        <MoviePopUp
          {...selectedMovie}
          onClose={() => setSelectedMovie(null)}
        />
      )}
    </div>
  );
}
function MovieContinue() {
  return (
    <section className="movie-section">
      <h3>Melanjutkan Tonton Film</h3>
      <MovieRow>
        <MovieCardLandscape
          folder="imagesBanner"
          id="dontlookup"
          title="Don't Look Up"
          rating="4.5"
          progress={60}
          duration="2j 18m"
          genre1="Dark Comedy"
          genre2="Fantasy"
          genre3="Drama"
          year="2021"
          totalepisode="2j 18m"
          fullage="18+"
          description="Kate Dibiasky (Jennifer Lawrence), seorang mahasiswa pascasarjana astronomi, dan profesornya, Dr. Randall Mindy (Leonardo DiCaprio). Mereka berdua menemukan sebuah komet raksasa berukuran sebesar Gunung Everest yang sedang bergerak menuju Bumi."
          cast="Leonardo DiCaprio, Jennifer Lawrence, Meryl Streep, Cate Blanchett, Jonah Hill, Timothée Chalamet, dan Ariana Grande"
          pembuatfilm="Adam McKay"
        />
        <MovieCardLandscape
          folder="imagesBanner"
          id="bluelock"
          title="Blue Lock"
          progress={69}
          duration="1j 31m"
          rating="4.9"
          genre1="Olahraga"
          genre2="Drama"
          genre3="Aksi"
          year="2024"
          totalepisode="1j 31m"
          fullage="PG-13"
          description="Sebelum memasuki fasilitas Blue Lock, Nagi adalah seorang siswa SMA pemalas yang tidak tertarik pada apa pun. Potensi jeniusnya kemudian ditemukan oleh Reo Mikage, yang mengajaknya bermain sepak bola bersama."
          cast="Seishiro Nagi: Nobunaga Shimazaki, Reo Mikage: Yuma Uchida, Zantetsu, dan lain-lain"
          pembuatfilm="Shunsuke Ishikawa, Taku Kishimoto, Eightbit (8bit)"
        />
        <MovieCardLandscape
          folder="imagesBanner"
          id="shazam"
          title="Shazam"
          rating="4.2"
          progress={55}
          duration="2j 12m"
          genre1="Action"
          genre2="Comedy"
          genre3="Pahlawan Super"
          year="2018"
          totalepisode="2j 11m"
          fullage="PG-13"
          description="Billy Batson adalah seorang anak yatim piatu berusia 14 tahun yang sering kabur dari panti asuhan demi mencari ibu kandungnya. Suatu hari, ia terpilih oleh seorang penyihir kuno misterius untuk mewarisi kekuatan sihir yang luar biasa. Hanya dengan meneriakkan kata 'SHAZAM!', Billy dapat bertransformasi seketika menjadi sosok pahlawan super dewasa yang memiliki kekuatan dewa."
          cast="Zachary Levi, Asher Angel, Mark Strong, dan lain-lain"
          pembuatfilm="David F. Sandberg, Peter Safran, Henry Gayden"
        />
        <MovieCardLandscape
          folder="imagesBanner"
          id="avatar"
          title="Avatar"
          rating="4.8"
          progress={29}
          duration="2j 41m"
          genre1="Sci-Fi"
          genre2="Action"
          genre3="Adventure"
          year="2022"
          totalepisode="3j 12m"
          fullage="PG-13"
          description="Set decades after the events of the first film, the story follows the Na'vi people and their struggle for survival against human invaders."
          cast="Sam Worthington, Zoe Saldaña, Stephen Lang, dan lain-lain"
          pembuatfilm="James Cameron, Rick Jaffa, Amanda Silver, Jon Landau"
        />
        <MovieCardLandscape
          folder="imagesBanner"
          id="fastx"
          title="Fast Furious X"
          rating="4.7"
          progress={29}
          duration="2j 21m"
          genre1="Aksi"
          genre2="Petualangan"
          genre3="Kriminal"
          year="2023"
          totalepisode="2j 21m"
          fullage="PG-13"
          description="Dominic Toretto dan keluarganya kembali menjadi target ancaman mematikan dari masa lalu. Kali ini mereka harus menghadapi Dante Reyes, anak dari gembong narkoba Hernan Reyes (musuh yang mereka kalahkan di Fast Five)."
          cast="Vin Diesel, Michelle Rodriguez, Jason Momoa, dan lain-lain"
          pembuatfilm=""
        />
        <MovieCardLandscape
          folder="imagesBanner"
          id="thelittlemermaid"
          title="Little Mermaid"
          rating="4.6"
          progress={29}
          duration="2j 15m"
          genre1="Musikal"
          genre2="Fantasi"
          genre3="Keluarga"
          year="2023"
          totalepisode="2j 15m"
          fullage="PG-SU"
          description="Memiliki jalan cerita yang serupa dengan versi animasinya, film ini mengikuti perjalanan Ariel yang berjiwa petualang dan haus akan pengetahuan tentang dunia manusia."
          cast="Halle Bailey (Ariel), Jonah Hauer-King (Pangeran Eric), Melissa McCarthy (Ursula), Javier Bardem (Raja Triton), dan lain-lain"
          pembuatfilm="Rob Marshall, David Magee"
        />
        <MovieCardLandscape
          folder="imagesBanner"
          id="spiderman"
          progress={39}
          duration="2j 20m"
          genre1="Animasi"
          genre2="Pahlawan Super"
          genre3="Aksi"
          year="2018"
          totalepisode="1j 57m"
          fullage="SU"
          description="Miles Morales, seorang remaja biasa asal Brooklyn, mendapatkan kekuatan laba-laba setelah digigit oleh laba-laba radioaktif. Hidupnya berubah drastis ketika ia menyaksikan kematian Spider-Man di dunianya akibat rencana jahat Kingpin yang menggunakan mesin pelontar dimensi."
          cast="Shameik Moore, Jake Johnson, Hailee Steinfeld, dan lain-lain"
          pembuatfilm="Bob Persichetti, Peter Ramsey, Rodney Rothman, Phil Lord"
        />
      </MovieRow>
    </section>
  );
}
function MovieTopRated(props) {
  return (
    <section className="movie-section">
      <h3>Top Rating {props.type} Hari Ini</h3>
      <MovieRow>
        <MovieCardPortrait
          folder="imagesCard"
          id="suzume"
          new="New Episode"
          age="SU"
          episode="2j 2m"
          genre1="Petualangan"
          genre2="Animasi"
          genre3="Fantasi"
          title="Suzume"
          year="2022"
          totalepisode="2j 2m"
          fullage="SU"
          description="Perjalanannya dimulai ketika ia bertemu dengan Souta Munakata, seorang pemuda misterius yang sedang mencari 'pintu'. Karena rasa penasaran, Suzume mengikuti Souta ke sebuah reruntuhan di gunung dan tanpa sengaja membuka sebuah pintu lapuk misterius."
          cast="Nanoka Hara, Hokuto Matsumura, Eri Fukatsu, dan lain-lain"
          pembuatfilm="Makoto Shinkai"
        />
        <MovieCardPortrait
          folder="imagesCard"
          id="thetomorrowwar"
          age="13+"
          episode="2j 18m"
          genre1="Aksi"
          genre2="Fiksi Ilmiah"
          genre3="Militer"
          title="The Tomorrow War"
          year="2021"
          totalepisode="2j 18m"
          fullage="PG-13"
          description="Dunia dikejutkan oleh kedatangan sekelompok penjelajah waktu dari tahun 2051. Mereka membawa pesan darurat bahwa 30 tahun di masa depan, umat manusia berada di ambang kepunahan akibat kalah perang melawan spesies alien predator yang sangat mematikan bernama Whitespikes."
          cast="Chris Pratt, Yvonne Strahovski"
          pembuatfilm="Chris McKay, Sutradara: Chris McKay"
        />
        <MovieCardPortrait
          folder="imagesCard"
          id="thebatman"
          age="13+"
          episode="2j 47m"
          genre1="Aksi"
          genre2="Kejahatan"
          genre3="Drama"
          title="The Batman"
          year="2022"
          totalepisode="2j 56m"
          fullage="PG-13"
          description="Memasuki tahun keduanya sebagai pemburu kriminal bertopeng di Gotham City, Bruce Wayne terseret jauh ke dalam bayang-bayang kota. Ketika seorang pembunuh berantai sadis yang menjuluki dirinya The Riddler mulai mengeksekusi tokoh-tokoh politik penting, ia meninggalkan teka-teki misterius yang ditujukan khusus untuk Batman."
          cast="Robert Pattinson, Zoë Kravitz, Paul Dano, dan lain-lain"
          pembuatfilm="Matt Reeves dan Peter Craig"
        />
        <MovieCardPortrait
          folder="imagesCard"
          id="amancalledotto"
          age="13+"
          episode="2j 6m"
          genre1="Drama"
          genre2="Komedi"
          genre3="Psikologikal"
          title="A Man Called Otto"
          year="2022"
          totalepisode="2j 6m"
          fullage="PG-13"
          description="Film ini menceritakan tentang Otto Anderson, seorang lansia berusia 63 tahun yang terkenal sangat pemarah, kaku, dan gemar menghakimi tetangganya. Setelah kehilangan istri tercintanya, Sonya, dan dipaksa pensiun dari pekerjaannya, Otto kehilangan tujuan hidup dan berencana untuk mengakhiri hidupnya."
          cast="Tom Hanks, Mariana Treviño, Rachel Keller, dan lain-lain"
          pembuatfilm="Marc Forster, David Magee"
        />
        <MovieCardPortrait
          folder="imagesCard"
          id="bighero6"
          age="13+"
          episode="1j 42m"
          genre1="Animasi"
          genre2="Aksi"
          genre3="Keluarga"
          title="Big Hero 6"
          year="2014"
          totalepisode="1j 42m"
          fullage="SU"
          description="Berlatar di kota fiktif futuristik San Fransokyo, film ini mengisahkan Hiro Hamada, seorang remaja jenius di bidang robotik berusia 14 tahun. Setelah sebuah tragedi kebakaran misterius merenggut nyawa kakak lak-lakinya, Tadashi, Hiro menemukan kenyamanan dari Baymax, sebuah robot perawat kesehatan berwujud balon tiup yang diciptakan oleh kakaknya."
          cast="Ryan Potter, Scott Adsit, Daniel Henney, dan lain-lain"
          pembuatfilm="Don Hall, Chris Williams, Jordan Roberts, Robert L. Baird, dan Dan Gerson"
        />
        <MovieCardPortrait
          folder="imagesCard"
          id="doctorstrange"
          age="13+"
          episode="2j 6m"
          genre1="Aksi"
          genre2="Petualangan"
          genre3="Horor"
          title="Doctor Strange in the Multiverse of Madness"
          year="2022"
          totalepisode="2j 6m"
          fullage="PG-13"
          description="Film ini mengisahkan tentang Doctor Stephen Strange yang harus melindungi America Chavez, seorang remaja misterius yang memiliki kekuatan unik untuk berpindah-pindah melintasi berbagai dimensi (multiverse). Kekuatan Chavez diincar oleh Wanda Maximoff (Scarlet Witch) yang terobsesi merebutnya demi bisa hidup bersama anak-anaknya di semesta alternatif."
          cast="Benedict Cumberbatch, Elizabeth Olsen, dan lain-lain"
          pembuatfilm="Sam Raimi, Michael Waldron, Kevin Feige (Marvel Studios)"
        />
        <MovieCardPortrait
          folder="imagesCard"
          id="antmanwasp"
          age="13+"
          episode="2j 4m"
          genre1="Petualangan"
          genre2="Pahlawan Super"
          genre3="Aksi"
          title="Ant-Man and the Wasp : Quantumania"
          year="2018"
          totalepisode="1j 58m"
          fullage="PG-13"
          description="Setelah peristiwa Captain America: Civil War, Scott Lang harus menjalani tahanan rumah dan berjuang menyeimbangkan hidupnya sebagai seorang ayah sekaligus pahlawan. Namun, ia kembali direkrut oleh Dr. Hank Pym dan Hope van Dyne untuk sebuah misi mendesak."
          cast="Paul Rudd, Evangeline Lilly, Michael Douglas, dan lain-lain"
          pembuatfilm="Peyton Reed, Chris McKenna, Erik Sommers, Paul Rudd, Andrew Barrer, dan Gabriel"
        />
        <MovieCardPortrait
          folder="imagesCard"
          id="myheroacademia"
          age="13+"
          episode="8 Musim"
          genre1="Aksi"
          genre2="Fantasi"
          genre3="Pahlawan Super"
          title="My Hero Academia"
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
function MovieTrending(props) {
  return (
    <section className="movie-section">
      <h3>{props.type} Trending</h3>
      <MovieRow>
        <MovieCardPortrait
          folder="imagesCard"
          id="doctorstrange"
          top="Top 10"
          age="13+"
          episode="2j 6m"
          genre1="Aksi"
          genre2="Petualangan"
          genre3="Horor"
          title="Doctor Strange in the Multiverse of Madness"
          year="2022"
          totalepisode="2j 6m"
          fullage="PG-13"
          description="Film ini mengisahkan tentang Doctor Stephen Strange yang harus melindungi America Chavez, seorang remaja misterius yang memiliki kekuatan unik untuk berpindah-pindah melintasi berbagai dimensi (multiverse). Kekuatan Chavez diincar oleh Wanda Maximoff (Scarlet Witch) yang terobsesi merebutnya demi bisa hidup bersama anak-anaknya di semesta alternatif."
          cast="Benedict Cumberbatch, Elizabeth Olsen, dan lain-lain"
          pembuatfilm="Sam Raimi, Michael Waldron, Kevin Feige (Marvel Studios)"
        />
        <MovieCardPortrait
          folder="imagesCard"
          id="blackadam"
          top="Top 10"
          age="13+"
          episode="2j 5m"
          genre1="Petualangan"
          genre2="Fantasi"
          genre3="Aksi"
          title="Black Adam"
          year="2022"
          totalepisode="2j 5m"
          fullage="PG-13"
          description="Hampir 5.000 tahun setelah dianugerahi kekuatan maha dahsyat dari para dewa kuno dan langsung dipenjara, Teth-Adam (Dwayne Johnson) akhirnya dibebaskan dari makam duniawinya oleh sekelompok arkeolog. Ia bangkit kembali di era modern di negara Kahndaq dengan membawa amarah besar dan rasa dendam."
          cast="Dwayne Johnson, Aldis Hodge, Pierce Brosnan, dan lain lain"
          pembuatfilm="Jaume Collet-Serra, Adam Sztykiel, Rory Haines, dan Sohrab Noshirvani"
        />
        <MovieCardPortrait
          folder="imagesCard"
          id="tedlasso"
          top="Top 10"
          new="Episode Baru"
          age="21+"
          episode="3 Musim"
          genre1="Komedi"
          genre2="Drama"
          genre3="Olahraga"
          title="Ted Lasso"
          year="2020"
          totalepisode="10 Episode"
          fullage="21+"
          description="Pelatih sepak bola perguruan tinggi Amerika Ted Lasso pergi ke London untuk mengelola AFC Richmond, tim sepak bola Liga Utama Inggris yang kesulitan."
          cast="Jason Sudeikis, Brett Goldstein, Brendan Hunt, Nick Mohammed, dan lain-lain"
          pembuatfilm="Brendan Hunt, Joe Killy, Bill Lawrence"
        />
        <MovieCardPortrait
          folder="imagesCard"
          id="spiderman"
          top="Top 10"
          age="SU"
          episode="2j 20m"
          genre1="Animasi"
          genre2="Pahlawan Super"
          genre3="Aksi"
          title="Spider-Man: Into the Spider-Verse"
          year="2018"
          totalepisode="1j 57m"
          fullage="SU"
          description="Miles Morales, seorang remaja biasa asal Brooklyn, mendapatkan kekuatan laba-laba setelah digigit oleh laba-laba radioaktif. Hidupnya berubah drastis ketika ia menyaksikan kematian Spider-Man di dunianya akibat rencana jahat Kingpin yang menggunakan mesin pelontar dimensi."
          cast="Shameik Moore, Jake Johnson, Hailee Steinfeld, dan lain-lain"
          pembuatfilm="Bob Persichetti, Peter Ramsey, Rodney Rothman, Phil Lord"
        />
        <MovieCardPortrait
          folder="imagesCard"
          id="jurassicworld"
          top="Top 10"
          age="13+"
          episode="2j 26m"
          genre1="Fiksi Ilmiah"
          genre2="Petualangan"
          genre3="Aksi"
          title="Jurassic World : Dominion"
          year="2022"
          totalepisode="2j 27m"
          fullage="PG-13"
          description="Kini, dinosaurus hidup berdampingan dan berburu bersama manusia di seluruh penjuru dunia. Namun, keseimbangan rapuh ini memicu ancaman baru ketika sebuah perusahaan bioteknologi bernama Biosyn melakukan rekayasa genetika ilegal yang menciptakan wabah belalang raksasa pemakan tanaman pangan."
          cast="Chris Pratt, Bryce Dallas Howard, Laura Dern, dan lain-lain"
          pembuatfilm="Colin Trevorrow, Emily Carmichael, Colin Trevorrow, dan Derek Connolly"
        />
        <MovieCardPortrait
          folder="imagesCard"
          id="baymax"
          top="Top 10"
          age="SU"
          episode="1j 42m"
          genre1="Petualangan"
          genre2="Fiksi Sains"
          genre3="Aksi"
          title="Baymax"
          year="2022"
          totalepisode="6 Episode"
          fullage="7+"
          description="Serial ini berfokus pada petualangan solo Baymax yang berkeliling kota San Fransokyo untuk menjalankan fungsi aslinya sebagai robot pendamping kesehatan."
          cast="Scott Adsit (Baymax), Ryan Potter (Hiro), Maya Rudolph (Cass), dan lain-lain"
          pembuatfilm=""
        />
        <MovieCardPortrait
          folder="imagesCard"
          id="myheroacademia"
          top="Top 10"
          age="13+"
          episode="8 Musim"
          genre1="Aksi"
          genre2="Fantasi"
          genre3="Pahlawan Super"
          title="My Hero Academia"
          year="2016"
          totalepisode="8 Season"
          fullage="PG-13"
          description="Di dunia tempat 80% populasi manusia lahir dengan kekuatan super yang disebut Quirk, seorang anak laki-laki bernama Izuku Midoriya justru terlahir normal tanpa kekuatan sama sekali. Meski sering dirundung, ia tetap berambisi menjadi pahlawan nomor satu seperti idolanya, All Might."
          cast="Daiki Yamashita, Kenta Miyake, Nobuhiko Okamoto, dan lain-lain"
          pembuatfilm="Kōhei Horikoshi, Kenji Nagasaki, Kenji Nagasaki, Yōsuke Kuroda"
        />
        <MovieCardPortrait
          folder="imagesCard"
          id="thelittlemermaid"
          top="Top 10"
          age="SU"
          episode="2j 15m"
          genre1="Musikal"
          genre2="Fantasi"
          genre3="Keluarga"
          title="The Little Mermaid"
          year="2023"
          totalepisode="2j 15m"
          fullage="PG-SU"
          description="Memiliki jalan cerita yang serupa dengan versi animasinya, film ini mengikuti perjalanan Ariel yang berjiwa petualang dan haus akan pengetahuan tentang dunia manusia."
          cast="Halle Bailey (Ariel), Jonah Hauer-King (Pangeran Eric), Melissa McCarthy (Ursula), Javier Bardem (Raja Triton), dan lain-lain"
          pembuatfilm="Rob Marshall, David Magee"
        />
      </MovieRow>
    </section>
  );
}
function MovieNewRelease() {
  return (
    <section className="movie-section">
      <h3>Rilis Baru</h3>

      <MovieRow>
        <MovieCardPortrait
          folder="imagesCard"
          id="myheroacademia"
          top="Top 10"
          age="13+"
          episode="8 Musim"
          genre1="Aksi"
          genre2="Fantasi"
          genre3="Pahlawan Super"
          title="My Hero Academia"
          year="2016"
          totalepisode="8 Season"
          fullage="PG-13"
          description="Di dunia tempat 80% populasi manusia lahir dengan kekuatan super yang disebut Quirk, seorang anak laki-laki bernama Izuku Midoriya justru terlahir normal tanpa kekuatan sama sekali. Meski sering dirundung, ia tetap berambisi menjadi pahlawan nomor satu seperti idolanya, All Might."
          cast="Daiki Yamashita, Kenta Miyake, Nobuhiko Okamoto, dan lain-lain"
          pembuatfilm="Kōhei Horikoshi, Kenji Nagasaki, Kenji Nagasaki, Yōsuke Kuroda"
        />
        <MovieCardPortrait
          folder="imagesCard"
          id="sonic2"
          age="13+"
          episode="2j 2m"
          genre1="Petualangan"
          genre2="Komedi"
          genre3="Aksi"
          title="Sonic the Hedgehog 2"
          year="2022"
          totalepisode="2j 2m"
          fullage="SU"
          description="Setelah menetap di Green Hills, Sonic sangat ingin membuktikan bahwa ia memiliki apa yang diperlukan untuk menjadi seorang pahlawan sejati. Ujiannya tiba ketika musuh bebuyutannya, Dr. Robotnik, kembali ke Bumi bersama sekutu barunya, Knuckles sang Echidna."
          cast="Ben Schwartz, Jim Carrey, Idris Elba, dan lain-lain"
          pembuatfilm="Jeff Fowler, Pat Casey, Josh Miller, dan John Whittington"
        />
        <MovieCardPortrait
          folder="imagesCard"
          id="guardianofthegalaxy"
          age="13+"
          episode="2j 30m"
          genre1="Petualangan"
          genre2="Fiksi Sains"
          genre3="Aksi"
          title="Guardians of the Galaxy Vol. 3"
          year="2023"
          totalepisode="2j 30m"
          fullage="PG-13"
          description="Kehidupan mereka mendadak kacau ketika masa lalu kelam Rocket Raccoon kembali menghantui mereka akibat ancaman dari penciptanya, The High Evolutionary. Peter Quill, yang masih berduka karena kehilangan Gamora, harus memimpin timnya dalam sebuah misi berbahaya demi menyelamatkan nyawa Rocket."
          cast="Chris Pratt, Zoe Saldana, Dave Bautista, Karen Gillan, dan lain-lain"
          pembuatfilm="James Gunn, Kevin Feige"
        />
        <MovieCardPortrait
          folder="imagesCard"
          id="spiderman"
          top="Top 10"
          age="SU"
          episode="2j 20m"
          genre1="Animasi"
          genre2="Pahlawan Super"
          genre3="Aksi"
          title="Spider-Man: Into the Spider-Verse"
          year="2018"
          totalepisode="1j 57m"
          fullage="SU"
          description="Miles Morales, seorang remaja biasa asal Brooklyn, mendapatkan kekuatan laba-laba setelah digigit oleh laba-laba radioaktif. Hidupnya berubah drastis ketika ia menyaksikan kematian Spider-Man di dunianya akibat rencana jahat Kingpin yang menggunakan mesin pelontar dimensi."
          cast="Shameik Moore, Jake Johnson, Hailee Steinfeld, dan lain-lain"
          pembuatfilm="Bob Persichetti, Peter Ramsey, Rodney Rothman, Phil Lord"
        />
        <MovieCardPortrait
          folder="imagesCard"
          id="thelittlemermaid"
          premium="Premium"
          top="Top 10"
          age="SU"
          episode="2j 15m"
          genre1="Musikal"
          genre2="Fantasi"
          genre3="Keluarga"
          title="The Little Mermaid"
          year="2023"
          totalepisode="2j 15m"
          fullage="PG-SU"
          description="Memiliki jalan cerita yang serupa dengan versi animasinya, film ini mengikuti perjalanan Ariel yang berjiwa petualang dan haus akan pengetahuan tentang dunia manusia."
          cast="Halle Bailey (Ariel), Jonah Hauer-King (Pangeran Eric), Melissa McCarthy (Ursula), Javier Bardem (Raja Triton), dan lain-lain"
          pembuatfilm="Rob Marshall, David Magee"
        />
        <MovieCardPortrait
          folder="imagesCard"
          id="amancalledotto"
          age="13+"
          episode="2j 6m"
          genre1="Drama"
          genre2="Komedi"
          genre3="Psikologikal"
          title="A Man Called Otto"
          year="2022"
          totalepisode="2j 6m"
          fullage="PG-13"
          description="Film ini menceritakan tentang Otto Anderson, seorang lansia berusia 63 tahun yang terkenal sangat pemarah, kaku, dan gemar menghakimi tetangganya. Setelah kehilangan istri tercintanya, Sonya, dan dipaksa pensiun dari pekerjaannya, Otto kehilangan tujuan hidup dan berencana untuk mengakhiri hidupnya."
          cast="Tom Hanks, Mariana Treviño, Rachel Keller, dan lain-lain"
          pembuatfilm="Marc Forster, David Magee"
        />
        <MovieCardPortrait
          folder="imagesCard"
          id="doctorstrange"
          top="Top 10"
          age="13+"
          episode="2j 6m"
          genre1="Aksi"
          genre2="Petualangan"
          genre3="Horor"
          title="Doctor Strange in the Multiverse of Madness"
          year="2022"
          totalepisode="2j 6m"
          fullage="PG-13"
          description="Film ini mengisahkan tentang Doctor Stephen Strange yang harus melindungi America Chavez, seorang remaja misterius yang memiliki kekuatan unik untuk berpindah-pindah melintasi berbagai dimensi (multiverse). Kekuatan Chavez diincar oleh Wanda Maximoff (Scarlet Witch) yang terobsesi merebutnya demi bisa hidup bersama anak-anaknya di semesta alternatif."
          cast="Benedict Cumberbatch, Elizabeth Olsen, dan lain-lain"
          pembuatfilm="Sam Raimi, Michael Waldron, Kevin Feige (Marvel Studios)"
        />

        <MovieCardPortrait
          folder="imagesCard"
          id="thetomorrowwar"
          age="13+"
          episode="2j 18m"
          genre1="Aksi"
          genre2="Fiksi Ilmiah"
          genre3="Militer"
          title="The Tomorrow War"
          year="2021"
          totalepisode="2j 18m"
          fullage="PG-13"
          description="Dunia dikejutkan oleh kedatangan sekelompok penjelajah waktu dari tahun 2051. Mereka membawa pesan darurat bahwa 30 tahun di masa depan, umat manusia berada di ambang kepunahan akibat kalah perang melawan spesies alien predator yang sangat mematikan bernama Whitespikes."
          cast="Chris Pratt, Yvonne Strahovski"
          pembuatfilm="Chris McKay, Sutradara: Chris McKay"
        />
      </MovieRow>
    </section>
  );
}
function SeriesContinue() {
  return (
    <section className="movie-section">
      <h3>Melanjutkan Tonton Series</h3>
      <MovieRow>
        <MovieCardLandscape
          folder="imagesBanner"
          id="aliceinborderland"
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
function MovieChill(props) {
  return (
    <section className="movie-section">
      <h3>{props.type} Persembahan Chill</h3>

      <MovieRow>
        <MovieCardPortrait
          folder="imagesCard"
          id="thelittlemermaid"
          premium="Premium"
          age="13+"
          episode="8 Musim"
          genre1="Musikal"
          genre2="Fantasi"
          genre3="Keluarga"
          title="The Little Mermaid"
          year="2023"
          totalepisode="2j 15m"
          fullage="PG-SU"
          description="Memiliki jalan cerita yang serupa dengan versi animasinya, film ini mengikuti perjalanan Ariel yang berjiwa petualang dan haus akan pengetahuan tentang dunia manusia."
          cast="Halle Bailey (Ariel), Jonah Hauer-King (Pangeran Eric), Melissa McCarthy (Ursula), Javier Bardem (Raja Triton), dan lain-lain"
          pembuatfilm="Rob Marshall, David Magee"
        />
        <MovieCardPortrait
          folder="imagesCard"
          id="dutyafterschool"
          premium="Premium"
          age="13+"
          episode="2j 2m"
          genre1="Aksi"
          genre2="Militer"
          genre3="Fiksi Ilmiah"
          title="Duty After School"
          year="2023"
          totalepisode="10 Episode"
          fullage="18+"
          description="Ketika bola-bola alien misterius berwarna ungu muncul di langit bumi dan mulai menyerang manusia dengan mematikan, militer Korea Selatan kewalahan. Demi menambah kekuatan tempur, pemerintah membatalkan ujian masuk universitas (CSAT) dan mewajibkan seluruh siswa kelas 12 SMA untuk mengikuti pelatihan militer setelah jam sekolah."
          cast="Shin Hyun-soo, Lee Soon-won, Im Se-mi, dan lain-lain"
          pembuatfilm="Sung Yong-il, Yoon Soo, Lee Nam-gyu"
        />
        <MovieCardPortrait
          folder="imagesCard"
          id="bighero6"
          premium="Premium"
          age="13+"
          episode="2j 30m"
          genre1="Animasi"
          genre2="Aksi"
          genre3="Keluarga"
          title="Big Hero 6"
          year="2014"
          totalepisode="1j 42m"
          fullage="SU"
          description="Berlatar di kota fiktif futuristik San Fransokyo, film ini mengisahkan Hiro Hamada, seorang remaja jenius di bidang robotik berusia 14 tahun. Setelah sebuah tragedi kebakaran misterius merenggut nyawa kakak lak-lakinya, Tadashi, Hiro menemukan kenyamanan dari Baymax, sebuah robot perawat kesehatan berwujud balon tiup yang diciptakan oleh kakaknya."
          cast="Ryan Potter, Scott Adsit, Daniel Henney, dan lain-lain"
          pembuatfilm="Don Hall, Chris Williams, Jordan Roberts, Robert L. Baird, dan Dan Gerson"
        />
        <MovieCardPortrait
          folder="imagesCard"
          id="allofusdead"
          premium="Premium"
          age="SU"
          episode="2j 20m"
          genre1="Dark Comedy"
          genre2="Fantasy"
          genre3="Drama"
          title="All of Us are Dead"
          year="2022"
          totalepisode="12 Episode"
          fullage="17+"
          description="Sebuah SMA biasa (SMA Hyosan) mendadak menjadi titik nol penyebaran wabah virus zombie yang mematikan. Sekelompok siswa terjebak di dalam area sekolah tanpa pasokan makanan, air, maupun sinyal telepon"
          cast="Park Ji-hu, Yoon Chan-young, Cho Yi-hyun, dan lain-lain"
          pembuatfilm="Lee Jae-kyoo, Kim Nam-su, Chun Sung-il"
        />
        <MovieCardPortrait
          folder="imagesCard"
          id="tedlasso"
          premium="Premium"
          age="SU"
          episode="2j 15m"
          genre1="Komedi"
          genre2="Drama"
          genre3="Olahraga"
          title="Ted Lasso"
          year="2020"
          totalepisode="10 Episode"
          fullage="21+"
          description="Pelatih sepak bola perguruan tinggi Amerika Ted Lasso pergi ke London untuk mengelola AFC Richmond, tim sepak bola Liga Utama Inggris yang kesulitan."
          cast="Jason Sudeikis, Brett Goldstein, Brendan Hunt, Nick Mohammed, dan lain-lain"
          pembuatfilm="Brendan Hunt, Joe Killy, Bill Lawrence"
        />
        <MovieCardPortrait
          folder="imagesCard"
          id="aliceinborderland"
          new="New Episode"
          age="13+"
          episode="2j 6m"
          genre1="Aksi"
          genre2="Petualangan"
          genre3="Survival"
          title="Alice in Borderland"
          year="2020"
          totalepisode="3 musim"
          fullage="18+"
          description="Arisu, seorang pemuda pengangguran yang kecanduan video game, tiba-tiba mendapati kota Tokyo yang biasanya padat menjadi kosong melongpong dan sunyi dalam sekejap bersama dua sahabatnya."
          cast="Kento Yamazaki, Tao Tsuchiya, Nijiro Murakami, dan lain-lain"
          pembuatfilm="Shinsuke Sato, Yoshiki Watabe, Yasuko Kuramitsu, dan Shinsuke Sato"
        />
        <MovieCardPortrait
          folder="imagesCard"
          id="doctorstrange"
          top="Top 10"
          age="13+"
          episode="2j 6m"
          genre1="Aksi"
          genre2="Petualangan"
          genre3="Horor"
          title="Doctor Strange in the Multiverse of Madness"
          year="2022"
          totalepisode="2j 6m"
          fullage="PG-13"
          description="Film ini mengisahkan tentang Doctor Stephen Strange yang harus melindungi America Chavez, seorang remaja misterius yang memiliki kekuatan unik untuk berpindah-pindah melintasi berbagai dimensi (multiverse). Kekuatan Chavez diincar oleh Wanda Maximoff (Scarlet Witch) yang terobsesi merebutnya demi bisa hidup bersama anak-anaknya di semesta alternatif."
          cast="Benedict Cumberbatch, Elizabeth Olsen, dan lain-lain"
          pembuatfilm="Sam Raimi, Michael Waldron, Kevin Feige (Marvel Studios)"
        />

        <MovieCardPortrait
          folder="imagesCard"
          id="thetomorrowwar"
          age="13+"
          episode="2j 18m"
          genre1="Aksi"
          genre2="Fiksi Ilmiah"
          genre3="Militer"
          title="The Tomorrow War"
          year="2021"
          totalepisode="2j 18m"
          fullage="PG-13"
          description="Dunia dikejutkan oleh kedatangan sekelompok penjelajah waktu dari tahun 2051. Mereka membawa pesan darurat bahwa 30 tahun di masa depan, umat manusia berada di ambang kepunahan akibat kalah perang melawan spesies alien predator yang sangat mematikan bernama Whitespikes."
          cast="Chris Pratt, Yvonne Strahovski"
          pembuatfilm="Chris McKay, Sutradara: Chris McKay"
        />
      </MovieRow>
    </section>
  );
}
function MovieMyList() {
  return (
    <section className="movie-section">
      <h3>Daftar Saya</h3>
      <div className="movie-list">
        <div className="movie-card">
          <MovieCardPortrait
            folder="imagesCard"
            id="myheroacademia"
            age="13+"
            episode="8 Musim"
            genre1="Aksi"
            genre2="Fantasi"
            genre3="Pahlawan Super"
            title="My Hero Academia"
            year="2016"
            totalepisode="8 Season"
            fullage="PG-13"
            description="Di dunia tempat 80% populasi manusia lahir dengan kekuatan super yang disebut Quirk, seorang anak laki-laki bernama Izuku Midoriya justru terlahir normal tanpa kekuatan sama sekali. Meski sering dirundung, ia tetap berambisi menjadi pahlawan nomor satu seperti idolanya, All Might."
            cast="Daiki Yamashita, Kenta Miyake, Nobuhiko Okamoto, dan lain-lain"
            pembuatfilm="Kōhei Horikoshi, Kenji Nagasaki, Kenji Nagasaki, Yōsuke Kuroda"
          />
          <MovieCardPortrait
            folder="imagesCard"
            id="sonic2"
            age="13+"
            episode="2j 2m"
            genre1="Petualangan"
            genre2="Komedi"
            genre3="Aksi"
            title="Sonic the Hedgehog 2"
            year="2022"
            totalepisode="2j 2m"
            fullage="SU"
            description="Setelah menetap di Green Hills, Sonic sangat ingin membuktikan bahwa ia memiliki apa yang diperlukan untuk menjadi seorang pahlawan sejati. Ujiannya tiba ketika musuh bebuyutannya, Dr. Robotnik, kembali ke Bumi bersama sekutu barunya, Knuckles sang Echidna."
            cast="Ben Schwartz, Jim Carrey, Idris Elba, dan lain-lain"
            pembuatfilm="Jeff Fowler, Pat Casey, Josh Miller, dan John Whittington"
          />
          <MovieCardPortrait
            folder="imagesCard"
            id="guardianofthegalaxy"
            age="13+"
            episode="2j 30m"
            genre1="Petualangan"
            genre2="Fiksi Sains"
            genre3="Aksi"
            title="Guardians of the Galaxy Vol. 3"
            year="2023"
            totalepisode="2j 30m"
            fullage="PG-13"
            description="Kehidupan mereka mendadak kacau ketika masa lalu kelam Rocket Raccoon kembali menghantui mereka akibat ancaman dari penciptanya, The High Evolutionary. Peter Quill, yang masih berduka karena kehilangan Gamora, harus memimpin timnya dalam sebuah misi berbahaya demi menyelamatkan nyawa Rocket."
            cast="Chris Pratt, Zoe Saldana, Dave Bautista, Karen Gillan, dan lain-lain"
            pembuatfilm="James Gunn, Kevin Feige"
          />
          <MovieCardPortrait
            folder="imagesCard"
            id="spiderman"
            age="SU"
            episode="2j 20m"
            genre1="Animasi"
            genre2="Pahlawan Super"
            genre3="Aksi"
            title="Spider-Man: Into the Spider-Verse"
            year="2018"
            totalepisode="1j 57m"
            fullage="SU"
            description="Miles Morales, seorang remaja biasa asal Brooklyn, mendapatkan kekuatan laba-laba setelah digigit oleh laba-laba radioaktif. Hidupnya berubah drastis ketika ia menyaksikan kematian Spider-Man di dunianya akibat rencana jahat Kingpin yang menggunakan mesin pelontar dimensi."
            cast="Shameik Moore, Jake Johnson, Hailee Steinfeld, dan lain-lain"
            pembuatfilm="Bob Persichetti, Peter Ramsey, Rodney Rothman, Phil Lord"
          />
          <MovieCardPortrait
            folder="imagesCard"
            id="thelittlemermaid"
            age="SU"
            episode="2j 15m"
            genre1="Musikal"
            genre2="Fantasi"
            genre3="Keluarga"
            title="The Little Mermaid"
            year="2023"
            totalepisode="2j 15m"
            fullage="PG-SU"
            description="Memiliki jalan cerita yang serupa dengan versi animasinya, film ini mengikuti perjalanan Ariel yang berjiwa petualang dan haus akan pengetahuan tentang dunia manusia."
            cast="Halle Bailey (Ariel), Jonah Hauer-King (Pangeran Eric), Melissa McCarthy (Ursula), Javier Bardem (Raja Triton), dan lain-lain"
            pembuatfilm="Rob Marshall, David Magee"
          />
          <MovieCardPortrait
            folder="imagesCard"
            id="amancalledotto"
            age="13+"
            episode="2j 6m"
            genre1="Drama"
            genre2="Komedi"
            genre3="Psikologikal"
            title="A Man Called Otto"
            year="2022"
            totalepisode="2j 6m"
            fullage="PG-13"
            description="Film ini menceritakan tentang Otto Anderson, seorang lansia berusia 63 tahun yang terkenal sangat pemarah, kaku, dan gemar menghakimi tetangganya. Setelah kehilangan istri tercintanya, Sonya, dan dipaksa pensiun dari pekerjaannya, Otto kehilangan tujuan hidup dan berencana untuk mengakhiri hidupnya."
            cast="Tom Hanks, Mariana Treviño, Rachel Keller, dan lain-lain"
            pembuatfilm="Marc Forster, David Magee"
          />
          <MovieCardPortrait
            folder="imagesCard"
            id="thetomorrowwar"
            age="13+"
            episode="2j 18m"
            genre1="Aksi"
            genre2="Fiksi Ilmiah"
            genre3="Militer"
            title="The Tomorrow War"
            year="2021"
            totalepisode="2j 18m"
            fullage="PG-13"
            description="Dunia dikejutkan oleh kedatangan sekelompok penjelajah waktu dari tahun 2051. Mereka membawa pesan darurat bahwa 30 tahun di masa depan, umat manusia berada di ambang kepunahan akibat kalah perang melawan spesies alien predator yang sangat mematikan bernama Whitespikes."
            cast="Chris Pratt, Yvonne Strahovski"
            pembuatfilm="Chris McKay, Sutradara: Chris McKay"
          />
          <MovieCardPortrait
            folder="imagesCard"
            id="bighero6"
            age="13+"
            episode="1j 42m"
            genre1="Animasi"
            genre2="Aksi"
            genre3="Keluarga"
            title="Big Hero 6"
            year="2014"
            totalepisode="1j 42m"
            fullage="SU"
            description="Berlatar di kota fiktif futuristik San Fransokyo, film ini mengisahkan Hiro Hamada, seorang remaja jenius di bidang robotik berusia 14 tahun. Setelah sebuah tragedi kebakaran misterius merenggut nyawa kakak lak-lakinya, Tadashi, Hiro menemukan kenyamanan dari Baymax, sebuah robot perawat kesehatan berwujud balon tiup yang diciptakan oleh kakaknya."
            cast="Ryan Potter, Scott Adsit, Daniel Henney, dan lain-lain"
            pembuatfilm="Don Hall, Chris Williams, Jordan Roberts, Robert L. Baird, dan Dan Gerson"
          />
          <MovieCardPortrait
            folder="imagesCard"
            id="doctorstrange"
            age="13+"
            episode="2j 6m"
            genre1="Aksi"
            genre2="Petualangan"
            genre3="Horor"
            title="Doctor Strange in the Multiverse of Madness"
            year="2022"
            totalepisode="2j 6m"
            fullage="PG-13"
            description="Film ini mengisahkan tentang Doctor Stephen Strange yang harus melindungi America Chavez, seorang remaja misterius yang memiliki kekuatan unik untuk berpindah-pindah melintasi berbagai dimensi (multiverse). Kekuatan Chavez diincar oleh Wanda Maximoff (Scarlet Witch) yang terobsesi merebutnya demi bisa hidup bersama anak-anaknya di semesta alternatif."
            cast="Benedict Cumberbatch, Elizabeth Olsen, dan lain-lain"
            pembuatfilm="Sam Raimi, Michael Waldron, Kevin Feige (Marvel Studios)"
          />
          <MovieCardPortrait
            folder="imagesCard"
            id="jurassicworld"
            age="13+"
            episode="2j 26m"
            genre1="Fiksi Ilmiah"
            genre2="Petualangan"
            genre3="Aksi"
            title="Jurassic World : Dominion"
            year="2022"
            totalepisode="2j 27m"
            fullage="PG-13"
            description="Kini, dinosaurus hidup berdampingan dan berburu bersama manusia di seluruh penjuru dunia. Namun, keseimbangan rapuh ini memicu ancaman baru ketika sebuah perusahaan bioteknologi bernama Biosyn melakukan rekayasa genetika ilegal yang menciptakan wabah belalang raksasa pemakan tanaman pangan."
            cast="Chris Pratt, Bryce Dallas Howard, Laura Dern, dan lain-lain"
            pembuatfilm="Colin Trevorrow, Emily Carmichael, Colin Trevorrow, dan Derek Connolly"
          />
          <MovieCardPortrait
            folder="imagesCard"
            id="baymax"
            age="SU"
            episode="1j 42m"
            genre1="Petualangan"
            genre2="Fiksi Sains"
            genre3="Aksi"
            title="Baymax"
            year="2022"
            totalepisode="6 Episode"
            fullage="7+"
            description="Serial ini berfokus pada petualangan solo Baymax yang berkeliling kota San Fransokyo untuk menjalankan fungsi aslinya sebagai robot pendamping kesehatan."
            cast="Scott Adsit (Baymax), Ryan Potter (Hiro), Maya Rudolph (Cass), dan lain-lain"
            pembuatfilm=""
          />
          <MovieCardPortrait
            folder="imagesCard"
            id="shazam"
            title="Shazam"
            rating="4.2"
            progress={55}
            duration="2j 12m"
            genre1="Action"
            genre2="Comedy"
            genre3="Pahlawan Super"
            year="2018"
            totalepisode="2j 11m"
            fullage="PG-13"
            description="Billy Batson adalah seorang anak yatim piatu berusia 14 tahun yang sering kabur dari panti asuhan demi mencari ibu kandungnya. Suatu hari, ia terpilih oleh seorang penyihir kuno misterius untuk mewarisi kekuatan sihir yang luar biasa. Hanya dengan meneriakkan kata 'SHAZAM!', Billy dapat bertransformasi seketika menjadi sosok pahlawan super dewasa yang memiliki kekuatan dewa."
            cast="Zachary Levi, Asher Angel, Mark Strong, dan lain-lain"
            pembuatfilm="David F. Sandberg, Peter Safran, Henry Gayden"
          />
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  const [genreOpen, setGenreOpen] = useState(false);
  const [helpOpen, setHelpOpen] = useState(false);

  return (
    <div className="footer">
      <div className="footer-logo">
        <NavLink to="home-page.html">
          <img
            src={Logo1}
            alt=""
          ></img>
        </NavLink>
        <p className="copyright">@2023 Chill All Rights Reserved.</p>
      </div>

      <div className="footer-menu">
        <div
          className="footer-title"
          onClick={() => setGenreOpen(!genreOpen)}
        >
          <p>Genre</p>
          <span className="material-symbols-outlined footer-arrow">
            chevron_right
          </span>
        </div>

        <ul className={genreOpen ? "show" : ""}>
          <li>
            <NavLink to="#">Aksi</NavLink>
          </li>
          <li>
            <NavLink to="#">Anak-anak</NavLink>
          </li>
          <li>
            <NavLink to="#">Anime</NavLink>
          </li>
          <li>
            <NavLink to="#">Britania</NavLink>
          </li>

          <li>
            <NavLink to="#">Drama</NavLink>
          </li>
          <li>
            <NavLink to="#">Fantasi Ilmiah & Fantasi</NavLink>
          </li>
          <li>
            <NavLink to="#">Kejahatan</NavLink>
          </li>
          <li>
            <NavLink to="#">KDrama</NavLink>
          </li>

          <li>
            <NavLink to="#">Komedi</NavLink>
          </li>
          <li>
            <NavLink to="#">Petualangan</NavLink>
          </li>
          <li>
            <NavLink to="#">Perang</NavLink>
          </li>
          <li>
            <NavLink to="#">Romantis</NavLink>
          </li>

          <li>
            <NavLink to="#">Sains & Alam</NavLink>
          </li>
          <li>
            <NavLink to="#">Thriller</NavLink>
          </li>
        </ul>
      </div>

      <div className="footer-help">
        <div
          className="footer-title"
          onClick={() => setHelpOpen(!helpOpen)}
        >
          <p>Bantuan</p>
          <span className="material-symbols-outlined footer-arrow">
            chevron_right
          </span>
        </div>

        <ul className={helpOpen ? "show" : ""}>
          <li>
            <NavLink to="#">FAQ</NavLink>
          </li>
          <li>
            <NavLink to="#">Kontak Kami</NavLink>
          </li>
          <li>
            <NavLink to="#">Privasi</NavLink>
          </li>
          <li>
            <NavLink to="#">Syarat & Ketentuan</NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}
