import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import { Button } from '@material-ui/core';
import { withStyles } from '@material-ui/styles';
import styles from './style';
import { Navigation } from '../../components';
import logo from '../../images/logo-title.png';

class Header extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    const { classes } = this.props;
    return (
      <header className={classes.container}>
        <div className={classes.navContainer}>
          <div className={classes.navigation}>
            <Navigation />
          </div>
          <Button className={classes.preview} variant="outlined" color="secondary" href="https://www.loudflow.app">
            PREVIEW
          </Button>
        </div>
        <Link to='/' className={classes.brand}>
          <img src={logo} className={classes.logo} alt='logo' />
        </Link>
      </header>
    );
  }

}

Header.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Header);
