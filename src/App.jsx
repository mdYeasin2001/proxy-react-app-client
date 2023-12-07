import { Outlet, Route, Routes } from 'react-router-dom'
import './App.css'
import HomePage from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Navbar from './components/Navbar'

function App() {

  return (
    <>

      <Routes>
        <Route path="/" element={<>
          <Navbar />
          <Outlet />
        </>}>

          <Route index element={<HomePage />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
        </Route>
        <Route path="*" element={<h1>404 Page not found</h1>} />

      </Routes>
    </>
  )
}

export default App
