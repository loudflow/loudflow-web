import React from 'react';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/styles';

import styles from './style';
import content from './content';
import Grid from '@material-ui/core/Grid';

const { title1, title2, title3, title4, caption, description } = content;

type Props = {
  classes: Object,
};

const How = ({ classes }: Props) => (
  <Grid container spacing={1} className={classes.content}>
    <Grid container item direction="column">
      <div className={classes.banner}/>
    </Grid>
    <Grid container item direction="column">
      <div className={classes.titleContainer}>
        <Typography variant='h2' color='textSecondary'>
          {title1}
        </Typography>
        <Typography variant='h2' color='textSecondary'>
          {title2}
        </Typography>
        <Typography variant='h2' color='textSecondary'>
          {title3}
        </Typography>
      </div>
      <div className={classes.captionContainer}>
        <Typography variant='h5' color='textPrimary'>
          {caption}
        </Typography>
      </div>
      <div className={classes.contentContainer}>
        <Typography variant='p' color='textPrimary'>
          {description}
        </Typography>
      </div>
    </Grid>
  </Grid>
);

export default withStyles(styles)(How);
