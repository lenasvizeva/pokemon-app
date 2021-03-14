import React from 'react'
import ItemListContainer from '../item-list/container'

const MainPage = ({ history }) => {

  return(
    <div className="main-page">
      <div className="card-container">
        <ItemListContainer onItemSelected={(id) => history.push(id)} />
      </div>
    </div>
  )
}

export default MainPage