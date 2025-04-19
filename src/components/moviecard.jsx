import "../App.css";

function MovieCard(props) {
  console.log("MovieCard props received:", props);

  const { movie } = props; // get movie safely
  const { title, release_date } = movie || {}; // avoid crash if undefined

  return (
    <>
      <div className="movie-card">
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt="Movie Poster"
          className="movie-poster"
        />
        <div className="movie-info">
          <h2 className="movie-title">{title}</h2>
          <p className="movie-meta">{release_date}</p>
          <p className="movie-description"></p>
          <a
            href={`https://www.themoviedb.org/movie/${movie.id}`}
            target="_blank"
            rel="noopener noreferrer"
            className="movie-link"
          >
            Watch Trailer
          </a>
        </div>
      </div>
    </>
  );
}

export default MovieCard;
