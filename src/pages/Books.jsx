import { useEffect, useState } from "react";
import useBooks from "../hooks/useBooks";
import BookCard from "../components/BookCard";

function Books() {
  const [books, setBooks] = useState([]);

  const { fetchBooks } = useBooks();

  useEffect(() => {
    const loadBooks = async () => {
      const books = await fetchBooks();

      setBooks(books);
    };

    loadBooks();
  }, []);

  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold mb-8">My Books</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {books.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
    </main>
  );
}

export default Books;
