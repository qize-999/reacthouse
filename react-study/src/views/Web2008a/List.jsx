import React, { Component } from 'react'
class View extends Component {
    render() {
        return (
            <React.Fragment>
                <h3>列表</h3>
                {this.props.uid}
            </React.Fragment>    
        )
    }
}
export default View