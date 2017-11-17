import React, { Component } from 'react';
import App from './Components/App';

import store from './Store';
import { createProvider } from 'react-redux';

const ChatProvider = createProvider('chat');

class Sample extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return React.createElement(
      ChatProvider,
      { store: store },
      React.createElement(App, null)
    );
  }
}

export default Sample;