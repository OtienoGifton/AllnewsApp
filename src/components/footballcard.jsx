import "../App.css";

function FootballCard({ article }) {
  return (
    <div className="news-card">
      <img
        src={article.image_url || article.image}
        alt={article.title}
        className="news-image"
      />
      <div className="news-content">
        <h3 className="news-title">
          {article.title.split(" ").slice(0, 10).join(" ")} ...
        </h3>
        <p className="news-description">
          {article.description.split(" ").slice(0, 20).join(" ")} ...
        </p>
        <a
          href={article.link}
          target="_blank"
          rel="noopener noreferrer"
          className="news-link"
        >
          Read More
        </a>
        <p className="news-meta">
          <span>{article.source_id || "Unknown Source"}</span> •{" "}
          {/* Handle missing source */}
          <span>{new Date(article.pubDate).toLocaleDateString()}</span>{" "}
          {/* Corrected date field to match the API response */}
        </p>
      </div>
    </div>
  );
}

export default FootballCard;
