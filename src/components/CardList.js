import React, { Component } from 'react';
import DataCard from './DataCard'
import PropTypes from 'prop-types';


class CardList extends Component {
  constructor(props){
    super(props)
    this.state = {

    }
  }


  render(){
    if (this.props.appData.isLoading) {
      return null
    } else {
    const pokemonList = this.props.appData.pokemonInfo
    console.log(pokemonList)
    return(
        pokemonList.map(pokemon => {
          return <DataCard pokemon={pokemon}/>
        })
    )
  }}
}



export default CardList;
