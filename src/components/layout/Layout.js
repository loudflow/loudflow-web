import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/styles';
import { Header, Footer, Subscription } from '../../components';
import styles from './style';
require('typeface-roboto');

class Layout extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    const { classes, children, hideSubscription } = this.props;
    return (
      <div className={classes.container}>
        <Header />
        <main className={classes.content}>
          {children}
          {!hideSubscription && (<Subscription />)}
        </main>
        <Footer />
      </div>
    );
  }

}

Layout.propTypes = {
  classes: PropTypes.object.isRequired,
  children: PropTypes.element,
  hideSubscription: PropTypes.bool
};

Layout.defaultProps = {
  hideSubscription: false
};

export default withStyles(styles)(Layout);
