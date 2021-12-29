import React, { useContext, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { itemsContext } from '../../components/contexts/ItemsContext'
import './NewItem.scss'

const NewItem = () => {

  const nameRef = useRef()
  const priceRef = useRef()
  const imageRef = useRef()
  const descriptionRef = useRef()

  const { addNewItem } = useContext(itemsContext)

  const navigate =  useNavigate()

  const addNewItemHandler = (e) => {
    e.preventDefault()
    const name = nameRef.current.value;
    const image = imageRef.current.value;
    const description = descriptionRef.current.value;
    const price = priceRef.current.value;
    const newItem = {
      id: `${Math.random()}`,
      name: name,
      image: image,
      description: description,
      price: price
    }
    console.log(newItem)
    addNewItem(newItem)
    navigate('/')

  }

  return (
    <div className='form'>
      <form className='formWrapper' onSubmit={addNewItemHandler}>
        <div className="field">
          <label htmlFor="name">NAME</label>
          <input ref={nameRef} id='name' type="text" placeholder='Type Product Name...' />
        </div>
        <div className="field">
          <label htmlFor="image">IMAGE</label>
          <input ref={imageRef} id='image' type="text" placeholder='Put Product Image URL...' />
        </div>
        <div className="field">
          <label htmlFor="price">PRICE</label>
          <input ref={priceRef} id='price' type="number" placeholder='Type Product Price...' />
        </div>
        <div className="field">
          <label htmlFor="desc">DESCRIPTION</label>
          <textarea ref={descriptionRef} id='desc' placeholder='Type Product Description...'></textarea>
        </div>
        <div className="actions">
          <button>Add Item</button>
        </div>
      </form>
    </div>
  )
}

export default NewItem;
