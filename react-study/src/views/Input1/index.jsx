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
          lang: 'angular',
        },
        info: {
          gender: 'male',
          status: false,
          mvc: [],
          sale: [],
        },
      },
    }
  }
  _setVall(e) {
    let {
      name,
      value,
      checked,
      dataset: { namekey, status },
    } = e.target
    // let namekey = e.target.dataset.namekey
    let { resume } = this.state

    if (status === 'sale') {
      //   sale: []
      let _index = resume[namekey][name].indexOf(value)
      _index === -1
        ? resume[namekey][name].push(value)
        : resume[namekey][name].splice(_index, 1)
    } else {
      if (status === 'status') {
        value = checked
      }
      resume[namekey][name] = value
    }
    this.setState({ resume })
  }
  render() {
    let { login, resume } = this.state
    console.log(resume.info.sale)
    return (
      <React.Fragment>
        <h3>input2</h3>
        <ul>
          <li>
            <label>用户名{resume.base.name}</label>
            <div className="label_ctrl">
              <input
                type="text"
                onChange={(e) => {
                  this._setVall(e)
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
                  this._setVall(e)
                }}
                name="year"
                data-namekey="work"
                value={resume.work.year}
              />
            </div>
          </li>
          <li>
            <label>工作描述{resume.work.des}</label>
            <div className="label_ctrl">
              <textarea
                onChange={(e) => {
                  this._setVall(e)
                }}
                name="des"
                data-namekey="work"
                value={resume.work.des}
              ></textarea>
            </div>
          </li>
          <li>
            <label>你会的框架是:{resume.work.lang}</label>
            <div className="label_ctrl">
              <select
                onChange={(e) => {
                  this._setVall(e)
                }}
                name="lang"
                data-namekey="work"
                defaultValue={resume.work.lang}
              >
                <option value="angular">angular</option>
                <option value="vue">vue</option>
                <option value="react">react</option>
                <option value="ember">ember</option>
                <option value="omi">omi</option>
              </select>
            </div>
          </li>
          <li>
            <label>你的性别是:{resume.info.gender}</label>
            <div className="label_ctrl">
              <label htmlFor="male">
                男
                <input
                  type="radio"
                  onChange={(e) => {
                    this._setVall(e)
                  }}
                  data-namekey="info"
                  name="gender"
                  value="male"
                  defaultChecked={resume.info.gender === 'male'}
                />
              </label>
              <label htmlFor="female">
                女
                <input
                  type="radio"
                  onChange={(e) => {
                    this._setVall(e)
                  }}
                  data-namekey="info"
                  name="gender"
                  value="female"
                  defaultChecked={resume.info.gender === 'female'}
                />
              </label>
            </div>
          </li>
          <li>
            <label>目前在职状态:{resume.info.gender}</label>
            <div className="label_ctrl">
              <label htmlFor="male">
                <input
                  type="checkbox"
                  onChange={(e) => {
                    this._setVall(e)
                  }}
                  data-namekey="info"
                  data-status="status"
                  name="status"
                  checked={resume.info.status}
                />
                是否离职
              </label>
            </div>
          </li>
          <li>
            <label>期望的销售方式:{resume.info.gender}</label>
            <div className="label_ctrl">
              <label>
                <input
                  type="checkbox"
                  onChange={(e) => {
                    this._setVall(e)
                  }}
                  data-namekey="info"
                  data-status="sale"
                  name="sale"
                  value="dm"
                />
                店面销售
              </label>
              <label>
                <input
                  type="checkbox"
                  onChange={(e) => {
                    this._setVall(e)
                  }}
                  data-namekey="info"
                  data-status="sale"
                  name="sale"
                  value="qd"
                />
                渠道销售
              </label>
              <label>
                <input
                  type="checkbox"
                  onChange={(e) => {
                    this._setVall(e)
                  }}
                  data-namekey="info"
                  data-status="sale"
                  name="sale"
                  value="dh"
                />
                电话销售
              </label>
            </div>
          </li>
        </ul>
      </React.Fragment>
    )
  }
}
export default View
