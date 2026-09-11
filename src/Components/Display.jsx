import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Shop from '../Pages/Shop'
import Cart from '../Pages/Cart'
import Login from '../Pages/Login'
import Index from '../Pages/Index'
import CartIcon from '../Pages/CartIcon'

import DetailedProduct from '../Pages/DetailedProduct'

const Display = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/Shop" element={<Shop />} />
        <Route path="/CartIcon" element={<CartIcon/>}/>
        <Route path="/Cart" element={<Cart />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/product/:id" element={<DetailedProduct />}/>
      </Routes>
    </div>
  )
}

export default Display