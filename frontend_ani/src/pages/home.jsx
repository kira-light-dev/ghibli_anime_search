import AnimeCard from "../components/AnimeCard";
import { useState, useEffect } from "react";
import { searchAnimes, getPopularAnimes } from "../services/api";
import { useLocation } from "react-router-dom";
import "../css/Home.css";

function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [animes, setAnimes] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [shouldReload, setShouldReload] = useState(false);
  const location = useLocation();

  // 🧠 Listen for manual reset from NavBar (Anime App or Home click)
  useEffect(() => {
    const handleReset = () => setShouldReload(true);
    window.addEventListener("reset-home", handleReset);
    return () => window.removeEventListener("reset-home", handleReset);
  }, []);

  // 🔄 Load popular or search results
  useEffect(() => {
    const loadPopularAnimes = async () => {
      setLoading(true);
      try {
        const popular = await getPopularAnimes();
        setAnimes(popular);
        setError(null);
      } catch (err) {
        setError("Failed to load animes...");
      } finally {
        setLoading(false);
      }
    };

    if (location.pathname === "/" && (searchQuery === "" || shouldReload)) {
      loadPopularAnimes();
      setShouldReload(false);
    }
  }, [location.pathname, searchQuery, shouldReload]);

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!searchQuery.trim() || loading) return;

    setLoading(true);
    try {
      const results = await searchAnimes(searchQuery);
      setAnimes(results);
      setError(null);
    } catch (err) {
      console.log(err);
      setError("Failed to search animes...");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="home">
      <form onSubmit={handleSearch} className="search-form">
        <input
          type="text"
          placeholder="Search for animes..."
          className="search-input"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button type="submit" className="search-button">
          Search
        </button>
      </form>

      {error && <div className="error-message">{error}</div>}

      {loading ? (
        <div className="loading">Loading...</div>
      ) : (
        <div className="animes-grid">
          {animes.map((anime) => (
            <AnimeCard anime={anime} key={anime.id} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Home;


