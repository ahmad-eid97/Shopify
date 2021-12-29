import React, { useContext } from 'react'
import ItemsList from '../../components/items/ItemsList'
// IMPORTING SCSS STYLES
import './Home.scss'

const Home = () => {
  return (
    <div className='itemsArea'>
      <ItemsList />
    </div>
  )
}

export default Home;
