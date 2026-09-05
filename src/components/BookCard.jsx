function BookCard({ book }) {
  return (
    <div className="border rounded-lg p-5 hover:shadow-md transition">
      <h2 className="text-xl font-semibold mb-2">{book.title}</h2>

      <p className="text-gray-600 mb-3">{book.author}</p>

      <span className="inline-block text-sm bg-gray-100 px-3 py-1 rounded-full">
        {book.status}
      </span>

      <p className="text-sm mt-3">Rating: {book.rating}/5</p>
    </div>
  );
}

export default BookCard;
