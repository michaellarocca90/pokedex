import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import ImageAvatar from './ImageAvatar'

const styles = {
  card: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    marginBottom: 16,
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
};
// render the modal with a fetch request for the pokemons individual details.
// const renderDetailsModal = () => {
// const url = https://pokeapi.co/
//  fetch(`${url}{pokemon.resource_uri}`, {
  // method: "GET",
  // headers: {
  //   "Content-Type": "application/json"
  // }})
  // .then(res => res.json())
  // .then(data => {
  //   this.setState({pokemonInfo: data.pokemon, isLoading: false});
  // })
  // .catch(err => console.log(err));
// }

function DataCard(props) {
  const { classes } = props;
  const displayName = `${props.pokemon.name.substr(0, 1).toUpperCase()}${props.pokemon.name.substr(1)}`
  return (
    <div>
      <Card className={classes.card}>
        <CardContent>
          <Typography className={classes.title} color="textSecondary">
          </Typography>
          <Typography variant="headline" component="h2">
            {displayName}
          </Typography>
        </CardContent>
        <CardActions>
          <Button onClick={renderDetailsModal} size="small">Learn More</Button>
        </CardActions>
      </Card>
    </div>
  );
}

DataCard.propTypes = {
  classes: PropTypes.object.isRequired,
  pokemon: PropTypes.object
};

export default withStyles(styles)(DataCard);
