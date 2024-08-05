import React from 'react'
import { Link } from 'react-router-dom'

const ExtraBanner = () => {
  return (
      <section className='w-full mx-auto flex pt-12 md:pt-0 md:items-center  bg-cover bg-right' style={{
          maxWidth: '1600px',
          height: '32rem',
          backgroundImage: "url('https://images.unsplash.com/photo-1604954055722-7f80571fbfc3?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')"
      }}>
          <div className='container mx-auto'>
              <div className='flex flex-col w-full lg:w-1/2 justify-center items-start px-6'>
              <h1 className='text-2xl my-4 text-white font-semibold'>Stripy Zig Zag Jigsaw video and Team </h1>
              <Link className="text-xl inline-block no-underline border-b border-gray-600 leading-relaxed hover:text-indigo-500 text-white hover:border-black mb-2" >View Example</Link>
             </div>
          </div>
          
    </section>
  )
}

export default ExtraBanner
