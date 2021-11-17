import React, { Component } from 'react'
import Axios from 'axios'
class View extends Component {
  constructor(props) {
    super(props)
    this.state = {
      lists: [],
      name: '元芳',
      info: {
        name: '小明',
        age: 32,
      },
    }
  }
  addAge() {
    // let _this = this
    // this.setState(function (state, props) {
    //   console.log(state)
    //   console.log(props)
    //   return {
    //     info: {
    //       ..._this.state.info,
    //       age: state.info.age + 1,
    //     },
    //   }
    // })
    this.setState((state, props) => {
      return {
        info: {
          ...this.state.info,
          age: state.info.age + 1,
        },
      }
    })
    this.setState((state, props) => ({
      info: {
        ...this.state.info,
        age: state.info.age + 1,
      },
    }))
  }

  changeInfo() {
    this.setState({
      info: { ...this.state.info, name: '李元芳' },
    })
  }
  //   componentDidMount() {
  //     this.setState({
  //       name: '小红',
  //       //   info: { ...this.state.info, name: '李元芳' },
  //       info: Object.assign({}, this.state.info, { name: '李元芳' }),
  //     })
  //   }
  timeFn() {
    setTimeout(() => {
      this.setState({ name: '小王' })
    }, 1000)
  }
  getPdd(pageNumber = 1, pageSize = 10) {
    Axios.get('/home/mediareports', {
      params: {
        page_number: pageNumber,
        page_size: pageSize,
      },
    }).then((res) => {
      console.log(res.data)
      if (res.data.code === 200) {
        //成功
        this.setState({
          lists: res.data.data,
        })
      }
    })
  }
  listFn(data) {
    //数组的遍历方法
    return data.map((item, index) => {
      return (
        <li key={index}>
          {item.id}- {item.main_title}
        </li>
      )
    })
  }
  componentDidMount() {
    this.changeInfo()
    this.addAge()
    this.timeFn()
    this.getPdd()
  }
  render() {
    let { info, name, lists } = this.state
    console.log(lists)
    return (
      <div>
        <h3>state</h3>
        名字是:{this.state.name}
        名字:{info.name}
        年龄:{info.age}
        {lists.length !== 0 ? (
          <ul>{this.listFn(lists)}</ul>
        ) : (
          '<div>无结果</div>'
        )}
      </div>
    )
  }
}
export default View
