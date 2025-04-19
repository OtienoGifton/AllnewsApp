import "../App.css";

function BookCard({ book }) {
  const {
    title,
    author_name,
    first_publish_year,
    cover_i,
    isbn,
    subject,
    key,
  } = book;

  const coverUrl = cover_i
    ? `https://covers.openlibrary.org/b/id/${cover_i}-M.jpg`
    : "https://via.placeholder.com/320x480?text=No+Cover";

  return (
    <div className="book-card">
      <img src={coverUrl} alt={`${title} cover`} className="book-cover" />
      <div className="book-info">
        <h2 className="book-title">{title}</h2>
        <p className="book-author">
          by {author_name?.join(", ") || "Unknown Author"}
        </p>
        <p className="book-year">
          First Published: {first_publish_year || "N/A"}
        </p>
        <p className="book-isbn">ISBN: {isbn?.[0] || "N/A"}</p>
        {subject && (
          <p className="book-subjects">
            Subjects: {subject.slice(0, 3).join(", ")}
          </p>
        )}
        <a
          href={`https://openlibrary.org${key}`}
          target="_blank"
          rel="noopener noreferrer"
          className="book-link"
        >
          Visit Our Library →
        </a>
      </div>
    </div>
  );
}

export default BookCard;
