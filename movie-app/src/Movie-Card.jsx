import "./App.css";
import { imagesBanner, imagesCard } from "./Images.jsx";

export function MovieCardLandscape(props) {
  return (
    <div className="movie-card--landscape">
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

      <MovieHover
        folder={props.folder}
        id={props.id}
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
    <div className="movie-card--portrait">
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

      <MovieHover
        folder={props.folder}
        id={props.id}
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

function MovieHover(props) {
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
          {props.episode !== undefined && 
          <span>{props.episode}</span>}
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
