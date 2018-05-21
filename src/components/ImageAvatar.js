import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';

const styles = {
  row: {
    display: 'flex',
    justifyContent: 'center',
  },
  avatar: {
    margin: 10,
  },
  bigAvatar: {
    width: 60,
    height: 60,
  },
};

function ImageAvatar(props) {
  const { classes } = props;
  console.log(props)
  return (
      <Avatar src={props.sprites.front_default} className={classes.bigAvatar} />
  );
}

ImageAvatar.propTypes = {
  classes: PropTypes.object.isRequired,
  sprites: PropTypes.object
};

export default withStyles(styles)(ImageAvatar);
