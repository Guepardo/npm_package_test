import React, { Component } from 'react';
import { connect } from 'react-redux';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return React.createElement(
      'div',
      null,
      React.createElement(
        'p',
        null,
        'Nops'
      )
    );
  }
}

export default connect(() => {
  debugger;
  return {};
})(App);