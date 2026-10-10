import "../App.css";
import { MovieCardPortrait } from "../components/Movie-Card.jsx";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import { NavLink } from "react-router";

export function MovieMyList(props) {
  return (
    <section className="movie-section">
      <div className="title">
        <h3>Daftar Saya</h3>
        <NavLink to="/myList">{props.all}</NavLink>
      </div>
      <div className="movie-list">
        <div className="movie-card">
          <MovieCardPortrait
            folder="imagesCard"
            id="myheroacademia"
            type="series"
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
            type="film"
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
            type="film"
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
            type="film"
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
            type="film"
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
            type="film"
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
          <MovieCardPortrait
            folder="imagesCard"
            id="bighero6"
            type="film"
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
            type="film"
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
            type="film"
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
            type="film"
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
        </div>
      </div>
    </section>
  );
}

function MyList() {
  return (
    <>
      <Navbar />
      <MovieMyList />
      <Footer />
    </>
  );
}
export default MyList;
