import React from "react"
import { Route, Switch } from "react-router-dom"
import Houses from "./House/houses"
import Users from "./User/users"

export default () => (
  <Switch>
    <Route exact path="/" component={Houses} />
    <Route exact path="/houses" component={Houses} />
    <Route exact path="/users" component={Users} />
  </Switch>
)
