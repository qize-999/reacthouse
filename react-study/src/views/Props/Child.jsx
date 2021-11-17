import React, { Component } from 'react'

class View extends Component {
  render() {
    return (
      <div>
        <h3>第三种使用场景</h3>
        {this.props.com()}
      </div>
    )
  }
}
export default View
