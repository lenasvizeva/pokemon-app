import React from 'react'
import './header.scss'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className="header">
      <h3>
        <Link to="/">Pokemon App</Link>
      </h3>

      <ul className="menu d-flex">
        <li><Link to="/people/">Pokemon</Link></li>
      </ul>

    </div>
  )
}   

export default Header