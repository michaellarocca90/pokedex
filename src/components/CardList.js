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
    console.log(this.props)
    return(
        <DataCard pokemon={this.props.appData.pokemonInfo}/>
    )
  }}
}



export default CardList;
