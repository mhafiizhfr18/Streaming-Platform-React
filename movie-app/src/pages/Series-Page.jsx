import "../App.css";
import { useSelector } from "react-redux";

import Navbar from "../components/Navbar";
import {
  MovieTopRated,
  MovieTrending,
  MovieNewRelease,
  MovieRow,
} from "./Home-Page";
import { MovieChill } from "./Movies-Page";
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
export default SeriesPage;

function SeriesContinue() {
  const movies = useSelector((state) => state.list.data);

  const continueMovies = movies.filter(
    (movie) => (movie.progress > 0) & (movie.type === "series"),
  )

  return (
    <section className="movie-section">
      <h3>Melanjutkan Tonton Series</h3>
      <MovieRow>
        {continueMovies.map((movie) => (
          <MovieCardLandscape
            key={movie.title}
            id={movie.id}
            image={movie.image}
            banner={movie.banner}
            type={movie.type}
            title={movie.title}
            rating={movie.rating}
            progress={movie.progress}
            duration={movie.duration}
            genre1={movie.genre1}
            genre2={movie.genre2}
            genre3={movie.genre3}
            year={movie.year}
            totalepisode={movie.totalepisode}
            episode={movie.episode}
            fullage={movie.fullage}
            age={movie.age}
            description={movie.description}
            cast={movie.cast}
            pembuatfilm={movie.pembuatfilm}
          />
        ))}
      </MovieRow>
    </section>
  );
}
