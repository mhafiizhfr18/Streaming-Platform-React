import "../App.css";
import { useSelector, useDispatch } from "react-redux";
import { addToMyList, removeFromMyList } from "../store/redux/listSlice.js";

import { imagesBanner, imagesCard } from "../components/Images.jsx";

export function MovieCardLandscape(props) {
  const movieImage = props.banner
    ? props.banner
    : props.folder === "imagesBanner"
      ? imagesBanner[`${props.id}.png`]
      : imagesCard[`${props.id}.png`];

  return (
    <div className="movie-card--landscape" onClick={props.onClick}>
      <img src={movieImage} alt={props.title || "Poster film"} />

      <div className="movie-label">
        <div>
          {props.top !== undefined && (
            <span className="top-label">{props.top}</span>
          )}
        </div>

        <div>
          {props.new !== undefined && (
            <span className="episode-label">{props.new}</span>
          )}
        </div>

        <div>
          {props.premium !== undefined && (
            <span className="premium-label">{props.premium}</span>
          )}
        </div>
      </div>

      <div className="movie-info">
        <span>{props.title}</span>
        <span>★ {props.rating}/5</span>
      </div>

      <CardHover {...props} movieImage={movieImage} />
    </div>
  );
}
export function MovieCardPortrait(props) {
  const movieImage = props.image
    ? props.image
    : props.folder === "imagesBanner"
      ? imagesBanner[`${props.id}.png`]
      : imagesCard[`${props.id}.png`];

  return (
    <div className="movie-card--portrait" onClick={props.onClick}>
      <img src={movieImage} alt={props.title || "Poster film"} />

      {props.onDelete && (
        <button
          className="material-symbols-outlined delete-card"
          type="button"
          title={`Hapus ${props.title} dari Daftar Saya`}
          onClick={(event) => {
            event.stopPropagation();
            props.onDelete();
          }}
        >
          delete
        </button>
      )}
      <div className="movie-label">
        <div>
          {props.premium !== undefined && (
            <span className="premium-label">{props.premium}</span>
          )}
        </div>

        <div>
          {props.new !== undefined && (
            <span
              className={
                props.premium !== undefined
                  ? "episode-label episode-label-below"
                  : "episode-label"
              }
            >
              {props.new}
            </span>
          )}
        </div>

        <div>
          {props.top !== undefined && (
            <span className="top-label">{props.top}</span>
          )}
        </div>
      </div>
      <CardHover {...props} movieImage={movieImage} />
    </div>
  );
}
function CardHover(props) {
  const dispatch = useDispatch();

  const myList = useSelector((state) => state.list.myList);

  const isAdded = myList.some((movie) => movie.title === props.title);

  const handleAddToMyList = (event) => {
    event.stopPropagation();

    if (isAdded) {
      dispatch(removeFromMyList(props.title));
      return;
    }

    dispatch(
      addToMyList({
        ...props,
        image: props.image || props.movieImage,
      }),
    );
  };

  return (
    <div className="movie-hover">
      <div className="hover-buttons">
        <div className="hover-buttons-left">
          <button className="material-symbols-outlined play">play_arrow</button>
          <button
            className="material-symbols-outlined add"
            onClick={handleAddToMyList}
            type="button"
            title={
              isAdded ? "Hapus dari Daftar Saya" : "Tambahkan ke Daftar Saya"
            }
          >
            {isAdded ? "check" : "add"}
          </button>
        </div>
        <button className="material-symbols-outlined toggle">
          keyboard_arrow_down
        </button>
      </div>

      {(props.age !== undefined || props.episode !== undefined) && (
        <div className="hover-info">
          {props.age !== undefined && (
            <span className="hover-age">{props.age}</span>
          )}
          {props.episode !== undefined && <span>{props.episode}</span>}
        </div>
      )}

      {props.progress !== undefined && (
        <div className="watch-progress">
          <div className="watch-progress-track">
            <div
              className="watch-progress-bar"
              style={{ width: `${props.progress}%` }}
            ></div>
          </div>

          <span className="duration">{props.duration}</span>
        </div>
      )}

      {props.genre1 !== undefined && (
        <div className="hover-genre">
          <span>{props.genre1}</span>
          <span>•</span>
          <span>{props.genre2}</span>
          <span>•</span>
          <span>{props.genre3}</span>
        </div>
      )}
    </div>
  );
}
export function MoviePopUp({
  folder,
  id,
  image,
  banner,
  type,
  title,
  description,
  year,
  totalepisode,
  fullage,
  cast,
  genre1,
  genre2,
  genre3,
  pembuatfilm,
  onClose,
  isClosing,
}) {
  const movieImage =
    banner ||
    (folder === "imagesBanner"
      ? imagesBanner[`${id}.png`]
      : imagesCard[`${id}.png`]);

  const dispatch = useDispatch();

  const myList = useSelector((state) => state.list.myList);

  const isAdded = myList.some((movie) => movie.title === title);

  const handleAddToMyList = (event) => {
    event.stopPropagation();

    if (isAdded) {
      dispatch(removeFromMyList(title));
      return;
    }
    dispatch(
      addToMyList({
        folder,
        id,
        image,
        banner,
        type,
        title,
        description,
        year,
        totalepisode,
        fullage,
        cast,
        genre1,
        genre2,
        genre3,
        pembuatfilm,
      }),
    );
  };

  return (
    <div className={`popup-overlay ${isClosing ? "closing" : ""}`}>
      {" "}
      <div className="movie-popup">
        <button
          className="popup-close material-symbols-outlined"
          onClick={onClose}
        >
          close
        </button>
        <div className="hero" style={{ backgroundImage: `url(${movieImage})` }}>
          <div className="hero-content">
            <div className="hero-left">
              <h1>{title}</h1>
              <div className="hero-button">
                <button className="btn-primary">Mulai</button>
                <button
                  className="material-symbols-outlined add"
                  onClick={handleAddToMyList}
                  type="button"
                  title={
                    isAdded
                      ? "Hapus dari Daftar Saya"
                      : "Tambahkan ke Daftar Saya"
                  }
                >
                  {isAdded ? "check" : "add"}
                </button>
              </div>
            </div>

            <div className="hero-right">
              <button className="material-symbols-outlined volume-off">
                volume_off
              </button>
            </div>
          </div>
        </div>

        <div className="movie-popup-info">
          <div className="info-left">
            <div className="layout-left">
              {year !== undefined && <span className="">{year}</span>}
              {totalepisode !== undefined && (
                <span className="">{totalepisode}</span>
              )}
              {fullage !== undefined && (
                <span className="btn-age">{fullage}</span>
              )}
            </div>
            <p>{description}</p>
          </div>

          <div className="info-right">
            {cast !== undefined && (
              <div className="info-row">
                <span className="info-label">Cast</span>
                <span className="info-value">{cast}</span>
              </div>
            )}
            {genre1 !== undefined && (
              <div className="info-row">
                <span className="info-label">Genre</span>
                <span className="info-value">
                  {genre1}, {genre2}, {genre3}
                </span>
              </div>
            )}
            {pembuatfilm !== undefined && (
              <div className="info-row">
                <span className="info-label">Pembuat Film</span>
                <span className="info-value">{pembuatfilm}</span>
              </div>
            )}
          </div>
        </div>

        {type === "series" ? (
          <EpisodeList />
        ) : (
          <RecommendationList
            currentTitle={title}
            genre1={genre1}
            genre2={genre2}
            genre3={genre3}
          />
        )}
      </div>
    </div>
  );
}
function RecommendationList({ currentTitle, genre1, genre2, genre3 }) {
  const movies = useSelector((state) => state.list.data);

  const currentGenres = [genre1, genre2, genre3].filter(Boolean);

  const recommendedMovies = movies
    .filter((movie) => {
      const sameGenre = [movie.genre1, movie.genre2, movie.genre3].some(
        (genre) => currentGenres.includes(genre),
      );

      return movie.title !== currentTitle && sameGenre;
    })
    .slice(0, 3);

  return (
    <div className="popup-footer">
      <h3>Rekomendasi Serupa</h3>

      <div className="card-footer">
        {recommendedMovies.map((movie) => (
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
            description={movie.description}
            cast={movie.cast}
            pembuatfilm={movie.pembuatfilm}
            top={movie.top}
            new={movie.new}
            premium={movie.premium}
          />
        ))}
      </div>
    </div>
  );
}
function EpisodeList() {
  return (
    <div className="popup-footer">
      <h3>Episode</h3>

      <div className="episode-list">
        <div className="episode-item">
          <span>1</span>

          <img src={imagesBanner["tedlasso3.png"]} alt="" />

          <div className="episode-info">
            <div className="title">
              <h5>Pilot</h5>
              <span>30 min</span>
            </div>
            <p>
              American football coach Ted Lasso is hired by a wealthy divorcee
              to coach the English soccer team AFC Richmond.
            </p>
          </div>
        </div>

        <div className="episode-item">
          <span>2</span>

          <img src={imagesBanner["tedlasso4.png"]} alt="" />

          <div className="episode-info">
            <div className="title">
              <h5>Biscuit</h5>
              <span>29 min</span>
            </div>
            <p>It's Ted's first day of coaching, and fans aren't happy.</p>
          </div>
        </div>

        <div className="episode-item">
          <span>3</span>

          <img src={imagesBanner["tedlasso5.png"]} alt="" />

          <div className="episode-info">
            <div className="title">
              <h5>Trent Crimm: Independent</h5>
              <span>30 min</span>
            </div>

            <p>
              To arrange an in-depth exposé, Rebecca pairs cynical journalist
              Trent Crimm with Ted.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
