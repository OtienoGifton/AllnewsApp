import "../App.css";

function TechCard({ article }) {
  const { title, link, description, pubDate, image_url, source_id, category } =
    article;

  return (
    <div className="news-card">
      {image_url && <img src={image_url} alt={title} className="news-image" />}

      <div className="news-content">
        <h2 className="news-title">{title}</h2>
        <p className="news-description">
          {description?.split(" ").slice(0, 30).join(" ")}...
        </p>
        <div className="news-meta">
          <span>{new Date(pubDate).toLocaleDateString()}</span>
          <span className="source">
            <small>from: </small>
            {source_id}
          </span>
        </div>
        {category && (
          <div className="news-tags">
            {category.map((tag, index) => (
              <span className="news-tag" key={index}>
                {tag}
              </span>
            ))}
          </div>
        )}
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="read-more"
        >
          Read Full Article
        </a>
      </div>
    </div>
  );
}

export default TechCard;
