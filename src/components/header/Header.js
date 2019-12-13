import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import { Link } from 'gatsby';

import React from 'react';
import PropTypes from 'prop-types';

import { AppBar, Button, IconButton, Toolbar, Typography } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { withStyles } from '@material-ui/styles';
import styles from './style';

import { Navigation } from '../../components';

const Header = ({ classes }) => {

  const logoImage = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "images/logo/logo-black-name.png" }) {
        childImageSharp {
          fixed(height: 120, quality: 100) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `);

  return (
/*
    <AppBar classes={{root: classes.root}} position="static">
      <Toolbar>
        <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" className={classes.title}>
          News
        </Typography>
        <Button color="inherit">Login</Button>
      </Toolbar>
    </AppBar>
*/

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
        <Img alt='logo' fixed={logoImage.file.childImageSharp.fixed} />
      </Link>
    </header>
  );

};

Header.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Header);
