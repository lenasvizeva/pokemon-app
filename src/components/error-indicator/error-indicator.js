import React from 'react'
import './error-indicator.scss'
import icon from './error_icon.png'

const ErrorIndicator = () => {
  return (
    <div className="error-indicator">
      <img src={icon} alt="error icon" />
      <span className="boom">BOOM!</span>
      <span>Something has gone wrong</span>
    </div>
  )
}

export default ErrorIndicator
