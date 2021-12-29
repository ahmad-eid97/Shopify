import { Routes, Route } from 'react-router-dom';

import React from 'react'
import Home from '../pages/home/Home';
import ItemDetails from '../pages/home/ItemDetails';
import NewItem from './../pages/newItem/NewItem';
import Feedbacks from './../pages/feedbacks/Feedbacks';
import Cart from './../pages/cart/Cart';

export default function AllRoutes() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/:itemId' element={<ItemDetails />} />
        <Route path='/new-item' element={<NewItem />} />
        <Route path='/feedbacks' element={<Feedbacks />} />
        <Route path='/cart' element={<Cart />} />
      </Routes>
    </div>
  )
}
