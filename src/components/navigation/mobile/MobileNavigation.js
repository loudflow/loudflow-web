import Link from 'gatsby-link';

import React from 'react';
import PropTypes from 'prop-types';

import { FaBars } from 'react-icons/fa';
import { withStyles } from '@material-ui/styles';
import styles from './style';

const MobileNavigation = ({ classes, options, onClick, open }) => {

  return (
    <>
      <FaBars className={classes.menuIcon} onClick={onClick} />
      {open && (
        <div className={classes.menuContainer}>
          {options.map((link, i) => (
            <div key={i}>
              <Link
                to={link.to}
                className={classes.navLink}
                activeClassName={classes.navLinkActive}
                exact={'true'}>
                <span>{link.text}</span>
              </Link>
            </div>
          ))}
        </div>
      )}
    </>
  );

};

MobileNavigation.propTypes = {
  classes: PropTypes.object.isRequired,
  options: PropTypes.arrayOf(PropTypes.object).isRequired,
  open: PropTypes.bool.isRequired,
  onClick: PropTypes.func
};

MobileNavigation.defaultProps = {
  onClick: () => {}
};

export default withStyles(styles)(MobileNavigation);
