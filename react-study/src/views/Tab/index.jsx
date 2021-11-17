import React, { Component } from 'react'
import Axios from 'axios'
class View extends Component {
  constructor(props) {
    super(props)
    this.state = {
      current: 1,
      current1: 1,
      current3: 1,
      lists: [],
      tab: {
        newIndex: 1,
      },
    }
  }
  tabSwitch(index = 1) {
    this.setState({
      current: index,
    })
  }
  tabSwitch1(index = 1) {
    this.setState({
      current1: index,
    })
  }
  tabSwitch2(index = 1, cur) {
    this.setState({
      [cur]: index,
    })
  }
  //新闻切换
  tabSwitch3(index, cur) {
    this.setState({
      tab: {
        ...this.state.tab,
        [cur]: index,
      },
    })
    this.getPdd(index)
  }
  tabCls(index, curCls = 'cur', cls = '') {
    let { current1 } = this.state
    return current1 === index ? curCls : cls
  }
  tabCls2(current, index, curCls = 'cur', cls = '') {
    // let { current2 } = this.state
    return current === index ? curCls : cls
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
        <li key={item.id}>
          {item.id}- {item.main_title}
        </li>
      )
    })
  }
  tabCls3(cur, index, curCls = 'cur', cls = '') {
    let { tab } = this.state

    return tab[cur] === index ? curCls : cls
  }
  componentDidMount() {
    // this.tabSwitch(3)
    this.getPdd()
  }
  render() {
    let { current, current1, current3, tab, lists } = this.state
    return (
      <div className="tab_main">
        <h3>tab切换</h3>
        <div className="tab_box">
          <ul className="clearfix">
            <li
              onClick={() => {
                this.tabSwitch(1)
              }}
              className={current === 1 ? 'cur' : ''}
            >
              菜单一
            </li>
            <li
              onClick={() => {
                this.tabSwitch(2)
              }}
              className={current === 2 ? 'cur' : ''}
            >
              菜单二
            </li>
            <li
              onClick={() => {
                this.tabSwitch(3)
              }}
              className={current === 3 ? 'cur' : ''}
            >
              菜单三
            </li>
          </ul>
          <div className="tab_con">
            <div className={current === 1 ? 'cur li_div' : 'li_div'}>
              内容一
            </div>
            <div className={current === 2 ? 'cur li_div' : 'li_div'}>
              内容二
            </div>
            <div className={current === 3 ? 'cur li_div' : 'li_div'}>
              内容三
            </div>
          </div>
        </div>
        <div className="tab_box">
          <ul className="clearfix">
            <li
              onClick={() => {
                this.tabSwitch1(1)
              }}
              className={this.tabCls(1)}
            >
              菜单一
            </li>
            <li
              onClick={() => {
                this.tabSwitch1(2)
              }}
              className={this.tabCls(2)}
            >
              菜单二
            </li>
            <li
              onClick={() => {
                this.tabSwitch1(3)
              }}
              className={this.tabCls(3)}
            >
              菜单三
            </li>
          </ul>
          <div className="tab_con">
            <div className={this.tabCls(1, 'cur li_div', 'li_div')}>内容一</div>
            <div className={this.tabCls(2, 'cur li_div', 'li_div')}>内容二</div>
            <div className={this.tabCls(3, 'cur li_div', 'li_div')}>内容三</div>
          </div>
        </div>
        <div className="tab_box">
          <ul className="clearfix">
            <li
              onClick={() => {
                this.tabSwitch2(1, 'current3')
              }}
              className={this.tabCls2(current3, 1)}
            >
              菜单一
            </li>
            <li
              onClick={() => {
                this.tabSwitch2(2, 'current3')
              }}
              className={this.tabCls2(current3, 2)}
            >
              菜单二
            </li>
            <li
              onClick={() => {
                this.tabSwitch2(3, 'current3')
              }}
              className={this.tabCls2(current3, 3)}
            >
              菜单三
            </li>
          </ul>
          <div className="tab_con">
            <div className={this.tabCls2(current3, 1, 'cur li_div', 'li_div')}>
              内容一
            </div>
            <div className={this.tabCls2(current3, 2, 'cur li_div', 'li_div')}>
              内容二
            </div>
            <div className={this.tabCls2(current3, 3, 'cur li_div', 'li_div')}>
              内容三
            </div>
          </div>
        </div>

        <div className="tab_box">
          <ul className="clearfix">
            <li
              onClick={() => {
                this.tabSwitch3(1, 'newIndex')
              }}
              className={this.tabCls3('newIndex', 1)}
            >
              菜单一
            </li>
            <li
              onClick={() => {
                this.tabSwitch3(2, 'newIndex')
              }}
              className={this.tabCls3('newIndex', 2)}
            >
              菜单二
            </li>
            <li
              onClick={() => {
                this.tabSwitch3(3, 'newIndex')
              }}
              className={this.tabCls3('newIndex', 3)}
            >
              菜单三
            </li>
          </ul>
          <ol>{lists.length !== 0 ? this.listFn(lists) : ''}</ol>
        </div>
      </div>
    )
  }
}
export default View
