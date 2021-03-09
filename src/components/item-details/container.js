import React from 'react'
import withPokeapiService from '../hoc/with-pokeapi-service'
import ItemDetails from './item-details'

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

export default withPokeapiService(mapMethodsToProps)(ItemDetailsContainer)