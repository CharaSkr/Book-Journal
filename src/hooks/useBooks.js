import axios from "axios";

function useBooks() {
  const fetchBooks = async () => {
    const response = await axios.get("http://localhost:3001/books");

    return response.data;
  };

  return {
    fetchBooks,
  };
}

export default useBooks;