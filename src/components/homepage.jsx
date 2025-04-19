import "../App.css";
import { useEffect, useState } from "react";
import HomeCard from "./homecard.jsx";
import { GetAllNews } from "../services/api.js";

function Homepage() {
  const [AllNews, setAllNews] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);

  const Getlistofallnews = async (pageNumber) => {
    setLoading(true);
    try {
      const Popularnews = await GetAllNews(pageNumber);
      console.log(Popularnews);
      setAllNews((prev) => [...prev, ...Popularnews]);
    } catch (err) {
      console.error(err);
      setError("Can't Load news");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    Getlistofallnews(page);
  }, []);

  function LoadMore() {
    const Nextpage = page + 1;
    setPage(Nextpage);
    Getlistofallnews(Nextpage);
  }

  if (loading && AllNews.length === 0) {
    return (
      <div className="loader-holder">
        <div className="🤚">
          <div className="👉"></div>
          <div className="👉"></div>
          <div className="👉"></div>
          <div className="👉"></div>
          <div className="🌴"></div>
          <div className="👍"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="tech-holder">
      <div className="tech-grid">
        {AllNews.map((AllNew) => (
          <HomeCard key={AllNew.link} article={AllNew} />
        ))}
      </div>
      <div className="load-more-wrapper">
        <button onClick={LoadMore} className="load-more-btn">
          {loading ? "Loading..." : "Load More"}
        </button>
      </div>
    </div>
  );
}

export default Homepage;
