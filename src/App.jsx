import './App.css'
import NavBar from './components/Navbar'
import Home from './pages/Home'
import Footer from './components/Footer'
import Register from './components/Register'
import Login from './components/Login'

function App() {

  return (
    <>
      <NavBar/>
      <Home/>
      <Register/>
      <Login/>
      <Footer/>
    </>
  )
}

export default App
