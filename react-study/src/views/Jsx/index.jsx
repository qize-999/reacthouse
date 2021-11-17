import React, { Component } from 'react'
class View extends Component {
  render() {
    let text = `
      <div>这是div标签包含p标签<p>test</p></div>
      `
    return (
      <div>
        <h3 style={{ color: 'red', fontSize: '20px' }}>Jsx扩展语言</h3>
        {text}
        <div dangerouslySetInnerHTML={{ __html: text }}></div>
      </div>
    )
  }
}
export default View
