import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'
import Home from './components/Home'
import Shop from './components/Shop';
import Login from './components/Login'
import Header from './components/Header'
import Footer from './components/Footer'
function App() {

  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/Login' element={<Login />}></Route>
          <Route path='/shop' element={<Shop />}></Route>
        </Routes>
      </div>
      <Footer />
    </Router>

  )
}

export default App
