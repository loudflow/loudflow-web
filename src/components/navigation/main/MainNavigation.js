import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import { withStyles } from '@material-ui/styles';
import styles from './style';

class MainNavigation extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    const { classes, options } = this.props;
    return (
      <ul className={classes.listContainer}>
        {options.map((link, i) => (
          <li className={classes.menuContainer} key={i}>
            <Link
              to={link.to}
              className={classes.navLink}
              activeClassName={classes.navLinkActive}
              exact={'true'}>
              <span>{link.text}</span>
            </Link>
          </li>
        ))}
      </ul>
    );
  }

}

MainNavigation.propTypes = {
  classes: PropTypes.object.isRequired,
  options: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default withStyles(styles)(MainNavigation);
