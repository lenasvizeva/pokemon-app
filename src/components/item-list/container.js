import React from 'react'
import ItemList from './item-list'
import withData from '../hoc/with-data'
import withPokeapiService from '../hoc/with-pokeapi-service'
import compose from '../hoc/compose'

const mapMethodsToProps = (pokeapiService) => {
  return {
    getData: pokeapiService.getAllPokemons,
    getPokemon: pokeapiService.getPokemon
  }
}

const ItemListContainer = compose(
                            withPokeapiService(mapMethodsToProps),
                            withData
                          )(ItemList)

export default ItemListContainer