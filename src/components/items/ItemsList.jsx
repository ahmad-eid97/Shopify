import { useContext } from "react";
import SingleItem from './SingleItem'
import { itemsContext } from '../../components/contexts/ItemsContext'
// IMPORT STYLES FILE
import './ItemsList.scss'

const ItemsList = () => {

  const { items, removeItem } = useContext(itemsContext)

  return (
    <div className="wrapper">
      {items.map(item => (
        <SingleItem 
          key={item.id} 
          id={item.id}
          name={item.name} 
          image={item.image}
          price={item.price}
          removeItem={removeItem} />
      ))}
    </div>
  )
}

export default ItemsList;