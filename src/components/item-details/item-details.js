import React, {Component} from 'react'
import './item-details.scss'
import PokeapiService from '../../services/pokeapi-service'
import Spinner from '../spinner'
import ErrorIndicator from '../error-indicator'

export default class ItemDetails extends Component {
  pokeapiService = new PokeapiService()
    
  state = {
    item: null,
    loading: true,
    error: false
  }
  
  componentDidMount() {
    this.updateItem()
  }

  componentDidUpdate = (prevProps) => {
    if (this.props.itemId !== prevProps.itemId) {
      this.updateItem()
    }
  }

  onError = (err) => {
    this.setState({
      error: true,
      loading: false
    })
  }

  updateItem() {
    const { itemId, getData } = this.props

    if (!itemId) {
      return
    } 

    getData(itemId) 
      .then((res) => {
        const newItem = res
        this.setState({
          item: newItem,
          loading: false,
          error: false
        })
      }) 
  }

  render() {
    const {item, loading, error} = this.state

    const hasData = !(loading || error)
    const errorMessage = error? <ErrorIndicator /> : null
    const spinner = loading? <Spinner /> : null
    const content = hasData? <ItemView item={item} /> : null

    return (
      <div className="card item-details">
        {errorMessage}
        {spinner}
        {content}
      </div>
    )
  }
}

const ItemView = ({item}) => {

  return (
    <div className="item">
      <h4>{item.name}</h4> 

      <img className="item-image"
          src={item.image} />

      <div className="item-info item-info--base">
        
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
          <ul className="item-inner-ul">
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

        <li>Moves: 
          <ul className="item-inner-ul item-inner-ul--large">
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
