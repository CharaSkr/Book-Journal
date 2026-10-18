import { useState, useEffect } from "react";
import useBooks from "../hooks/useBooks";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

function Statistics() {
  const [books, setBooks] = useState([]);
  const { fetchBooks } = useBooks();

  useEffect(() => {
    const loadBooks = async () => {
      const data = await fetchBooks();
      setBooks(data);
    };

    loadBooks();
  }, []);

  // Get completed books that have a finish date
  const finishedBooks = books.filter(
    (book) => book.status === "read" && book.dateFinished,
  );

  // Count completed books per month
  const booksPerMonth = finishedBooks.reduce((acc, book) => {
    const month = book.dateFinished.slice(0, 7);

    acc[month] = (acc[month] || 0) + 1;

    return acc;
  }, {});

  // Format month, e.g. 2026-10 -> October 2026
  const formatMonth = (month) => {
    const date = new Date(`${month}-01T00:00:00`);

    return date.toLocaleDateString("en-US", {
      month: "long",
      year: "numeric",
    });
  };

  // Prepare data for Recharts
  const chartData = Object.entries(booksPerMonth)
    .sort(([monthA], [monthB]) => monthA.localeCompare(monthB))
    .map(([month, count]) => ({
      month: formatMonth(month),
      books: count,
    }));

  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold mb-2">Statistics</h1>

      <p className="text-gray-600 mb-8">
        Track your reading progress over time.
      </p>

      <section className="border rounded-lg p-6">
        <h2 className="text-xl font-semibold mb-6">Reading Activity</h2>

        {chartData.length > 0 ? (
          <div className="w-full h-72">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={chartData}
                margin={{ top: 10, right: 10, left: 0, bottom: 10 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis allowDecimals={false} />
                <Tooltip />
                <Bar
                  dataKey="books"
                  name="Books completed"
                  fill="#6366f1"
                  radius={[6, 6, 0, 0]}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        ) : (
          <p className="text-gray-500">
            No completed books with a finish date yet.
          </p>
        )}
      </section>
    </main>
  );
}

export default Statistics;
