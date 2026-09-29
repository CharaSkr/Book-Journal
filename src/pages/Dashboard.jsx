import { useState, useEffect } from "react";
import useBooks from "../hooks/useBooks";

function Dashboard() {
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
      <h1 className="text-3xl font-bold mb-2">Welcome back 👋</h1>

      <p className="text-gray-600 mb-8">
        Here's an overview of your reading journey.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="border rounded-lg p-6">
          <p className="text-gray-500 text-sm">Total Books</p>
          <p className="text-3xl font-bold mt-2">{books.length}</p>
        </div>

        <div className="border rounded-lg p-6">
          <p className="text-gray-500 text-sm">Read</p>
          <p className="text-3xl font-bold mt-2">
            {books.filter((book) => book.status === "read").length}
          </p>
        </div>

        <div className="border rounded-lg p-6">
          <p className="text-gray-500 text-sm">Currently Reading</p>
          <p className="text-3xl font-bold mt-2">
            {books.filter((book) => book.status === "reading").length}
          </p>
        </div>

        <div className="border rounded-lg p-6">
          <p className="text-gray-500 text-sm">To Read</p>
          <p className="text-3xl font-bold mt-2">
            {books.filter((book) => book.status === "to-read").length}
          </p>
        </div>
      </div>
    </main>
  );
}

export default Dashboard;
