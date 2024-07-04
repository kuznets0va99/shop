import React from 'react';
import { Link } from 'react-router-dom';
import {ReactComponent as Cart} from "../img/header/cart.svg"
import {ReactComponent as User} from "../img/header/profile.svg"

const navbar = () => {
  return (
    <div className="wrapper container mx-auto font-Sato">
    <nav className='h-[96px] backgrou flex items-center justify-between'>
      <div className="left-block flex items-center">
        <Link to="/"><h1 className='font-black text-4xl'>SHOP.CO</h1></Link>
        <div className="links font-medium flex gap-10 ml-14">
          <Link to ="/">Shop</Link>
          <Link to ="/">On Sale</Link>
          <Link to ="/">New Arrivals</Link>
          <Link to ="/">Brands</Link>
        </div>
      </div>
      <div class="flex items-center">
        <div className="pr-6 w-[400px] ">
          <div class="relative">
            <div class="absolute inset-y-0 start-0 flex items-center ps-4 pointer-events-none">
              <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
              </svg>
            </div>
            <input type="search" id="default-search" class="block w-full p-3 ps-10 text-sm text-gray-900 border border-gray-300 rounded-full bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 outline-none" placeholder="Search for products..." required />
          </div>
      </div>
        <div className="actions flex gap-6">
          <Link to ="/cart"><Cart/></Link>
          <Link to ="/"><User/></Link>
        </div> 
      </div>
    </nav>
    </div>
  )
}

export default navbar