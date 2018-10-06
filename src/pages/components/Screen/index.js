import React from 'react';
import Navigation from 'pages/components/Navigation';
import Header from 'pages/components/Header';
import Content from 'pages/components/Content';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  root: {
    flexGrow: 1,
    zIndex: 1,
    overflow: 'hidden',
    position: 'relative',
    display: 'flex',
  },
});

class Screen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mobileOpen: false,
    };
  }

  handleDrawerToggle = () => {
    this.setState(state => ({ mobileOpen: !state.mobileOpen }));
  };

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Header
          title={this.props.title}
          handleDrawerToggle={this.handleDrawerToggle}
          mobileOpen={this.state.mobileOpen}
        />
        <Navigation
          handleDrawerToggle={this.handleDrawerToggle}
          mobileOpen={this.state.mobileOpen}
        />
        <Content renderChildren={this.props.children} />
      </div>
    );
  }
}
export default withStyles(styles)(Screen);
