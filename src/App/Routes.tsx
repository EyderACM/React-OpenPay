import React from "react"
import { Router, Switch, Route, Redirect } from "react-router-dom"

import ChargeHub from "pages/ChargeHub"

const Routes = () => (
  <Router>
    <Switch>
      <Redirect exact from="/" to="/charge" />
      <Route path="/charge" component={ChargeHub} />
    </Switch>
  </Router>
)

export default Routes
