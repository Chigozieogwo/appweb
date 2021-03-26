import React from 'react'

const Product = () => {
  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-3">
        <div className="h-104 bg-tb-blue_bg">
          <h1 className="text-white font-bold px-8 py-3 mt-6">Travel Bottle</h1>
          <div className="flex justify-center  ml-20">
            <img
              className=" transform scale-75 -mt-10 ml-14 mb-10"
              src="https://res.cloudinary.com/dqetx7bes/image/upload/v1616335167/bottle_kqpcv2.png"
              alt=""
            />
          </div>
        </div>

        <div className="h-104 bg-tb-gray">
          <h1 className="text-gray-800 font-bold px-8 py-3 mt-6">
            Travel Pillow
          </h1>
          <div className="flex justify-center  ml-20">
            <img
              className=" transform scale-75 -mt-2 -ml-16 mb-10"
              src="https://res.cloudinary.com/dqetx7bes/image/upload/v1616335168/Group_1_261_xuljug.png"
              alt=""
            />
          </div>
        </div>

        <div className="order-3 h-104 bg-tb-gray">
          <h1 className="text-gray-800 font-bold px-8 py-3 mt-6">
            Travel Towel
          </h1>
          <div className="flex justify-center  ml-20">
            <img
              className=" transform scale-75 -mt-8 -ml-16 mb-10"
              src="https://res.cloudinary.com/dqetx7bes/image/upload/v1616335169/towel_rvxuyz.png"
              alt=""
            />
          </div>
        </div>

        <div className="sm:order-last h-104 bg-tb-blue_bg">
          <h1 className="text-white font-bold px-8 py-3 mt-6">Travel Towel</h1>
          <div className="flex justify-center  ml-20">
            <img
              className=" transform scale-75 -mt-8 -ml-16 mb-10"
              src="https://res.cloudinary.com/dqetx7bes/image/upload/v1616335169/towel_rvxuyz.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Product
