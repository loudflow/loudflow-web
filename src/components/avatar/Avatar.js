import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/styles';
import styles from './style';
import avatarIcon from '../../images/logo.png';

class Avatar extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.container}>
        <img src={avatarIcon} className={classes.avatar} alt='avatar' />
      </div>
    );
  }

}

Avatar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Avatar);
