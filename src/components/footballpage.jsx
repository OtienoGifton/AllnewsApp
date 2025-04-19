import "../App.css";
import { useEffect, useState } from "react";
import { getfottballNews } from "../services/api.js";
import FootballCard from "./footballcard.jsx";

function Footballpage() {
  const [football, Setfootball] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [page, Setpage] = useState(1);

  const Fetchfootballnews = async (pagenumber) => {
    setLoading(true);
    try {
      const PopularFootballnews = await getfottballNews(pagenumber);
      Setfootball((prev) => [...prev, ...PopularFootballnews]);
    } catch (err) {
      setError("cant load news");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    Fetchfootballnews(page);
  }, []);

  function fetchMoreBallnews() {
    const Nextpage = page + 1;
    Setpage(Nextpage);
    Fetchfootballnews(Nextpage);
  }

  if (loading) {
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
  } else {
    return (
      <div className="footballholder">
        <div className="footballgrid">
          {football.map((news) => (
            <FootballCard key={news.link} article={news} />
          ))}
        </div>

        <div className="load-more-wrapper">
          <button onClick={fetchMoreBallnews} className="load-more-btn">
            {loading ? "Loading..." : "Load More"}
          </button>
        </div>
      </div>
    );
  }
}

export default Footballpage;
