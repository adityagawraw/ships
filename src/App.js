
import { Route, Router, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/HomePage/Home';
import BlogDetails from './pages/BlogDetails/BlogDetails';


function App() {
  return (
    <div className="">
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/blog' element={<BlogDetails/>}/>
      </Routes>
  
    </div>
  );
}

export default App;
