import { useRef, useState } from 'react'
import './App.css'
import Navbar from './components/navbar'
import Intro from './components/intro'
import About from './components/about'
import Skills from "./components/skills"
import Footer from './components/footer'
import Projects from './components/projects'
import Contact from './components/contact'
function App() {
  const aboutRef=useRef(null);
  const skillsRef=useRef(null);
  const projectsRef=useRef();
  const contactRef=useRef();
  return (
    <div className='scroll-smooth font-poppins' >
        <Navbar  />
        <Intro />
        <About   />
        <Skills  />
        <Projects  />
        <Contact  />
        <Footer/>
     
    </div>
  )
}

export default App
