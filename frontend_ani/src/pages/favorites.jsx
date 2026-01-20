import "../css/Favorites.css";
import { useAnimeContext } from "../context/AnimeContext";
import AnimeCard from "../components/AnimeCard";

function Favorites() {
  const { favorites } = useAnimeContext();

  if (favorites && favorites.length > 0) {
    return (
      <div className="favorites">
        <h2>Your Favourite Animes</h2>
        <div className="animes-grid">
          {favorites.map((anime) => (
            <AnimeCard anime={anime} key={anime.id} />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="favorites-empty">
      <h2>No Favourite Animes Yet</h2>
      <p>Start adding animes to your favourites and they’ll appear here!</p>
    </div>
  );
}

export default Favorites;
