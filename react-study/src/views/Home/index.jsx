import React, { Component } from 'react'
import { NavLink, Link } from 'react-router-dom'
//React.Component ==Component
import Header from '../../components/Header'
class View extends Component {
  render() {
    return (
      <div>
        <Header />
        这是首页
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
