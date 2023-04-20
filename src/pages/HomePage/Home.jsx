import React from 'react'
import NavBar from '../components/NavBar/NavBar'
import Header from './components/Header/Header'
import MainSection from './components/Main/MainSection'
import classes from "./Home.modules.css";

const Home = () => {
  return (
    <div className={classes.home}>
      <img src={'/images/5335387.jpg'} alt="" className='fixed w-[100vw] h-[100vh] top-1 z-[-1] object-cover'/>
      <div>
        <NavBar/>
        <Header/>
        <MainSection/>
        </div> 
    </div>
  )
}

export default Home