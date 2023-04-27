import React from 'react'

const AccountSignIn = () => {
  return (
    <div className={classes.modal}>
      <div className={`${classes.content} px-4 py-4 bg-[#fffacd] h-[96%] md:h-[80%] w-[80%]  md:w-[70%] lg:w-[60%]  rounded-lg border border-gray-700`}>
        <div className="flex justify-end">
          <RxCross2
            onClick={() => setModal(false)}
            className="w-5 h-5 cursor-pointer"
          />
        </div>
        <div>
          <p className="text-gray-800 font-bold text-base md:text-xl"> Email</p>
          <input
            type="text"
            name="title"
            placeholder='Enter your email'
            value={blogData.title}
            onChange={handleBlogDataChange}
            className="outline-none  py-1 md:py-2 px-1 md:px-2 border border-gray-700 rounded w-full my-2"
          />
        </div>
        <div>
          <p className="text-gray-800 font-bold text-base md:text-xl ">Password</p>
          <input
            type="text"
            name="category"
            placeholder='Enter your password'
            value={blogData.category}
            onChange={handleBlogDataChange}
            className="outline-none  py-1 md:py-2 px-1 md:px-2 border border-gray-700 rounded w-full my-2"
          />
        </div>
        
        
        <div className="flex justify-center">
          <button className="border border-gray-700 bg-[#fff597] px-3 py-1  rounded">
            Submit
          </button>
        </div>
      </div>
    </div>
  )
}

export default AccountSignIn