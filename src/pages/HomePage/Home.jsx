import React, { useEffect, useState } from 'react'
import NavBar from '../components/NavBar/NavBar'
import Header from './components/Header/Header'
import MainSection from './components/Main/MainSection'
import classes from "./Home.module.css";
import {HiPlus} from "react-icons/hi"
import {MdKeyboardArrowUp} from "react-icons/md"
import AddBlog from '../AddBlog/AddBlog';
import { useSelector } from 'react-redux';
const Home = () => {
const [modal, setModal] = useState(false);
const state = useSelector(store=> store.auth);
console.log(state)
const getBlogs = async ()=>{
  try {
    const response = await fetch('https://blogserver.vercel.app/api/v1/blog') ;
    const blogs = await response.json();
    console.log(blogs)
  } catch (error) {
    console.log(error)
  }
}
useEffect(()=>{
getBlogs();
},[])
  return (
    <div className={classes.home}>
      <img src={'/images/5335387.jpg'} alt="" className='fixed w-[100vw] h-[100vh] top-1 z-[-1] object-cover'/>
      <div>
        <NavBar/>
        <Header/>
        <MainSection/>
        <button
        onClick={()=>setModal(true)}
        className={`${classes.addBlog} fixed top-[140px] left-2 bg-white rounded-full border border-gray-700`}>
          <HiPlus className='w-[30px] h-[30px] mx-3 my-3'/>
          <p className='pr-2 font-semibold  '>Add Blog</p>
        </button>
        <button
        onClick={()=>{
          window.scroll({top:0, left:0, behavior:"smooth"})
        }}
        className={`${classes.scroll} fixed bottom-[200px] bg-white rounded-full border border-gray-700`}>
          <MdKeyboardArrowUp className='w-[30px] h-[30px] mx-3 my-3'/>
        </button>
      
        </div> 
        <AddBlog modal={modal} setModal={setModal}/>
    </div>
  )
}

export default Home