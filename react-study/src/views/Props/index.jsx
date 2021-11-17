import React, { Component } from 'react'
import H3 from './H3.jsx'
import Child from './Child.jsx'
import Child1 from './Child1.jsx'
import Child2 from './Child2.jsx'
import Obj from './Obj.jsx'
class View extends Component {
  com() {
    return <div>这是com返回的代码片段</div>
  }
  render() {
    const obj = {
      title: '第五种使用场景',
      info: {
        name: '小明',
        age: 32,
      },
      com: this.com,
      left: <Child2 />,
    }
    return (
      <div>
        <h3>props这是课程内容</h3>
        <H3 title="全国名师推荐">
          <a href="true" className="reload">
            换一换
          </a>
        </H3>
        <H3 title="热门名师" />
        <ul>
          <li>语文</li>
        </ul>
        <H3 title="名师热度榜" />
        <Child com={this.com} />
        <Child1 left={<Child2 />} />
        <Obj {...obj} />
        {/* this.props.obj.title this.props.info.age */}
        {/*<div className="h4">
          <h4>全国名师推荐</h4>
        </div>
        <div className="h4">
          <h4>热门名师</h4>
        </div>
        <div className="h4">
          <h4>名师热度榜</h4>
        </div>*/}
      </div>
    )
  }
}
export default View
