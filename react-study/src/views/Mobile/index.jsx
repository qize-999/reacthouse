import React, { Component } from 'react'
import fang from '../../styles/i/fang.png'
class View extends Component {
  render() {
    return (
      <div>
        <div className="header flex">
          <div className="header_one">天天象上</div>
          <div className="header_two flex">
            <div className="image">
              <img src={fang} />
            </div>
            <input type="text" placeholder="输入老师姓名" />
          </div>
          <div className="header_three">北京 ▼</div>
        </div>
        <div className="header_fu flex">
          <div className="header_fu_l">
            <span className="hr">|</span>
            <span className="hot">热门老师</span>
          </div>
          <div className="header_fu_r">
            <span className="more">更多 &gt;</span>
          </div>
        </div>
        <ul className="main">
          <li>
            <div className="div"></div>
          </li>
          <li>
            <div className="div1"></div>
          </li>
          <li>
            <div className="div"></div>
          </li>
          <li>
            <div className="div1"></div>
          </li>
        </ul>
      </div>
    )
  }
}
export default View
