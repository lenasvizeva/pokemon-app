import React, { Component } from 'react'
import './item-list.scss'

const idRegExp = /\/([0-9]*)\/$/

// const _imageBase = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon'
const _imageBase = 'https://pokeres.bastionbot.org/images/pokemon'


export default class ItemList extends Component {
  constructor(props) {
    super(props)
    
    this.state = {
      currentPage: 1,
      cardsPerPage: 20
    }

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(event) {
    this.setState({
      currentPage: Number(event.target.id)
    })
  }

  render() {
    const {currentPage, cardsPerPage} = this.state
    const {data, onItemSelected} = this.props

    const indexOfLastCard = currentPage * cardsPerPage
    const indexOfFirstCard = indexOfLastCard - cardsPerPage
    const currentTodos = data.slice(indexOfFirstCard, indexOfLastCard)
    const pageNumbers = []

    const items = currentTodos.map((item) => {
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

    for (let i=1; i<=Math.ceil(data.length / cardsPerPage); i++) {
      pageNumbers.push(i)
    }

    const renderPageNumbers = pageNumbers.map(number => {
      return (
        <li className="page-link"
          key={number}
          id={number}
          onClick={this.handleClick}
        >
          {number}
        </li>
      )
    })

    return (
      <React.Fragment> 
        <ul className="list-group item-list grid">
          {items}
        </ul>
  
        <ul className="pagination">
          {renderPageNumbers}
        </ul>     
      </React.Fragment>
    ) 
  }
}
