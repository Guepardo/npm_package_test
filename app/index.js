import React, { Component } from 'react'
import App from './Components/App'

import store from './Store'
import { createProvider } from 'react-redux'

const ChatProvider = createProvider('chat')

class Sample extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <ChatProvider store={store} >
        <App /> 
      </ChatProvider> 
    )
  }
}

export default Sample