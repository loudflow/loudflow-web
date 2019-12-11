import React from 'react';
import { withStyles } from '@material-ui/styles';

import styles from './style';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

type Props = {
  classes: Object,
};

const Subscription = ({ classes }: Props) => (
  <div className={classes.container}>
    <Typography variant='h5' color='textSecondary'>
      We're under construction. Please sign up so we can keep you in the loop.
    </Typography>
    <br/>
    <form name="subscription" method="POST" data-netlify="true" data-netlify-honeypot="bot-field">
      <input type="hidden" name="form-name" value="subscription" />
      <div hidden aria-hidden="true">
        <label>
          Don’t fill this out if you're human:
          <input name="bot-field"/>
        </label>
      </div>
      <Grid container spacing={1}>
        <Grid container item xs={9}>
          <TextField fullWidth required type="email" name="email" placeholder="Your email address..." variant="outlined"/>
        </Grid>
        <Grid container item xs={3}>
          <Button fullWidth type="submit" color="secondary" variant="outlined">
            Keep me updated
          </Button>
        </Grid>
      </Grid>
    </form>
  </div>
);

export default withStyles(styles)(Subscription);
