import React from 'react';
import { withStyles } from '@material-ui/styles';
import { Header, Footer, Subscription } from 'components';
import styles from './style';

require('typeface-roboto');

type Props = {
  classes: Object,
  children: HTMLElement,
  hideSubscription: Boolean,
};

const Layout = ({ classes, children, hideSubscription = false }: Props) => (
  <div className={classes.container}>
    <Header />
      <main className={classes.content}>
        {children}
        {!hideSubscription && (<Subscription />)}
      </main>
    <Footer />
  </div>
);

export default withStyles(styles)(Layout);
