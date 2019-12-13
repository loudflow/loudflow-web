import Link from 'gatsby-link';

import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/styles';
import styles from './style';

const MainNavigation = ({ classes, options }) => {

  return (
    <ul className={classes.listContainer}>
      {options.map((link, i) => (
        <li className={classes.menuContainer} key={i}>
          <Link className={classes.navLink} activeClassName={classes.navLinkActive} to={link.to} exact={'true'} >
            {link.text}
          </Link>
        </li>
      ))}
    </ul>
  );

};

MainNavigation.propTypes = {
  classes: PropTypes.object.isRequired,
  options: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default withStyles(styles)(MainNavigation);
