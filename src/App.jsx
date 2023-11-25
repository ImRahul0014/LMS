import { Routes, Route } from 'react-router-dom'
import Footer from './Components/Footer'
import HomeLayout from './Layouts/HomeLayout'
import './App.css'
import HomePage from './Pages/HomePage'

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
      
    </>
  )
}

export default App
