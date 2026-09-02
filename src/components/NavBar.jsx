import { Link } from 'react-router-dom'

function NavBar() {
  return (
    <div className="flex items-center justify-between px-8 py-4 border-b">
      <h1 className="text-2xl font-bold">
        Book Journal
      </h1>

      <nav>
        <ul className="flex gap-6">
          <li>
            <Link to="/dashboard">Dashboard</Link>  
          </li>

          <li>
            <Link to="/books">My Books</Link>
          </li>

          <li>
            <Link to="/statistics">Statistics</Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default NavBar