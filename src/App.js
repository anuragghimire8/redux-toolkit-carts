import React from 'react'
import { BrowserRouter, Route,Routes } from 'react-router-dom'
import Cart from './Pages/Cart'
import Home from './Pages/Home'
import './App.css'
import Navbar from './Components/Navbar'
import Products from './Components/Products'

const App = () => {
   

  return (
    <div className='App'>
    
      <BrowserRouter>
      <Navbar/>
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path ='/cart' element= {<Cart/>}/>
      <Route path='/products' element={<Products/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
