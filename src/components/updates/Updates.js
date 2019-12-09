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

const Updates = ({ classes }: Props) => (
  <div className={classes.container}>
    <Typography variant='h5' color='textSecondary'>
      Loudflow is under construction. Please sign up for updates.
    </Typography>
    <Grid container spacing={1}>
      <Grid container item xs={9}>
        <TextField fullWidth placeholder="Your email address..." variant="outlined"/>
      </Grid>
      <Grid container item xs={3}>
        <Button fullWidth color="secondary" variant="outlined">
          Keep me updated
        </Button>
      </Grid>
    </Grid>
  </div>
);

export default withStyles(styles)(Updates);
