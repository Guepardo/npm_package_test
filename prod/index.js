import React, { Component } from 'react';
import App from './app/Components/App';

import { createStore } from 'redux';
import { createProvider } from 'react-redux';

const store = createStore(() => {});

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