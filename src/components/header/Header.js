import { Link } from 'gatsby';
import React from 'react';
import logo from 'images/logo-title.png';
import { withStyles } from '@material-ui/styles';

import { Navigation } from 'components';

import styles from './style';
import content from './content';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

type Props = {
  classes: Object,
};

const { title, preview } = content;

const Header = ({ classes }: Props) => (
  <header className={classes.container}>
    <div className={classes.navContainer}>
      <div className={classes.navigation}>
        <Navigation />
      </div>
      <Button className={classes.preview} variant="outlined" color="secondary" href="#">
        {preview}
      </Button>
    </div>
    <Link to='/' className={classes.brand}>
      <img src={logo} className={classes.logo} alt='logo' />
    </Link>
  </header>
);

export default withStyles(styles)(Header);
