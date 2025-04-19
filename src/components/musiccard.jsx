import "../App.css";

function MusicCard({ artist }) {
  return (
    <div className="music-card">
      <img
        src={artist.image?.[3]?.["#text"] || "fallback.jpg"} // Access image directly
        alt="The Video Thumbnail Woul not Be loaded please check your internet"
        className="music-card-img"
      />
      <div className="music-card-content">
        <h3 className="music-card-title">{artist.name}</h3>
        <p className="music-card-info">Listeners: {artist.listeners}</p>
        <a
          href={artist.url}
          target="_blank"
          rel="noreferrer"
          className="music-card-link"
        >
          More about <strong>{artist.name}</strong> →
        </a>
      </div>
    </div>
  );
}

export default MusicCard;
