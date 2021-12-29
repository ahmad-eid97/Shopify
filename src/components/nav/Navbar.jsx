import React from 'react'
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'
import './Navbar.scss'
// IMPORT REACT ICONS
import { Fa500Px } from 'react-icons/fa'
import { FaHome } from 'react-icons/fa'
import { FaPlus } from 'react-icons/fa'
import { FaCommentDots } from 'react-icons/fa'
import { FaCartArrowDown } from 'react-icons/fa'

export default function Navbar() {

  const totalCartQuantity = useSelector(state => state.cart.totalQuantity)

  return (
    <div className='navbar'>
      <div className="logo">
        <Fa500Px /> <span>Sh<span>O</span>pify</span>
      </div>
      <ul>
        <li>
          <NavLink to='/'><FaHome /> Home</NavLink>
        </li>
        <li>
          <NavLink to='/new-item'><FaPlus /> Add Item</NavLink>
        </li>
        <li>
          <NavLink to='/feedbacks'><FaCommentDots /> Leave Feedback</NavLink>
        </li>
        <li>
          <NavLink to='/cart'><FaCartArrowDown /> Cart <div>{totalCartQuantity}</div></NavLink>
        </li>
      </ul>
    </div>
  )
}
