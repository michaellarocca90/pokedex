import React, { Component } from 'react';
import Header from './components/Header'
import CardList from './components/CardList'

const apiURL = "http://pokeapi.co/api/v2/pokemon/"

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      pokemonInfo: null,
      isLoading: true
    }
  }
  // https://pokeapi.co/api/v2/pokemon/${1}/

//this url returns a list with an id and a name, map through the list and return a datacard that has fetched pkmon info
  componentWillMount(){
    fetch(`https://pokeapi.co/api/v1/pokedex/1/`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }})
      .then(res => res.json())
      .then(data => {
        this.setState({pokemonInfo: data.pokemon, isLoading: false});
      })
      .catch(err => console.log(err));
  }

  render() {
    const appData = this.state
    return (
      <div className="App">
        <Header />
        <CardList appData={appData}/>
      </div>
    );
  }
}

export default App;
