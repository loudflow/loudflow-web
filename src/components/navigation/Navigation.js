import React, { useState } from 'react';
import PropTypes from 'prop-types';

import{ withWidth } from '@material-ui/core';
import { withStyles } from '@material-ui/styles';
import styles from './style';

import MainNavigation from './main';
import MobileNavigation from './mobile';
import { compose, isMobileView } from '../../utils';

const options = [
  { to: '/', text: 'WHAT' },
  { to: '/why/', text: 'WHY' },
  { to: '/how/', text: 'HOW' },
  { to: '/when/', text: 'WHEN' },
  { to: '/who/', text: 'WHO' },
];

const Navigation = ({ classes, width }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className={classes.container}>
      {isMobileView(width) ? (
        <MobileNavigation
          options={options}
          open={open}
          onClick={() => setOpen(!open)}
        />
      ) : (
        <MainNavigation options={options} />
      )}
    </div>
  );
};

Navigation.propTypes = {
  classes: PropTypes.object.isRequired,
  width: PropTypes.string
};

export default compose(
  withWidth(),
  withStyles(styles)
)(Navigation);
