import "../App.css";
import { useEffect, useState } from "react";
import TechCard from "./techcard.jsx";
import { GetTechNews } from "../services/api.js";

function Techpage() {
  const [TechNews, setTechNews] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);

  const Getlistoftechnews = async (pagenumber) => {
    try {
      const PopularTechnews = await GetTechNews(pagenumber);
      console.log(PopularTechnews);
      setTechNews((prev) => [...prev, ...PopularTechnews]);
    } catch (err) {
      console.log(error);
      setError("Can't Load news");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    Getlistoftechnews(page);
  }, []);

  const loadMoreTech = () => {
    const NextPage = page + 1;
    setPage(NextPage);
    Getlistoftechnews(NextPage);
  };

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
      <div className="tech-holder">
        <div className="tech-grid">
          {TechNews.map((TechNew) => (
            <TechCard key={TechNew.link} article={TechNew} />
          ))}
        </div>

        <div className="load-more-wrapper">
          <button onClick={loadMoreTech} className="load-more-btn">
            {loading ? "Loading..." : "Load More"}
          </button>
        </div>
      </div>
    );
  }
}

export default Techpage;
