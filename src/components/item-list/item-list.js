import React, { Component } from 'react'
import './item-list.scss'
import PokeapiService from '../../services/pokeapi-service'
import testPic from '../../img/slowpoke.png'

export default class ItemList extends Component {
  pokeapi = new PokeapiService()

  state = {
    data: null
  }

  componentDidMount() {
    this.updateList()
  }

  updateList = () => {
    this.pokeapi
      .getAllPokemons()
      .then((res) => {
        this.setState({
          data: res.map((item) => {
            const idRegExp = /\/([0-9]*)\/$/
            return (
              <li className="list-group-item card"
                key={item.url.match(idRegExp)[1]}>
                  <img src={testPic} />
                  <span>{item.name}</span>
              </li>
            )
          })
        })
        
      })
  }

  render () {
    return (
      <ul className="list-group item-list">
        {this.state.data}
      </ul>
    )
  }  
}
