import React from 'react'
import './header.scss'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className="header">
      <div className="container">
        <h3>
          <Link to="/">Pokemon App</Link>
        </h3>

        <div className="menu">
          <Link to="/">Pokemon list</Link>
        </div>
        
      </div>
    </div>
  )
}   

export default Header