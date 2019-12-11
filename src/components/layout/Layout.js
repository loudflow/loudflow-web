import React from 'react';
import { ThemeProvider, withStyles } from '@material-ui/styles';
import {CssBaseline, Hidden} from '@material-ui/core';
import { Header, Footer, Subscription } from 'components';
import styles from './style';
import theme from 'styles/theme';

require('typeface-roboto');

type Props = {
  classes: Object,
  children: HTMLElement,
  hideSubscription: Boolean,
};

const Layout = ({ classes, children, hideSubscription = false }: Props) => (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <div className={classes.container}>
      <Header />
        <main className={classes.content}>
          {children}
          {!hideSubscription && (<Subscription />)}
        </main>
      <Footer />
    </div>
  </ThemeProvider>
);

export default withStyles(styles)(Layout);
