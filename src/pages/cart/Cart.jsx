import React from 'react'
import { useSelector } from 'react-redux';
import CartItem from './CartItem';
import './Cart.scss'

// IMPORT REACT ICONS
import { FaCartPlus } from 'react-icons/fa'

const Cart = () => {

  const cartItems = useSelector(state => state.cart.cartItems)

  if(cartItems.length === 0) {
    return (
      <div className="noItems">
        <FaCartPlus />
        <h2>No Items In Your Cart Yet!</h2>
      </div>
    )
  }

  return (
    <div className='cartItemsWrapper'>
      {cartItems.map(item => (
        <CartItem key={item.id} id={item.id} name={item.name} price={item.price} image={item.image} />
      ))}
    </div>
  )
}

export default Cart;
