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



function DataCard(props) {
  const { classes } = props;
  const displayName = `${props.dataAndHandler.pokemon.name.substr(0, 1).toUpperCase()}${props.dataAndHandler.pokemon.name.substr(1)}`
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
          <Button onClick={props.dataAndHandler.handleClick(pokemon.resource_uri)} size="small">PokeInfo</Button>
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
