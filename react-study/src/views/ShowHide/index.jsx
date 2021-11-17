import React, { Component } from 'react'

class View extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showHide: {
        cls1: 'parent_empty',
      },
    }
  }

  changeCls(clsName, cls) {
    this.setState({
      showHide: {
        ...this.state.showHide,
        cls1: clsName,
      },
    })
    //
    let { showHide } = this.state
    showHide[cls] = clsName
    this.setState({ showHide })
  }
  componentDidMount() {
    //   job.length
    this.changeCls('parent_empty', 'cls1')
  }
  addFn(e) {
    e.preventDefault()
    this.changeCls('parent_form', 'cls1')
  }
  render() {
    let { showHide } = this.state
    return (
      <div className={`show_div ${showHide.cls1}`}>
        <h3>显示隐藏</h3>
        <div className="empty">
          空白页面
          <a
            href="true"
            onClick={(e) => {
              this.addFn(e)
            }}
          >
            点击添加
          </a>
        </div>
        <div className="form_div">表单页面</div>
        <div className="job_list">工作显示</div>
      </div>
    )
  }
}
export default View
