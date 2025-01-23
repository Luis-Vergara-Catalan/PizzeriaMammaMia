import './App.css'
import NavBar from './components/Navbar'
import Home from './pages/Home'
import Footer from './components/Footer'
import Register from './pages/Register'
import Login from './pages/Login'
import Cart from './pages/Cart'
import Pizza from './pages/Pizza'
import Profile from './pages/Profile'
import NotFound from './pages/NotFound'
import {Route, Routes} from 'react-router-dom'

function App() {

  return (
    <>
      <NavBar/>
      <div>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/Register' element={<Register/>}/>
          <Route path='/Login' element={<Login/>}/>
          <Route path='/Cart' element={<Cart/>}/>
          <Route path='/Pizza/:id' element={<Pizza/>}/>
          <Route path='/Profile' element={<Profile/>}/>
          <Route path='*' element={<NotFound/>}/>
        </Routes>
      </div>
      <Footer/>
    </>
  )
}

export default App
