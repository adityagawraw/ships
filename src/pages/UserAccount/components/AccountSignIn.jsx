import axios from "axios";
import React, { useState } from "react";
import { AiFillEye, AiOutlineEye, AiOutlineMail } from "react-icons/ai";

const AccountSignIn = ({ setRegister }) => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [signinValues, setSigninValues] = useState({
    email: "",
    password: "",
  });

  const handleLoginUser =async(e)=>{
    e.preventDefault();
    try {
      const response = await axios.post('https://blogserver.vercel.app/api/v1/user', signinValues);
      console.log(response);
      
    } catch (error) {
      console.log(error)
    }
  }

  
  const handleValuesChange = (e) => {
    setSigninValues((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };
  return (
    <div className="overflow-auto">
      <form onSubmit={handleLoginUser}> 
        <div>
          <p className="text-gray-800 font-bold text-base md:text-xl my-1"> Email</p>
          <div className="flex justify-between items-center py-1 md:py-2 px-1 md:px-2 border border-gray-700 rounded  ">
            <input
            required
              type="text"
              placeholder="Enter your email"
              name="email"
              value={signinValues.email}
              onChange={handleValuesChange}
              className="outline-none   w-full "
            />
            <AiOutlineMail className="text-gray-700 w-5 h-5 " />
          </div>
        </div>
        <div>
          <p className="text-gray-800 font-bold text-base md:text-xl my-1">
            Password
          </p>
          <div className="flex justify-between items-center py-1 md:py-2 px-1 md:px-2 border border-gray-700 rounded my-1 ">
            <input
            required
              type={passwordVisible ? "text" : "password"}
              placeholder="Enter your password"
              name="password"
              value={signinValues.password}
              onChange={handleValuesChange}
              className="outline-none w-full mr-5"
            />
            {passwordVisible ? (
              <AiFillEye
                onClick={() => setPasswordVisible(false)}
                className="text-[#33a1d1] w-6 h-6 "
              />
            ) : (
              <AiOutlineEye
                onClick={() => setPasswordVisible(true)}
                className="text-gray-700 w-6 h-6 "
              />
            )}
          </div>
        </div>
        <div className="flex justify-center mt-3">
          <button className="bg-[#33a1d1] font-semibold hover:bg-[#38b1e5] px-3 py-1 text-white rounded">
            Sign In
          </button>
        </div>
      </form>
      <div className="flex justify-center mt-3">
        <button
          onClick={() => setRegister(prev=>!prev)}
          className="max-w-[300px] border border-[#2c8bb4] hover:bg-[#33a1d1] hover:text-white font-semibold text-[#2c8bb4]  px-3 py-1  rounded"
        >
          Create an account
        </button>
      </div>
    </div>
  );
};

export default AccountSignIn;
