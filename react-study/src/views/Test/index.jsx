import React, { Component } from 'react'
import { NavLink, Link } from 'react-router-dom'
import Axios from 'axios'
class View extends Component {
  getPdd() {
    Axios.get('/home/mediareports', {
      params: {
        page_number: '1',
        page_size: '10',
      },
    }).then((res) => {
      console.log(res.data)
    })
  }
  render() {
    this.getPdd()
    return (
      <div>
        这是test页面
        <NavLink exact to="/">
          首页
        </NavLink>
        <br />
        <NavLink to="/test">test页面</NavLink>
        <br />
        <NavLink to="/Input2">input2</NavLink>
      </div>
    )
  }
}
export default View
