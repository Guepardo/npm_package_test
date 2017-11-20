import React, { Component } from 'react'
import { connect } from 'react-redux'

class App extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div> 
        <div className="box"
          onClick={() => alert('nadas')}
        ></div>
        <div className="box"
          onClick={() => alert('nadas')}
        ></div>
        <div className="box"
          onClick={() => alert('nadas')}
        ></div>
      </div> 
    )
  }
}

export default connect( (context) => {
  return {}
})(App)