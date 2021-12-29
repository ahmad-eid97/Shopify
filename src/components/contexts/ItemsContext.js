import React, { createContext, useState } from 'react'

export const itemsContext = createContext(null)

const initialItems = [
  {
    id: `${Math.random()}`,
    name: 'RTX 2060 Super',
    image: 'https://www.servethehome.com/wp-content/uploads/2019/07/NVIDIA-RTX-2060-SUPER.jpg',
    description: 'Powerfull GPU for gaming and streaming',
    price: 820
  }
] 

export default function ItemsContextProvider({children}) {

  const [items, setItems] = useState(initialItems)

  const addNewItem = (newItem) => {
    var newItems = [newItem, ...items];
    setItems(newItems)
  }

  const removeItem = (itemId) => {
    var oldItems = [...items];
    var updatedItems = oldItems.filter(item => item.id !== itemId);
    setItems(updatedItems)
  }

  return (
    <itemsContext.Provider value={{items, removeItem, addNewItem}}>
      {children}
    </itemsContext.Provider>
  )
}
