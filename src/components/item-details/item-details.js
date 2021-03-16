import React, {useState} from 'react'
import './item-details.scss'

const _imageBase = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon'
// const _imageBase = 'https://pokeres.bastionbot.org/images/pokemon'

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
          <li><span>Base experience:</span> {item.baseExperience}</li>
          <li><span>Height:</span> {item.height}</li>
          <li><span>Weight:</span> {item.weight}</li>
          <li><span>Order:</span> {item.order}</li>
          <li><span>Species:</span> {item.species.name}</li>
        </ul>
      </div>

      <ul className="item-info item-info--details">
        <li><span>Abilities:</span>
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

        <li><span>Forms:</span>
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

        <li><span>Type:</span> 
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

        <li><span>Held Items:</span> 
          <ul className="item-inner-ul">
            {item.heldItems.map((obj, i) => {
              return (
                <li key={i}>
                  {obj.item.name}
                </li>
              )
            })}
          </ul>
        </li>

        <li style={{gridArea: '1 / 1 / 4 / 2'}}>
          <span>Stats:</span>
          <ul className="item-inner-ul">
            {item.stats.map((obj, i) => {
              return (
                <li key={i}> 
                  <p>{obj.stat.name}</p>
                  <p><span>Base stat:</span> {obj.base_stat}</p>
                  <p><span>Effort:</span> {obj.effort}</p>
                </li>
              )
            })}
          </ul>
        </li>

        <li><a className="btn btn-link expand" onClick={handleCollapse}>
          <span>Moves</span> 
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
