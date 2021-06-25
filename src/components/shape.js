// declare class

// export class using module.exports

import React from 'react'

module.exports = class Shape extends React.Component {
  constructor(props) {
    super(props)
    this.state = { color: 'red' }
  }
  drawShape() {
    return 'Shape'
  }
  calculateArea() {
    return 'Area'
  }
  color() {
    return 'Color'
  }
  render() {
    return (
      <div>
        Area:{this.calculateArea()} shape:{this.drawShape()} color:
        {this.color()}
      </div>
    )
  }
}
