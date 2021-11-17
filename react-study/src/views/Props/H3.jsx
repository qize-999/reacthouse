import React, { Component } from 'react'

class View extends Component {
  render() {
    return (
      <div className="h4">
        <h4>{this.props.title}</h4>
        {this.props.children}
        {/*<a href="true" className="reload">
          换一换
        </a>
        <ul>
            <li>语文</li>
        </ul>*/}
      </div>
    )
  }
}
export default View
