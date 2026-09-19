import axios from "axios";

function useBooks() {
  const fetchBooks = async () => {
    const response = await axios.get("http://localhost:3001/books");

    return response.data;
  };

  const fetchBookById = async (id) => {
    const response = await axios.get(
      `http://localhost:3001/books/${id}`
    );

    return response.data;
  };

  return {
    fetchBooks,
    fetchBookById
  };
}

export default useBooks;