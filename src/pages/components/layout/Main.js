import React from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import Typography from '@material-ui/core/Typography';
import Header from 'pages/components/Header';

const drawerWidth = 280;

const styles = theme => ({
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing.unit * 3,
  },
});

function MainLayout({ children, classes }) {
  return (
    <Header>
      <main className={classes.content}>{children}</main>
    </Header>
  );
}
export default withStyles(styles)(MainLayout);
