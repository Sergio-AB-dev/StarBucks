import { Routes, Route } from 'react-router-dom'
import './App.css'
import './styles/Main.css'
import Home from './components/Home'
import Header from './components/Header'
import Footer from './components/Footer'
import Cafe from './components/Cafe'

function App() {
  return (
    <>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Cafe" element={<Cafe />} />
    </Routes>
    <Footer />
    </>
  )
}

export default App
