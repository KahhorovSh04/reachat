import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Regsiter from './pages/Regsiter'
import Login from './pages/Login'
import AuthProvider from './context/auth'

function App() {
  return (
    <AuthProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/register' element={<Regsiter />} />
          <Route path='/login' element={<Login />} />
        </Routes>
      </Router>
    </AuthProvider>
  )
}

export default App
