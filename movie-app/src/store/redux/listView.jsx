import { useSelector } from "react-redux";
import { MovieCardLandscape } from "../../components/Movie-Card";

function ListView() {
    const movies = useSelector((state) => state.list.data);
    const loading = useSelector((state) => state.list.loading);
    const error = useSelector((state) => state.list.error);

    if (loading) {
        return <p>Memuat data film...</p>;
    }

    if (error) {
        return <p>{error}</p>;
    }

    return (
        <div className="api-movie-list">
            <h2>Daftar Film dari API</h2>

            <div className="api-movie-grid">
                {movies.map((movie) => (
                    <MovieCardLandscape
                        key={movie.id}
                        id={movie.id}
                        image={movie.image}
                        banner={movie.banner}
                        title={movie.title}
                        rating={movie.rating}
                        type={movie.type}
                        age={movie.age}
                        genre1={movie.genre1}
                        genre2={movie.genre2}
                        genre3={movie.genre3}
                    />
                ))}
            </div>
        </div>
    );
}

export default ListView;
