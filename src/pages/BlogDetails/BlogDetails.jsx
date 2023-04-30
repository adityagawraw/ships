import React, { useState } from 'react'
import NavBar from '../components/NavBar/NavBar'
import MainSection from './components/MainSection';
import { useDispatch, useSelector } from 'react-redux';
import { HiPlus } from 'react-icons/hi';
import { MdKeyboardArrowUp } from 'react-icons/md';
import classes from './Blog.module.css';
import AddBlog from '../AddBlog/AddBlog';
import { toast } from 'react-hot-toast';
import { openSignin } from '../../features/navbarSlice';

const BlogDetails = () => {
  const [modal, setModal] = useState(false);
  const state = useSelector((store) => store.auth);
  const dispatch = useDispatch();
  window.scroll({ top: 0, left: 0 });
 
  return (
    <div className='relative'>
         <img src={'/images/5335387.jpg'} alt="" className='fixed w-[100vw] h-[100vh] top-1 z-[-1] object-cover'/>
      <div>
        <NavBar/>
        <MainSection/>
        <button
         onClick={() => {
          if (state?.isAuth) {
            setModal(true);
          } else {
            toast.error("Please Login to your account");
            dispatch(openSignin({ signin: true }));
          }
        }}
          className={`${classes.addBlog} fixed top-[140px] left-2 bg-white rounded-full border border-gray-700`}
        >
          <HiPlus className="w-[30px] h-[30px] mx-3 my-3" />
          <p className="pr-2 font-semibold  ">Add Blog</p>
        </button>
        <button
          onClick={() => {
            window.scroll({ top: 0, left: 0, behavior: "smooth" });
          }}
          className={`${classes.scroll} fixed bottom-[200px] bg-white rounded-full border border-gray-700`}
        >
          <MdKeyboardArrowUp className="w-[30px] h-[30px] mx-3 my-3" />
        </button>
    </div>
    <AddBlog modal={modal} setModal={setModal} />
    </div>
  )
}

export default BlogDetails;