import React, { Component } from 'react'
class View extends Component {
  componentDidMount() {
    this.props.callback('文本的内容')
  }
  render() {
    return <div>11</div>
  }
}
export default View
