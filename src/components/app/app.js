import React, { Component } from 'react'
import '../../style/bootstrap.min.css'
import './app.scss'
import Header from '../header'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import MainPage from '../pages'
import PokeapiService from '../../services/pokeapi-service'
import { PokeapiServiceProvider } from '../pokeapi-service-context'
import ErrorIndicator from '../error-indicator'
import ItemDetailsContainer from '../item-details/container'

export default class App extends Component {  
  pokeapiService = new PokeapiService()

  state = {
    hasError: false
  }

  render() {
    if(this.state.hasError) {
      return <ErrorIndicator />
    }

    return (
      <PokeapiServiceProvider value={this.pokeapiService}>
        <Router>
          <div className="app">
            <Header />
            
            <div className="container">
              <Switch>
                <Route path='/' component={MainPage} exact />  
                <Route path='/:id' 
                      render={({ match }) => {
                        const { id } = match.params 
                        return <ItemDetailsContainer itemId={id}/> 
                      }}
                />
              </Switch>
            </div>

          </div>
        </Router>
      </PokeapiServiceProvider>
    )
  }
}