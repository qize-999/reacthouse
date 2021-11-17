// import React, { Component } from 'react'
import React, { Component, Suspense, lazy } from 'react'
import { withRouter, NavLink, Switch, Redirect, Route } from 'react-router-dom'
// import Home from './views/Home'
// import Test from './views/Test'
// import Input2 from './views/Input2'
import web2008a from './views/Web2008a'
import Web from './views/Web'
const Home = lazy(() => import('./views/Home'))
const Test = lazy(() => import('./views/Test'))
const Input2 = lazy(() => import('./views/Input2'))
class App extends Component {
  render() {
    return (
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/Test" component={Test} />
          <Route path="/Input2" component={Input2} />
          <Route exact path="/web2008a" component={web2008a} />
          <Route path={`/web2008a/:uid`} component={web2008a} />

          <Route exact path="/Web" component={Web} />
          <Route exact path={`/Web/:cls`} component={Web} />
          <Route path={`/Web/:cls/:uid`} component={Web} />
          <Redirect to="/" />
        </Switch>
      </Suspense>
    )
  }
}
export default App
