import React, { Component } from 'react'

class View extends Component {
  render() {
    console.log(this.props)
    return (
      <div className="h4">
        <h3>第五种使用场景</h3>
        {this.props.com()}
        {this.props.left}
      </div>
    )
  }
}
export default View
