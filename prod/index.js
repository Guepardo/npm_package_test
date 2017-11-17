import React, { Component } from 'react';

class Sample extends Component {
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
        'This is a sample components'
      )
    );
  }
}

export default Sample;