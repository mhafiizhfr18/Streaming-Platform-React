import './App.css'
import images from './image.jsx'


export function MovieContinue () {
  return (
    <section class="movie-section">
        <h3>Melanjutkan Tonton Film</h3>
            
        <div class="movie-wrapper">  
            <button class="css-arrow left"></button>
           
            <div class="movie-continue">
                
                <div class="movie-card--landscape">
                    <img src={images['17.png']} alt=""></img>
                        <div class="movie-info">
                            <span>Don't Look Up</span>
                            <span>★ 4.5/5</span>
                        </div>
                </div>
                <div class="movie-card--landscape">
                    <img src={images['2.png']} alt=""></img>
                        <div class="movie-info">
                            <span>Shazam</span>
                            <span>★ 4.2/5</span>
                        </div>
                </div>
                <div class="movie-card--landscape">
                    <img src={images['3.png']} alt=""></img>
                        <div class="movie-info"> 
                            <span>Avatar</span>
                            <span>★ 4.8/5</span>
                        </div>
                </div>
                <div class="movie-card--landscape">
                    <img src={images['4.png']} alt=""></img>
                        <div class="movie-info">
                            <span>Fast Furious X</span>
                            <span>★ 4.7/5</span>
                        </div>   
                </div>
                <div class="movie-card--landscape">
                    <img src={images['5.png']} alt=""></img>
                        <div class="movie-info">
                            <span>Blue Lock</span>
                            <span>★ 4.9/5</span>
                        </div>   
                </div>
                <div class="movie-card--landscape">
                    <img src={images['6.png']} alt=""></img>
                        <div class="movie-info">
                            <span>Little Mermaid</span>
                            <span>★ 4.6/5</span>
                        </div>   
                </div>
            </div>
            <button class="css-arrow right"></button>
        </div>
    </section>
  )
}

