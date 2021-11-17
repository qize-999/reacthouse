import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
class View extends Component {
    toUrl(){
        console.log(this.props)
        setTimeout(()=>{
            this.props.history.push('/')
        },2000)
    }
    componentDidMount(){
        this.toUrl()
    }
    render() {
        return (
            <React.Fragment>
                <h3>详情</h3>
                {this.props.uid}
            </React.Fragment>    
        )
    }
}
export default withRouter(View);