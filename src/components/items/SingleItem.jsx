import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { cartActions } from '../../store/cart-slice'

import './SingleItem.scss'
// IMPORT REACT ICONS
import { FaCartPlus } from 'react-icons/fa'
import { FaTrashAlt } from 'react-icons/fa'
import { FaEye } from 'react-icons/fa'

const SingleItem = (props) => {

  const dispatch = useDispatch()

  const { id, name, image, price, removeItem } = props

  const navigate = useNavigate()

  const goToItemDetails = () => {
    navigate(`/${id}`)
  }

  const addItemToCart = () => {
    const newCartItem = {id, name, image, price}
    dispatch(cartActions.addToCart({newCartItem: newCartItem}))
  }
 
  return (
    <div className="singleItem">
      <img src={image} alt="" />
      <div className="info">  
        <h3>{name}</h3>
        <h6><span>$</span>{price}</h6>
      </div>
      <div className="actions">
        <button className='delete' onClick={() => removeItem(id)}><FaTrashAlt /> Delete</button>
        <button onClick={goToItemDetails}><FaEye /> Show</button>
        <button onClick={addItemToCart} className='add'><FaCartPlus /> Add To Cart</button>
      </div>
    </div>
  )
}

export default SingleItem;