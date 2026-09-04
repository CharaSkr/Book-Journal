import { Routes, Route } from 'react-router-dom'

import MainLayout from './layouts/MainLayout'
import LandingPage from './pages/LandingPage'
import Dashboard from './pages/Dashboard'
import Books from './pages/Books'
import Statistics from './pages/Statistics'
import Login from './pages/Login'

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<LandingPage />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="books" element={<Books />} />
        <Route path="statistics" element={<Statistics />} />
        <Route path="login" element={<Login />} />
      </Route>
    </Routes>
  )
}

export default App