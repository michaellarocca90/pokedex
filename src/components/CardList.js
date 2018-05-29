import React, { Component } from 'react';
import DataCard from './DataCard'
import PropTypes from 'prop-types';


class CardList extends Component {
  constructor(props){
    super(props)
    this.state = {

    }
  }

  const handleClick = (uri) => {
      const url = 'https://pokeapi.co/'
      fetch(`${url}${uri}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        }})
      .then(res => res.json())
      .then(data => {
        let singlePokemon = data
      })
      .catch(err => console.log(err));
  }

  const renderModal = (singlePokemon) => {
    <DetailsModalWrapped />
  }

  render(){
    if (this.props.appData.isLoading) {
      return null
    } else {
    const pokemonList = this.props.appData.pokemonInfo
    console.log(pokemonList)
    return(
      <div>
        {renderModal}
        pokemonList.map(pokemon => {
          const dataAndHandler = {pokemon: pokemon, handleClick: handleClick}
          return <DataCard dataAndHandler={dataAndHandler}/>
        })
      <div>
    )
  }}
}



export default CardList;
