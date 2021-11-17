import React, { Component } from 'react'
import Child from './Child'
class View extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '小明',
      age: 18,
      timer: null,
    }
    console.log('constructor')
  }
  componentDidMount() {
    console.log('componentDidMount')
    this.setState({
      name: '小红',
    })
    this.state.timer = setInterval(() => {
      this.setState((state, props) => ({
        age: state.age + 1,
      }))
    }, 1000)
  }
  componentDidUpdate(prevProps, prevState) {
    console.log('componentDidUpdate')
    console.log(prevProps)
    console.log(prevState)
    console.log(this.state)
    if (prevState.age >= 19) {
      clearInterval(this.state.timer)
    }
    // this.setState({
    //   age: 27,
    // })
  }
  render() {
    console.log('render')
    let { name, age } = this.state
    return (
      <div>
        <h3>生命周期</h3>
        姓名:{name}
        年龄:{age}
        <Child />
      </div>
    )
  }
}
export default View
