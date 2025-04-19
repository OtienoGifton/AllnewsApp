import MovieCard from "./moviecard.jsx";
import { useEffect, useState } from "react";
import { GetmovieLatest, Searchmovie } from "../services/api.js";

function MoviePage() {
  const [searchQuery, setSearchQery] = useState("");
  const [page, setPage] = useState(1);
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const loadpopularmovies = async (pagenumber) => {
    try {
      const popularmovies = await GetmovieLatest(pagenumber);
      setMovies((prev) => [...prev, ...popularmovies]);
    } catch (err) {
      console.log(err);
      setError("failed to load movies...");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadpopularmovies(page);
  }, []);

  function LoadMoreMovies() {
    const NextPage = page + 1;
    setPage(NextPage);
    loadpopularmovies(NextPage);
  }
  async function SearchHandler(e) {
    e.preventDefault();

    if (!searchQuery.trim()) return;
    if (loading) return;
    setLoading(true);

    try {
      const searchResults = await Searchmovie(searchQuery);
      setMovies(searchResults);
      setError(null);
    } catch {
      console.log(err);
      setError("failed to get movies");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="home">
      <div className="search-bar">
        <form className="search" onSubmit={SearchHandler}>
          <input
            type="text"
            value={searchQuery}
            placeholder="search"
            onChange={(e) => setSearchQery(e.target.value)}
          ></input>
          <button type="submit">Search</button>
        </form>
      </div>

      {error && <div className="error-message">{error}</div>}

      {loading ? (
        <div className="loader-holder">
          <div class="🤚">
            <div class="👉"></div>
            <div class="👉"></div>
            <div class="👉"></div>
            <div class="👉"></div>
            <div class="🌴"></div>
            <div class="👍"></div>
          </div>
        </div>
      ) : (
        <div className="movie-grid">
          {movies.map((movie) => (
            <MovieCard movie={movie} key={movie.id} />
          ))}
        </div>
      )}

      <div className="load-more-wrapper">
        <button onClick={LoadMoreMovies} className="load-more-btn">
          {loading ? "Loading..." : "Load More"}
        </button>
      </div>
    </div>
  );
}

export default MoviePage;
