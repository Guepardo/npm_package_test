import React, { Component } from 'react';
import App from './Components/App';

import store from './Store';
import { Provider } from 'react-redux';

const ChatProvider = createProvider('chat');

class app extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return React.createElement(
      Provider,
      { store: store },
      React.createElement(App, null)
    );
  }
}

export default app;