import { useDispatch } from 'react-redux'
import { cartActions } from '../../store/cart-slice'

import './CartItem.scss'
// IMPORT REACT ICONS
import { FaTrashAlt } from 'react-icons/fa'

const CartItem = (props) => {

  const dispatch = useDispatch()

  const { id, name, price, image } = props

  const removeFromCart = () => {
    dispatch(cartActions.removeFromCart({id: id}))
  }

  return (
    <div className="cartItem">
      <div className="inside">
        <div className="image">
          <img src={image} alt="" />
        </div>
        <div className="info">
          <h2>{name}</h2>
          <h4><span>$</span>{price}</h4>
        </div>
      </div>
      <div className="actions">
        <FaTrashAlt onClick={removeFromCart} />
      </div>
    </div>
  )
}

export default CartItem;