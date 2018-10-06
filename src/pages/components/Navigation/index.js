import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import MenuItems from 'pages/components/MenuItems';

const drawerWidth = 260;

const styles = theme => ({
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    position: 'relative',
    width: drawerWidth,
    overflow: 'hidden',
    [theme.breakpoints.down('md')]: {
      display: 'none',
    },
  },
  drawerPaperMobile: {
    width: drawerWidth,
    overflow: 'hidden',
    position: 'relative',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
  },
  docked: {
    flex: 1,
  },
});

class ResponsiveDrawer extends React.Component {
  render() {
    const { classes, theme, mobileOpen, handleDrawerToggle } = this.props;

    const drawer = (
      <div>
        <div className={classes.toolbar} />
        <List>
          <MenuItems />
        </List>
      </div>
    );

    return (
      <div className={classes.content}>
        <Drawer
          variant="temporary"
          anchor={theme.direction === 'rtl' ? 'right' : 'left'}
          open={mobileOpen}
          onClose={handleDrawerToggle}
          classes={{
            docked: classes.docked,
            paper: classes.drawerPaperMobile,
          }}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
        >
          {drawer}
        </Drawer>

        <Drawer
          variant="permanent"
          open
          classes={{
            docked: classes.docked,
            paper: classes.drawerPaper,
          }}
        >
          {drawer}
        </Drawer>
      </div>
    );
  }
}

ResponsiveDrawer.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(ResponsiveDrawer);
