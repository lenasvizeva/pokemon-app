import React from 'react'
import ItemList from '../item-list/item-list'

const MainPage = ({ history, match }) => {
  const {id} = match.params

  return(
    <div className="main-page">
      <div className="card-container">
        <ItemList/>
      </div>
    </div>
  )
}

export default MainPage