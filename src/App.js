
import { Route, Router, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/HomePage/Home';
import BlogDetails from './pages/BlogDetails/BlogDetails';
import { useSelector } from 'react-redux';
import UserAccount from './pages/UserAccount/UserAccount';
import { Toaster } from 'react-hot-toast';


function App() {
  const {signin} = useSelector(state => state.navbar);

  return (
    <div >
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/blog/:id' element={<BlogDetails/>}/>
      </Routes>
      {
          signin && <UserAccount/>
      }
      <Toaster/>
    </div>
  );
}

export default App;
