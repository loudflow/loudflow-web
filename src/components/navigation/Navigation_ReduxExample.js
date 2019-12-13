import React from 'react';
import PropTypes from 'prop-types';

import { withWidth } from '@material-ui/core';
import { withStyles } from '@material-ui/styles';
import styles from './style';

import MainNavigation from './main';
import MobileNavigation from './mobile';
import { compose, isMobileView } from '../../utils';
import { connectProps, open, toggleMenu } from '../../state';

const options = [
  { to: '/', text: 'WHAT' },
  { to: '/why/', text: 'WHY' },
  { to: '/how/', text: 'HOW' },
  { to: '/when/', text: 'WHEN' },
  { to: '/who/', text: 'WHO' },
];

const Navigation = ({ classes, width, open, toggleMenu }) => {
  return (
    <div className={classes.container}>
      {isMobileView(width) ? (
        <MobileNavigation
          options={options}
          open={open}
          onClick={() => toggleMenu()}
        />
      ) : (
        <MainNavigation options={options} />
      )}
    </div>
  );
};

Navigation.propTypes = {
  classes: PropTypes.object.isRequired,
  width: PropTypes.string.isRequired,
  open: PropTypes.bool.isRequired,
  toggleMenu: PropTypes.func
};

Navigation.defaultProps = {
  toggleMenu: () => {}
};

export default compose(
  connectProps(open, toggleMenu),
  withWidth(),
  withStyles(styles)
)(Navigation);
