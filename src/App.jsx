
import { BrowserRouter, Routes, Route } from "react-router-dom"
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Resume from './pages/Resume'
import Project from './pages/Projects'
import Contact from './pages/Contact'
import About from './pages/About'

function App() {
  return (
    <>
      <BrowserRouter>
      <Routes>
         <Route path="/" element={<About/>}/>
         <Route path="/resume" element={<Resume/>}/>
         <Route path="/project" element={<Project/>}/>
         <Route path="/contact" element={<Contact/>}/>
      </Routes>
    </BrowserRouter>
      
    </>
  )
}

export default App
