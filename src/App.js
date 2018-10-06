import React, { Component } from 'react';
import { ConnectedRouter } from 'connected-react-router';
import { MuiThemeProvider } from '@material-ui/core/styles';
import 'typeface-roboto';
import Routes from './routes';

class App extends Component {
  render() {
    const { history } = this.props;
    return (
      <MuiThemeProvider theme={this.state.theme}>
        <ConnectedRouter history={history}>
          <Routes />
        </ConnectedRouter>
      </MuiThemeProvider>
    );
  }
}

export default App;
