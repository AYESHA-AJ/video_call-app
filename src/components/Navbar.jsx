import React, { useContext } from 'react'
import { AiOutlineMenu } from "react-icons/ai";
import { Link } from 'react-router-dom';
import { FiUser } from "react-icons/fi";
import { RiShoppingBagLine } from "react-icons/ri";
import { BiCart } from "react-icons/bi";
import { TiWeatherSunny } from "react-icons/ti";
import { ThemeContext } from '../context';
import { LuMoon } from "react-icons/lu";
const Navbar = () => {
 const {darkmode,setDarkmode}=useContext(ThemeContext)
  return (
      <nav className='w-full z-30 top-0 py-1'>
          <div className='w-full container mx-auto flex flex-wrap items-center justify-between mt-0 px-6 py-3'>
              <label htmlFor='menu-toggle' className='cursor-pointer md:hidden block'><AiOutlineMenu className='h-5 w-7'/></label>
              <input type="checkbox" className='hidden' id="menu-toggle" />
              <div id="menu" className='hidden  md:flex md:items-center md:w-auto w-full order-3 md:order-1' >
                  <div>
                      <ul className={`md:flex items-center justify-between text-base ${darkmode?"text-gray-100 ":"text-gray-700"}  pt-4 md:pt-0 `}>
                          <li><Link className={`inline-block no-underline ${darkmode?"hover:text-gray-500":"hover:text-black"} hover:underline py-2 px-4 `} >Shop</Link></li>
                          
                          <li><Link className={`inline-block no-underline ${darkmode?"hover:text-gray-500":"hover:text-black"} hover:underline py-2 px-4 `} >About</Link></li>
                          
                      </ul>
                  </div>
                  
              </div>
              <div className='order-1 md:order-2'>
                  <Link className={`flex items-center tracking-wide no-underline font-bold hover:no-underline${darkmode?"text-gray-300 ":"text-gray-800"} text-xl gap-2 `}>
                      <RiShoppingBagLine className='h-6 w-6' />
                      NORDICS</Link>
              </div>
              <div className='order-2 md:order-3 flex items-center gap-3 ' id="nav-content">
                  <Link className={`inline-block no-underline ${darkmode?"hover:text-gray-500":"hover:text-black"}`} onClick={()=>setDarkmode(!darkmode)}>
                  {darkmode?<TiWeatherSunny className='h-6 w-6' />:<LuMoon className='h-6 w-6'/>}
                  </Link>
                  <Link className={`inline-block no-underline ${darkmode ? "hover:text-gray-500" : "hover:text-black"}`}><FiUser className={`h-6 w-6`} /></Link>
                  <Link className={`inline-block no-underline ${darkmode?"hover:text-gray-500":"hover:text-black"}`}>< BiCart className='h-6 w-6'/></Link>

              </div>
          </div>
    </nav>
  )
}

export default Navbar
