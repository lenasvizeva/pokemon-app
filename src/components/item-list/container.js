import React from 'react'
import ItemList from './item-list'
import withData from '../hoc/with-data'
import withPokeapiService from '../hoc/with-pokeapi-service'
import withChildFunction from '../hoc/with-child-function'
import compose from '../hoc/compose'

// const renderName = ({name}) => <span>{name}</span>

const mapMethodsToProps = (pokeapiService) => {
  return {
    getData: pokeapiService.getAllPokemons
  }
}

const ItemListContainer = compose(
                            withPokeapiService(mapMethodsToProps),
                            withData
                          )(ItemList)

export default ItemListContainer