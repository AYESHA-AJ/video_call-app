import React, { useContext } from 'react'
import { ThemeContext } from '../context'
import Navbar from './Navbar'
import Hero from './Hero'
import Store from './Store'
import ExtraBanner from './ExtraBanner'
import About from './About'
import Footer from './Footer'
import ChatButton from './ChatButton'
import { Outlet } from 'react-router-dom'

const Home = () => {
  const { darkmode } = useContext(ThemeContext);

  return (
    <div className={`${darkmode ? "dark" : ""} h-full w-full transition-all`}>
      <Navbar />
      
      <Hero />
      <Store />
      <ExtraBanner />
      <About />
      <Footer />
      
      <ChatButton/>
    </div>
  )
}

export default Home;
