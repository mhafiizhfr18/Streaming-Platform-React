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
                </div>
    )
}
export function MovieCardPortrait (props) {
    return (
        <div className="movie-card--portrait">
                    <img src={props.folder === 'imagesBanner' ? imagesBanner[`${props.id}.png`] : imagesCard[`${props.id}.png`]} alt=""></img>
                        <div className="movie-info">
                        </div>
                </div>
    )
}