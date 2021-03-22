import React from 'react'

const Product = () => {
  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-3">
        <div className=" bg-blue-500 flex  justify-center">
          <h1 className="mr-28 py-6 text-sm font-bold">Travel Bottle</h1>
          <img
            className="ml-4"
            src="https://res.cloudinary.com/dqetx7bes/image/upload/v1616335167/bottle_kqpcv2.png"
            alt=""
          />
        </div>
        <div className="bg-gray-200 flex  justify-center">
          <h1 className=" py-6 text-sm font-bold">Travel Pillow</h1>
          <img
            className="ml-4"
            src="https://res.cloudinary.com/dqetx7bes/image/upload/v1616335168/Group_1_261_xuljug.png"
            alt=""
          />
        </div>
        <div className="bg-gray-200 flex  justify-center">
          <h1 className=" py-6 text-sm font-bold">Travel Towel</h1>
          <img
            className="ml-4"
            src="https://res.cloudinary.com/dqetx7bes/image/upload/v1616335169/towel_rvxuyz.png"
            alt=""
          />
        </div>
        <div className="bg-blue-500 flex  justify-center">
          <h1 className=" py-6 text-sm font-bold">Travel Towel</h1>
          <img
            className="ml-4"
            src="https://res.cloudinary.com/dqetx7bes/image/upload/v1616335169/towel_rvxuyz.png"
            alt=""
          />
        </div>
      </div>
    </div>
  )
}

export default Product
