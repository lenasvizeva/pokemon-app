import React from 'react'
import './header.scss'
import { Link, Router } from 'react-router-dom'
import Menu from '../menu'

const Header = ({ history, match }) => {
  // const {id} = match.params

  return (
    <div className="header">

      <div className="container">
        <h3 className="logo">
          <Link to="/">Pokemon App</Link>
        </h3>

        <div className="pokemon-list">
          <Menu onItemSelected={(id) => history.push(id)} />
        </div>
        
      </div>
        
    </div>
  )
}   

export default Header