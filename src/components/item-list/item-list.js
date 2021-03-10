import React from 'react'
import './item-list.scss'

const idRegExp = /\/([0-9]*)\/$/
// const _imageBase = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon'
const _imageBase = 'https://pokeres.bastionbot.org/images/pokemon'

const ItemList = (props) => {
  const {data, onItemSelected} = props 

  const items = data.map((item) => {
    const id = item.url.match(idRegExp)[1]

    return (
      <li className="list-group-item card"
        key={id}
        onClick={() => 
        onItemSelected(id)}>
          <img src={`${_imageBase}/${id}.png`} />
          <span>{item.name}</span>
      </li>
    )
  })
        
  return (
    <ul className="list-group item-list">
      {items}
    </ul>
  ) 
}

export default ItemList
