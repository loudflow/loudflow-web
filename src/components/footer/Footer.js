import React from 'react';
import { withStyles } from '@material-ui/styles';

import styles from './style';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import { FaGithub } from 'react-icons/fa';

type Props = {
  classes: Object,
};

const Footer = ({ classes }: Props) => (
  <footer className={classes.container}>
    <Typography className={classes.copyright} variant='p' color='textPrimary'>
      © 2019,&nbsp;<Link href='https://www.farsimple.com'>FarSimple Oy</Link>. All rights reserved.
    </Typography>
    <Typography className={classes.privacy} variant='p' color='textPrimary'>
      <Link className={classes.privacyLink} href="/privacy/">Privacy Policy</Link>
    </Typography>
    <Typography className={classes.source} variant='p' color='textPrimary'>
      <FaGithub className={classes.sourceIcon} />&nbsp;&nbsp;<Link className={classes.sourceLink} href='https://www.github.com/loudflow'>Source Code</Link>
    </Typography>
  </footer>
);

export default withStyles(styles)(Footer);
