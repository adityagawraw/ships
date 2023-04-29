import React, { useState } from "react";
import classes from "./User.module.css";
import AccountSignIn from "./components/AccountSignIn";
import RegisterUser from "./components/RegisterUser";
import { RxCross2 } from "react-icons/rx";
import { useDispatch } from "react-redux";
import { openSignin } from "../../features/navbarSlice";

const UserAccount = () => {
  const [regsiter, setRegister] = useState(false);
  const dispatch = useDispatch();
  return (
    <div className={classes.modal}>
      <div
        className={` px-4 py-4 bg-white  w-[80%]  md:w-[50%] lg:w-[40%]  rounded-lg border border-gray-700`}
      >
        <div className="flex justify-end">
          <RxCross2
            onClick={() => {
              dispatch(openSignin({ signin: false }));
            }}
            className="w-4 h-4 cursor-pointer"
          />
        </div>
        {regsiter ? (
          <RegisterUser setRegister={setRegister} />
        ) : (
          <AccountSignIn setRegister={setRegister} />
        )}
      </div>
    </div>
  );
};

export default UserAccount;
