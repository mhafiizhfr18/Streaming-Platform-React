import "../App.css";
import { useSelector } from "react-redux";

import Navbar from "../components/Navbar";
import { MovieTopRated, MovieTrending, MovieNewRelease } from "./Home-Page";
import { MovieContinue, MovieRow } from "../pages/Home-Page";
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
export default MoviesPage;

export function MovieChill(props) {
  const movies = useSelector((state) => state.list.data);

  const movieChill = movies.filter(
    (movie) => (movie.premium) && movie.type === (props.type === "Film" ? "film" : "series")
  );

  return (
    <section className="movie-section">
      <h3>{props.type} Persembahan Chill</h3>

      <MovieRow>
        {movieChill.map((movie) => (
          <MovieCardPortrait
            key={movie.title}
            id={movie.id}
            image={movie.image}
            banner={movie.banner}
            type={movie.type}
            title={movie.title}
            rating={movie.rating}
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
            top={movie.top}
            new={movie.new}
            premium={movie.premium}
          />
        ))}
      </MovieRow>
    </section>
  );
}
