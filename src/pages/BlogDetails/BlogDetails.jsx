import React from 'react'
import NavBar from '../components/NavBar/NavBar'
import MainSection from './components/MainSection';

const BlogDetails = () => {
  return (
    <div className='relative'>
         <img src={'/images/5335387.jpg'} alt="" className='fixed w-[100vw] h-[100vh] top-1 z-[-1] object-cover'/>
      <div>
        <NavBar/>
        <MainSection/>
    </div>
    </div>
  )
}

export default BlogDetails;