import React, { Component } from 'react'
import App from './Components/App'

import { createStore } from 'redux'
import { createProvider } from 'react-redux'

const store = createStore( () => {} )

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