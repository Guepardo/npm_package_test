import React, { Component } from 'react'
import App from './Components/App'

import store from './Store'
import { Provider } from 'react-redux'

const ChatProvider = createProvider('chat')

class app extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Provider store={store} >
        <App /> 
      </Provider> 
    )
  }
}

export default app