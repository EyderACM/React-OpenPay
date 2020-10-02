import React from "react"
import { Router, Switch, Route, Redirect } from "react-router-dom"

import ChargeHub from "pages/ChargeHub"
import history from "browserHistory"
import Authenticate from "auth/Authenticate"

const Routes = () => (
  <Router history={history}>
    <Switch>
      <Redirect exact from="/" to="/charge" />
      <Route path="/authenticate" component={Authenticate} />
      <Route path="/charge" component={ChargeHub} />
    </Switch>
  </Router>
)

export default Routes
