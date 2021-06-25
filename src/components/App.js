import React, { Component } from 'react'
// import shape from './shape';
// import circle from './circle';
import '../styles/App.css'

class App extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div>
        <circle />
        <shape />
      </div>
    )
  }
}

export default App
