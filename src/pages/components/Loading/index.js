import React from 'react';
import classnames from 'classnames';
import withStyles from '@material-ui/core/styles/withStyles';
import './Loading.css';

const styles = () => ({
  small: {
    width: 35,
    height: 35,
    border: '5px solid #bdc3c7',
  },
  medium: {
    width: 70,
    height: 70,
    border: '9px solid #bdc3c7',
  },
  large: {
    width: 120,
    height: 120,
    border: '12px solid #bdc3c7',
  },
});

class Loading extends React.PureComponent {
  render() {
    const { size, classes } = this.props;
    return <div className={classnames('loader', classes[size])} />;
  }
}

Loading.defaultProps = {
  size: 'small',
};

export default withStyles(styles)(Loading);
