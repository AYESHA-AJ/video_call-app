import { useState } from 'react'

import './App.css'
import Home from './components/Home'
import { ThemeContext } from './context'


function App() {
 const [darkmode,setDarkmode]=useState(false)

  return (
    <>
      <ThemeContext.Provider value={{ darkmode, setDarkmode }}>
      <Home/>
      </ThemeContext.Provider>
      
    </>
  )
}

export default App
