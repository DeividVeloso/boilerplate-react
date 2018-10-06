import React from 'react';

import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    marginTop: 70,
    [theme.breakpoints.up('sm')]: {
      marginLeft: 20,
    },
  },
});

class Content extends React.Component {
  render() {
    const { classes, renderChildren } = this.props;
    return <main className={classes.content}>{renderChildren}</main>;
  }
}
export default withStyles(styles)(Content);
