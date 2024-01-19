import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './pages/About';
import SignUp from './pages/SignUp'
import Profile from './pages/Profile'
import SignIn from './pages/SignIn'
import Home from './pages/Home'

export default function App() {
  return ( 
  <BrowserRouter>
  <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/about' element={<About />} />
    <Route path='/sign-in' element={<SignIn />} />
    <Route path='/sign-up' element={<SignUp />} />
    <Route path='/profile' element={<Profile />} />
  </Routes>
  </BrowserRouter>
  );
    
}
