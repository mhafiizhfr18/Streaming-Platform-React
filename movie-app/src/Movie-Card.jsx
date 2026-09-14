import './App.css'
import { imagesBanner, imagesCard } from './Images.jsx'

export function MovieCardLandscape (props) {
    return (
        <div className="movie-card--landscape">
            <img src={props.folder === 'imagesBanner' ? imagesBanner[`${props.id}.png`] : imagesCard[`${props.id}.png`]} alt=""></img>
            
            <div className="movie-info">
                <span>{props.title}</span>
                <span>★ {props.rating}/5</span>
            </div>
            <div> 
                <MovieHover folder={props.folder} id={props.id} />
            </div>
        </div>
    )
}
export function MovieCardPortrait (props) {
    return (
        <div className="movie-card--portrait">
            <img src={props.folder === 'imagesBanner' ? imagesBanner[`${props.id}.png`] : imagesCard[`${props.id}.png`]} alt=""></img>
            
            <div>
                <MovieHover folder={props.folder} id={props.id} />
            </div>
        </div>
        
    )
}

function MovieHover(props) {
    return (
        <div className="movie-hover">
            <div className="hover-image">
                <img src={props.folder === 'imagesBanner' ? imagesBanner[`${props.id}.png`] : imagesBanner[`${props.id}.png`]} alt=""></img>
            </div>
            <div className="hover-buttons">
                <div className='hover-buttons-left'>
                    <button className="material-symbols-outlined play">play_arrow</button>
                    <button className="material-symbols-outlined">check</button>
                </div>
                <button className="material-symbols-outlined">keyboard_arrow_down</button>
            </div>
            <div className="hover-info">
                <span className='hover-age'>13+</span>
                <span>16 Episode</span>
            </div>
            <div className="hover-genre">
                <span>Misteri</span>
                <span>•</span>
                <span>Kriminal</span>
                <span>•</span>
                <span>Fantasi</span>
            </div>
        </div>
    )
}