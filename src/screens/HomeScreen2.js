import React from 'react'
import './carousel.css'
import Card from '../components/Card'
import Product from '../components/Product'
import { Link } from 'react-router-dom'

const HomeScreen2 = () => {
  const products = [
    {
      id: 1,
      name: 'Shirt',
      price: 9230,
      img:
        'https://res.cloudinary.com/dqetx7bes/image/upload/v1616666587/T-Shirt-_Hanging_mockup_5_fwaama.png',
    },
    {
      id: 2,
      name: 'Travel Hoodie',
      price: 5500,
      img:
        'https://res.cloudinary.com/dqetx7bes/image/upload/v1616335588/hOODIE-1_1_1_a5r3ra.png',
    },
    {
      id: 3,
      name: 'Travel Bottle',
      price: 2000,
      img:
        'https://res.cloudinary.com/dqetx7bes/image/upload/v1616335167/bottle_kqpcv2.png',
    },
    {
      id: 4,
      name: 'Shirt',
      price: 5000,
      img:
        'https://res.cloudinary.com/dqetx7bes/image/upload/v1616666587/T-Shirt-_Hanging_mockup_5_fwaama.png',
    },
    {
      id: 5,
      name: 'Travel Pillow',
      price: 7100,
      img:
        'https://res.cloudinary.com/dqetx7bes/image/upload/v1616335168/Group_1_261_xuljug.png',
    },
    {
      id: 6,
      name: 'Travel Towel',
      price: 6200,
      img:
        'https://res.cloudinary.com/dqetx7bes/image/upload/v1616335169/towel_rvxuyz.png',
    },
  ]
  return (
    <div>
      <div className=" grid grid-cols-1 sm:grid-cols-2  ">
        <div className="w-full ">
          <div class="bg-tb-gray h-110 py-20 pl-14    xl:pl-24 xl:pr-36 ">
            <h2 className="text-5xl sm:text-4xl md:text-3xl lg:text-4xl xl:text-5xl pr-20 md:pr-10 text-gray-700 font-bold ">
              Your one-stop store for all your travel needs.
            </h2>
            <p className="text-xl pr-14 sm:pr-6 text-gray-800 font-medium leading-8  mt-4 mb-5">
              At travelbeta store,you will be provided with all your itinery for
              your travel needs Start shopping
            </p>
            <button className="bg-tb-button hover:opacity-80 rounded-md text-white  pl-24 pr-24 h-16 mb-10">
              <p className="font-bold text-lg">Sign up</p>
            </button>
          </div>
        </div>
        <div className="w-full">
          <div class="bg-tb-blue_bg h-110">
            <div class="carousel relative shadow-2xl bg-white">
              <div class="carousel-inner relative overflow-hidden w-full">
                {/* <!--Slide 1--></div> */}
                <input
                  class="carousel-open"
                  type="radio"
                  id="carousel-1"
                  name="carousel"
                  aria-hidden="true"
                  hidden="true"
                  checked="checked"></input>
                <div class=" h-110 carousel-item absolute opacity-0">
                  <div class="block flex items-center justify-center h-full w-full bg-tb-blue_bg text-white text-5xl text-center">
                    <img
                      className="h-104 w-auto "
                      src="https://res.cloudinary.com/dqetx7bes/image/upload/v1616335588/hOODIE-1_1_1_a5r3ra.png"
                      alt=""
                    />
                  </div>
                </div>
                <label
                  for="carousel-3"
                  class="prev control-1 w-10 h-10 ml-2 md:ml-10 absolute cursor-pointer hidden text-3xl font-bold text-white hover:text-gray-200  leading-tight text-center z-10 inset-y-0 left-0 my-auto">
                  <i class="fas fa-caret-left"></i>
                </label>
                <label
                  for="carousel-2"
                  class="next control-1 w-10 h-10 mr-2 md:mr-10 absolute cursor-pointer hidden text-3xl font-bold text-white hover:text-gray-200 leading-tight text-center z-10 inset-y-0 right-0 my-auto">
                  <i class="fas fa-caret-right"></i>
                </label>
                {/* <!--Slide 2--> */}
                <input
                  class="carousel-open"
                  type="radio"
                  id="carousel-2"
                  name="carousel"
                  aria-hidden="true"
                  hidden="true"></input>
                <div class="h-110 carousel-item absolute opacity-0">
                  <div class="block flex items-center justify-center h-full w-full bg-blue-500 text-white text-5xl text-center">
                    <img
                      className="h-104 w-auto "
                      src="https://res.cloudinary.com/dqetx7bes/image/upload/v1616335169/towel_rvxuyz.png"
                      alt=""
                    />
                  </div>
                </div>
                <label
                  for="carousel-1"
                  class="prev control-2 w-10 h-10 ml-2 md:ml-10 absolute cursor-pointer hidden text-3xl font-bold text-white hover:text-gray-200 leading-tight text-center z-10 inset-y-0 left-0 my-auto">
                  <i class="fas fa-caret-left"></i>
                </label>
                <label
                  for="carousel-3"
                  class="next control-2 w-10 h-10 mr-2 md:mr-10 absolute cursor-pointer hidden text-3xl font-bold text-white hover:text-gray-200 leading-tight text-center z-10 inset-y-0 right-0 my-auto">
                  <i class="fas fa-caret-right"></i>
                </label>
                {/* <!--Slide 3--> */}
                <input
                  class="carousel-open"
                  type="radio"
                  id="carousel-3"
                  name="carousel"
                  aria-hidden="true"
                  hidden="true"></input>
                <div class="h-110 carousel-item absolute opacity-0">
                  <div class="block flex items-center justify-center h-full w-full bg-blue-500 text-white text-5xl text-center">
                    <img
                      src="https://res.cloudinary.com/dqetx7bes/image/upload/v1616335168/Group_1_261_xuljug.png"
                      className="h-104 w-auto "
                      alt=""
                    />
                  </div>
                </div>
                <label
                  for="carousel-2"
                  class="prev control-3 w-10 h-10 ml-2 md:ml-10 absolute cursor-pointer hidden text-3xl font-bold text-white hover:text-gray-200  leading-tight text-center z-10 inset-y-0 left-0 my-auto">
                  <i class="fas fa-caret-left"></i>
                </label>
                <label
                  for="carousel-1"
                  class="next control-3 w-10 h-10 mr-2 md:mr-10 absolute cursor-pointer hidden text-3xl font-bold text-white hover:text-gray-200 leading-tight text-center z-10 inset-y-0 right-0 my-auto">
                  <i class="fas fa-caret-right"></i>
                </label>
                {/* <!-- Add additional indicators for each slide--> */}
              </div>
            </div>
          </div>
        </div>
      </div>

      <Card />

      {/* <div class=" mt-4 grid  grid-rows-4  sm:grid-flow-col  gap-4">
        <div class="row-span-6 col-span-2 py-4 h-209 bg-blue-500 flex justify-center items-center">
          1
        </div>
        <div class="col-span-2 sm:row-span-2 md:-mt-108 row-span-1 h-104 order-first sm:order-2 bg-green-500 flex justify-center items-center ">
          top
        </div>
        <div class="row-span-2 sm:mt-4 -mt-110   row-span-2 col-span-2 h-104 bg-red-500 flex justify-center items-center ">
          bottom
        </div>
      </div> */}
      {/* <div>
        <div className=" grid grid-cols-1 sm:grid-cols-2  grid-flow-row py-3">
          <div className="order-first sm:order-2 h-104 bg-tb-blue_bg">
            <h1 className="text-white font-bold px-8 py-3 mt-6">
              Travel Bottle
            </h1>
            <div className="flex justify-center  ml-20"></div>
          </div>
          <div>
            <div className=" bg-tb-blue_bg  ">
              <div className="bg-tb-gray h-104"></div>
            </div>

            <div className="bg-tb-blue_bg md:ml-4 h-104"></div>
          </div>
          <div className="order-3 md:mt-4 md:-mb-2 md:ml-4 h-96 bg-tb-gray">
            <h1 className="text-gray-800 font-bold px-8 py-3 mt-6">
              Travel Towel
            </h1>
            <div className=" flex justify-center  ml-20">
              <img
                className=" transform scale-75 -mt-8 -ml-16 mb-10"
                src="https://res.cloudinary.com/dqetx7bes/image/upload/v1616335169/towel_rvxuyz.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div> */}

      {/* message content */}

      <div className="flex justify-between bg-tb-gray_bg ">
        <div className="px-16 py-12 mr-4 h-72 w-full hidden md:block">
          <h1 className="text-md text-gray-800 font-bold">Release Details</h1>
          <p className="text-md">The Travel Hoodie</p>
        </div>
        <div className="h-72 px-16 w-full">
          <p className="text-md  py-12 mr-4">
            The Travel Hoodie is one of our forefront clothing product offers,
            it was carefully crafted from the very best of cotton in combination
            with wool. It’s thivk enough to keep the body warm during cold and
            its cool to wear when outdoor...
          </p>
          <i className="fas fa-arrow-down "></i>
          <p className="font-bold text-sm text-tb-blue_logo">
            Continue Reading...
          </p>
        </div>
      </div>

      <Product />

      <div className="grid grid-cols-2 lg:grid-cols-6 mt-10  mb-10">
        {products.map((product) => {
          return (
            <div className="relative h-60 bg-white w-44">
              <Link to={`/product/${product.id}`}>
                <img src={product.img} alt="" />
              </Link>
              <div className="absolute bottom-16 right-0 h-12 w-28 bg-tb-blue_bg">
                <h1 className="text-white text-sm px-2">{product.name}</h1>
                <p className="text-white font-semibold px-2">{product.price}</p>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default HomeScreen2
