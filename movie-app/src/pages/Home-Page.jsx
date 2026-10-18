import "../App.css";
import { useSelector } from "react-redux";

import React, { useRef, useState } from "react";
import { MoviePopUp, MovieCardPortrait } from "../components/Movie-Card.jsx";
import { MovieCardLandscape } from "../components/Movie-Card";
import MovieBanner from "../components/Movie-Banner.jsx";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";

function HomePage() {
  const movies = useSelector((state) => state.list.data);
  const featuredMovie = movies.find(
    (movie) => movie.title === "Avatar: The Way of Water",
  );

  console.log("Movies:", movies);
  console.log("Featured movie:", featuredMovie);
  return (
    <>
      <Navbar />

      {featuredMovie && (
        <MovieBanner
          image={featuredMovie.banner}
          title="Avatar: The Way of Water"
          description={featuredMovie.description}
        />
      )}

      <MovieContinue type="Film" />
      <MovieTopRated type="Film dan Series" />
      <MovieTrending type="Film" />
      <MovieNewRelease />
      <Footer />
    </>
  );
}
export default HomePage;

export function MovieRow({ children }) {
  const scrollRef = useRef(null);

  const [selectedMovie, setSelectedMovie] = useState(null);
  const [isClosing, setIsClosing] = useState(false);

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
    if (!React.isValidElement(child)) {
      return child;
    }

    return React.cloneElement(child, {
      onClick: () => {
        setIsClosing(false);
        setSelectedMovie(child.props);
      },
    });
  });

  function handleClose() {
    setIsClosing(true);

    setTimeout(() => {
      setSelectedMovie(null);
    }, 300);
  }
  return (
    <div className="movie-wrapper">
      <button
        className="css-arrow left material-symbols-outlined"
        onClick={scrollLeft}
      >
        arrow_back_ios
      </button>

      <div className="movie-scroll" ref={scrollRef}>
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
          onClose={handleClose}
          isClosing={isClosing}
        />
      )}
    </div>
  );
}
export function MovieContinue() {
  const movies = useSelector((state) => state.list.data);

  const continueMovies = movies.filter(
    (movie) => (movie.progress > 0) && (movie.type === "film"),
  );

  return (
    <section className="movie-section">
      <h3>Melanjutkan Tonton Film</h3>
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
            top={movie.top}
          />
        ))}
      </MovieRow>
    </section>
  );
}
export function MovieTopRated(props) {
  const movies = useSelector((state) => state.list.data);

  const topRatedMovies = movies.filter((movie) => movie.top);
  return (
    <section className="movie-section">
      <h3>Top Rating {props.type} Hari Ini</h3>
      <MovieRow>
        {topRatedMovies.map((movie) => (
          <MovieCardPortrait
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
            top={movie.top}
            new={movie.new}
            premium={movie.premium}
          />
        ))}
      </MovieRow>
    </section>
  );
}
export function MovieTrending(props) {
  const movies = useSelector((state) => state.list.data);

  const trendingMovies = movies.filter((movie) => movie.label === "Trending");
  return (
    <section className="movie-section">
      <h3>{props.type} Trending</h3>
      <MovieRow>
        {trendingMovies.map((movie) => (
          <MovieCardPortrait
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
            top={movie.top}
            new={movie.new}
            premium={movie.premium}
          />
        ))}
      </MovieRow>
    </section>
  );
}
export function MovieNewRelease() {
  const movies = useSelector((state) => state.list.data);

  const newReleaseMovie = movies.filter((movie) => movie.label === "New");

  return (
    <section className="movie-section">
      <h3>Rilis Baru</h3>

      <MovieRow>
        {newReleaseMovie.map((movie) => (
          <MovieCardPortrait
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
            top={movie.top}
            new={movie.new}
            premium={movie.premium}
          />
        ))}
      </MovieRow>
    </section>
  );
}
