import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div>
      <nav>
        <div className=" flex justify-between py-8 px-12 items-center mb-2">
          <div>
            <i className="fas fa-bars fa-2x  text-gray-700 sm:hidden  md:hidden cursor-pointer hover:opacity-75"></i>
          </div>
          <div className="flex justify-between items-center">
            <div>
              <Link
                to="/Login"
                className="py-3  font-bold text-sm text-gray-600 text-center mr-2  border-2 border-gray-600 rounded-lg hover:bg-tb-button hover:text-white transition-colors duration-300 mt-1 px-8">
                Login
              </Link>
            </div>
            <div>
              <i className="fas fa-search fa-2x text-gray-700 cursor-pointer hover:opacity-75 pl-4"></i>
            </div>
            <div>
              <i className="fas fa-cart-plus fa-2x text-gray-700 cursor-pointer hover:opacity-75 pl-7"></i>
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Header
