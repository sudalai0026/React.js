import Navbar from "./components/navbar"
import Login from "./pages/Login"
import Home from "./pages/Home"
import Details from "./pages/Details"
import './App.css'
import { Routes, Route } from "react-router-dom"
function App() {


  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
        <Route path="/details" element={<Details />} />
      </Routes>
    </>
  )
}

export default App
