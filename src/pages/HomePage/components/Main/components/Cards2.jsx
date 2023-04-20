import React from 'react'

const Cards2 = () => {
  return (
    <div className="relative cursor-default rounded-lg max-w-[340px] max-h-[450px] px-2 py-2 border border-gray-700 my-2 bg-[#f0f0ff]">
      <div>
        <img
          src="/images/nintendo.jpg"
          alt=""
          className="rounded-lg object-contain"
        />
         <div className="absolute top-4 right-4 ">
          <div className="bg-white flex items-center rounded-3xl px-2 border border-gray-700">
            <div className="w-2 h-2 mr-2 rounded-full bg-black"></div>
            <p>Games</p>
          </div>
        </div>
        <p className="text-xl text-center font-semibold text-gray-700 px-2 pt-2">
          Heading of the article
        </p>
        <div className="flex items-center px-2 justify-center">
          <p>Don Jones </p>
          <div className="w-2 h-2 rounded bg-gray-700 mt-1 mx-2"></div>
          <p>Dec 12, 2023</p>
        </div>
        <p className="text-center text-gray-600 py-2 ">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam minus,
          cum ipsum rerum quisquam in ea 
        </p>
      </div>
      <div className="flex justify-center">
        <button className="border hover:shadow-md hover:shadow-slate-900 bg-white border-gray-600 rounded-3xl px-2 py-1 ">
          Read More
        </button>
      </div>
    </div>
  )
}

export default Cards2