import React, { Component } from 'react'
import Axios from 'axios'
import PageNav from '../../components/PageNav'
class View extends Component {
  constructor(props) {
    super(props)
    this.state = {
      lists: [],
      loading: true,
      setPageCfg: {
        currentPage: 1,
        totalPage: 5,
      },
    }
    this.getPdd = this.getPdd.bind(this)
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
          loading: false,
          setPageCfg: {
            currentPage: pageNumber,
            totalPage: Math.ceil(res.data.total / pageSize),
          },
        })
        // this.setState({
        //   lists: res.data.data,
        //   lists: [],
        // })
      }
    })
  }
  listFn(data) {
    return data.map((item, index) => <li key={item.id}>{item.main_title}</li>)
  }
  componentDidMount() {
    setTimeout(() => {
      this.getPdd(sessionStorage.getItem('currentPagetest1') || 1)
    }, 2000)
  }
  _render(lists, loading) {
    if (loading) {
      return (
        <div className="loading_box">
            <div className="loading"></div>             
        </div>
      )
    } else {
      if (lists.length !== 0) {
        return <ol>{this.listFn(lists)}</ol>
      } else {
        return <div className="no_result">无结果</div>
      }
    }
  }
  render() {
    let { lists, loading, setPageCfg } = this.state
    return (
      <div>
        <div>
          <h3>分页内容</h3>
          {this._render(lists, loading)}
          {lists.length !== 0 ? (
            <PageNav
              onChange={this.getPdd}
              defaultCurrent={setPageCfg.currentPage}
              pageUrl="test1"
              total={setPageCfg.totalPage}
            />
          ) : (
            ''
          )}
          {/* <ol>{lists.length !== 0 ? this.listFn(lists) : <div>无结果</div>}</ol> */}
          {/* {lists.length !== 0 ? (
            <ol>{this.listFn(lists)}</ol>
          ) : (
            <div>无结果</div>
          )} */}
        </div>
      </div>
    )
  }
}
export default View
