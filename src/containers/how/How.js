import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/styles';
import styles from './style';

class How extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    const { classes } = this.props;
    return (
      <Grid container spacing={1} className={classes.content}>
        <Grid container item direction="column">
          <div className={classes.banner}/>
        </Grid>
        <Grid container item direction="column">
          <div className={classes.titleContainer}>
            <Typography variant='h2' color='textSecondary'>
              Agents as microservices.
            </Typography>
          </div>
          <div className={classes.captionContainer}>
            <Typography variant='h5' color='textPrimary'>
              Lorem ipsum dolor sit amet.
            </Typography>
          </div>
          <div className={classes.contentContainer}>
            <Typography variant='p' color='textPrimary'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Typography>
          </div>
        </Grid>
      </Grid>
    );
  }

}

How.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(How);
