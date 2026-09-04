import { Link } from "react-router-dom";
import useAuthStore from "../stores/authStore";

function NavBar() {
  const isLoggedIn = useAuthStore((state) => state.isLoggedIn);
  const logout = useAuthStore((state) => state.logout);

  return (
    <div className="flex items-center justify-between px-8 py-4 border-b">
      <h1 className="text-2xl font-bold">Book Journal</h1>

      <nav>
        <ul className="flex gap-6">
          {isLoggedIn ? (
            <>
              <li>
                <Link to="/dashboard">Dashboard</Link>
              </li>

              <li>
                <Link to="/books">My Books</Link>
              </li>

              <li>
                <Link to="/statistics">Statistics</Link>
              </li>

              <li>
                <button onClick={logout}>Logout</button>
              </li>
            </>
          ) : (
            <li>
              <Link to="/login">Login</Link>
            </li>
          )}
        </ul>
      </nav>
    </div>
  );
}

export default NavBar;
