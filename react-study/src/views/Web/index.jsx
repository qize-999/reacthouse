import React, { Component } from 'react'
import W1908 from './w1908/'
class View extends Component {
  ifPage(params) {
    switch (params.cls) {
      case '2008':
        return <W1908 />
      case '1908':
        return <div>2008</div>
      case '2010':
        return <div>2010</div>
      default:
        return <W1908></W1908>
    }
  }
  render() {
    let { match } = this.props
    console.log(match.params)
    return (
      <React.Fragment>
        <h3>web</h3>
        {this.ifPage(match.params)}
      </React.Fragment>
    )
  }
}
export default View
