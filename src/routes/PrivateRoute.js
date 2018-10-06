import React from 'react';
import Redirect from 'react-router-dom/Redirect';
import { connect } from 'react-redux';

class PrivateRoute extends React.Component {
  render() {
    const { children, authenticated } = this.props;

    return authenticated ? children : <Redirect to="/login" />;
  }
}

function mapStateToProps(state) {
  return {
    authenticated: state.auth.authenticated,
  };
}
export default connect(
  mapStateToProps,
  null
)(PrivateRoute);
