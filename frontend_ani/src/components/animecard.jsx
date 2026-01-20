import "../css/AnimeCard.css";
import { useAnimeContext } from "../context/AnimeContext";

function AnimeCard({ anime }) {
    const { isFavorite, addToFavorites, removeFromFavorites } = useAnimeContext();
    const favorite = isFavorite(anime.id);

    function onFavoriteClick(e) {
        e.preventDefault();
        if (favorite) removeFromFavorites(anime.id);
        else addToFavorites(anime);
    }

    return (
        <div className="anime-card">
            <div className="anime-poster">
                <img src={anime.movie_banner} alt={anime.title} />
                <div className="anime-overlay">
                    <button className={`favorite-btn ${favorite ? "active" : ""}`} onClick={onFavoriteClick}>
                        ♥
                    </button>
                </div>
            </div>
            <div className="anime-info">
                <h3>{anime.title}</h3>
                <p>{anime.release_date}</p>
                <p className="director">Directed by: {anime.director}</p>
            </div>
        </div>
    );
}

export default AnimeCard;
