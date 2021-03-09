// класс-сервис, который инкапсулирует код для работы с сервером
// и изолирует его от остального кода приложения

export default class PokeapiService {

  _apiBase = 'https://pokeapi.co/api/v2'

  getResource = async (url) => {
    const res = await fetch(`${this._apiBase}${url}`)

    if (!res.ok) {
      throw new Error(`Could not fetch ${url}` + 
      `, received ${res.status}`)
    }
    return res.json()
  }

  getAllPokemons = async () => {
    const res = await this.getResource(`/pokemon/`)   
    return res.results
  }

  getPokemon = async (id) => {
    const pokemon = await this.getResource(`/pokemon/${id}`)
    return this._transformPokemon(pokemon)
  }

  _transformPokemon = (pokemon) => {
    return {
      id: pokemon.id,
      name: pokemon.name,
      baseExperience: pokemon.base_experience,
      height: pokemon.height,
      order: pokemon.order,
      weight: pokemon.weight,
      abilities: pokemon.abilities,
      forms: pokemon.forms,
      image: pokemon.sprites.front_default,
      moves: pokemon.moves,
      species: pokemon.species
    }
  }
}
