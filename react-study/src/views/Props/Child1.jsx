import React, { Component } from 'react'

class View extends Component {
  render() {
    return (
      <div>
        <h4>上部分</h4>
        {this.props.left}
        <h5>下部分</h5>
      </div>
    )
  }
}
export default View
