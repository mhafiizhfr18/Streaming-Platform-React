import "../App.css"
import Navbar from "../components/Navbar";
import { MovieChill, MovieTopRated, MovieTrending, MovieNewRelease, MovieRow } from "./Home-Page";
import { MovieCardLandscape } from "../components/Movie-Card";
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

export function MovieContinue() {
  return (
    <section className="movie-section">
      <h3>Melanjutkan Tonton Film</h3>
      <MovieRow>
        <MovieCardLandscape
          folder="imagesBanner"
          id="dontlookup"
          type="film"
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
          type="film"
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
          type="film"
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
          type="film"
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
          type="film"
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
          type="film"
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
          type="film"
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