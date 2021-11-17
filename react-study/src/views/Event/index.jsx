import React, { Component } from 'react'
import Child from './Child'
class View extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '小明',
    }
    this.tabFn1 = this.tabFn1.bind(this)
    this.parentFn = this.parentFn.bind(this)
  }
  changeName() {
    this.setState({
      name: '小红',
    })
  }
  componentDidMount() {
    this.changeName()
  }
  tabFn() {
    console.log('点击事件')
  }
  //   1.箭头函数
  //   tabFn1 = () => {
  //     this.setState({
  //       name: '点击后的名字小芳',
  //     })
  //   }
  //   2.在constructor中实例的绑定
  tabFn1() {
    console.log(this)
    this.setState({
      name: '点击后的名字小芳',
    })
  }
  //   this 解决
  //   参数 未解决
  //   3.在我们函数  调用的时候增加bind  除了this
  tabFn2(str) {
    console.log(this)
    console.log(str)
    this.setState({
      name: '点击后的名字小芳',
    })
  }
  tabFn3() {
    console.log(this)
    this.setState({
      name: '点击后的名字小芳',
    })
  }
  hdFn(e) {
    e.preventDefault()
    console.log(e)
    console.log('这是a标签的事件')
  }
  divFn() {
    console.log('这是divFn')
  }
  aFn(e) {
    e.preventDefault()
    e.stopPropagation()
    console.log('这是aFn')
  }
  parentFn(text) {
    console.log(text)
    console.log('这是关闭的操作')
  }
  //   this. parentFn()
  render() {
    //   渲染到页面
    let { name } = this.state
    return (
      <div>
        <h3>事件</h3>
        姓名是：{name}
        <br />
        <input type="button" value="点击" onClick={this.tabFn} />
        <input type="button" value="点击1" onClick={this.tabFn1} />
        <input
          type="button"
          value="点击2"
          onClick={this.tabFn2.bind(this, 'test')}
        />
        <input
          type="button"
          value="点击3"
          onClick={() => {
            this.tabFn3()
          }}
        />
        <br />
        <a
          href="true"
          onClick={(e) => {
            this.hdFn(e)
          }}
        >
          这是标签事件
        </a>
        <div
          onClick={() => {
            this.divFn()
          }}
        >
          这是div内容
          <br />
          <a
            href="true"
            onClick={(e) => {
              this.aFN(e)
            }}
          >
            这是div内容的a
          </a>
        </div>
        <Child callback={this.parentFn} />
      </div>
    )
  }
}
export default View
