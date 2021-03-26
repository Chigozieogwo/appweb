import React from 'react'
import { Link } from 'react-router-dom'
const Footer = () => {
  return (
    <div className="">
      <div className="bg-tb-footer-img ">
        <div className=" bg-tb-footer opacity-75">
          <div className="flex justify-between py-16 px-20 pr-20  ">
            <div className="w-full ">
              <div className="flex justify-center md:justify-start">
                <h1 className=" text-2xl   text-white ">
                  Subcribe to our Newsletter
                </h1>
              </div>
              <input
                className=" bg-transparent  border-b-2 border-gray-400 text-white w-full md:w-2/3 mr-3   leading-8 mt-2 focus:outline-none "
                type="text"
                placeholder="Enter your first name"></input>
              <input
                className=" bg-transparent  border-b-2 border-gray-400 text-white  w-full md:w-2/3 mr-3   leading-8 mt-2 focus:outline-none "
                type="text"
                placeholder="Enter your email"></input>
              <div className="flex justify-center md:justify-start">
                <button className="bg-tb-button  block mt-4 px-2 py-1 hover:opacity-80 rounded-sm text-white  pl-2 pr-2 ">
                  <p className=" text-sm text-white">Subscribe</p>
                </button>
              </div>
            </div>
            <div className="w-full hidden md:block text-white font-semibold text-md">
              <div className="flex justify-between ">
                <Link to="/flights">Flight</Link>
                <Link to="/hotel" className="pl-4 pr-4">
                  Hotel
                </Link>
                <Link to="/trip" className="pl-4 pr-4">
                  Check My Trip
                </Link>
                <Link to="/affiliates">Affiliates</Link>
              </div>
              <div className="flex justify-between py-4 ">
                <Link to="/About Us"> Travel Blog</Link>
                <Link to="/feedback" className="pl-4 pr-4">
                  {' '}
                  Complaint/Feedback
                </Link>
                <Link to="/blog"> Travel Blog</Link>
              </div>
              <div className="flex justify-between">
                <Link to="/FAQ"> FAQ</Link>
                <Link to="/Terms and Conditions" className="pl-4 pr-4">
                  {' '}
                  Terms and Conditions{' '}
                </Link>
                <Link to="/private policy"> Privacy Policy </Link>
              </div>
            </div>
          </div>
          <div>
            <div className="flex justify-center text-white px-4">
              <span>
                <i class="fab fa-facebook-f fa-2x text-white"></i>
              </span>
              <span>
                <i class="fab fa-twitter px-8 fa-2x text-white"></i>
              </span>
              <span>
                <i class="fab fa-instagram fa-2x text-white"></i>
              </span>
            </div>
            <div className="flex justify-center font-semibold text-white mt-2 pb-10">
              <p>Copyright 2020 Travelbeta. All Rights Reserved. </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
