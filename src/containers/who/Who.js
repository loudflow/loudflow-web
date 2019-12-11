import React from 'react';
import {Grid, Link, Typography} from '@material-ui/core';
import { FaLinkedin } from 'react-icons/fa';
import { withStyles } from '@material-ui/styles';
import styles from './style';

type Props = {
  classes: Object,
};

const Who = ({ classes }: Props) => (
  <Grid container spacing={1} className={classes.content}>
    <Grid container item direction="column" xs={12} md={6}>
      <div className={classes.banner}/>
    </Grid>
    <Grid container item direction="column" xs={12} md={6}>
      <div className={classes.captionContainer}>
        <Typography variant='h2' color='textSecondary'>
          Hi there!
        </Typography>
      </div>
      <div className={classes.contentContainer}>
        <Typography variant='p' color='textPrimary' paragraph>
          Loudflow is an open-source project under construction by FarSimple, a one-person company based in Finland, which I started for software development and consulting.
        </Typography>
        <Typography variant='p' color='textPrimary' paragraph>
          The main driver behind this project is my strong interest in the development and architecture of both distributed software and multi-agent systems. While serving as a playground for learning and trying out ideas in the field of distributed AI, my larger objective is to continue building Loudflow into a production-ready platform for commercial applications.
        </Typography>
        <Typography variant='p' color='textSecondary' paragraph>
          Get in touch
        </Typography>
        <Typography variant='p' color='textPrimary' paragraph>
          Feel free to get in touch with me. I'm always open to discussing new ideas and opportunities.
        </Typography>
        <Typography className={classes.icon} variant='p' color='textPrimary' paragraph>
          <FaLinkedin className={classes.iconIcon} />&nbsp;&nbsp;<Link className={classes.iconLink} href='https://www.linkedin.com/in/sinaninel/'>Sinan Inel</Link>
        </Typography>
        <Typography variant='p' color='textSecondary' paragraph>
          Questions? Need help?
        </Typography>
        <Typography variant='p' color='textPrimary' paragraph>
          info@loudflow.com
        </Typography>
      </div>
    </Grid>
  </Grid>
);

export default withStyles(styles)(Who);
