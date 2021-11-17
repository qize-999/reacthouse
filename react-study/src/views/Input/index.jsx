import React, { Component } from 'react'
class View extends Component {
  constructor(props) {
    super(props)
    this.state = {
      login: {
        username: '',
        password: '',
        phone: '',
      },
      resume: {
        base: {
          name: '',
          age: '',
        },
        work: {
          year: '',
          des: '',
        },
      },
    }
  }
  setVall(e) {
    let { resume } = this.state
    let namekey = e.target.dataset.namekey
    let { name, value } = e.target
    resume[namekey][name] = value
    this.setState({ resume })
  }
  setVal(e) {
    // this.setState({
    //   login: {
    //     [username]: '',
    //   },
    // })
    let { name, value } = e.target
    let { login } = this.state
    login[name] = value
    this.setState({ login })
  }
  render() {
    let { login, resume } = this.state
    return (
      <React.Fragment>
        <h3>input 表单</h3>
        <ul>
          <li>
            <label>用户名{login.username}</label>
            <div className="label_ctrl">
              <input
                type="text"
                onChange={(e) => {
                  this.setVal(e)
                }}
                name="username"
                value={login.username}
              />
            </div>
          </li>
          <li>
            <label>
              密<em style={{ visibility: 'hidden' }}>空</em>码{login.password}
            </label>
            <div className="label_ctrl">
              <input
                type="password"
                onChange={(e) => {
                  this.setVal(e)
                }}
                name="password"
                value={login.password}
                autoComplete="new-password"
              />
            </div>
          </li>
          <li>
            <label>手机号</label>
            <div className="label_ctrl">
              <input
                type="number"
                onChange={(e) => {
                  this.setVal(e)
                }}
                name="phone"
                value={login.phone}
              />
            </div>
          </li>
        </ul>
        <h3>简历信息</h3>
        <ul>
          <li>
            <label>用户名{resume.base.name}</label>
            <div className="label_ctrl">
              <input
                type="text"
                onChange={(e) => {
                  this.setVall(e)
                }}
                name="name"
                data-namekey="base"
                value={resume.base.name}
              />
            </div>
          </li>
          <li>
            <label>手机号{resume.work.year}</label>
            <div className="label_ctrl">
              <input
                type="text"
                onChange={(e) => {
                  this.setVall(e)
                }}
                name="year"
                data-namekey="work"
                value={resume.work.year}
              />
            </div>
          </li>
        </ul>
      </React.Fragment>
    )
  }
}
export default View
