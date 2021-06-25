import React from 'react'

const Shape = require('./shape.js')
module.exports = class Circle extends Shape {
  constructor(props) {
    super(props)
  }

  render() {
    return <div>{this.calculateArea()}</div>
  }
}
