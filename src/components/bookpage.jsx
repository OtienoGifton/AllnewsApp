import { useState, useEffect } from "react";
import { GetBookByDefault } from "../services/api.js";
import BookCard from "./bookcard.jsx";
import "../App.css";

function Bookpage() {
  const [books, setbook] = useState([]);
  const [Loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadBooks = async () => {
      try {
        const popularBook = await GetBookByDefault();
        console.log("📚 Fetched Books:", popularBook);
        setbook(popularBook);
      } catch (err) {
        console.log(err);
        setError("failed to load books...");
      } finally {
        setLoading(false);
      }
    };

    loadBooks();
  }, []);

  if (Loading) {
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
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="book-holder">
      <div className="book-grid">
        {books.map((book) => (
          <BookCard key={book.key} book={book} />
        ))}
      </div>
    </div>
  );
}

export default Bookpage;
