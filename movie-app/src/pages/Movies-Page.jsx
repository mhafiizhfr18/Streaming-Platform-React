import "../App.css"
import Navbar from "../components/Navbar";
import { MovieTopRated, MovieTrending, MovieNewRelease } from "./Home-Page";
import { MovieContinue, MovieRow } from "../pages/Home-Page"
import { MovieCardPortrait } from "../components/Movie-Card";
import MovieBanner from "../components/Movie-Banner";
import Footer from "../components/Footer";


function MoviesPage() {
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
export default MoviesPage

export function MovieChill(props) {
  return (
    <section className="movie-section">
      <h3>{props.type} Persembahan Chill</h3>

      <MovieRow>
        <MovieCardPortrait
          folder="imagesCard"
          id="thelittlemermaid"
          type="film"
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
          type="film"
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
          type="film"
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
          type="series"
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
          type="series"
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
          type="series"
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
          type="film"
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
          type="film"
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