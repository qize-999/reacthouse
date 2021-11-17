import React, { Component } from 'react'
import List from './List';
import Detail from './Detail';
class View extends Component {
    ifPage(params){
        console.log(params.uid)
        if(params.uid){
            return(
                <Detail uid={params.uid}/>
            )
        }else{
            return(
                <List/>
            )
        }
    }
    toUrl(){
        setTimeout(()=>{
            // this.props.history.push('/')
        },2000)
    }
    componentDidMount(){
        this.toUrl()
    }
    render() {
     console.log(this.props)
     let {match} = this.props
        return (
            <React.Fragment>
                <h3>web2008</h3>
                <header>头</header>
                <div className='main'>
                    <div className='left'>左</div>
                    <div className='right'>
                        {this.ifPage(match.params)}
                    </div>
                </div>
                <footer>底部</footer>
                
            </React.Fragment>    
        )
    }
}
export default View