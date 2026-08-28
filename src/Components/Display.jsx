import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Index from '../Pages/Index'
import Shop from '../Pages/Shop'
import Cart from '../Pages/Cart'
import Login from '../Pages/Login'

const Display = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Index/>} />
        <Route path="/Shop" element={<Shop />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="/Login" element={<Login />} />
      </Routes>
    </div>
  )
}

export default Display