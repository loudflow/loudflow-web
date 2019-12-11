import React from 'react';
import { Grid, List, ListItem, ListItemIcon, ListItemText, Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/styles';
import styles from './style';
import { FaCircle } from 'react-icons/fa';

type Props = {
  classes: Object,
};

const When = ({ classes }: Props) => (
  <Grid container spacing={1} className={classes.content}>
    <Grid container item direction="column" xs={12} md={6}>
      <div className={classes.banner}/>
    </Grid>
    <Grid container item direction="column" xs={12} md={6}>
      <div className={classes.titleContainer}>
        <Typography variant='h2' color='textSecondary'>
          Setting out
        </Typography>
        <Typography variant='h2' color='textSecondary'>
          for Ithaca
        </Typography>
      </div>
      <div className={classes.captionContainer}>
        <Typography variant='h5' color='textPrimary'>
          Looking forward to a marvelous journey.
        </Typography>
      </div>
      <div className={classes.contentContainer}>
        <Typography variant='p' color='textPrimary' paragraph>
          Loudflow is being developed with an iterative approach which will be based on an initial skeleton implementation of both the frontend web application and backend services.
        </Typography>
        <Typography variant='p' color='textPrimary' paragraph>
          Following this initial release, the platform will be further developed in iterations where each iteration will add on to the initial set of features to produce a new enhanced and stable release. Each iteration will be documented as a milestone in the project's Github repository with corresponding list of features and a rough timeline.
        </Typography>
        <Typography variant='p' color='textPrimary' paragraph>
          This approach fits well with the exploratory research and learning goals of the project.
        </Typography>
      </div>
    </Grid>
    <Grid container item direction="column" xs={12}>
      <div className={classes.contentContainer}>
        <Typography variant='p' color='textPrimary' paragraph>
          Currently, work is continuing on the preliminary skeleton iteration which aims for the following functionality:
        </Typography>
        <List dense disablePadding>
          <ListItem>
            <ListItemIcon className={classes.bulletContainer}>
              <FaCircle className={classes.bullet} />
            </ListItemIcon>
            <ListItemText primary='...' />
          </ListItem>
          <ListItem>
            <ListItemIcon className={classes.bulletContainer}>
              <FaCircle className={classes.bullet} />
            </ListItemIcon>
            <ListItemText primary='...' />
          </ListItem>
        </List>
      </div>
    </Grid>
  </Grid>
);

export default withStyles(styles)(When);
