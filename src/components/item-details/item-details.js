import React, {useState} from 'react'
import './item-details.scss'

const _imageBase = 'https://pokeres.bastionbot.org/images/pokemon'

const ItemView = ({item}) => {
  const [isCollapsed, setIsCollapsed] = useState(true)
  const handleCollapse = () => {
    setIsCollapsed(!isCollapsed)
  }

  return (
    <div className="item">

      <img className="item-image"
          src={`${_imageBase}/${item.id}.png`} />

      <div className="item-info item-info--base">
        <h4>{item.name}</h4> 
        <ul>
          <li>Base experience: {item.baseExperience}</li>
          <li>Height: {item.height}</li>
          <li>Weight: {item.weight}</li>
          <li>Order: {item.order}</li>
          <li>Species: {item.species.name}</li>
        </ul>
      </div>

      <ul className="item-info item-info--details">
        <li>Abilities: 
          <ul className="item-inner-ul" >
            {item.abilities.map((obj, i) => {
              return (
                <li key={i}>
                  {obj.ability.name}
                </li>
              )
            })}
          </ul>
        </li>

        <li>Forms: 
          <ul className="item-inner-ul">
            {item.forms.map((obj, i) => {
              return (
                <li key={i}>
                  {obj.name}
                </li>
              )
            })}
          </ul>
        </li>

        <li>Stats: 
          <ul className="item-inner-ul">
            {item.stats.map((obj, i) => {
              return (
                <li key={i}>
                  {obj.stat.name}
                </li>
              )
            })}
          </ul>
        </li>

        <li>Type: 
          <ul className="item-inner-ul">
            {item.types.map((obj, i) => {
              return (
                <li key={i}>
                  {obj.type.name}
                </li>
              )
            })}
          </ul>
        </li>

        <li><a className="btn btn-link expand" onClick={handleCollapse}>
          Moves 
          </a>
          <ul 
            className={`item-inner-ul item-inner-ul--large ${isCollapsed ? 'collapse' : ''}`}>
            {item.moves.map((el, i) => {
              return (
                <li key={i}>
                  {el.move.name}
                </li>
              )
            })}
          </ul>
        </li>

      </ul>    
    </div>
  )
}

export default ItemView
