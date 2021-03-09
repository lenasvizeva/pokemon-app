import React from 'react'
import {PokeapiServiceConsumer} from '../pokeapi-service-context'

const withPokeapiService = (mapMethodsToProps) => (Wrapped) => {
  return (props) => {
    return (
      <PokeapiServiceConsumer>
        {
          (pokeapiService) => {
            const serviceProps = mapMethodsToProps(pokeapiService)
            console.log(props)
            return (
              <Wrapped {...props} {...serviceProps} />
            )
          }
        }
      </PokeapiServiceConsumer>
    )
  }
} 

export default withPokeapiService