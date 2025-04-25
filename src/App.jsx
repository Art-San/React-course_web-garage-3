import Home from './pages/HomePage'
import { Routes, Route } from 'react-router'
import { UserPage } from './pages/UserPage'
import NotFoundPage from './pages/NotFoundPage'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route path="/user/:userId" element={<UserPage />} />
      <Route path={'*'} element={<NotFoundPage />} />
    </Routes>
  )
}

export default App
