import "./App.css";
import { imagesBanner, imagesCard } from "./Images.jsx";
import { NavLink } from "react-router";
import VolumeOff from "./assets/Icon/volume_off.svg";

export function MovieCardLandscape(props) {
  return (
    <div
      className="movie-card--landscape"
      onClick={props.onClick}
    >
      <img
        src={
          props.folder === "imagesBanner"
            ? imagesBanner[`${props.id}.png`]
            : imagesCard[`${props.id}.png`]
        }
        alt=""
      ></img>

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

      <CardHover
        folder={props.folder}
        id={props.id}
        type={props.type}
        age={props.age}
        progress={props.progress}
        duration={props.duration}
        episode={props.episode}
        genre1={props.genre1}
        genre2={props.genre2}
        genre3={props.genre3}
      />
    </div>
  );
}
export function MovieCardPortrait(props) {
  return (
    <div
      className="movie-card--portrait"
      onClick={props.onClick}
    >
      <img
        src={
          props.folder === "imagesBanner"
            ? imagesBanner[`${props.id}.png`]
            : imagesCard[`${props.id}.png`]
        }
        alt=""
      />
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
      <CardHover
        folder={props.folder}
        id={props.id}
        type={props.type}
        age={props.age}
        progress={props.progress}
        duration={props.duration}
        episode={props.episode}
        genre1={props.genre1}
        genre2={props.genre2}
        genre3={props.genre3}
      />
    </div>
  );
}

function CardHover(props) {
  return (
    <div className="movie-hover">
      <div className="hover-buttons">
        <div className="hover-buttons-left">
          <button className="material-symbols-outlined play">play_arrow</button>
          <button className="material-symbols-outlined">check</button>
        </div>
        <button className="material-symbols-outlined">
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

export function BannerHover() {
  return (
    <div className="genre-button">
      <div className="genre-header">
        <span>Genre</span>
        <span className="material-symbols-outlined">keyboard_arrow_down</span>
      </div>

      <div className="genre-menu">
        <NavLink to="/mylist">Aksi</NavLink>
        <NavLink to="/mylist">Anak-anak</NavLink>
        <NavLink to="/mylist">Anime</NavLink>
        <NavLink to="/mylist">Britania</NavLink>
        <NavLink to="/mylist">Drama</NavLink>
        <NavLink to="/mylist">Fantasi Ilmiah & Fantasi</NavLink>
        <NavLink to="/mylist">Kejahatan</NavLink>

        <NavLink to="/mylist">KDrama</NavLink>
        <NavLink to="/mylist">Komedi</NavLink>
        <NavLink to="/mylist">Petualangan</NavLink>
        <NavLink to="/mylist">Perang</NavLink>
        <NavLink to="/mylist">Romantis</NavLink>
        <NavLink to="/mylist">Sains & Alam</NavLink>
        <NavLink to="/mylist">Thriller</NavLink>
      </div>
    </div>
  );
}

export function MoviePopUp({
  folder,
  id,
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
    folder === "imagesBanner"
      ? imagesBanner[`${id}.png`]
      : imagesCard[`${id}.png`];

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
        <div
          className="hero"
          style={{ backgroundImage: `url(${movieImage})` }}
        >
          <div className="hero-content">
            <div className="hero-left">
              <h1>{title}</h1>
              <div className="hero-button">
                <button className="btn-primary">Mulai</button>
                <button className="btn-third material-symbols-outlined">
                  Add
                </button>
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

        {type === "series" ? <EpisodeList /> : <RecommendationList />}

      </div>
    </div>
  );
}
function RecommendationList() {
  return (
    <div className="popup-footer">
      <h3>Rekomendasi Serupa</h3>

      <div className="card-footer">
        <MovieCardPortrait
          folder="imagesCard"
          id="guardianofthegalaxy"
        />

        <MovieCardPortrait
          folder="imagesCard"
          id="myheroacademia"
        />

        <MovieCardPortrait
          folder="imagesCard"
          id="antmanwasp"
        />
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

          <img
            src={imagesBanner["tedlasso3.png"]}
            alt=""
          />

          <div className="episode-info">
            <h5>Pilot</h5>
            <p>
              American football coach Ted Lasso is hired by a wealthy
              divorcee to coach the English soccer team AFC Richmond.
            </p>
          </div>

          <span>30 min</span>
        </div>

        <div className="episode-item">
          <span>2</span>

          <img
            src={imagesBanner["tedlasso4.png"]}
            alt=""
          />

          <div className="episode-info">
            <h5>Biscuit</h5>
            <p>
              It's Ted's first day of coaching, and fans aren't happy.
            </p>
          </div>

          <span>29 min</span>
        </div>

        <div className="episode-item">
          <span>3</span>

          <img
            src={imagesBanner["tedlasso5.png"]}
            alt=""
          />

          <div className="episode-info">
            <h5>Trent Crimm: Independent</h5>
            <p>
              To arrange an in-depth exposé, Rebecca pairs cynical
              journalist Trent Crimm with Ted.
            </p>
          </div>

          <span>30 min</span>
        </div>

      </div>
    </div>
  );
}