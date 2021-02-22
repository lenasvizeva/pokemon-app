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
    // return res.results.map(this._transformPokemon)
    return res.results
  }

  // getPokemon = async (id) => {
  //   const pokemon = await this.getResource(`/pokemon/5`)
  //   return this._transformPokemon(pokemon)
  // }

  // _extractId = (item) => {
  //   const idRegExp = /\/([0-9]*)\/$/
  //   console.log(item)
  //   return item.url.match(idRegExp)[1]
  // }

  // _transformPokemon = (pokemon) => {
  //   return {
  //     id: pokemon.id,
  //     name: pokemon.name,
  //     height: pokemon.height,
  //     weight: pokemon.weight,
  //     abilities: pokemon.abilities,
  //     forms: pokemon.forms
  //   }
  // }
}

const pokeapi = new PokeapiService()
pokeapi.getAllPokemons().then((res) => {
  console.log(res)
})