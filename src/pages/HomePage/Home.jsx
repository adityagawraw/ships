import React from 'react'
import NavBar from '../components/NavBar/NavBar'
import Header from './components/Header/Header'
import MainSection from './components/Main/MainSection'
import classes from "./Home.module.css";
import {HiPlus} from "react-icons/hi"
const Home = () => {

  return (
    <div className={classes.home}>
      <img src={'/images/5335387.jpg'} alt="" className='fixed w-[100vw] h-[100vh] top-1 z-[-1] object-cover'/>
      <div>
        <NavBar/>
        <Header/>
        <MainSection/>
        <div className={`${classes.addBlog} fixed top-[140px] left-2 bg-white rounded-full border border-gray-700`}>
          <HiPlus className='w-[30px] h-[30px] mx-3 my-3'/>
          <p className='pr-2 font-semibold  '>Add Blog</p>
        </div>
        </div> 
    </div>
  )
}

export default Home