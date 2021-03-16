import React, { Component } from 'react'
import Select from 'react-select'
import withPokeapiService from '../hoc/with-pokeapi-service'
import PropTypes from 'prop-types'

const idRegExp = /\/([0-9]*)\/$/

const MenuContainer = (props) => {
  return (
    <Menu {...props} />
  )
}

const mapMethodsToProps = (pokeapiService) => {
  return {
    getData: pokeapiService.getAllPokemons
  }
}

class Menu extends Component {
  constructor(props) {
    super(props)

    this.state = {
      options: [],
      selectedOption: null
    }

    this.handleChange.bind(this)
  }

  componentDidMount() {
    const { getData } = this.props
    const nameList = []

    getData()
      .then(res => {
        return res
      })
      .then((array) => {
        array.map(item => {
          const id = item.url.match(idRegExp)[1]

          const pokemonName = {
            value: item.name,
            label: item.name,
            id: id
          }
          nameList.push(pokemonName)
        })
        this.setState({
          options: nameList
        })
      })
  }
  
  handleChange = selectedOption => {
    const {onItemSelected} = this.props

    this.setState({ selectedOption })
    onItemSelected(selectedOption.id)
  }

  render () {
    const {selectedOption, options} = this.state
    
    return (
      <div>
        <Select 
          classNamePrefix="pokemon-list"
          placeholder={"Choose pokemon"}
          value={selectedOption}
          onChange={this.handleChange}
          options={options}/> 
      </div>
    )
  }
}

Menu.propTypes = {
  getData: PropTypes.func.isRequired,
  onItemSelected: PropTypes.func
}

export default withPokeapiService(mapMethodsToProps)(MenuContainer)