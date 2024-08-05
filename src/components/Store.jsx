import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { FaRegHeart } from "react-icons/fa";
import { ThemeContext } from '../context';

const Store = () => {
    const [products, setProducts] = useState([]);
    const {darkmode}=useContext(ThemeContext)
    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch('/public/products.json');
                console.log(response)
                if (!response.ok)
                {
                    throw new Error("Failed to fetch products data");
                }
                const data = await response.json();
                setProducts(data);
            }
            catch (error)
            {
                console.error(error);
            }
        }
        fetchProducts()
    }, [])
    
  return (
      <section className=' py-8'>
          <h2 className='text-2xl font-semibold pl-6 pt-5'>Our Video Production Services</h2>
          <div className='container mx-auto flex items-center flex-wrap pt-4 pb-12'>
              {
                  products.map((product) => (
                      <div key={product.id} className='w-full md:w-1/3 xl:w-1/4 p-6 flex flex-col '>
                          <Link>
                          <img src={product.image} alt={product.name} className='hover:grow hover:shadow-lg '></img>
                          </Link>
                          <div className='pt-3 flex items-center  gap-5 justify-between'> 
                              <p>{product.name}</p>
                              <FaRegHeart className={`w-6 h-6 text-gray-500 ${darkmode?"hover:text-white":"hover:text-black"} `} />
                          </div>
                          <p className={`pt-1${darkmode ? "text-white" : " text-gray-900"}`}>{product.price }</p>
                          </div>
                  ))
              }
          </div>
    </section>
  )
}

export default Store
