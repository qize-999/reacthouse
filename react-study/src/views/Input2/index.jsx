import React, { Component } from 'react'
import { NavLink, Link } from 'react-router-dom'
class View extends Component {
  constructor(props) {
    super(props)
    this.state = {
      bTrue: {
        allSel: false,
      },
      mvc: [
        {
          lang: 'angular',
          checked: false,
        },
        {
          lang: 'vue',
          checked: false,
        },
        {
          lang: 'ember',
          checked: false,
        },
        {
          lang: 'react',
          checked: false,
        },
        {
          lang: 'omi',
          checked: false,
        },
      ],
    }
  }
  // 单个input
  allSelFn(e) {
    let { name, checked } = e.target
    let { bTrue, mvc } = this.state
    bTrue[name] = checked

    mvc.forEach((item, i) => {
      if (checked) {
        item.checked = true
      } else {
        item.checked = false
      }
    })
    this.setState({ bTrue, mvc })
  }

  // 多个input
  _allSelFn(e, index) {
    let { name, checked } = e.target
    let { bTrue, mvc } = this.state
    mvc[index].checked = checked
    let bT = mvc.every((item, index) => {
      return item.checked
    })
    bTrue[name] = bT
    this.setState({ bTrue, mvc })
  }

  listFn(data) {
    return data.map((item, index) => (
      <li key={index}>
        <label>
          <input
            type="checkbox"
            name="allSel"
            checked={item.checked}
            onChange={(e) => {
              this._allSelFn(e, index)
            }}
          />
          {item.lang}
        </label>
      </li>
    ))
  }
  render() {
    let { bTrue, mvc } = this.state
    return (
      <React.Fragment>
        <h3>全选</h3>
        <label>
          <input
            type="checkbox"
            name="allSel"
            checked={bTrue.allSel}
            onChange={(e) => {
              this.allSelFn(e)
            }}
          />
          全选
        </label>
        <ul>{this.listFn(mvc)}</ul>
        <NavLink exact to="/">
          首页
        </NavLink>
        <br />
        <NavLink to="/test">test页面</NavLink>
        <br />
        <NavLink to="/Input2">input2</NavLink>
      </React.Fragment>
    )
  }
}
export default View
