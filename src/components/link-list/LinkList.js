import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/styles';
import styles from './style';

class LinkList extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    const { classes, links } = this.props;
    return (
      <div>
        <ul className={classes.container}>
          {links.map(({ Icon, to, newTab, text }, index) => (
            <li key={index}>
              <a
                href={to}
                target={newTab ? '_blank' : '_self'}
                className={classes.link}>
                <Icon />
                <span className={classes.linkText}>{text}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    );
  }

}

LinkList.propTypes = {
  classes: PropTypes.object.isRequired,
  links: PropTypes.arrayOf(PropTypes.object)
};

export default withStyles(styles)(LinkList);
