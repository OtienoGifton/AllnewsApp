import "../App.css";
import { useState, useEffect } from "react";
import { GetlistofArtists, SearchArtist } from "../services/api.js";
import MusicCard from "./musiccard.jsx";

function Musicpage() {
  const [music, setMusic] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchartistQuery, setartistSearchQery] = useState("");
  const [page, setPage] = useState(1);

  const fetchArtist = async (pagenumber) => {
    try {
      const popularArtists = await GetlistofArtists(pagenumber);
      console.log("Fetched artists:", popularArtists);
      setMusic((prev) => [...prev, ...popularArtists]);
    } catch (err) {
      setError("Failed to load artists.......");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchArtist(page);
  }, []);

  function loadMoreMusic() {
    const NextPage = page + 1;
    setPage(NextPage);
    fetchArtist(NextPage);
  }

  if (loading)
    return (
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
    );
  if (error) return <div>{error}</div>;

  async function SearchartistHandler(e) {
    e.preventDefault();

    const value = searchartistQuery.trim();

    if (value === "") {
      const TopArtists = await GetlistofArtists();
      setMusic(TopArtists);
    } else {
      const SearchedArtist = await SearchArtist(value);
      setMusic(SearchedArtist);
    }
  }

  return (
    <div className="musicpage-holder">
      <div className="search-bar">
        <form className="search" onSubmit={SearchartistHandler}>
          <input
            type="text"
            value={searchartistQuery}
            placeholder="search"
            onChange={(e) => setartistSearchQery(e.target.value)}
          ></input>
          <button type="submit">Search</button>
        </form>
      </div>

      <div className="music-grid">
        {music.map((artist) => (
          <MusicCard key={artist.name} artist={artist} />
        ))}
      </div>

      <div className="load-more-wrapper">
        <button onClick={loadMoreMusic} className="load-more-btn">
          {loading ? "Loading..." : "Load More"}
        </button>
      </div>
    </div>
  );
}

export default Musicpage;
