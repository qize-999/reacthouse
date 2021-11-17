import React, { Component } from 'react'
class View extends Component {
  componentDidUpdate() {
    console.log('子组件Update')
  }
  componentDidMount() {
    console.log('子组件DidMount')
  }
  componentWillUnmount() {
    //清理定时器
  }
  render() {
    console.log('子组件render')
    return <div>这是子组件</div>
  }
}
export default View
