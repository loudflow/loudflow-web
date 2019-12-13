import React from 'react';
import PropTypes from 'prop-types';
import { Fade, MaterialModal } from '@material-ui/core';
import { Scrollbars } from 'react-custom-scrollbars';
import { withStyles } from '@material-ui/styles';
import styles from './style';

class Modal extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    const { classes, children, fullScreen, ...rest } = this.props;
    return (
      <MaterialModal closeAfterTransition {...rest}>
        <Fade in={rest.open} timeout={250}>
          <div
            className={
              fullScreen ? classes.fullScreenContainer : classes.centeredContainer
            }>
            <div className={classes.content}>
              <Scrollbars
                autoHide
                autoHideTimeout={1000}
                autoHideDuration={200}
                className={classes.scrollContainer}>
                {children}
              </Scrollbars>
            </div>
          </div>
        </Fade>
      </MaterialModal>
    );
  }

}

Modal.propTypes = {
  classes: PropTypes.object.isRequired,
  children: PropTypes.element
};

export default withStyles(styles)(Modal);
