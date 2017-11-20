import React, { Component } from 'react'
import { connect } from 'react-redux'

class App extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <p>Nops</p> 
      </div>
    )
  }
}

export default connect( (context) => {
  debugger
  return {}
})(App)