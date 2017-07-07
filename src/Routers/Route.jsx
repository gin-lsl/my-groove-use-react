import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'


class Roots extends Component {
  render() {
    return (
      <div>{this.props.children}</div>
    )
  }
}

const RouteConfig = (
  <Router>
    {/*<Route path='/' component={}>
    </Route>*/}
  </Router>
)


