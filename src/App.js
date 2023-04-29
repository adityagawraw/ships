
import { Route, Router, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/HomePage/Home';
import BlogDetails from './pages/BlogDetails/BlogDetails';
import { useSelector } from 'react-redux';
import UserAccount from './pages/UserAccount/UserAccount';


function App() {
  const {signin} = useSelector(state => state.navbar);
  console.log(signin)
  return (
    <div >
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/blog' element={<BlogDetails/>}/>
      </Routes>
      {
          signin && <UserAccount/>
      }
    </div>
  );
}

export default App;
