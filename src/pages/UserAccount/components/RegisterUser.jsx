import axios from "axios";
import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { AiFillEye, AiOutlineEye, AiOutlineMail } from "react-icons/ai";
import { FaRegUser } from "react-icons/fa";

const RegisterUser = ({ setRegister }) => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [signUpValues, setSignUPValues] = useState({
    name: "",
    email: "",
    password: "",
  });
  const handleRegisterUser = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://blogserver.vercel.app/api/v1/user",
        signUpValues
      );
      if (response?.data?.name) {
        toast.success(
          `Congratulation ${response?.data?.name}. Welcome to the Ship`
        );
        setRegister(false);
      } else {
        toast.error("Some Error occured. Please try again.");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleValuesChange = (e) => {
    setSignUPValues((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };
  return (
    <div className="overflow-auto">
      <form onSubmit={handleRegisterUser}>
        <div>
          <p className="text-gray-800 font-bold text-base md:text-xl my-1">
            User Name
          </p>
          <div className="flex justify-between items-center py-1 md:py-2 px-1 md:px-2 border border-gray-700 rounded  ">
            <input
              required
              type="text"
              placeholder="Enter your full name"
              name="name"
              value={signUpValues.name}
              onChange={handleValuesChange}
              className="outline-none   w-full "
            />
            <FaRegUser className="text-gray-700 w-5 h-5 " />
          </div>
        </div>
        <div>
          <p className="text-gray-800 font-bold text-base md:text-xl my-1">
            Email
          </p>
          <div className="flex justify-between items-center py-1 md:py-2 px-1 md:px-2 border border-gray-700 rounded  ">
            <input
              required
              type="email"
              placeholder="Enter your email"
              name="email"
              value={signUpValues.email}
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
              value={signUpValues.password}
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
            Sign Up
          </button>
        </div>
      </form>
      <div className="flex justify-center mt-3">
        <button
          onClick={() => setRegister((prev) => !prev)}
          className="max-w-[300px] border border-[#2c8bb4] hover:bg-[#33a1d1] hover:text-white font-semibold text-[#2c8bb4]  px-3 py-1  rounded"
        >
          Already have an account
        </button>
      </div>
    </div>
  );
};

export default RegisterUser;
