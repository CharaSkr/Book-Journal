import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useBooks from "../hooks/useBooks";

function BookDetails() {
  const { id } = useParams();

  const [book, setBook] = useState(null);

  const { fetchBookById } = useBooks();

  useEffect(() => {
    const loadBook = async () => {
      const book = await fetchBookById(id);

      setBook(book);
    };

    loadBook();
  }, [id]);

  if (!book) {
    return <p>Loading...</p>;
  }

  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold mb-4">{book.title}</h1>

      <p className="text-gray-600 mb-2">Author: {book.author}</p>

      <p className="mb-2">Status: {book.status}</p>

      <p>Rating: {book.rating}/5</p>
    </main>
  );
}

export default BookDetails;
