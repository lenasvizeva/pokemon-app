import React, { Component } from 'react'
import withPokeapiService from '../hoc/with-pokeapi-service'
import ItemView from './item-details'
import Spinner from '../spinner'
import ErrorIndicator from '../error-indicator'

const ItemDetailsContainer = (props) => {
  return (
    <ItemDetails {...props} />
  )
}

const mapMethodsToProps = (pokeapiService) => {
  return {
    getData: pokeapiService.getPokemon
  }
}

class ItemDetails extends Component {
  constructor(props){
    super(props)

    this.state = {
      item: null,
      loading: true,
      error: false
    }
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

export default withPokeapiService(mapMethodsToProps)(ItemDetailsContainer)