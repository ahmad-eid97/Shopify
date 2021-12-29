import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { itemsContext } from './../../components/contexts/ItemsContext';
import './ItemDetails.scss'

const ItemDetails = () => {

  const [item, setItem] = useState({})

  const { items } = useContext(itemsContext)

  const params = useParams()

  useEffect(() => {
    var itemFound = items.find(item => item.id === params.itemId)
    setItem(itemFound)
  }, [])

  return (
    <div className="itemDetail">
      <div className="singleItem">
        <img src={item.image} alt="" />
        <div className="info">  
          <h3>{item.name}</h3>
          <h6>Price: <span>$</span>{item.price}</h6>
        </div>
        <div className="desc">
          <p>{item.description}</p>
        </div>
      </div>
    </div>
  )
}

export default ItemDetails;